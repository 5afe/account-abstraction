/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestAggregatedAccountFactory,
  TestAggregatedAccountFactoryInterface,
} from "../../../contracts/test/TestAggregatedAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "anAggregator",
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
        internalType: "contract TestAggregatedAccount",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract TestAggregatedAccount",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "salt",
        type: "uint256",
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
  "0x60a060405234801561001057600080fd5b5060405161279138038061279183398101604081905261002f916100aa565b818160405161003d90610085565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610070573d6000803e3d6000fd5b506001600160a01b0316608052506100e49050565b611d95806109fc83390190565b6001600160a01b03811681146100a757600080fd5b50565b600080604083850312156100bd57600080fd5b82516100c881610092565b60208401519092506100d981610092565b809150509250929050565b6080516108f061010c60003960008181604b01528181610114015261025801526108f06000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe146100465780635fbfb9cf146100965780638cb84e18146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461039d565b6100bc565b61006d6100b736600461039d565b6101ee565b6000806100c984846101ee565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101e8565b60405173ffffffffffffffffffffffffffffffffffffffff8616602482015284907f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052516101b790610390565b6101c2929190610406565b8190604051809103906000f59050801580156101e2573d6000803e3d6000fd5b50925050505b92915050565b60006103578260001b6040518060200161020790610390565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905273ffffffffffffffffffffffffffffffffffffffff871660248201527f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052905161030093929101610406565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261033c9291602001610474565b6040516020818303038152906040528051906020012061035e565b9392505050565b60006103578383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b610417806104a483390190565b600080604083850312156103b057600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146103d457600080fd5b946020939093013593505050565b60005b838110156103fd5781810151838201526020016103e5565b50506000910152565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526104418160608501602087016103e2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104868184602088016103e2565b83519083019061049a8183602088016103e2565b0194935050505056fe608060405260405161041738038061041783398101604081905261002291610268565b61002c8282610033565b5050610352565b61003c82610092565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561008657610081828261010e565b505050565b61008e610185565b5050565b806001600160a01b03163b6000036100cd57604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b03168460405161012b9190610336565b600060405180830381855af49150503d8060008114610166576040519150601f19603f3d011682016040523d82523d6000602084013e61016b565b606091505b50909250905061017c8583836101a6565b95945050505050565b34156101a45760405163b398979f60e01b815260040160405180910390fd5b565b6060826101bb576101b682610205565b6101fe565b81511580156101d257506001600160a01b0384163b155b156101fb57604051639996b31560e01b81526001600160a01b03851660048201526024016100c4565b50805b9392505050565b8051156102155780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b600052604160045260246000fd5b60005b8381101561025f578181015183820152602001610247565b50506000910152565b6000806040838503121561027b57600080fd5b82516001600160a01b038116811461029257600080fd5b60208401519092506001600160401b03808211156102af57600080fd5b818501915085601f8301126102c357600080fd5b8151818111156102d5576102d561022e565b604051601f8201601f19908116603f011681019083821181831017156102fd576102fd61022e565b8160405282815288602084870101111561031657600080fd5b610327836020830160208801610244565b80955050505050509250929050565b60008251610348818460208701610244565b9190910192915050565b60b7806103606000396000f3fe6080604052600a600c565b005b60186014601a565b605e565b565b600060597f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e808015607c573d6000f35b3d6000fdfea2646970667358221220d7f23a80daebb5531c9e4a18d87e812fca112e5df7e56433218edcc12bbe415d64736f6c63430008170033a26469706673582212201e7c24497ef45d5bae5430f8bbaa8bf7ce707992848b4295ef05d99c70c6319064736f6c6343000817003360e0604052306080523480156200001557600080fd5b5060405162001d9538038062001d9583398101604081905262000038916200012e565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200016d565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000b55760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620001155780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6001600160a01b03811681146200011557600080fd5b600080604083850312156200014257600080fd5b82516200014f8162000118565b6020840151909250620001628162000118565b809150509250929050565b60805160a05160c051611bb2620001e360003960008181610224015261059c01526000818161036f0152818161078601528181610834015281816109bc01528181610bfa01528181610c4101528181610d500152611204015260008181610f1901528181610f4201526111630152611bb26000f3fe60806040526004361061012d5760003560e01c80638da5cb5b116100a5578063bc197c8111610074578063c4d66de811610059578063c4d66de814610410578063d087d28814610430578063f23a6e611461044557600080fd5b8063bc197c81146103b3578063c399ec88146103fb57600080fd5b80638da5cb5b146102dd578063ad3cb1cc1461030a578063b0d691fe14610360578063b61d27f61461039357600080fd5b806347e1da2a116100fc5780634d44560d116100e15780634d44560d146102955780634f1ef286146102b557806352d1902d146102c857600080fd5b806347e1da2a1461026b5780634a58db191461028d57600080fd5b806301ffc9a714610139578063150b7a021461016e57806319822f7c146101e4578063245a7bfc1461021257600080fd5b3661013457005b600080fd5b34801561014557600080fd5b5061015961015436600461150c565b61048b565b60405190151581526020015b60405180910390f35b34801561017a57600080fd5b506101b36101893660046115b9565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610165565b3480156101f057600080fd5b506102046101ff36600461162c565b610570565b604051908152602001610165565b34801561021e57600080fd5b506102467f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610165565b34801561027757600080fd5b5061028b6102863660046116c5565b6105dd565b005b61028b610784565b3480156102a157600080fd5b5061028b6102b036600461175f565b61082a565b61028b6102c33660046117ba565b6108d9565b3480156102d457600080fd5b506102046108f8565b3480156102e957600080fd5b506000546102469073ffffffffffffffffffffffffffffffffffffffff1681565b34801561031657600080fd5b506103536040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60405161016591906118c0565b34801561036c57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610246565b34801561039f57600080fd5b5061028b6103ae366004611911565b610927565b3480156103bf57600080fd5b506101b36103ce36600461196d565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561040757600080fd5b50610204610976565b34801561041c57600080fd5b5061028b61042b366004611a2c565b610a2d565b34801561043c57600080fd5b50610204610bad565b34801561045157600080fd5b506101b3610460366004611a49565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000148061051e57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061056a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b600061057a610c29565b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001680825260006020830181905291909201526105d682610ccd565b9392505050565b6105e5610d38565b84811480156105fb57508215806105fb57508281145b610666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60008390036107125760005b8581101561070c5761070487878381811061068f5761068f611ab3565b90506020020160208101906106a49190611a2c565b60008585858181106106b8576106b8611ab3565b90506020028101906106ca9190611ae2565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610df992505050565b600101610672565b5061077c565b60005b8581101561077a5761077287878381811061073257610732611ab3565b90506020020160208101906107479190611a2c565b86868481811061075957610759611ab3565b905060200201358585858181106106b8576106b8611ab3565b600101610715565b505b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561080f57600080fd5b505af1158015610823573d6000803e3d6000fd5b5050505050565b610832610e76565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156108c557600080fd5b505af115801561077c573d6000803e3d6000fd5b6108e1610f01565b6108ea82611005565b6108f4828261100d565b5050565b600061090261114b565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b61092f610d38565b610970848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610df992505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610a04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a289190611b47565b905090565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610a785750825b905060008267ffffffffffffffff166001148015610a955750303b155b905081158015610aa3575080155b15610ada576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610b3b5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610b4560006111ba565b831561077c5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a906044016109e7565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610cc8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161065d565b565b50565b8015610cca5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610823576040519150601f19603f3d011682016040523d82523d6000602084013e610823565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610d93575060005473ffffffffffffffffffffffffffffffffffffffff1633145b610cc8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74604482015260640161065d565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610e229190611b60565b60006040518083038185875af1925050503d8060008114610e5f576040519150601f19603f3d011682016040523d82523d6000602084013e610e64565b606091505b50915091508161082357805160208201fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331480610e9b57503330145b610cc8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015260640161065d565b3073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610fce57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610fb57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610cc8576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cca610e76565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611092575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261108f91810190611b47565b60015b6110e0576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260240161065d565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461113c576040517faa1d49a40000000000000000000000000000000000000000000000000000000081526004810182905260240161065d565b611146838361124e565b505050565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610cc8576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116918217835560405191927f0000000000000000000000000000000000000000000000000000000000000000909116917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de9190a350565b611257826112b1565b60405173ffffffffffffffffffffffffffffffffffffffff8316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28051156112a9576111468282611380565b6108f4611403565b8073ffffffffffffffffffffffffffffffffffffffff163b60000361131a576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216600482015260240161065d565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60606000808473ffffffffffffffffffffffffffffffffffffffff16846040516113aa9190611b60565b600060405180830381855af49150503d80600081146113e5576040519150601f19603f3d011682016040523d82523d6000602084013e6113ea565b606091505b50915091506113fa85838361143b565b95945050505050565b3415610cc8576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060826114505761144b826114ca565b6105d6565b8151158015611474575073ffffffffffffffffffffffffffffffffffffffff84163b155b156114c3576040517f9996b31500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240161065d565b50806105d6565b8051156114da5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006020828403121561151e57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146105d657600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610cca57600080fd5b60008083601f84011261158257600080fd5b50813567ffffffffffffffff81111561159a57600080fd5b6020830191508360208285010111156115b257600080fd5b9250929050565b6000806000806000608086880312156115d157600080fd5b85356115dc8161154e565b945060208601356115ec8161154e565b935060408601359250606086013567ffffffffffffffff81111561160f57600080fd5b61161b88828901611570565b969995985093965092949392505050565b60008060006060848603121561164157600080fd5b833567ffffffffffffffff81111561165857600080fd5b8401610120818703121561166b57600080fd5b95602085013595506040909401359392505050565b60008083601f84011261169257600080fd5b50813567ffffffffffffffff8111156116aa57600080fd5b6020830191508360208260051b85010111156115b257600080fd5b600080600080600080606087890312156116de57600080fd5b863567ffffffffffffffff808211156116f657600080fd5b6117028a838b01611680565b9098509650602089013591508082111561171b57600080fd5b6117278a838b01611680565b9096509450604089013591508082111561174057600080fd5b5061174d89828a01611680565b979a9699509497509295939492505050565b6000806040838503121561177257600080fd5b823561177d8161154e565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156117cd57600080fd5b82356117d88161154e565b9150602083013567ffffffffffffffff808211156117f557600080fd5b818501915085601f83011261180957600080fd5b81358181111561181b5761181b61178b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156118615761186161178b565b8160405282815288602084870101111561187a57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b838110156118b757818101518382015260200161189f565b50506000910152565b60208152600082518060208401526118df81604085016020870161189c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000806000806060858703121561192757600080fd5b84356119328161154e565b935060208501359250604085013567ffffffffffffffff81111561195557600080fd5b61196187828801611570565b95989497509550505050565b60008060008060008060008060a0898b03121561198957600080fd5b88356119948161154e565b975060208901356119a48161154e565b9650604089013567ffffffffffffffff808211156119c157600080fd5b6119cd8c838d01611680565b909850965060608b01359150808211156119e657600080fd5b6119f28c838d01611680565b909650945060808b0135915080821115611a0b57600080fd5b50611a188b828c01611570565b999c989b5096995094979396929594505050565b600060208284031215611a3e57600080fd5b81356105d68161154e565b60008060008060008060a08789031215611a6257600080fd5b8635611a6d8161154e565b95506020870135611a7d8161154e565b94506040870135935060608701359250608087013567ffffffffffffffff811115611aa757600080fd5b61174d89828a01611570565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b1757600080fd5b83018035915067ffffffffffffffff821115611b3257600080fd5b6020019150368190038213156115b257600080fd5b600060208284031215611b5957600080fd5b5051919050565b60008251611b7281846020870161189c565b919091019291505056fea2646970667358221220eafad33e02893ef91eb252cf2e682346bd44a6adbe866b08583f68b75fb391bf64736f6c63430008170033";

type TestAggregatedAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestAggregatedAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestAggregatedAccountFactory__factory extends ContractFactory {
  constructor(...args: TestAggregatedAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestAggregatedAccountFactory> {
    return super.deploy(
      anEntryPoint,
      anAggregator,
      overrides || {}
    ) as Promise<TestAggregatedAccountFactory>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      anEntryPoint,
      anAggregator,
      overrides || {}
    );
  }
  override attach(address: string): TestAggregatedAccountFactory {
    return super.attach(address) as TestAggregatedAccountFactory;
  }
  override connect(signer: Signer): TestAggregatedAccountFactory__factory {
    return super.connect(signer) as TestAggregatedAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestAggregatedAccountFactoryInterface {
    return new utils.Interface(_abi) as TestAggregatedAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAggregatedAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestAggregatedAccountFactory;
  }
}
