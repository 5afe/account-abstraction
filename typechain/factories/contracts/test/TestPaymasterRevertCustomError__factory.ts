/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestPaymasterRevertCustomError,
  TestPaymasterRevertCustomErrorInterface,
} from "../../../contracts/test/TestPaymasterRevertCustomError";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "customReason",
        type: "string",
      },
    ],
    name: "CustomError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
  {
    inputs: [],
    name: "owner",
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
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actualUserOpFeePerGas",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum TestPaymasterRevertCustomError.RevertType",
        name: "_revertType",
        type: "uint8",
      },
    ],
    name: "setRevertType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610f0b380380610f0b83398101604081905261002f9161018a565b80338061005757604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6100608161007c565b5061006a816100cc565b6001600160a01b0316608052506101dc565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516301ffc9a760e01b8152639d95230160e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa158015610117573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013b91906101ba565b6101875760405162461bcd60e51b815260206004820152601e60248201527f49456e747279506f696e7420696e74657266616365206d69736d617463680000604482015260640161004e565b50565b60006020828403121561019c57600080fd5b81516001600160a01b03811681146101b357600080fd5b9392505050565b6000602082840312156101cc57600080fd5b815180151581146101b357600080fd5b608051610ce3610228600039600081816101f6015281816102d40152818161039e0152818161049801528181610565015281816105ee015281816106a101526107cf0152610ce36000f3fe6080604052600436106100d25760003560e01c80638da5cb5b1161007f578063c23a5cea11610059578063c23a5cea1461022d578063c399ec881461024d578063d0e30db014610270578063f2fde38b1461027857600080fd5b80638da5cb5b14610198578063b0d691fe146101e4578063bb9fe6bf1461021857600080fd5b8063703ae88f116100b0578063703ae88f1461012c578063715018a6146101635780637c627b211461017857600080fd5b80630396cb60146100d7578063205c2878146100ec5780632cd103391461010c575b600080fd5b6100ea6100e5366004610a4d565b610298565b005b3480156100f857600080fd5b506100ea610107366004610a9c565b61034a565b34801561011857600080fd5b506100ea610127366004610ac8565b6103e2565b34801561013857600080fd5b5061014c610147366004610ae9565b61043b565b60405161015a929190610b3d565b60405180910390f35b34801561016f57600080fd5b506100ea61045e565b34801561018457600080fd5b506100ea610193366004610bb0565b610472565b3480156101a457600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015a565b3480156101f057600080fd5b506101bf7f000000000000000000000000000000000000000000000000000000000000000081565b34801561022457600080fd5b506100ea61048e565b34801561023957600080fd5b506100ea610248366004610c48565b610518565b34801561025957600080fd5b506102626105bd565b60405190815260200161015a565b6100ea610673565b34801561028457600080fd5b506100ea610293366004610c48565b6106fb565b6102a0610764565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff821660048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630396cb609034906024016000604051808303818588803b15801561032e57600080fd5b505af1158015610342573d6000803e3d6000fd5b505050505050565b610352610764565b6040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b15801561032e57600080fd5b600080548291907fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000083600181111561043357610433610c65565b021790555050565b606060006104476107b7565b610452858585610856565b91509150935093915050565b610466610764565b61047060006108bb565b565b61047a6107b7565b6104878585858585610930565b5050505050565b610496610764565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156104fe57600080fd5b505af1158015610512573d6000803e3d6000fd5b50505050565b610520610764565b6040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b1580156105a957600080fd5b505af1158015610487573d6000803e3d6000fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561064a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066e9190610c94565b905090565b6040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b760faf99034906024016000604051808303818588803b1580156105a957600080fd5b610703610764565b73ffffffffffffffffffffffffffffffffffffffff8116610758576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b610761816108bb565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610470576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240161074f565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610470576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e740000000000000000000000604482015260640161074f565b606060006108676020860186610c48565b6040516020016108a2919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b6040516020818303038152906040529150935093915050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000805474010000000000000000000000000000000000000000900460ff16600181111561096057610960610c65565b036109ed576040517f8d6ea8be00000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f746869732069732061206c6f6e672072657665727420726561736f6e2073747260448201527f696e6720776520617265206c6f6f6b696e6720666f7200000000000000000000606482015260840161074f565b600160005474010000000000000000000000000000000000000000900460ff166001811115610a1e57610a1e610c65565b03610487577fdeaddead0000000000000000000000000000000000000000000000000000000060005260206000fd5b600060208284031215610a5f57600080fd5b813563ffffffff81168114610a7357600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461076157600080fd5b60008060408385031215610aaf57600080fd5b8235610aba81610a7a565b946020939093013593505050565b600060208284031215610ada57600080fd5b813560028110610a7357600080fd5b600080600060608486031215610afe57600080fd5b833567ffffffffffffffff811115610b1557600080fd5b84016101408187031215610b2857600080fd5b95602085013595506040909401359392505050565b604081526000835180604084015260005b81811015610b6b5760208187018101516060868401015201610b4e565b5060006060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150508260208301529392505050565b600080600080600060808688031215610bc857600080fd5b853560038110610bd757600080fd5b9450602086013567ffffffffffffffff80821115610bf457600080fd5b818801915088601f830112610c0857600080fd5b813581811115610c1757600080fd5b896020828501011115610c2957600080fd5b9699602092909201985095966040810135965060600135945092505050565b600060208284031215610c5a57600080fd5b8135610a7381610a7a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060208284031215610ca657600080fd5b505191905056fea26469706673582212203b5654783d52902833633b1879580758779d5b6c374d4665d1619186c5a83e2864736f6c63430008170033";

type TestPaymasterRevertCustomErrorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestPaymasterRevertCustomErrorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestPaymasterRevertCustomError__factory extends ContractFactory {
  constructor(...args: TestPaymasterRevertCustomErrorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestPaymasterRevertCustomError> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<TestPaymasterRevertCustomError>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): TestPaymasterRevertCustomError {
    return super.attach(address) as TestPaymasterRevertCustomError;
  }
  override connect(signer: Signer): TestPaymasterRevertCustomError__factory {
    return super.connect(signer) as TestPaymasterRevertCustomError__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestPaymasterRevertCustomErrorInterface {
    return new utils.Interface(_abi) as TestPaymasterRevertCustomErrorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestPaymasterRevertCustomError {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestPaymasterRevertCustomError;
  }
}
