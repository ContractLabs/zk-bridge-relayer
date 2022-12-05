/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SignableUpgradeable,
  SignableUpgradeableInterface,
} from "../../../../oz-custom/contracts/internal-upgradeable/SignableUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "Signable__InvalidSignature",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        internalType: "address",
        name: "sender_",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class SignableUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): SignableUpgradeableInterface {
    return new utils.Interface(_abi) as SignableUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignableUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as SignableUpgradeable;
  }
}