/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestExpirePaymaster,
  TestExpirePaymasterInterface,
} from "../../../contracts/test/TestExpirePaymaster";

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
  "0x60a060405234801561001057600080fd5b50604051610e8d380380610e8d83398101604081905261002f9161018a565b80338061005757604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6100608161007c565b5061006a816100cc565b6001600160a01b0316608052506101dc565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516301ffc9a760e01b815263122a0e9b60e31b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa158015610117573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013b91906101ba565b6101875760405162461bcd60e51b815260206004820152601e60248201527f49456e747279506f696e7420696e74657266616365206d69736d617463680000604482015260640161004e565b50565b60006020828403121561019c57600080fd5b81516001600160a01b03811681146101b357600080fd5b9392505050565b6000602082840312156101cc57600080fd5b815180151581146101b357600080fd5b608051610c65610228600039600081816101cb015281816102a90152818161037301528181610414015281816104e10152818161056a0152818161061d015261074b0152610c656000f3fe6080604052600436106100c75760003560e01c8063b0d691fe11610074578063c399ec881161004e578063c399ec8814610222578063d0e30db014610245578063f2fde38b1461024d57600080fd5b8063b0d691fe146101b9578063bb9fe6bf146101ed578063c23a5cea1461020257600080fd5b8063715018a6116100a5578063715018a6146101385780637c627b211461014d5780638da5cb5b1461016d57600080fd5b80630396cb60146100cc578063205c2878146100e157806352b7512c14610101575b600080fd5b6100df6100da36600461093b565b61026d565b005b3480156100ed57600080fd5b506100df6100fc36600461098a565b61031f565b34801561010d57600080fd5b5061012161011c3660046109b6565b6103b7565b60405161012f929190610a0a565b60405180910390f35b34801561014457600080fd5b506100df6103da565b34801561015957600080fd5b506100df610168366004610a7d565b6103ee565b34801561017957600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161012f565b3480156101c557600080fd5b506101947f000000000000000000000000000000000000000000000000000000000000000081565b3480156101f957600080fd5b506100df61040a565b34801561020e57600080fd5b506100df61021d366004610b15565b610494565b34801561022e57600080fd5b50610237610539565b60405190815260200161012f565b6100df6105ef565b34801561025957600080fd5b506100df610268366004610b15565b610677565b6102756106e0565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff821660048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630396cb609034906024016000604051808303818588803b15801561030357600080fd5b505af1158015610317573d6000803e3d6000fd5b505050505050565b6103276106e0565b6040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b15801561030357600080fd5b606060006103c3610733565b6103ce8585856107d2565b91509150935093915050565b6103e26106e0565b6103ec600061082c565b565b6103f6610733565b61040385858585856108a1565b5050505050565b6104126106e0565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561047a57600080fd5b505af115801561048e573d6000803e3d6000fd5b50505050565b61049c6106e0565b6040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b15801561052557600080fd5b505af1158015610403573d6000803e3d6000fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156105c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ea9190610b32565b905090565b6040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b760faf99034906024016000604051808303818588803b15801561052557600080fd5b61067f6106e0565b73ffffffffffffffffffffffffffffffffffffffff81166106d4576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b6106dd8161082c565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103ec576040517f118cdaa70000000000000000000000000000000000000000000000000000000081523360048201526024016106cb565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146103ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e74000000000000000000000060448201526064016106cb565b6060600080806107e560e0880188610b4b565b6107f3916034908290610bb7565b8101906108009190610bfc565b9150915061081060008284610903565b6040805160208101909152600081529890975095505050505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f6d757374206f766572726964650000000000000000000000000000000000000060448201526064016106cb565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b8561092b57600061092e565b60015b60ff161717949350505050565b60006020828403121561094d57600080fd5b813563ffffffff8116811461096157600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146106dd57600080fd5b6000806040838503121561099d57600080fd5b82356109a881610968565b946020939093013593505050565b6000806000606084860312156109cb57600080fd5b833567ffffffffffffffff8111156109e257600080fd5b840161012081870312156109f557600080fd5b95602085013595506040909401359392505050565b604081526000835180604084015260005b81811015610a385760208187018101516060868401015201610a1b565b5060006060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150508260208301529392505050565b600080600080600060808688031215610a9557600080fd5b853560038110610aa457600080fd5b9450602086013567ffffffffffffffff80821115610ac157600080fd5b818801915088601f830112610ad557600080fd5b813581811115610ae457600080fd5b896020828501011115610af657600080fd5b9699602092909201985095966040810135965060600135945092505050565b600060208284031215610b2757600080fd5b813561096181610968565b600060208284031215610b4457600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610b8057600080fd5b83018035915067ffffffffffffffff821115610b9b57600080fd5b602001915036819003821315610bb057600080fd5b9250929050565b60008085851115610bc757600080fd5b83861115610bd457600080fd5b5050820193919092039150565b803565ffffffffffff81168114610bf757600080fd5b919050565b60008060408385031215610c0f57600080fd5b610c1883610be1565b9150610c2660208401610be1565b9050925092905056fea2646970667358221220231919e2b2c5cdf9d5593ac68f1e43dfa622a8cebf4b6ad0fee0c452b08e34c864736f6c63430008170033";

type TestExpirePaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestExpirePaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestExpirePaymaster__factory extends ContractFactory {
  constructor(...args: TestExpirePaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestExpirePaymaster> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<TestExpirePaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): TestExpirePaymaster {
    return super.attach(address) as TestExpirePaymaster;
  }
  override connect(signer: Signer): TestExpirePaymaster__factory {
    return super.connect(signer) as TestExpirePaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestExpirePaymasterInterface {
    return new utils.Interface(_abi) as TestExpirePaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestExpirePaymaster {
    return new Contract(address, _abi, signerOrProvider) as TestExpirePaymaster;
  }
}
