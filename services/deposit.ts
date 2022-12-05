import {
    CommandGate,
    ZKBridge__factory,
    CommandGate__factory,
} from "../typechain-types";
import {
    ethers,
    Signer,
    Contract,
    BigNumber,
    BigNumberish,
    ContractTransaction,
} from "ethers";
import {
    BRIDGE,
    COMMAND_GATE,
    ERC20_INTERFACE_ID,
    ERC721_INTERFACE_ID,
    CONFIRMATION_BLOCKS,
} from "../consts/const";
import Poseidon from "../utils/poseidon";
import { createCommitment } from "../utils/create-deposit";
import { Interface, randomBytes, defaultAbiCoder } from "ethers/lib/utils";

export const deposit = async (
    signer: Signer,
    token: string,
    value: BigNumberish,
    chainIdTo: number
): Promise<string> => {
    const chainIdFrom = await signer.getChainId();
    const commandGate: CommandGate = new Contract(
        COMMAND_GATE[chainIdFrom],
        CommandGate__factory.abi,
        signer
    ) as CommandGate;

    const IZKBridge: Interface = new Interface(ZKBridge__factory.abi);

    //  @to-do: need more entropy
    const nullifier: string = BigNumber.from(randomBytes(32)).toString();

    const abi = [
        "function supportsInterface(bytes4 interfaceId_) public view returns (bool)",
        "function approve(address spender_, uint256 amount_) external returns (bool)",
        "function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) external",
    ];
    const tokenContract: Contract = new ethers.Contract(token, abi, signer);
    try {
        if (token === ethers.constants.AddressZero) {
            await commandGate
                .connect(signer)
                .depositNativeTokenWithCommand(
                    BRIDGE[chainIdFrom][chainIdTo],
                    IZKBridge.getSighash("deposit"),
                    defaultAbiCoder.encode(
                        ["address", "address", "uint256", "uint256"],
                        [
                            ethers.constants.AddressZero,
                            ethers.constants.AddressZero,
                            ethers.constants.Zero,
                            createCommitment(await Poseidon.init(), nullifier),
                        ]
                    )
                )
                .then(async (tx) => await tx.wait(CONFIRMATION_BLOCKS))
                .catch((err) => console.log(err));
        } else if (tokenContract.supportsInterface(ERC20_INTERFACE_ID)) {
            await tokenContract
                .connect(signer)
                .approve(commandGate.address, value)
                .then(async (tx: ContractTransaction) => await tx.wait())
                .catch((err: Error) => console.log(err));

            await commandGate
                .connect(signer)
                .depositERC20WithCommand(
                    token,
                    value,
                    IZKBridge.getSighash("deposit"),
                    BRIDGE[chainIdFrom][chainIdTo],
                    defaultAbiCoder.encode(
                        ["address", "address", "uint256", "uint256"],
                        [
                            ethers.constants.AddressZero,
                            ethers.constants.AddressZero,
                            ethers.constants.Zero,
                            createCommitment(await Poseidon.init(), nullifier),
                        ]
                    )
                )
                .then(async (tx) => await tx.wait(CONFIRMATION_BLOCKS))
                .catch((err) => console.log(err));
        } else if (tokenContract.supportsInterface(ERC721_INTERFACE_ID)) {
            await tokenContract
                .connect(signer)
                .safeTransferFrom(
                    await signer.getAddress(),
                    commandGate.address,
                    value,
                    defaultAbiCoder.encode(
                        ["address", "bytes4", "bytes"],
                        [
                            BRIDGE[chainIdFrom][chainIdTo],
                            IZKBridge.getSighash("deposit"),
                            defaultAbiCoder.encode(
                                ["address", "address", "uint256", "uint256"],
                                [
                                    ethers.constants.AddressZero,
                                    ethers.constants.AddressZero,
                                    ethers.constants.Zero,
                                    createCommitment(
                                        await Poseidon.init(),
                                        nullifier
                                    ),
                                ]
                            ),
                        ]
                    )
                )
                .then(
                    async (tx: ContractTransaction) =>
                        await tx.wait(CONFIRMATION_BLOCKS)
                )
                .catch((err: Error) => console.log(err));
        } else {
            throw new Error("UNSUPPROTED_TOKEN");
        }
    } catch (err) {
        console.log(err);
    }

    return nullifier;
};
