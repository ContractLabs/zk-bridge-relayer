/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BytesLike, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface DeterministicDeployerInterface extends utils.Interface {
  functions: {};

  events: {
    "Deployed(address,bytes32,bytes32,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
}

export interface DeployedEventObject {
  instance: string;
  salt: string;
  bytecodeHash: string;
  factory: string;
}
export type DeployedEvent = TypedEvent<
  [string, string, string, string],
  DeployedEventObject
>;

export type DeployedEventFilter = TypedEventFilter<DeployedEvent>;

export interface DeterministicDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DeterministicDeployerInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "Deployed(address,bytes32,bytes32,string)"(
      instance?: PromiseOrValue<string> | null,
      salt?: PromiseOrValue<BytesLike> | null,
      bytecodeHash?: PromiseOrValue<BytesLike> | null,
      factory?: null
    ): DeployedEventFilter;
    Deployed(
      instance?: PromiseOrValue<string> | null,
      salt?: PromiseOrValue<BytesLike> | null,
      bytecodeHash?: PromiseOrValue<BytesLike> | null,
      factory?: null
    ): DeployedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}