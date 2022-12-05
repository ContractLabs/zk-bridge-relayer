/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface CommandGateInterface extends utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "depositERC20PermitWithCommand(address,uint256,uint256,uint8,bytes32,bytes32,bytes4,address,bytes)": FunctionFragment;
    "depositERC20WithCommand(address,uint256,bytes4,address,bytes)": FunctionFragment;
    "depositERC721MultiWithCommand(uint256[],address[],bytes[])": FunctionFragment;
    "depositNativeTokenWithCommand(address,bytes4,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "original()": FunctionFragment;
    "recoverERC20(address,uint256)": FunctionFragment;
    "recoverNFT(address,uint256)": FunctionFragment;
    "recoverNFTs(address)": FunctionFragment;
    "recoverNative()": FunctionFragment;
    "updateAuthority(address)": FunctionFragment;
    "updateTreasury(address)": FunctionFragment;
    "vault()": FunctionFragment;
    "whitelistAddress(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authority"
      | "depositERC20PermitWithCommand"
      | "depositERC20WithCommand"
      | "depositERC721MultiWithCommand"
      | "depositNativeTokenWithCommand"
      | "onERC721Received"
      | "original"
      | "recoverERC20"
      | "recoverNFT"
      | "recoverNFTs"
      | "recoverNative"
      | "updateAuthority"
      | "updateTreasury"
      | "vault"
      | "whitelistAddress"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositERC20PermitWithCommand",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC20WithCommand",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositERC721MultiWithCommand",
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositNativeTokenWithCommand",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "original", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverNFT",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverNFTs",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverNative",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateAuthority",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTreasury",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whitelistAddress",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositERC20PermitWithCommand",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC20WithCommand",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositERC721MultiWithCommand",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositNativeTokenWithCommand",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "original", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recoverNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverNFTs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverNative",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistAddress",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address,address)": EventFragment;
    "Commanded(address,bytes4,bytes,address,address,uint256)": EventFragment;
    "Forwarded(address,uint256)": EventFragment;
    "VaultUpdated(address,address)": EventFragment;
    "Whitelisted(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Commanded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Forwarded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Whitelisted"): EventFragment;
}

export interface AuthorityUpdatedEventObject {
  from: string;
  to: string;
}
export type AuthorityUpdatedEvent = TypedEvent<
  [string, string],
  AuthorityUpdatedEventObject
>;

export type AuthorityUpdatedEventFilter =
  TypedEventFilter<AuthorityUpdatedEvent>;

export interface CommandedEventObject {
  to: string;
  functionSelector: string;
  params: string;
  from: string;
  token: string;
  value: BigNumber;
}
export type CommandedEvent = TypedEvent<
  [string, string, string, string, string, BigNumber],
  CommandedEventObject
>;

export type CommandedEventFilter = TypedEventFilter<CommandedEvent>;

export interface ForwardedEventObject {
  from: string;
  amount: BigNumber;
}
export type ForwardedEvent = TypedEvent<
  [string, BigNumber],
  ForwardedEventObject
>;

export type ForwardedEventFilter = TypedEventFilter<ForwardedEvent>;

export interface VaultUpdatedEventObject {
  from: string;
  to: string;
}
export type VaultUpdatedEvent = TypedEvent<
  [string, string],
  VaultUpdatedEventObject
>;

export type VaultUpdatedEventFilter = TypedEventFilter<VaultUpdatedEvent>;

export interface WhitelistedEventObject {
  addr: string;
}
export type WhitelistedEvent = TypedEvent<[string], WhitelistedEventObject>;

export type WhitelistedEventFilter = TypedEventFilter<WhitelistedEvent>;

export interface CommandGate extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CommandGateInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    authority(
      overrides?: CallOverrides
    ): Promise<[string] & { authority_: string }>;

    depositERC20PermitWithCommand(
      token_: PromiseOrValue<string>,
      value_: PromiseOrValue<BigNumberish>,
      deadline_: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      fnSig_: PromiseOrValue<BytesLike>,
      contract_: PromiseOrValue<string>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositERC20WithCommand(
      token_: PromiseOrValue<string>,
      value_: PromiseOrValue<BigNumberish>,
      fnSig_: PromiseOrValue<BytesLike>,
      contract_: PromiseOrValue<string>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositERC721MultiWithCommand(
      tokenIds_: PromiseOrValue<BigNumberish>[],
      contracts_: PromiseOrValue<string>[],
      data_: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositNativeTokenWithCommand(
      contract_: PromiseOrValue<string>,
      fnSig_: PromiseOrValue<BytesLike>,
      params_: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      from_: PromiseOrValue<string>,
      tokenId_: PromiseOrValue<BigNumberish>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    original(overrides?: CallOverrides): Promise<[string]>;

    recoverERC20(
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    recoverNFT(
      token_: PromiseOrValue<string>,
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    recoverNFTs(
      token_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    recoverNative(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateTreasury(
      treasury_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    whitelistAddress(
      addr_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  depositERC20PermitWithCommand(
    token_: PromiseOrValue<string>,
    value_: PromiseOrValue<BigNumberish>,
    deadline_: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    fnSig_: PromiseOrValue<BytesLike>,
    contract_: PromiseOrValue<string>,
    data_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositERC20WithCommand(
    token_: PromiseOrValue<string>,
    value_: PromiseOrValue<BigNumberish>,
    fnSig_: PromiseOrValue<BytesLike>,
    contract_: PromiseOrValue<string>,
    data_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositERC721MultiWithCommand(
    tokenIds_: PromiseOrValue<BigNumberish>[],
    contracts_: PromiseOrValue<string>[],
    data_: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositNativeTokenWithCommand(
    contract_: PromiseOrValue<string>,
    fnSig_: PromiseOrValue<BytesLike>,
    params_: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    from_: PromiseOrValue<string>,
    tokenId_: PromiseOrValue<BigNumberish>,
    data_: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  original(overrides?: CallOverrides): Promise<string>;

  recoverERC20(
    token_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  recoverNFT(
    token_: PromiseOrValue<string>,
    tokenId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  recoverNFTs(
    token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  recoverNative(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAuthority(
    authority_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateTreasury(
    treasury_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  whitelistAddress(
    addr_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    depositERC20PermitWithCommand(
      token_: PromiseOrValue<string>,
      value_: PromiseOrValue<BigNumberish>,
      deadline_: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      fnSig_: PromiseOrValue<BytesLike>,
      contract_: PromiseOrValue<string>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositERC20WithCommand(
      token_: PromiseOrValue<string>,
      value_: PromiseOrValue<BigNumberish>,
      fnSig_: PromiseOrValue<BytesLike>,
      contract_: PromiseOrValue<string>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositERC721MultiWithCommand(
      tokenIds_: PromiseOrValue<BigNumberish>[],
      contracts_: PromiseOrValue<string>[],
      data_: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    depositNativeTokenWithCommand(
      contract_: PromiseOrValue<string>,
      fnSig_: PromiseOrValue<BytesLike>,
      params_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      from_: PromiseOrValue<string>,
      tokenId_: PromiseOrValue<BigNumberish>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    original(overrides?: CallOverrides): Promise<string>;

    recoverERC20(
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    recoverNFT(
      token_: PromiseOrValue<string>,
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    recoverNFTs(
      token_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    recoverNative(overrides?: CallOverrides): Promise<void>;

    updateAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTreasury(
      treasury_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    whitelistAddress(
      addr_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): AuthorityUpdatedEventFilter;
    AuthorityUpdated(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): AuthorityUpdatedEventFilter;

    "Commanded(address,bytes4,bytes,address,address,uint256)"(
      to?: PromiseOrValue<string> | null,
      functionSelector?: PromiseOrValue<BytesLike> | null,
      params?: PromiseOrValue<BytesLike> | null,
      from?: null,
      token?: null,
      value?: null
    ): CommandedEventFilter;
    Commanded(
      to?: PromiseOrValue<string> | null,
      functionSelector?: PromiseOrValue<BytesLike> | null,
      params?: PromiseOrValue<BytesLike> | null,
      from?: null,
      token?: null,
      value?: null
    ): CommandedEventFilter;

    "Forwarded(address,uint256)"(
      from?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): ForwardedEventFilter;
    Forwarded(
      from?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): ForwardedEventFilter;

    "VaultUpdated(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): VaultUpdatedEventFilter;
    VaultUpdated(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): VaultUpdatedEventFilter;

    "Whitelisted(address)"(
      addr?: PromiseOrValue<string> | null
    ): WhitelistedEventFilter;
    Whitelisted(addr?: PromiseOrValue<string> | null): WhitelistedEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    depositERC20PermitWithCommand(
      token_: PromiseOrValue<string>,
      value_: PromiseOrValue<BigNumberish>,
      deadline_: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      fnSig_: PromiseOrValue<BytesLike>,
      contract_: PromiseOrValue<string>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositERC20WithCommand(
      token_: PromiseOrValue<string>,
      value_: PromiseOrValue<BigNumberish>,
      fnSig_: PromiseOrValue<BytesLike>,
      contract_: PromiseOrValue<string>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositERC721MultiWithCommand(
      tokenIds_: PromiseOrValue<BigNumberish>[],
      contracts_: PromiseOrValue<string>[],
      data_: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositNativeTokenWithCommand(
      contract_: PromiseOrValue<string>,
      fnSig_: PromiseOrValue<BytesLike>,
      params_: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      from_: PromiseOrValue<string>,
      tokenId_: PromiseOrValue<BigNumberish>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    original(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    recoverNFT(
      token_: PromiseOrValue<string>,
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    recoverNFTs(
      token_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    recoverNative(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateTreasury(
      treasury_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    whitelistAddress(
      addr_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositERC20PermitWithCommand(
      token_: PromiseOrValue<string>,
      value_: PromiseOrValue<BigNumberish>,
      deadline_: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      fnSig_: PromiseOrValue<BytesLike>,
      contract_: PromiseOrValue<string>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositERC20WithCommand(
      token_: PromiseOrValue<string>,
      value_: PromiseOrValue<BigNumberish>,
      fnSig_: PromiseOrValue<BytesLike>,
      contract_: PromiseOrValue<string>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositERC721MultiWithCommand(
      tokenIds_: PromiseOrValue<BigNumberish>[],
      contracts_: PromiseOrValue<string>[],
      data_: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositNativeTokenWithCommand(
      contract_: PromiseOrValue<string>,
      fnSig_: PromiseOrValue<BytesLike>,
      params_: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      from_: PromiseOrValue<string>,
      tokenId_: PromiseOrValue<BigNumberish>,
      data_: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    original(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverERC20(
      token_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    recoverNFT(
      token_: PromiseOrValue<string>,
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    recoverNFTs(
      token_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    recoverNative(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAuthority(
      authority_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateTreasury(
      treasury_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelistAddress(
      addr_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}