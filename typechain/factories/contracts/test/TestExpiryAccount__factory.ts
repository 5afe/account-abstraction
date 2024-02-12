/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestExpiryAccount,
  TestExpiryAccountInterface,
} from "../../../contracts/test/TestExpiryAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
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
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SimpleAccountInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "_after",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "_until",
        type: "uint48",
      },
    ],
    name: "addTemporaryOwner",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "value",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "getNonce",
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
    inputs: [
      {
        internalType: "address",
        name: "anOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerAfter",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerUntil",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
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
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040523060805234801561001457600080fd5b50604051620022013803806200220183398101604081905261003591610046565b6001600160a01b031660a052610076565b60006020828403121561005857600080fd5b81516001600160a01b038116811461006f57600080fd5b9392505050565b60805160a051612126620000db600039600081816103f2015281816107e20152818161089001528181610a1801528181610d5b01528181610da201528181610f88015261143c0152600081816111510152818161117a015261139b01526121266000f3fe6080604052600436106101635760003560e01c80638da5cb5b116100c0578063c399ec8811610074578063cf6dca5511610059578063cf6dca55146104b3578063d087d288146104d3578063f23a6e61146104e857600080fd5b8063c399ec881461047e578063c4d66de81461049357600080fd5b8063b0d691fe116100a5578063b0d691fe146103e3578063b61d27f614610416578063bc197c811461043657600080fd5b80638da5cb5b1461033b578063ad3cb1cc1461038d57600080fd5b806347e1da2a116101175780634d44560d116100fc5780634d44560d146102f35780634f1ef2861461031357806352d1902d1461032657600080fd5b806347e1da2a146102c95780634a58db19146102eb57600080fd5b806319822f7c1161014857806319822f7c1461021a5780633e476951146102485780633fb5a7a11461029457600080fd5b806301ffc9a71461016f578063150b7a02146101a457600080fd5b3661016a57005b600080fd5b34801561017b57600080fd5b5061018f61018a3660046119f1565b61052e565b60405190151581526020015b60405180910390f35b3480156101b057600080fd5b506101e96101bf366004611a9e565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161019b565b34801561022657600080fd5b5061023a610235366004611b11565b610613565b60405190815260200161019b565b34801561025457600080fd5b5061027d610263366004611b65565b60026020526000908152604090205465ffffffffffff1681565b60405165ffffffffffff909116815260200161019b565b3480156102a057600080fd5b5061027d6102af366004611b65565b60016020526000908152604090205465ffffffffffff1681565b3480156102d557600080fd5b506102e96102e4366004611bc7565b610639565b005b6102e96107e0565b3480156102ff57600080fd5b506102e961030e366004611c61565b610886565b6102e9610321366004611cbc565b610935565b34801561033257600080fd5b5061023a610954565b34801561034757600080fd5b506000546103689073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161019b565b34801561039957600080fd5b506103d66040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60405161019b9190611dc2565b3480156103ef57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610368565b34801561042257600080fd5b506102e9610431366004611e13565b610983565b34801561044257600080fd5b506101e9610451366004611e6f565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561048a57600080fd5b5061023a6109d2565b34801561049f57600080fd5b506102e96104ae366004611b65565b610a89565b3480156104bf57600080fd5b506102e96104ce366004611f49565b610c1a565b3480156104df57600080fd5b5061023a610d0e565b3480156104f457600080fd5b506101e9610503366004611f8e565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806105c157507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061060d57507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b600061061d610d8a565b6106278484610e2b565b905061063282610f05565b9392505050565b610641610f70565b8481148015610657575082158061065757508281145b6106c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b600083900361076e5760005b85811015610768576107608787838181106106eb576106eb611ff8565b90506020020160208101906107009190611b65565b600085858581811061071457610714611ff8565b90506020028101906107269190612027565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061103192505050565b6001016106ce565b506107d8565b60005b858110156107d6576107ce87878381811061078e5761078e611ff8565b90506020020160208101906107a39190611b65565b8686848181106107b5576107b5611ff8565b9050602002013585858581811061071457610714611ff8565b600101610771565b505b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561086b57600080fd5b505af115801561087f573d6000803e3d6000fd5b5050505050565b61088e6110ae565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561092157600080fd5b505af11580156107d8573d6000803e3d6000fd5b61093d611139565b6109468261123d565b6109508282611245565b5050565b600061095e611383565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b61098b610f70565b6109cc848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061103192505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610a60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a84919061208c565b905090565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610ad45750825b905060008267ffffffffffffffff166001148015610af15750303b155b905081158015610aff575080155b15610b36576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610b975784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610ba0866113f2565b610bb286600065ffffffffffff610c1a565b83156107d85784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b610c226110ae565b8165ffffffffffff168165ffffffffffff1611610c9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f77726f6e6720756e74696c2f616674657200000000000000000000000000000060448201526064016106b9565b73ffffffffffffffffffffffffffffffffffffffff929092166000908152600160209081526040808320805465ffffffffffff9586167fffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000009182161790915560029092529091208054929093169116179055565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610a43565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016106b9565b565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c81206000610ea882610e6e610100880188612027565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061148692505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602090815260408083205460019092529091205491925065ffffffffffff90811691168115610ef68184846114b0565b98975050505050505050565b50565b8015610f025760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d806000811461087f576040519150601f19603f3d011682016040523d82523d6000602084013e61087f565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610fcb575060005473ffffffffffffffffffffffffffffffffffffffff1633145b610e29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016106b9565b6000808473ffffffffffffffffffffffffffffffffffffffff16848460405161105a91906120a5565b60006040518083038185875af1925050503d8060008114611097576040519150601f19603f3d011682016040523d82523d6000602084013e61109c565b606091505b50915091508161087f57805160208201fd5b60005473ffffffffffffffffffffffffffffffffffffffff163314806110d357503330145b610e29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016106b9565b3073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061120657507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166111ed7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610e29576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f026110ae565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156112ca575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526112c79181019061208c565b60015b611318576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024016106b9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611374576040517faa1d49a4000000000000000000000000000000000000000000000000000000008152600481018290526024016106b9565b61137e83836114e8565b505050565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e29576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116918217835560405191927f0000000000000000000000000000000000000000000000000000000000000000909116917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de9190a350565b600080600080611496868661154b565b9250925092506114a68282611598565b5090949350505050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b856114d85760006114db565b60015b60ff161717949350505050565b6114f18261169c565b60405173ffffffffffffffffffffffffffffffffffffffff8316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28051156115435761137e828261176b565b6109506117ee565b600080600083516041036115855760208401516040850151606086015160001a61157788828585611826565b955095509550505050611591565b50508151600091506002905b9250925092565b60008260038111156115ac576115ac6120c1565b036115b5575050565b60018260038111156115c9576115c96120c1565b03611600576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002826003811115611614576116146120c1565b0361164e576040517ffce698f7000000000000000000000000000000000000000000000000000000008152600481018290526024016106b9565b6003826003811115611662576116626120c1565b03610950576040517fd78bce0c000000000000000000000000000000000000000000000000000000008152600481018290526024016106b9565b8073ffffffffffffffffffffffffffffffffffffffff163b600003611705576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024016106b9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60606000808473ffffffffffffffffffffffffffffffffffffffff168460405161179591906120a5565b600060405180830381855af49150503d80600081146117d0576040519150601f19603f3d011682016040523d82523d6000602084013e6117d5565b606091505b50915091506117e5858383611920565b95945050505050565b3415610e29576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156118615750600091506003905082611916565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156118b5573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661190c57506000925060019150829050611916565b9250600091508190505b9450945094915050565b60608261193557611930826119af565b610632565b8151158015611959575073ffffffffffffffffffffffffffffffffffffffff84163b155b156119a8576040517f9996b31500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526024016106b9565b5080610632565b8051156119bf5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060208284031215611a0357600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461063257600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610f0257600080fd5b60008083601f840112611a6757600080fd5b50813567ffffffffffffffff811115611a7f57600080fd5b602083019150836020828501011115611a9757600080fd5b9250929050565b600080600080600060808688031215611ab657600080fd5b8535611ac181611a33565b94506020860135611ad181611a33565b935060408601359250606086013567ffffffffffffffff811115611af457600080fd5b611b0088828901611a55565b969995985093965092949392505050565b600080600060608486031215611b2657600080fd5b833567ffffffffffffffff811115611b3d57600080fd5b84016101208187031215611b5057600080fd5b95602085013595506040909401359392505050565b600060208284031215611b7757600080fd5b813561063281611a33565b60008083601f840112611b9457600080fd5b50813567ffffffffffffffff811115611bac57600080fd5b6020830191508360208260051b8501011115611a9757600080fd5b60008060008060008060608789031215611be057600080fd5b863567ffffffffffffffff80821115611bf857600080fd5b611c048a838b01611b82565b90985096506020890135915080821115611c1d57600080fd5b611c298a838b01611b82565b90965094506040890135915080821115611c4257600080fd5b50611c4f89828a01611b82565b979a9699509497509295939492505050565b60008060408385031215611c7457600080fd5b8235611c7f81611a33565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060408385031215611ccf57600080fd5b8235611cda81611a33565b9150602083013567ffffffffffffffff80821115611cf757600080fd5b818501915085601f830112611d0b57600080fd5b813581811115611d1d57611d1d611c8d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611d6357611d63611c8d565b81604052828152886020848701011115611d7c57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b83811015611db9578181015183820152602001611da1565b50506000910152565b6020815260008251806020840152611de1816040850160208701611d9e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008060008060608587031215611e2957600080fd5b8435611e3481611a33565b935060208501359250604085013567ffffffffffffffff811115611e5757600080fd5b611e6387828801611a55565b95989497509550505050565b60008060008060008060008060a0898b031215611e8b57600080fd5b8835611e9681611a33565b97506020890135611ea681611a33565b9650604089013567ffffffffffffffff80821115611ec357600080fd5b611ecf8c838d01611b82565b909850965060608b0135915080821115611ee857600080fd5b611ef48c838d01611b82565b909650945060808b0135915080821115611f0d57600080fd5b50611f1a8b828c01611a55565b999c989b5096995094979396929594505050565b803565ffffffffffff81168114611f4457600080fd5b919050565b600080600060608486031215611f5e57600080fd5b8335611f6981611a33565b9250611f7760208501611f2e565b9150611f8560408501611f2e565b90509250925092565b60008060008060008060a08789031215611fa757600080fd5b8635611fb281611a33565b95506020870135611fc281611a33565b94506040870135935060608701359250608087013567ffffffffffffffff811115611fec57600080fd5b611c4f89828a01611a55565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261205c57600080fd5b83018035915067ffffffffffffffff82111561207757600080fd5b602001915036819003821315611a9757600080fd5b60006020828403121561209e57600080fd5b5051919050565b600082516120b7818460208701611d9e565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220f71dbba7066e8bd7179486068cfb9bf29a4aee85e17dda2032f0fc4a7b7c9cbd64736f6c63430008170033";

type TestExpiryAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestExpiryAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestExpiryAccount__factory extends ContractFactory {
  constructor(...args: TestExpiryAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestExpiryAccount> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<TestExpiryAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): TestExpiryAccount {
    return super.attach(address) as TestExpiryAccount;
  }
  override connect(signer: Signer): TestExpiryAccount__factory {
    return super.connect(signer) as TestExpiryAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestExpiryAccountInterface {
    return new utils.Interface(_abi) as TestExpiryAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestExpiryAccount {
    return new Contract(address, _abi, signerOrProvider) as TestExpiryAccount;
  }
}
