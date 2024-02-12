/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BrokenBLSAccountFactory,
  BrokenBLSAccountFactoryInterface,
} from "../../../../contracts/test/BrokenBlsAccount.sol/BrokenBLSAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract BrokenBLSAccount",
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
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract BrokenBLSAccount",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "getAddress",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051612a9c380380612a9c83398101604081905261002f916100aa565b818160405161003d90610085565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610070573d6000803e3d6000fd5b506001600160a01b0316608052506100e49050565b61203980610a6383390190565b6001600160a01b03811681146100a757600080fd5b50565b600080604083850312156100bd57600080fd5b82516100c881610092565b60208401519092506100d981610092565b809150509250929050565b60805161095861010b60003960008181604b0152818160f7015261020d01526109586000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe1461004657806319c2a1b214610096578063de3398dd146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461038e565b6100bc565b61006d6100b736600461038e565b6101de565b6000806100c984846101de565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101d8565b8460001b7f0000000000000000000000000000000000000000000000000000000000000000856040516024016101279190610419565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f3600000000000000000000000000000000000000000000000000000000179052516101a790610352565b6101b292919061046e565b8190604051809103906000f59050801580156101d2573d6000803e3d6000fd5b50925050505b92915050565b60006103198360001b604051806020016101f790610352565b6020820181038252601f19601f820116604052507f00000000000000000000000000000000000000000000000000000000000000008560405160240161023d9190610419565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f360000000000000000000000000000000000000000000000000000000017905290516102c29392910161046e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526102fe92916020016104dc565b60405160208183030381529060405280519060200120610320565b9392505050565b60006103198383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6104178061050c83390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060a083850312156103a157600080fd5b82359150602084603f8501126103b657600080fd5b6040516080810181811067ffffffffffffffff821117156103d9576103d961035f565b6040528060a08601878111156103ee57600080fd5b602087015b8181101561040a57803583529184019184016103f3565b50505080925050509250929050565b60808101818360005b6004811015610441578151835260209283019290910190600101610422565b50505092915050565b60005b8381101561046557818101518382015260200161044d565b50506000910152565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526104a981606085016020870161044a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104ee81846020880161044a565b83519083019061050281836020880161044a565b0194935050505056fe608060405260405161041738038061041783398101604081905261002291610268565b61002c8282610033565b5050610352565b61003c82610092565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561008657610081828261010e565b505050565b61008e610185565b5050565b806001600160a01b03163b6000036100cd57604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b03168460405161012b9190610336565b600060405180830381855af49150503d8060008114610166576040519150601f19603f3d011682016040523d82523d6000602084013e61016b565b606091505b50909250905061017c8583836101a6565b95945050505050565b34156101a45760405163b398979f60e01b815260040160405180910390fd5b565b6060826101bb576101b682610205565b6101fe565b81511580156101d257506001600160a01b0384163b155b156101fb57604051639996b31560e01b81526001600160a01b03851660048201526024016100c4565b50805b9392505050565b8051156102155780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b600052604160045260246000fd5b60005b8381101561025f578181015183820152602001610247565b50506000910152565b6000806040838503121561027b57600080fd5b82516001600160a01b038116811461029257600080fd5b60208401519092506001600160401b03808211156102af57600080fd5b818501915085601f8301126102c357600080fd5b8151818111156102d5576102d561022e565b604051601f8201601f19908116603f011681019083821181831017156102fd576102fd61022e565b8160405282815288602084870101111561031657600080fd5b610327836020830160208801610244565b80955050505050509250929050565b60008251610348818460208701610244565b9190910192915050565b60b7806103606000396000f3fe6080604052600a600c565b005b60186014601a565b605e565b565b600060597f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e808015607c573d6000f35b3d6000fdfea2646970667358221220d7f23a80daebb5531c9e4a18d87e812fca112e5df7e56433218edcc12bbe415d64736f6c63430008170033a2646970667358221220fa491727dfaacdf2c3fed077bf0c28ef7f033613fddfc4153eadd4e6e51c7efc64736f6c6343000817003360e0604052306080523480156200001557600080fd5b50604051620020393803806200203983398101604081905262000038916200012e565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200016d565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000b55760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620001155780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6001600160a01b03811681146200011557600080fd5b600080604083850312156200014257600080fd5b82516200014f8162000118565b6020840151909250620001628162000118565b809150509250929050565b60805160a05160c051611e56620001e36000396000818161025a01526106140152600081816103a5015281816107fe015281816108ac01528181610a3401528181610c7101528181610de501528181610ef401526113a80152600081816110bd015281816110e601526113070152611e566000f3fe6080604052600436106101635760003560e01c8063ad3cb1cc116100c0578063c4d66de811610074578063e02afbae11610059578063e02afbae1461047b578063ee472f361461049d578063f23a6e61146104bd57600080fd5b8063c4d66de814610446578063d087d2881461046657600080fd5b8063b61d27f6116100a5578063b61d27f6146103c9578063bc197c81146103e9578063c399ec881461043157600080fd5b8063ad3cb1cc14610340578063b0d691fe1461039657600080fd5b80634a58db19116101175780634f1ef286116100fc5780634f1ef286146102eb57806352d1902d146102fe5780638da5cb5b1461031357600080fd5b80634a58db19146102c35780634d44560d146102cb57600080fd5b806319822f7c1161014857806319822f7c1461021a578063245a7bfc1461024857806347e1da2a146102a157600080fd5b806301ffc9a71461016f578063150b7a02146101a457600080fd5b3661016a57005b600080fd5b34801561017b57600080fd5b5061018f61018a3660046116ce565b610503565b60405190151581526020015b60405180910390f35b3480156101b057600080fd5b506101e96101bf36600461177b565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161019b565b34801561022657600080fd5b5061023a6102353660046117ee565b6105e8565b60405190815260200161019b565b34801561025457600080fd5b5061027c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161019b565b3480156102ad57600080fd5b506102c16102bc366004611887565b610655565b005b6102c16107fc565b3480156102d757600080fd5b506102c16102e6366004611921565b6108a2565b6102c16102f93660046119cb565b610951565b34801561030a57600080fd5b5061023a610970565b34801561031f57600080fd5b5060005461027c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561034c57600080fd5b506103896040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60405161019b9190611ab5565b3480156103a257600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061027c565b3480156103d557600080fd5b506102c16103e4366004611b06565b61099f565b3480156103f557600080fd5b506101e9610404366004611b62565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561043d57600080fd5b5061023a6109ee565b34801561045257600080fd5b506102c1610461366004611c21565b610aa5565b34801561047257600080fd5b5061023a610c24565b34801561048757600080fd5b50610490610ca0565b60405161019b9190611c3e565b3480156104a957600080fd5b506102c16104b8366004611c6f565b610cb5565b3480156104c957600080fd5b506101e96104d8366004611ced565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000148061059657507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806105e257507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b60006105f2610dcd565b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016808252600060208301819052919092015261064e82610e71565b9392505050565b61065d610edc565b8481148015610673575082158061067357508281145b6106de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b600083900361078a5760005b858110156107845761077c87878381811061070757610707611d57565b905060200201602081019061071c9190611c21565b600085858581811061073057610730611d57565b90506020028101906107429190611d86565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f9d92505050565b6001016106ea565b506107f4565b60005b858110156107f2576107ea8787838181106107aa576107aa611d57565b90506020020160208101906107bf9190611c21565b8686848181106107d1576107d1611d57565b9050602002013585858581811061073057610730611d57565b60010161078d565b505b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561088757600080fd5b505af115801561089b573d6000803e3d6000fd5b5050505050565b6108aa61101a565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561093d57600080fd5b505af11580156107f4573d6000803e3d6000fd5b6109596110a5565b610962826111a9565b61096c82826111b1565b5050565b600061097a6112ef565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6109a7610edc565b6109e8848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f9d92505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610a7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa09190611deb565b905090565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610af05750825b905060008267ffffffffffffffff166001148015610b0d5750303b155b905081158015610b1b575080155b15610b52576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610bb35784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610bbc8661135e565b83156107f45784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610a5f565b610ca86116b0565b610cb06116b0565b919050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610d005750825b905060008267ffffffffffffffff166001148015610d1d5750303b155b905081158015610d2b575080155b15610d62576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610dc35784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610bbc600061135e565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016106d5565b565b50565b8015610e6e5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d806000811461089b576040519150601f19603f3d011682016040523d82523d6000602084013e61089b565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610f37575060005473ffffffffffffffffffffffffffffffffffffffff1633145b610e6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016106d5565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610fc69190611e04565b60006040518083038185875af1925050503d8060008114611003576040519150601f19603f3d011682016040523d82523d6000602084013e611008565b606091505b50915091508161089b57805160208201fd5b60005473ffffffffffffffffffffffffffffffffffffffff1633148061103f57503330145b610e6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016106d5565b3073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061117257507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166111597f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610e6c576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e6e61101a565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611236575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261123391810190611deb565b60015b611284576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024016106d5565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146112e0576040517faa1d49a4000000000000000000000000000000000000000000000000000000008152600481018290526024016106d5565b6112ea83836113f2565b505050565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e6c576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116918217835560405191927f0000000000000000000000000000000000000000000000000000000000000000909116917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de9190a350565b6113fb82611455565b60405173ffffffffffffffffffffffffffffffffffffffff8316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561144d576112ea8282611524565b61096c6115a7565b8073ffffffffffffffffffffffffffffffffffffffff163b6000036114be576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024016106d5565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60606000808473ffffffffffffffffffffffffffffffffffffffff168460405161154e9190611e04565b600060405180830381855af49150503d8060008114611589576040519150601f19603f3d011682016040523d82523d6000602084013e61158e565b606091505b509150915061159e8583836115df565b95945050505050565b3415610e6c576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060826115f4576115ef8261166e565b61064e565b8151158015611618575073ffffffffffffffffffffffffffffffffffffffff84163b155b15611667576040517f9996b31500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526024016106d5565b508061064e565b80511561167e5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180608001604052806004906020820280368337509192915050565b6000602082840312156116e057600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461064e57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610e6e57600080fd5b60008083601f84011261174457600080fd5b50813567ffffffffffffffff81111561175c57600080fd5b60208301915083602082850101111561177457600080fd5b9250929050565b60008060008060006080868803121561179357600080fd5b853561179e81611710565b945060208601356117ae81611710565b935060408601359250606086013567ffffffffffffffff8111156117d157600080fd5b6117dd88828901611732565b969995985093965092949392505050565b60008060006060848603121561180357600080fd5b833567ffffffffffffffff81111561181a57600080fd5b8401610120818703121561182d57600080fd5b95602085013595506040909401359392505050565b60008083601f84011261185457600080fd5b50813567ffffffffffffffff81111561186c57600080fd5b6020830191508360208260051b850101111561177457600080fd5b600080600080600080606087890312156118a057600080fd5b863567ffffffffffffffff808211156118b857600080fd5b6118c48a838b01611842565b909850965060208901359150808211156118dd57600080fd5b6118e98a838b01611842565b9096509450604089013591508082111561190257600080fd5b5061190f89828a01611842565b979a9699509497509295939492505050565b6000806040838503121561193457600080fd5b823561193f81611710565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156119c3576119c361194d565b604052919050565b600080604083850312156119de57600080fd5b82356119e981611710565b915060208381013567ffffffffffffffff80821115611a0757600080fd5b818601915086601f830112611a1b57600080fd5b813581811115611a2d57611a2d61194d565b611a5d847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161197c565b91508082528784828501011115611a7357600080fd5b80848401858401376000848284010152508093505050509250929050565b60005b83811015611aac578181015183820152602001611a94565b50506000910152565b6020815260008251806020840152611ad4816040850160208701611a91565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008060008060608587031215611b1c57600080fd5b8435611b2781611710565b935060208501359250604085013567ffffffffffffffff811115611b4a57600080fd5b611b5687828801611732565b95989497509550505050565b60008060008060008060008060a0898b031215611b7e57600080fd5b8835611b8981611710565b97506020890135611b9981611710565b9650604089013567ffffffffffffffff80821115611bb657600080fd5b611bc28c838d01611842565b909850965060608b0135915080821115611bdb57600080fd5b611be78c838d01611842565b909650945060808b0135915080821115611c0057600080fd5b50611c0d8b828c01611732565b999c989b5096995094979396929594505050565b600060208284031215611c3357600080fd5b813561064e81611710565b60808101818360005b6004811015611c66578151835260209283019290910190600101611c47565b50505092915050565b600060808284031215611c8157600080fd5b82601f830112611c9057600080fd5b6040516080810181811067ffffffffffffffff82111715611cb357611cb361194d565b604052806080840185811115611cc857600080fd5b845b81811015611ce2578035835260209283019201611cca565b509195945050505050565b60008060008060008060a08789031215611d0657600080fd5b8635611d1181611710565b95506020870135611d2181611710565b94506040870135935060608701359250608087013567ffffffffffffffff811115611d4b57600080fd5b61190f89828a01611732565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611dbb57600080fd5b83018035915067ffffffffffffffff821115611dd657600080fd5b60200191503681900382131561177457600080fd5b600060208284031215611dfd57600080fd5b5051919050565b60008251611e16818460208701611a91565b919091019291505056fea264697066735822122010e93b34bf8a4e78850e4c3c9d316c2f8376750f428790b808be72f8a2af88ba64736f6c63430008170033";

type BrokenBLSAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BrokenBLSAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BrokenBLSAccountFactory__factory extends ContractFactory {
  constructor(...args: BrokenBLSAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    entryPoint: PromiseOrValue<string>,
    aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BrokenBLSAccountFactory> {
    return super.deploy(
      entryPoint,
      aggregator,
      overrides || {}
    ) as Promise<BrokenBLSAccountFactory>;
  }
  override getDeployTransaction(
    entryPoint: PromiseOrValue<string>,
    aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(entryPoint, aggregator, overrides || {});
  }
  override attach(address: string): BrokenBLSAccountFactory {
    return super.attach(address) as BrokenBLSAccountFactory;
  }
  override connect(signer: Signer): BrokenBLSAccountFactory__factory {
    return super.connect(signer) as BrokenBLSAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrokenBLSAccountFactoryInterface {
    return new utils.Interface(_abi) as BrokenBLSAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BrokenBLSAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BrokenBLSAccountFactory;
  }
}
