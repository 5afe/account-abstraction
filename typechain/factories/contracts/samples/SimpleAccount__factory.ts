/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleAccount,
  SimpleAccountInterface,
} from "../../../contracts/samples/SimpleAccount";

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
  "0x60c034610142576001600160401b0390601f611bde38819003918201601f1916830191848311848410176101475780849260209460405283398101031261014257516001600160a01b0381168103610142573060805260a0527ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a009081549060ff8260401c166101305780808316036100eb575b604051611a80908161015e82396080518181816107a901526109a7015260a0518181816104bb0152818161059a01528181610a8b01528181610ce501528181610ebc015281816111a4015281816113ed015261164e0152f35b6001600160401b031990911681179091556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1388080610092565b60405163f92ee8a960e01b8152600490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806301ffc9a71461012b578063150b7a021461012657806347e1da2a146101215780634a58db191461011c5780634d44560d146101175780634f1ef2861461011257806352d1902d1461010d5780638803e451146101085780638da5cb5b14610103578063ad3cb1cc146100fe578063b0d691fe146100f9578063b61d27f6146100f4578063bc197c81146100ef578063c399ec88146100ea578063c4d66de8146100e5578063d087d288146100e05763f23a6e610361000e57611207565b611125565b610f15565b610e44565b610d7d565b610d09565b610c9a565b610bc9565b610b77565b610a21565b610961565b610729565b61053c565b610479565b61032e565b61026c565b3461021b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b576004357fffffffff00000000000000000000000000000000000000000000000000000000811680910361021b57807f150b7a0200000000000000000000000000000000000000000000000000000000602092149081156101f1575b81156101c7575b506040519015158152f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014386101bc565b7f4e2312e000000000000000000000000000000000000000000000000000000000811491506101b5565b600080fd5b73ffffffffffffffffffffffffffffffffffffffff81160361021b57565b9181601f8401121561021b5782359167ffffffffffffffff831161021b576020838186019501011161021b57565b3461021b5760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b576102a6600435610220565b6102b1602435610220565b60643567ffffffffffffffff811161021b576102d190369060040161023e565b505060206040517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b9181601f8401121561021b5782359167ffffffffffffffff831161021b576020808501948460051b01011161021b57565b3461021b5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b5767ffffffffffffffff60043581811161021b5761037e9036906004016102fd565b60249291923582811161021b576103999036906004016102fd565b9260443590811161021b576103b29036906004016102fd565b9390916103bd6113d5565b84841480610468575b6103cf90611298565b8161041c57505060005b8281106103e257005b806104166103fb6103f6600194878a61132c565b611341565b61041061040984898861139f565b36916106f2565b906114bb565b016103d9565b91909460009493945b85811061042e57005b806104626104426103f66001948a8761132c565b61044d838b8961132c565b3561045c610409858b8a61139f565b916114e3565b01610425565b508115806103c657508185146103c6565b6000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105395773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001681813b1561053957602491604051928380927fb760faf900000000000000000000000000000000000000000000000000000000825230600483015234905af1801561053457610528575080f35b61053190610642565b80f35b6113ba565b80fd5b3461021b57600060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105395760043561057981610220565b6105816114fa565b8173ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001692833b1561060f576044908360405195869485937f205c287800000000000000000000000000000000000000000000000000000000855216600484015260243560248401525af1801561053457610528575080f35b8280fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161065657604052565b610613565b6040810190811067ffffffffffffffff82111761065657604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761065657604052565b67ffffffffffffffff811161065657601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b9291926106fe826106b8565b9161070c6040519384610677565b82948184528183011161021b578281602093846000960137010152565b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b57600480359061076182610220565b60243567ffffffffffffffff811161021b573660238201121561021b5761079190369060248185013591016106f2565b73ffffffffffffffffffffffffffffffffffffffff807f000000000000000000000000000000000000000000000000000000000000000016803014908115610933575b5061090a5790602083926107e66114fa565b604051938480927f52d1902d00000000000000000000000000000000000000000000000000000000825288165afa600092816108d9575b506108715750506040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90921690820190815281906020010390fd5b83837f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc84036108a4576100198383611695565b6040517faa1d49a400000000000000000000000000000000000000000000000000000000815290810184815281906020010390fd5b6108fc91935060203d602011610903575b6108f48183610677565b8101906113c6565b913861081d565b503d6108ea565b826040517fe07c8dba000000000000000000000000000000000000000000000000000000008152fd5b9050817f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc54161415386107d4565b3461021b5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b5773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036109f75760206040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152f35b60046040517fe07c8dba000000000000000000000000000000000000000000000000000000008152fd5b3461021b577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60608136011261021b576004359067ffffffffffffffff821161021b5761014090823603011261021b5760443573ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163303610b1957610ac4610adc926024359060040161158a565b9080610ae0575b506040519081529081906020820190565b0390f35b600080808093337ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff150610b1261148b565b5038610acb565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b3461021b5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b3461021b5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b576040805190610c068261065b565b600582526020907f352e302e300000000000000000000000000000000000000000000000000000006020840152604051916020835283519182602085015260005b838110610c8757846040817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f88600085828601015201168101030190f35b8581018301518582018301528201610c47565b3461021b5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b57602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b3461021b5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b57600435610d4481610220565b6044359067ffffffffffffffff821161021b57610d73610d6b61001993369060040161023e565b6104096113d5565b90602435906114e3565b3461021b5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b57610db7600435610220565b610dc2602435610220565b67ffffffffffffffff60443581811161021b57610de39036906004016102fd565b505060643581811161021b57610dfd9036906004016102fd565b505060843590811161021b57610e1790369060040161023e565b50506040517fbc197c81000000000000000000000000000000000000000000000000000000008152602090f35b3461021b5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260208160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa801561053457602091600091610ef8575b50604051908152f35b610f0f9150823d8411610903576108f48183610677565b38610eef565b3461021b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b57600435610f5081610220565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00549067ffffffffffffffff60ff8360401c161592168015908161111d575b6001149081611113575b15908161110a575b506110e0576110039082610ffa7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0060017fffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000825416179055565b61108457611609565b61100957005b6110557ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff8154169055565b604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a1005b6110db7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00680100000000000000007fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff825416179055565b611609565b60046040517ff92ee8a9000000000000000000000000000000000000000000000000000000008152fd5b90501538610fa1565b303b159150610f99565b839150610f8f565b3461021b5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b576040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482015260208160448173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa801561053457610adc916000916111e857506040519081529081906020820190565b611201915060203d602011610903576108f48183610677565b38610acb565b3461021b5760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261021b57611241600435610220565b61124c602435610220565b60843567ffffffffffffffff811161021b5761126c90369060040161023e565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b1561129f57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b919081101561133c5760051b0190565b6112fd565b3561134b81610220565b90565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561021b570180359067ffffffffffffffff821161021b5760200191813603831361021b57565b9082101561133c576113b69160051b81019061134e565b9091565b6040513d6000823e3d90fd5b9081602091031261021b575190565b73ffffffffffffffffffffffffffffffffffffffff807f000000000000000000000000000000000000000000000000000000000000000016331490811561147d575b501561141f57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b905060005416331438611417565b3d156114b6573d9061149c826106b8565b916114aa6040519384610677565b82523d6000602084013e565b606090565b600091829182602083519301915af16114d261148b565b90156114db5750565b602081519101fd5b916000928392602083519301915af16114d261148b565b73ffffffffffffffffffffffffffffffffffffffff6000541633148015611581575b1561152357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152fd5b5030331461151c565b907f19457468657265756d205369676e6564204d6573736167653a0a333200000000600052601c52603c6000206115f96115f073ffffffffffffffffffffffffffffffffffffffff926115ea61040985600054169661012081019061134e565b906117cd565b90929192611842565b160361160457600090565b600190565b73ffffffffffffffffffffffffffffffffffffffff80911690817fffffffffffffffffffffffff000000000000000000000000000000000000000060005416176000557f0000000000000000000000000000000000000000000000000000000000000000167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de600080a3565b90813b156117685773ffffffffffffffffffffffffffffffffffffffff82167f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc817fffffffffffffffffffffffff00000000000000000000000000000000000000008254161790557fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a280511561173557611732916117af565b50565b50503461173e57565b60046040517fb398979f000000000000000000000000000000000000000000000000000000008152fd5b60248273ffffffffffffffffffffffffffffffffffffffff604051917f4c9c8ce3000000000000000000000000000000000000000000000000000000008352166004820152fd5b60008061134b93602081519101845af46117c761148b565b91611919565b81519190604183036117fe576117f792506020820151906060604084015193015160001a906119b9565b9192909190565b505060009160029190565b6004111561181357565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b61184b81611809565b80611854575050565b61185d81611809565b6001810361188f5760046040517ff645eedf000000000000000000000000000000000000000000000000000000008152fd5b61189881611809565b600281036118d2576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101839052602490fd5b806118de600392611809565b146118e65750565b6040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004810191909152602490fd5b90611958575080511561192e57805190602001fd5b60046040517f1425ea42000000000000000000000000000000000000000000000000000000008152fd5b815115806119b0575b611969575090565b60249073ffffffffffffffffffffffffffffffffffffffff604051917f9996b315000000000000000000000000000000000000000000000000000000008352166004820152fd5b50803b15611961565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411611a3e57926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa1561053457805173ffffffffffffffffffffffffffffffffffffffff811615611a3557918190565b50809160019190565b5050506000916003919056fea264697066735822122022794e08855c3f2be022e127d41df28e3c0e8b38959948f0896885dc14dd98d564736f6c63430008170033";

type SimpleAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccount__factory extends ContractFactory {
  constructor(...args: SimpleAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccount> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<SimpleAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccount {
    return super.attach(address) as SimpleAccount;
  }
  override connect(signer: Signer): SimpleAccount__factory {
    return super.connect(signer) as SimpleAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountInterface {
    return new utils.Interface(_abi) as SimpleAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccount {
    return new Contract(address, _abi, signerOrProvider) as SimpleAccount;
  }
}
