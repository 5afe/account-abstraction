/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MaliciousAccount,
  MaliciousAccountInterface,
} from "../../../contracts/test/MaliciousAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_ep",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "accountGasLimits",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "gasFees",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct PackedUserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260405161044338038061044383398101604081905261002291610047565b600080546001600160a01b0319166001600160a01b0392909216919091179055610077565b60006020828403121561005957600080fd5b81516001600160a01b038116811461007057600080fd5b9392505050565b6103bd806100866000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806319822f7c14610030575b600080fd5b61004361003e36600461021e565b610055565b60405190815260200160405180910390f35b600080546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99084906024016000604051808303818588803b1580156100c257600080fd5b505af11580156100d6573d6000803e3d6000fd5b50505050506000848061010001906100ee9190610272565b8101906100fb91906102de565b90506000610108866101db565b90506000610115876101f1565b9050600060a08801356101288385610326565b6101329190610326565b905060006101408288610339565b9050600061014d8a61020f565b9050600061015b8284610374565b90508681146101ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f5265766572742061667465722066697273742076616c69646174696f6e000000604482015260640160405180910390fd5b5060009a9950505050505050505050565b60006101eb826080013560801c90565b92915050565b60006fffffffffffffffffffffffffffffffff6080830135166101eb565b600060c082013560801c6101eb565b60008060006060848603121561023357600080fd5b833567ffffffffffffffff81111561024a57600080fd5b8401610120818703121561025d57600080fd5b95602085013595506040909401359392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126102a757600080fd5b83018035915067ffffffffffffffff8211156102c257600080fd5b6020019150368190038213156102d757600080fd5b9250929050565b6000602082840312156102f057600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156101eb576101eb6102f7565b60008261036f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b818103818111156101eb576101eb6102f756fea2646970667358221220f484e14991f7a3fb7414a3988ec5ea83d21c451c075f7d8fc917f0a30062c0d164736f6c63430008170033";

type MaliciousAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaliciousAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MaliciousAccount__factory extends ContractFactory {
  constructor(...args: MaliciousAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<MaliciousAccount> {
    return super.deploy(_ep, overrides || {}) as Promise<MaliciousAccount>;
  }
  override getDeployTransaction(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ep, overrides || {});
  }
  override attach(address: string): MaliciousAccount {
    return super.attach(address) as MaliciousAccount;
  }
  override connect(signer: Signer): MaliciousAccount__factory {
    return super.connect(signer) as MaliciousAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaliciousAccountInterface {
    return new utils.Interface(_abi) as MaliciousAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MaliciousAccount {
    return new Contract(address, _abi, signerOrProvider) as MaliciousAccount;
  }
}
