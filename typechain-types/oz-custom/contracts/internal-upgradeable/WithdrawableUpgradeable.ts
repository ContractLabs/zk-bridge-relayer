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
} from "../../../common";

export interface WithdrawableUpgradeableInterface extends utils.Interface {
  functions: {
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "withdraw"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Initialized(uint256)": EventFragment;
    "Received(address,uint256)": EventFragment;
    "Withdrawn(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export interface InitializedEventObject {
  version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface ReceivedEventObject {
  sender: string;
  value: BigNumber;
}
export type ReceivedEvent = TypedEvent<
  [string, BigNumber],
  ReceivedEventObject
>;

export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;

export interface WithdrawnEventObject {
  token: string;
  to: string;
  value: BigNumber;
}
export type WithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawnEventObject
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface WithdrawableUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WithdrawableUpgradeableInterface;

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
    withdraw(
      token_: PromiseOrValue<string>,
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  withdraw(
    token_: PromiseOrValue<string>,
    to_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    withdraw(
      token_: PromiseOrValue<string>,
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint256)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Received(address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      value?: PromiseOrValue<BigNumberish> | null
    ): ReceivedEventFilter;
    Received(
      sender?: PromiseOrValue<string> | null,
      value?: PromiseOrValue<BigNumberish> | null
    ): ReceivedEventFilter;

    "Withdrawn(address,address,uint256)"(
      token?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: PromiseOrValue<BigNumberish> | null
    ): WithdrawnEventFilter;
    Withdrawn(
      token?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: PromiseOrValue<BigNumberish> | null
    ): WithdrawnEventFilter;
  };

  estimateGas: {
    withdraw(
      token_: PromiseOrValue<string>,
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    withdraw(
      token_: PromiseOrValue<string>,
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}