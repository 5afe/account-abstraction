/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestSignatureAggregator,
  TestSignatureAggregatorInterface,
} from "../../../contracts/test/TestSignatureAggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "delay",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
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
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
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
        internalType: "struct PackedUserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
    ],
    name: "aggregateSignatures",
    outputs: [
      {
        internalType: "bytes",
        name: "aggregatedSignature",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
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
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
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
        internalType: "struct PackedUserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateSignatures",
    outputs: [],
    stateMutability: "pure",
    type: "function",
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
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
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
        name: "",
        type: "tuple",
      },
    ],
    name: "validateUserOpSignature",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506106ae806100206000396000f3fe60806040526004361061003f5760003560e01c806333ecca7b14610044578063451711591461007a5780638c1532901461008f578063fe96cf23146100bd575b600080fd5b34801561005057600080fd5b5061006461005f3660046103d4565b6100dd565b6040516100719190610416565b60405180910390f35b61008d610088366004610483565b61014d565b005b34801561009b57600080fd5b506100646100aa3660046104de565b5060408051602081019091526000815290565b3480156100c957600080fd5b5061008d6100d8366004610521565b6101d8565b60606000805b83811015610127578484828181106100fd576100fd6105b8565b905060200281019061010f91906105e7565b61011d906020013583610625565b91506001016100e3565b506040805160208101839052016040516020818303038152906040529150505b92915050565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff8216600482015273ffffffffffffffffffffffffffffffffffffffff831690630396cb609034906024016000604051808303818588803b1580156101bb57600080fd5b505af11580156101cf573d6000803e3d6000fd5b50505050505050565b6000805b848110156102255760008686838181106101f8576101f86105b8565b905060200281019061020a91906105e7565b60200135905061021a8184610625565b9250506001016101dc565b50602082146102bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f546573745369676e617475726556616c696461746f723a20736967206d75737460448201527f2062652075696e7400000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60006102c98385018561065f565b9050818114610380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f546573745369676e617475726556616c696461746f723a20616767726567617460448201527f6564207369676e6174757265206d69736d6174636820286e6f6e63652073756d60648201527f2900000000000000000000000000000000000000000000000000000000000000608482015260a4016102b2565b505050505050565b60008083601f84011261039a57600080fd5b50813567ffffffffffffffff8111156103b257600080fd5b6020830191508360208260051b85010111156103cd57600080fd5b9250929050565b600080602083850312156103e757600080fd5b823567ffffffffffffffff8111156103fe57600080fd5b61040a85828601610388565b90969095509350505050565b60006020808352835180602085015260005b8181101561044457858101830151858201604001528201610428565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b6000806040838503121561049657600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146104ba57600080fd5b9150602083013563ffffffff811681146104d357600080fd5b809150509250929050565b6000602082840312156104f057600080fd5b813567ffffffffffffffff81111561050757600080fd5b8201610140818503121561051a57600080fd5b9392505050565b6000806000806040858703121561053757600080fd5b843567ffffffffffffffff8082111561054f57600080fd5b61055b88838901610388565b9096509450602087013591508082111561057457600080fd5b818701915087601f83011261058857600080fd5b81358181111561059757600080fd5b8860208285010111156105a957600080fd5b95989497505060200194505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec183360301811261061b57600080fd5b9190910192915050565b80820180821115610147577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561067157600080fd5b503591905056fea264697066735822122087aac6fcf784f070bafb6bf2493c6103aaecaeaac615567ef5086be097c4737f64736f6c63430008170033";

type TestSignatureAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestSignatureAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestSignatureAggregator__factory extends ContractFactory {
  constructor(...args: TestSignatureAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestSignatureAggregator> {
    return super.deploy(overrides || {}) as Promise<TestSignatureAggregator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestSignatureAggregator {
    return super.attach(address) as TestSignatureAggregator;
  }
  override connect(signer: Signer): TestSignatureAggregator__factory {
    return super.connect(signer) as TestSignatureAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestSignatureAggregatorInterface {
    return new utils.Interface(_abi) as TestSignatureAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestSignatureAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestSignatureAggregator;
  }
}
