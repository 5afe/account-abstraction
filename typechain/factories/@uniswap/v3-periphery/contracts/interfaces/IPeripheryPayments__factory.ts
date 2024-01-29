/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPeripheryPayments,
  IPeripheryPaymentsInterface,
} from "../../../../../@uniswap/v3-periphery/contracts/interfaces/IPeripheryPayments";

const _abi = [
  {
    inputs: [],
    name: "refundETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sweepToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "unwrapWETH9",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class IPeripheryPayments__factory {
  static readonly abi = _abi;
  static createInterface(): IPeripheryPaymentsInterface {
    return new utils.Interface(_abi) as IPeripheryPaymentsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPeripheryPayments {
    return new Contract(address, _abi, signerOrProvider) as IPeripheryPayments;
  }
}
