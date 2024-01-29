/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleAccountFactory,
  SimpleAccountFactoryInterface,
} from "../../../contracts/samples/SimpleAccountFactory";

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
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract SimpleAccount",
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
        internalType: "contract SimpleAccount",
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
  "0x60a060405234801561001057600080fd5b506040516129e13803806129e183398101604081905261002f91610088565b8060405161003c9061007b565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b0316608052506100b8565b612011806109d083390190565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b6080516108f06100e060003960008181604b01528181610114015261025801526108f06000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe146100465780635fbfb9cf146100965780638cb84e18146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461039d565b6100bc565b61006d6100b736600461039d565b6101ee565b6000806100c984846101ee565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101e8565b60405173ffffffffffffffffffffffffffffffffffffffff8616602482015284907f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052516101b790610390565b6101c2929190610406565b8190604051809103906000f59050801580156101e2573d6000803e3d6000fd5b50925050505b92915050565b60006103578260001b6040518060200161020790610390565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905273ffffffffffffffffffffffffffffffffffffffff871660248201527f000000000000000000000000000000000000000000000000000000000000000090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052905161030093929101610406565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261033c9291602001610474565b6040516020818303038152906040528051906020012061035e565b9392505050565b60006103578383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b610417806104a483390190565b600080604083850312156103b057600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146103d457600080fd5b946020939093013593505050565b60005b838110156103fd5781810151838201526020016103e5565b50506000910152565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526104418160608501602087016103e2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104868184602088016103e2565b83519083019061049a8183602088016103e2565b0194935050505056fe608060405260405161041738038061041783398101604081905261002291610268565b61002c8282610033565b5050610352565b61003c82610092565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561008657610081828261010e565b505050565b61008e610185565b5050565b806001600160a01b03163b6000036100cd57604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b03168460405161012b9190610336565b600060405180830381855af49150503d8060008114610166576040519150601f19603f3d011682016040523d82523d6000602084013e61016b565b606091505b50909250905061017c8583836101a6565b95945050505050565b34156101a45760405163b398979f60e01b815260040160405180910390fd5b565b6060826101bb576101b682610205565b6101fe565b81511580156101d257506001600160a01b0384163b155b156101fb57604051639996b31560e01b81526001600160a01b03851660048201526024016100c4565b50805b9392505050565b8051156102155780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b600052604160045260246000fd5b60005b8381101561025f578181015183820152602001610247565b50506000910152565b6000806040838503121561027b57600080fd5b82516001600160a01b038116811461029257600080fd5b60208401519092506001600160401b03808211156102af57600080fd5b818501915085601f8301126102c357600080fd5b8151818111156102d5576102d561022e565b604051601f8201601f19908116603f011681019083821181831017156102fd576102fd61022e565b8160405282815288602084870101111561031657600080fd5b610327836020830160208801610244565b80955050505050509250929050565b60008251610348818460208701610244565b9190910192915050565b60b7806103606000396000f3fe6080604052600a600c565b005b60186014601a565b605e565b565b600060597f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e808015607c573d6000f35b3d6000fdfea2646970667358221220d7f23a80daebb5531c9e4a18d87e812fca112e5df7e56433218edcc12bbe415d64736f6c63430008170033a2646970667358221220e3f44bb37871347eb593ba1a893209c3c031fc350c31adf261c89a27fdba7b3164736f6c6343000817003360c0604052306080523480156200001557600080fd5b50604051620020113803806200201183398101604081905262000038916200010a565b6001600160a01b03811660a0526200004f62000056565b506200013c565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000a75760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620001075780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6000602082840312156200011d57600080fd5b81516001600160a01b03811681146200013557600080fd5b9392505050565b60805160a051611e70620001a160003960008181610320015281816106ca015281816107780152818161092601528181610b6301528181610baa01528181611031015261121e015260008181610d7501528181610d9e0152610fc20152611e706000f3fe6080604052600436106101125760003560e01c80638da5cb5b116100a5578063bc197c8111610074578063c4d66de811610059578063c4d66de8146103c1578063d087d288146103e1578063f23a6e61146103f657600080fd5b8063bc197c8114610364578063c399ec88146103ac57600080fd5b80638da5cb5b14610269578063ad3cb1cc146102bb578063b0d691fe14610311578063b61d27f61461034457600080fd5b80634d44560d116100e15780634d44560d146101f35780634f1ef2861461021357806352d1902d146102265780638803e4511461024957600080fd5b806301ffc9a71461011e578063150b7a021461015357806347e1da2a146101c95780634a58db19146101eb57600080fd5b3661011957005b600080fd5b34801561012a57600080fd5b5061013e61013936600461179b565b61043c565b60405190151581526020015b60405180910390f35b34801561015f57600080fd5b5061019861016e366004611848565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200161014a565b3480156101d557600080fd5b506101e96101e4366004611900565b610521565b005b6101e96106c8565b3480156101ff57600080fd5b506101e961020e36600461199a565b61076e565b6101e96102213660046119f5565b61081d565b34801561023257600080fd5b5061023b61083c565b60405190815260200161014a565b34801561025557600080fd5b5061023b610264366004611ad7565b61086b565b34801561027557600080fd5b506000546102969073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161014a565b3480156102c757600080fd5b506103046040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b60405161014a9190611b4f565b34801561031d57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610296565b34801561035057600080fd5b506101e961035f366004611ba0565b610891565b34801561037057600080fd5b5061019861037f366004611bfc565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b3480156103b857600080fd5b5061023b6108e0565b3480156103cd57600080fd5b506101e96103dc366004611cbb565b610997565b3480156103ed57600080fd5b5061023b610b16565b34801561040257600080fd5b50610198610411366004611cd8565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806104cf57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061051b57507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b610529610b92565b848114801561053f575082158061053f57508281145b6105aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60008390036106565760005b85811015610650576106488787838181106105d3576105d3611d42565b90506020020160208101906105e89190611cbb565b60008585858181106105fc576105fc611d42565b905060200281019061060e9190611d71565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c5592505050565b6001016105b6565b506106c0565b60005b858110156106be576106b687878381811061067657610676611d42565b905060200201602081019061068b9190611cbb565b86868481811061069d5761069d611d42565b905060200201358585858181106105fc576105fc611d42565b600101610659565b505b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561075357600080fd5b505af1158015610767573d6000803e3d6000fd5b5050505050565b610776610cd2565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561080957600080fd5b505af11580156106c0573d6000803e3d6000fd5b610825610d5d565b61082e82610e61565b6108388282610e6c565b5050565b6000610846610faa565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6000610875611019565b61087f84846110b8565b905061088a82611169565b9392505050565b610899610b92565b6108da848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c5592505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa15801561096e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109929190611dd6565b905090565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156109e25750825b905060008267ffffffffffffffff1660011480156109ff5750303b155b905081158015610a0d575080155b15610a44576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610aa55784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610aae866111d4565b83156106c05784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610951565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610bed575060005473ffffffffffffffffffffffffffffffffffffffff1633145b610c53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016105a1565b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610c7e9190611def565b60006040518083038185875af1925050503d8060008114610cbb576040519150601f19603f3d011682016040523d82523d6000602084013e610cc0565b606091505b50915091508161076757805160208201fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331480610cf757503330145b610c53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016105a1565b3073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480610e2a57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610e117f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610c53576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e69610cd2565b50565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610ef1575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610eee91810190611dd6565b60015b610f3f576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024016105a1565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114610f9b576040517faa1d49a4000000000000000000000000000000000000000000000000000000008152600481018290526024016105a1565b610fa58383611268565b505050565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610c53576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610c53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016105a1565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c8120611133816110f9610120870187611d71565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506112cb92505050565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461115f57600191505061051b565b5060009392505050565b8015610e695760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610767576040519150601f19603f3d011682016040523d82523d6000602084013e610767565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116918217835560405191927f0000000000000000000000000000000000000000000000000000000000000000909116917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de9190a350565b611271826112f5565b60405173ffffffffffffffffffffffffffffffffffffffff8316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28051156112c357610fa582826113c4565b610838611447565b6000806000806112db868661147f565b9250925092506112eb82826114cc565b5090949350505050565b8073ffffffffffffffffffffffffffffffffffffffff163b60000361135e576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024016105a1565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60606000808473ffffffffffffffffffffffffffffffffffffffff16846040516113ee9190611def565b600060405180830381855af49150503d8060008114611429576040519150601f19603f3d011682016040523d82523d6000602084013e61142e565b606091505b509150915061143e8583836115d0565b95945050505050565b3415610c53576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080600083516041036114b95760208401516040850151606086015160001a6114ab8882858561165f565b9550955095505050506114c5565b50508151600091506002905b9250925092565b60008260038111156114e0576114e0611e0b565b036114e9575050565b60018260038111156114fd576114fd611e0b565b03611534576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600282600381111561154857611548611e0b565b03611582576040517ffce698f7000000000000000000000000000000000000000000000000000000008152600481018290526024016105a1565b600382600381111561159657611596611e0b565b03610838576040517fd78bce0c000000000000000000000000000000000000000000000000000000008152600481018290526024016105a1565b6060826115e5576115e082611759565b61088a565b8151158015611609575073ffffffffffffffffffffffffffffffffffffffff84163b155b15611658576040517f9996b31500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526024016105a1565b508061088a565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561169a575060009150600390508261174f565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa1580156116ee573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166117455750600092506001915082905061174f565b9250600091508190505b9450945094915050565b8051156117695780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000602082840312156117ad57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461088a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610e6957600080fd5b60008083601f84011261181157600080fd5b50813567ffffffffffffffff81111561182957600080fd5b60208301915083602082850101111561184157600080fd5b9250929050565b60008060008060006080868803121561186057600080fd5b853561186b816117dd565b9450602086013561187b816117dd565b935060408601359250606086013567ffffffffffffffff81111561189e57600080fd5b6118aa888289016117ff565b969995985093965092949392505050565b60008083601f8401126118cd57600080fd5b50813567ffffffffffffffff8111156118e557600080fd5b6020830191508360208260051b850101111561184157600080fd5b6000806000806000806060878903121561191957600080fd5b863567ffffffffffffffff8082111561193157600080fd5b61193d8a838b016118bb565b9098509650602089013591508082111561195657600080fd5b6119628a838b016118bb565b9096509450604089013591508082111561197b57600080fd5b5061198889828a016118bb565b979a9699509497509295939492505050565b600080604083850312156119ad57600080fd5b82356119b8816117dd565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060408385031215611a0857600080fd5b8235611a13816117dd565b9150602083013567ffffffffffffffff80821115611a3057600080fd5b818501915085601f830112611a4457600080fd5b813581811115611a5657611a566119c6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611a9c57611a9c6119c6565b81604052828152886020848701011115611ab557600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b600080600060608486031215611aec57600080fd5b833567ffffffffffffffff811115611b0357600080fd5b84016101408187031215611b1657600080fd5b95602085013595506040909401359392505050565b60005b83811015611b46578181015183820152602001611b2e565b50506000910152565b6020815260008251806020840152611b6e816040850160208701611b2b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008060008060608587031215611bb657600080fd5b8435611bc1816117dd565b935060208501359250604085013567ffffffffffffffff811115611be457600080fd5b611bf0878288016117ff565b95989497509550505050565b60008060008060008060008060a0898b031215611c1857600080fd5b8835611c23816117dd565b97506020890135611c33816117dd565b9650604089013567ffffffffffffffff80821115611c5057600080fd5b611c5c8c838d016118bb565b909850965060608b0135915080821115611c7557600080fd5b611c818c838d016118bb565b909650945060808b0135915080821115611c9a57600080fd5b50611ca78b828c016117ff565b999c989b5096995094979396929594505050565b600060208284031215611ccd57600080fd5b813561088a816117dd565b60008060008060008060a08789031215611cf157600080fd5b8635611cfc816117dd565b95506020870135611d0c816117dd565b94506040870135935060608701359250608087013567ffffffffffffffff811115611d3657600080fd5b61198889828a016117ff565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611da657600080fd5b83018035915067ffffffffffffffff821115611dc157600080fd5b60200191503681900382131561184157600080fd5b600060208284031215611de857600080fd5b5051919050565b60008251611e01818460208701611b2b565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea26469706673582212209df8f7d0bfaf761eea5828d4c7ad42192f530a2cd6038a56319123433859875664736f6c63430008170033";

type SimpleAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccountFactory__factory extends ContractFactory {
  constructor(...args: SimpleAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccountFactory> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<SimpleAccountFactory>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccountFactory {
    return super.attach(address) as SimpleAccountFactory;
  }
  override connect(signer: Signer): SimpleAccountFactory__factory {
    return super.connect(signer) as SimpleAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountFactoryInterface {
    return new utils.Interface(_abi) as SimpleAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleAccountFactory;
  }
}
