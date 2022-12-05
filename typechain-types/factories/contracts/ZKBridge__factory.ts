/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ZKBridge, ZKBridgeInterface } from "../../contracts/ZKBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "zeroValue_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "merkleHeight_",
        type: "uint256",
      },
      {
        internalType: "contract ITreasury",
        name: "vault_",
        type: "address",
      },
      {
        internalType: "contract IAuthority",
        name: "authority_",
        type: "address",
      },
      {
        internalType: "contract IVerifier",
        name: "verififer_",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Base__AlreadySet",
    type: "error",
  },
  {
    inputs: [],
    name: "Base__Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "FundForwarder__ForwardFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "IncrementalMerkleTree__AllocationExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "IncrementalMerkleTree__OutOfDepth",
    type: "error",
  },
  {
    inputs: [],
    name: "IncrementalMerkleTree__OutOfField",
    type: "error",
  },
  {
    inputs: [],
    name: "Transferable__InvalidArguments",
    type: "error",
  },
  {
    inputs: [],
    name: "Transferable__TransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ZKBridge__AlreadySpent",
    type: "error",
  },
  {
    inputs: [],
    name: "ZKBridge__InvalidProof",
    type: "error",
  },
  {
    inputs: [],
    name: "ZKBridge__LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ZKBridge__NonZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ZKBridge__UnknownRoot",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ZKBridge__UsedCommitment",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ZKBridge__WrappedTokenNotSupported",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IAuthority",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IAuthority",
        name: "to",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "root",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leafIdx",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "commitment",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Forwarded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "stateRoot",
        type: "uint256",
      },
    ],
    name: "NewBridgeState",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "VaultUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IVerifier",
        name: "currentAddr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IVerifier",
        name: "newAddr",
        type: "address",
      },
    ],
    name: "VerifierUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nullifierHash",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stateRoot_",
        type: "uint256",
      },
    ],
    name: "addBridgeState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens_",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "wrappers_",
        type: "address[]",
      },
    ],
    name: "addWrappedTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IAuthority",
        name: "authority_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "commitment_",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "recoverNative",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IAuthority",
        name: "authority_",
        type: "address",
      },
    ],
    name: "updateAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IVerifier",
        name: "verifier_",
        type: "address",
      },
    ],
    name: "updateVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract IVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee_",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "root",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nullifierHash",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "relayer",
            type: "address",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct IZKBridge.Input",
        name: "input_",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "proofs_",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wrapped",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405162001c9138038062001c918339810160408190526200002691620002ff565b60405163841fb50360e01b81527f3496e2e73c4d42b75d702e60d9e48102720b8691234415963a5a857b86425d076004820181905284918491906001600160a01b0383169063841fb50390602401600060405180830381600087803b1580156200008f57600080fd5b505af1158015620000a4573d6000803e3d6000fd5b50505050620000b9826200010860201b60201c565b50620000c79050816200010d565b50600280546001600160a01b0319166001600160a01b038316179055620000fd6008858762000169602090811b62000c7a17901c565b5050505050620003b4565b600055565b6001546040516001600160a01b038084169216907f483bdedaaf23706a9800ac1af0d852b34927780d79f9d6ba60a80c7cad75ea3990600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018110620001aa57604051637378985160e01b815260040160405180910390fd5b811580620001b85750602082115b15620001d75760405163042d25fd60e11b815260040160405180910390fd5b81835560005b8281101562000291576000818152600480860160209081526040928390208590558251808401845285815290810185905291516314d2f97b60e11b815273__$c008086f338c440685e748b7cd946e4aec$__926329a5f2f69262000242920162000367565b602060405180830381865af415801562000260573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200028691906200039a565b9150600101620001dd565b50808360010181905550620002b88184600301620002bd60201b62000e1a1790919060201c565b505050565b600881901c600090815260209290925260409091208054600160ff9093169290921b9091179055565b6001600160a01b0381168114620002fc57600080fd5b50565b600080600080600060a086880312156200031857600080fd5b855194506020860151935060408601516200033381620002e6565b60608701519093506200034681620002e6565b60808701519092506200035981620002e6565b809150509295509295909350565b60408101818360005b60028110156200039157815183526020928301929091019060010162000370565b50505092915050565b600060208284031215620003ad57600080fd5b5051919050565b6118cd80620003c46000396000f3fe6080604052600436106100d65760003560e01c80638980f11f1161007f578063c034091d11610059578063c034091d146102ec578063f6be41261461032f578063fbfa77cf1461034f578063ffa1ad741461037c57600080fd5b80638980f11f1461029757806397fc007c146102b7578063bf7e214f146102d757600080fd5b80634862dc0b116100b05780634862dc0b146102425780635a54db861461026257806382ecc1f01461027757600080fd5b806320e8c565146101a95780632b7ac3f3146101cb5780633c716e081461022257600080fd5b366101a45760015460405160009173ffffffffffffffffffffffffffffffffffffffff169034908381818185875af1925050503d8060008114610135576040519150601f19603f3d011682016040523d82523d6000602084013e61013a565b606091505b5050905080610175576040517f68ef1d7400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604051349033907f6f1deddfc28100c291fae8f1064e4a91e844f0841993bb8fba9a913c3b801d8090600090a3005b600080fd5b3480156101b557600080fd5b506101c96101c43660046114f9565b6103be565b005b3480156101d757600080fd5b506002546101f89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561022e57600080fd5b506101c961023d36600461153f565b6104db565b34801561024e57600080fd5b506101c961025d366004611563565b6105c3565b34801561026e57600080fd5b506101c9610957565b34801561028357600080fd5b506101c9610292366004611640565b61097c565b3480156102a357600080fd5b506101c96102b2366004611659565b6109f1565b3480156102c357600080fd5b506101c96102d236600461153f565b610a1a565b3480156102e357600080fd5b506000546101f8565b3480156102f857600080fd5b506101f861030736600461153f565b60046020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b34801561033b57600080fd5b506101c961034a3660046116d1565b610b21565b34801561035b57600080fd5b506001546101f89073ffffffffffffffffffffffffffffffffffffffff1681565b34801561038857600080fd5b506103b07ff4bf07e827f4c8c7388905ad771e71f3057b88af67d838d74e682d514b8b35ac81565b604051908152602001610219565b7f77d72916e966418e6dc58a19999ae9934bef3f749f1547cde0a86e809f19c89b6103e98133610e43565b600882901c600090815260056020526040902054600160ff84161b1615610444576040517f3aef312b000000000000000000000000000000000000000000000000000000008152600481018390526024015b60405180910390fd5b600a54600883901c60009081526005602052604090208054600160ff86161b179055610471600884610f15565b60095460408051918252602082018390528101849052849073ffffffffffffffffffffffffffffffffffffffff80881691908916907ff3b2a76575670b4eff5a4ad3639d40d32f7ca987adac169e6f9b89a3ab857d279060600160405180910390a4505050505050565b7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b9296105068133610e43565b60005473ffffffffffffffffffffffffffffffffffffffff8084169082160361055b576040517f4ef9984200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61056483600055565b8273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019860405160405180910390a3505050565b7f77d72916e966418e6dc58a19999ae9934bef3f749f1547cde0a86e809f19c89b6105ee8133610e43565b61064061061d610604608087016060880161153f565b73ffffffffffffffffffffffffffffffffffffffff1690565b600881901c600090815260036020526040902054600160ff9092169190911b1690565b61069f57610654608085016060860161153f565b6040517f51ea924f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116600482015260240161043b565b602084810135600881901c60009081526006909252604090912054600160ff9092169190911b16610702576040517f136e8bb10000000000000000000000000000000000000000000000000000000081526020850135600482015260240161043b565b604084810135600881901c600090815260076020529190912054600160ff9092169190911b161561076557604080517f5cf7d7d200000000000000000000000000000000000000000000000000000000815290850135600482015260240161043b565b604084810135600881901c60009081526007602052919091208054600160ff9093169290921b909117905561079c8585858561110f565b60015473ffffffffffffffffffffffffffffffffffffffff1663d9caed12600460006107ce6080890160608a0161153f565b73ffffffffffffffffffffffffffffffffffffffff90811682526020820192909252604001600020541661080860c0880160a0890161153f565b60405160e084901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff92831660048201529116602482015286356044820152606401600060405180830381600087803b15801561087c57600080fd5b505af1158015610890573d6000803e3d6000fd5b5050853591506108a8905060c0860160a0870161153f565b73ffffffffffffffffffffffffffffffffffffffff166108ce608087016060880161153f565b73ffffffffffffffffffffffffffffffffffffffff167fa047e2fa9fed8595a3cd8e0ebdabcb345360ae9f95ede1744da75127134b9c60604088013561091a60a08a0160808b0161153f565b6040805192835273ffffffffffffffffffffffffffffffffffffffff909116602083015281018a905260600160405180910390a450505050505050565b60015461097a9073ffffffffffffffffffffffffffffffffffffffff1647611329565b565b7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b9296109a78133610e43565b600882901c6000908152600660205260408082208054600160ff87161b1790555183917f2c70fc0a22e7030b4b884e2e53f633d17b2d2208ff5211079727d6f5d976bd4c91a25050565b600154610a1690839073ffffffffffffffffffffffffffffffffffffffff1683611373565b5050565b7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929610a458133610e43565b73ffffffffffffffffffffffffffffffffffffffff8216610a92576040517fe69a35ac00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025460405173ffffffffffffffffffffffffffffffffffffffff8085169216907f0243549a92b2412f7a3caf7a2e56d65b8821b91345363faa5f57195384065fcc90600090a350600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929610b4c8133610e43565b83828114610b86576040517f48b967c700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805b82811015610c7057878782818110610ba457610ba461173d565b9050602002016020810190610bb9919061153f565b9150858582818110610bcd57610bcd61173d565b9050602002016020810190610be2919061153f565b73ffffffffffffffffffffffffffffffffffffffff838116600090815260046020908152604080832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169590941694909417909255600885901c72ffffffffffffffffffffffffffffffffffffff1681526003909152208054600160ff85161b179055600101610b8a565b5050505050505050565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018110610cd3576040517f7378985100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b811580610ce05750602082115b15610d17576040517f085a4bfa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81835560005b82811015610de3576000818152600480860160209081526040928390208590558251808401845285815290810185905291517f29a5f2f600000000000000000000000000000000000000000000000000000000815273__$c008086f338c440685e748b7cd946e4aec$__926329a5f2f692610d98920161176c565b602060405180830381865af4158015610db5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd9919061179d565b9150600101610d1d565b506001838101829055600882901c60009081526003850160205260409020805460ff84169290921b9091179055505050565b505050565b600881901c600090815260209290925260409091208054600160ff9093169290921b9091179055565b6000546040517f91d148540000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff838116602483015291909116906391d1485490604401602060405180830381865afa158015610ebb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edf91906117b6565b610a16576040517f5d53684100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81547f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018210610f70576040517f7378985100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60028301546001821b8110610fb1576040517f0a182c1c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808360005b848110156110d0578260011660000361100957604080518082018252838152600083815260048a016020908152838220548184015284825260058b01905291909120611003916002611481565b50611020565b600081815260058801602052604090208290600101555b60008181526005880160205260409081902090517f29a5f2f600000000000000000000000000000000000000000000000000000000815273__$c008086f338c440685e748b7cd946e4aec$__916329a5f2f69161108091906004016117d8565b602060405180830381865af415801561109d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c1919061179d565b600193841c9390925001610fb6565b506001868101829055600882901c60009081526003880160205260409020805460ff84169290921b909117905550506001016002909301929092555050565b60408051600780825261010082019092526000916020820160e08036833701905050905084816000815181106111475761114761173d565b60200260200101818152505083602001358160018151811061116b5761116b61173d565b60200260200101818152505083600001358160028151811061118f5761118f61173d565b6020026020010181815250508360400135816003815181106111b3576111b361173d565b60209081029190910101526111d1610604608086016060870161153f565b816004815181106111e4576111e461173d565b602090810291909101015261120261060460a086016080870161153f565b816005815181106112155761121561173d565b602090810291909101015261123361060460c0860160a0870161153f565b816006815181106112465761124661173d565b60209081029190910101526002546040517f1e8e1e1300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690631e8e1e13906112ab90869086908690600401611800565b602060405180830381865afa1580156112c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ec91906117b6565b611322576040517f10c2c3c400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b61133382826113be565b61133d8282611416565b610a16576040517f8650e6f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61137d82826113be565b611388838383611429565b610e15576040517f8650e6f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015806113df575073ffffffffffffffffffffffffffffffffffffffff8216155b15610a16576040517f8aa97e7d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600080600085875af19392505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af1600051600114601f3d11163d15171695945050505050565b82600281019282156114af579160200282015b828111156114af578251825591602001919060010190611494565b506114bb9291506114bf565b5090565b5b808211156114bb57600081556001016114c0565b73ffffffffffffffffffffffffffffffffffffffff811681146114f657600080fd5b50565b6000806000806080858703121561150f57600080fd5b843561151a816114d4565b9350602085013561152a816114d4565b93969395505050506040820135916060013590565b60006020828403121561155157600080fd5b813561155c816114d4565b9392505050565b60008060008060008086880361014081121561157e57600080fd5b8735611589816114d4565b96506020880135611599816114d4565b95506040880135945060c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0820112156115d257600080fd5b5060608701925061012087013567ffffffffffffffff808211156115f557600080fd5b818901915089601f83011261160957600080fd5b81358181111561161857600080fd5b8a602082850101111561162a57600080fd5b6020830194508093505050509295509295509295565b60006020828403121561165257600080fd5b5035919050565b6000806040838503121561166c57600080fd5b8235611677816114d4565b946020939093013593505050565b60008083601f84011261169757600080fd5b50813567ffffffffffffffff8111156116af57600080fd5b6020830191508360208260051b85010111156116ca57600080fd5b9250929050565b600080600080604085870312156116e757600080fd5b843567ffffffffffffffff808211156116ff57600080fd5b61170b88838901611685565b9096509450602087013591508082111561172457600080fd5b5061173187828801611685565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60408101818360005b6002811015611794578151835260209283019290910190600101611775565b50505092915050565b6000602082840312156117af57600080fd5b5051919050565b6000602082840312156117c857600080fd5b8151801515811461155c57600080fd5b60408101818360005b60028110156117945781548352602090920191600191820191016117e1565b604081528260408201528284606083013760006060848301015260007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501168201606081016020606085840301818601528186518084526080850191508288019450600093505b8084101561188a578451825293820193600193909301929082019061186a565b509897505050505050505056fea26469706673582212204902f88817d9c69a6ff6f076f2609309b89b59d3a440fb67287f300f7cbe499864736f6c63430008110033";

type ZKBridgeConstructorParams =
  | [linkLibraryAddresses: ZKBridgeLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZKBridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class ZKBridge__factory extends ContractFactory {
  constructor(...args: ZKBridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, ZKBridge__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: ZKBridgeLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$c008086f338c440685e748b7cd946e4aec\\$__", "g"),
      linkLibraryAddresses[
        "contracts/libraries/IncrementalMerkleTree.sol:PoseidonT3"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    zeroValue_: PromiseOrValue<BigNumberish>,
    merkleHeight_: PromiseOrValue<BigNumberish>,
    vault_: PromiseOrValue<string>,
    authority_: PromiseOrValue<string>,
    verififer_: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ZKBridge> {
    return super.deploy(
      zeroValue_,
      merkleHeight_,
      vault_,
      authority_,
      verififer_,
      overrides || {}
    ) as Promise<ZKBridge>;
  }
  override getDeployTransaction(
    zeroValue_: PromiseOrValue<BigNumberish>,
    merkleHeight_: PromiseOrValue<BigNumberish>,
    vault_: PromiseOrValue<string>,
    authority_: PromiseOrValue<string>,
    verififer_: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      zeroValue_,
      merkleHeight_,
      vault_,
      authority_,
      verififer_,
      overrides || {}
    );
  }
  override attach(address: string): ZKBridge {
    return super.attach(address) as ZKBridge;
  }
  override connect(signer: Signer): ZKBridge__factory {
    return super.connect(signer) as ZKBridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZKBridgeInterface {
    return new utils.Interface(_abi) as ZKBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZKBridge {
    return new Contract(address, _abi, signerOrProvider) as ZKBridge;
  }
}

export interface ZKBridgeLibraryAddresses {
  ["contracts/libraries/IncrementalMerkleTree.sol:PoseidonT3"]: string;
}
