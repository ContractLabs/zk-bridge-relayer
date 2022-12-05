/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MultiDelegatecall,
  MultiDelegatecallInterface,
} from "../../../../oz-custom/contracts/internal/MultiDelegatecall";

const _abi = [
  {
    inputs: [],
    name: "original",
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
];

export class MultiDelegatecall__factory {
  static readonly abi = _abi;
  static createInterface(): MultiDelegatecallInterface {
    return new utils.Interface(_abi) as MultiDelegatecallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiDelegatecall {
    return new Contract(address, _abi, signerOrProvider) as MultiDelegatecall;
  }
}