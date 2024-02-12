/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BLSAccountFactory,
  BLSAccountFactoryInterface,
} from "../../../../contracts/samples/bls/BLSAccountFactory";

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
        internalType: "contract BLSAccount",
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
        internalType: "contract BLSAccount",
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
  "0x60a060405234801561001057600080fd5b50604051612e7f380380612e7f83398101604081905261002f916100aa565b818160405161003d90610085565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610070573d6000803e3d6000fd5b506001600160a01b0316608052506100e49050565b6122fa80610b8583390190565b6001600160a01b03811681146100a757600080fd5b50565b600080604083850312156100bd57600080fd5b82516100c881610092565b60208401519092506100d981610092565b809150509250929050565b608051610a7961010c60003960008181604b0152818161019b01526102b20152610a796000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe1461004657806319c2a1b214610096578063de3398dd146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a4366004610404565b6100bc565b61006d6100b7366004610466565b610283565b6000816100ca6080366104f1565b8114610136576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67207075626b6579206f666673657400000000000000000000000000604482015260640160405180910390fd5b600061016b85856004806020026040519081016040528092919082600460200280828437600092019190915250610283915050565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156101955750915061027d9050565b8560001b7f0000000000000000000000000000000000000000000000000000000000000000866040516024016101cb919061052b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f36000000000000000000000000000000000000000000000000000000001790525161024b906103f7565b61025692919061055e565b8190604051809103906000f5905080158015610276573d6000803e3d6000fd5b5093505050505b92915050565b60006103be8360001b6040518060200161029c906103f7565b6020820181038252601f19601f820116604052507f0000000000000000000000000000000000000000000000000000000000000000856040516024016102e291906105cc565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f360000000000000000000000000000000000000000000000000000000017905290516103679392910161055e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526103a392916020016105fd565b604051602081830303815290604052805190602001206103c5565b9392505050565b60006103be8383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6104178061062d83390190565b60008060a0838503121561041757600080fd5b823591508360a08401111561042b57600080fd5b50926020919091019150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060a0838503121561047957600080fd5b82359150602084603f85011261048e57600080fd5b6040516080810181811067ffffffffffffffff821117156104b1576104b1610437565b6040528060a08601878111156104c657600080fd5b602087015b818110156104e257803583529184019184016104cb565b50505080925050509250929050565b8181038181111561027d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60808181019083833792915050565b60005b8381101561055557818101518382015260200161053d565b50506000910152565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000825180604084015261059981606085016020870161053a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b60808101818360005b60048110156105f45781518352602092830192909101906001016105d5565b50505092915050565b6000835161060f81846020880161053a565b83519083019061062381836020880161053a565b0194935050505056fe608060405260405161041738038061041783398101604081905261002291610268565b61002c8282610033565b5050610352565b61003c82610092565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561008657610081828261010e565b505050565b61008e610185565b5050565b806001600160a01b03163b6000036100cd57604051634c9c8ce360e01b81526001600160a01b03821660048201526024015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060600080846001600160a01b03168460405161012b9190610336565b600060405180830381855af49150503d8060008114610166576040519150601f19603f3d011682016040523d82523d6000602084013e61016b565b606091505b50909250905061017c8583836101a6565b95945050505050565b34156101a45760405163b398979f60e01b815260040160405180910390fd5b565b6060826101bb576101b682610205565b6101fe565b81511580156101d257506001600160a01b0384163b155b156101fb57604051639996b31560e01b81526001600160a01b03851660048201526024016100c4565b50805b9392505050565b8051156102155780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b634e487b7160e01b600052604160045260246000fd5b60005b8381101561025f578181015183820152602001610247565b50506000910152565b6000806040838503121561027b57600080fd5b82516001600160a01b038116811461029257600080fd5b60208401519092506001600160401b03808211156102af57600080fd5b818501915085601f8301126102c357600080fd5b8151818111156102d5576102d561022e565b604051601f8201601f19908116603f011681019083821181831017156102fd576102fd61022e565b8160405282815288602084870101111561031657600080fd5b610327836020830160208801610244565b80955050505050509250929050565b60008251610348818460208701610244565b9190910192915050565b60b7806103606000396000f3fe6080604052600a600c565b005b60186014601a565b605e565b565b600060597f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e808015607c573d6000f35b3d6000fdfea2646970667358221220d7f23a80daebb5531c9e4a18d87e812fca112e5df7e56433218edcc12bbe415d64736f6c63430008170033a2646970667358221220c56aa0628025bceaaa41d953e5e9f3cd10e3280eed3f38e6cde235c19a22f37f64736f6c6343000817003360e0604052306080523480156200001557600080fd5b50604051620022fa380380620022fa83398101604081905262000038916200012e565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200016d565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615620000b55760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b0390811614620001155780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6001600160a01b03811681146200011557600080fd5b600080604083850312156200014257600080fd5b82516200014f8162000118565b6020840151909250620001628162000118565b809150509250929050565b60805160a05160c051612117620001e36000396000818161028701526110850152600081816103d0015281816107f6015281816108a401528181610a2c01528181610c6901528181610ee001528181611140015261156901526000818161127e015281816112a701526114c801526121176000f3fe60806040526004361061016e5760003560e01c80638da5cb5b116100cb578063c399ec881161007f578063e02afbae11610059578063e02afbae146104a6578063ee472f36146104c8578063f23a6e61146104e857600080fd5b8063c399ec881461045c578063c4d66de814610471578063d087d2881461049157600080fd5b8063b0d691fe116100b0578063b0d691fe146103c1578063b61d27f6146103f4578063bc197c811461041457600080fd5b80638da5cb5b1461033e578063ad3cb1cc1461036b57600080fd5b806347e1da2a116101225780634d44560d116101075780634d44560d146102f65780634f1ef2861461031657806352d1902d1461032957600080fd5b806347e1da2a146102ce5780634a58db19146102ee57600080fd5b806318fc5c441161015357806318fc5c441461022557806319822f7c14610247578063245a7bfc1461027557600080fd5b806301ffc9a71461017a578063150b7a02146101af57600080fd5b3661017557005b600080fd5b34801561018657600080fd5b5061019a6101953660046118e2565b61052e565b60405190151581526020015b60405180910390f35b3480156101bb57600080fd5b506101f46101ca36600461198f565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101a6565b34801561023157600080fd5b50610245610240366004611a80565b610613565b005b34801561025357600080fd5b50610267610262366004611afe565b610627565b6040519081526020016101a6565b34801561028157600080fd5b506102a97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a6565b3480156102da57600080fd5b506102456102e9366004611b97565b61064d565b6102456107f4565b34801561030257600080fd5b50610245610311366004611c31565b61089a565b610245610324366004611c5d565b610949565b34801561033557600080fd5b50610267610968565b34801561034a57600080fd5b506000546102a99073ffffffffffffffffffffffffffffffffffffffff1681565b34801561037757600080fd5b506103b46040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b6040516101a69190611d47565b3480156103cd57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102a9565b34801561040057600080fd5b5061024561040f366004611d98565b610997565b34801561042057600080fd5b506101f461042f366004611df4565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561046857600080fd5b506102676109e6565b34801561047d57600080fd5b5061024561048c366004611eb3565b610a9d565b34801561049d57600080fd5b50610267610c1c565b3480156104b257600080fd5b506104bb610c98565b6040516101a69190611ef3565b3480156104d457600080fd5b506102456104e3366004611a80565b610cd3565b3480156104f457600080fd5b506101f4610503366004611f01565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806105c157507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061060d57507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b61061b610df4565b61062481610e81565b50565b6000610631610ec8565b61063b8484610f67565b9050610646826110bd565b9392505050565b610655611128565b848114801561066b575082158061066b57508281145b6106d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60008390036107825760005b8581101561077c576107748787838181106106ff576106ff611f6b565b90506020020160208101906107149190611eb3565b600085858581811061072857610728611f6b565b905060200281019061073a9190611f9a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111e992505050565b6001016106e2565b506107ec565b60005b858110156107ea576107e28787838181106107a2576107a2611f6b565b90506020020160208101906107b79190611eb3565b8686848181106107c9576107c9611f6b565b9050602002013585858581811061072857610728611f6b565b600101610785565b505b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b15801561087f57600080fd5b505af1158015610893573d6000803e3d6000fd5b5050505050565b6108a2610df4565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561093557600080fd5b505af11580156107ec573d6000803e3d6000fd5b610951611266565b61095a8261136a565b6109648282611372565b5050565b60006109726114b0565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b61099f611128565b6109e0848484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506111e992505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610a74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a989190611fff565b905090565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610ae85750825b905060008267ffffffffffffffff166001148015610b055750303b155b905081158015610b13575080155b15610b4a576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610bab5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610bb48661151f565b83156107ec5784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a1505050505050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610a57565b610ca0611871565b6040805160808101918290529060019060049082845b815481526020019060010190808311610cb6575050505050905090565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610d1e5750825b905060008267ffffffffffffffff166001148015610d3b5750303b155b905081158015610d49575080155b15610d80576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610de15784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b610deb600061151f565b610bb486610e81565b60005473ffffffffffffffffffffffffffffffffffffffff16331480610e1957503330145b610e7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016106cd565b565b7f42e4c4ce1432650f17e41c4ea77ed12c0ab20b229d3ffd84a2ebc9f8abb25a83600182604051610eb3929190612018565b60405180910390a1610964600182600461188f565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016106cd565b6000610f766040840184611f9a565b159050611064576000610f87610c98565b604051602001610f979190611ef3565b60405160208183030381529060405280519060200120905080848060400190610fc09190611f9a565b6080610fcf6040890189611f9a565b610fda929150612051565b610fe592829061208b565b604051610ff39291906120b5565b604051809103902014611062576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f77726f6e67207075626b6579000000000000000000000000000000000000000060448201526064016106cd565b505b6040805160608101825273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001680825260006020830181905291909201529392505050565b80156106245760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610893576040519150601f19603f3d011682016040523d82523d6000602084013e610893565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480611183575060005473ffffffffffffffffffffffffffffffffffffffff1633145b610e7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016106cd565b6000808473ffffffffffffffffffffffffffffffffffffffff16848460405161121291906120c5565b60006040518083038185875af1925050503d806000811461124f576040519150601f19603f3d011682016040523d82523d6000602084013e611254565b606091505b50915091508161089357805160208201fd5b3073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061133357507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661131a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610e7f576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610624610df4565b8173ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156113f7575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526113f491810190611fff565b60015b611445576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff831660048201526024016106cd565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146114a1576040517faa1d49a4000000000000000000000000000000000000000000000000000000008152600481018290526024016106cd565b6114ab83836115b3565b505050565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e7f576040517fe07c8dba00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116918217835560405191927f0000000000000000000000000000000000000000000000000000000000000000909116917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de9190a350565b6115bc82611616565b60405173ffffffffffffffffffffffffffffffffffffffff8316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561160e576114ab82826116e5565b610964611768565b8073ffffffffffffffffffffffffffffffffffffffff163b60000361167f576040517f4c9c8ce300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024016106cd565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60606000808473ffffffffffffffffffffffffffffffffffffffff168460405161170f91906120c5565b600060405180830381855af49150503d806000811461174a576040519150601f19603f3d011682016040523d82523d6000602084013e61174f565b606091505b509150915061175f8583836117a0565b95945050505050565b3415610e7f576040517fb398979f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060826117b5576117b08261182f565b610646565b81511580156117d9575073ffffffffffffffffffffffffffffffffffffffff84163b155b15611828576040517f9996b31500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526024016106cd565b5080610646565b80511561183f5780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180608001604052806004906020820280368337509192915050565b82600481019282156118bd579160200282015b828111156118bd5782518255916020019190600101906118a2565b506118c99291506118cd565b5090565b5b808211156118c957600081556001016118ce565b6000602082840312156118f457600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461064657600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461062457600080fd5b60008083601f84011261195857600080fd5b50813567ffffffffffffffff81111561197057600080fd5b60208301915083602082850101111561198857600080fd5b9250929050565b6000806000806000608086880312156119a757600080fd5b85356119b281611924565b945060208601356119c281611924565b935060408601359250606086013567ffffffffffffffff8111156119e557600080fd5b6119f188828901611946565b969995985093965092949392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a7857611a78611a02565b604052919050565b600060808284031215611a9257600080fd5b82601f830112611aa157600080fd5b6040516080810181811067ffffffffffffffff82111715611ac457611ac4611a02565b604052806080840185811115611ad957600080fd5b845b81811015611af3578035835260209283019201611adb565b509195945050505050565b600080600060608486031215611b1357600080fd5b833567ffffffffffffffff811115611b2a57600080fd5b84016101208187031215611b3d57600080fd5b95602085013595506040909401359392505050565b60008083601f840112611b6457600080fd5b50813567ffffffffffffffff811115611b7c57600080fd5b6020830191508360208260051b850101111561198857600080fd5b60008060008060008060608789031215611bb057600080fd5b863567ffffffffffffffff80821115611bc857600080fd5b611bd48a838b01611b52565b90985096506020890135915080821115611bed57600080fd5b611bf98a838b01611b52565b90965094506040890135915080821115611c1257600080fd5b50611c1f89828a01611b52565b979a9699509497509295939492505050565b60008060408385031215611c4457600080fd5b8235611c4f81611924565b946020939093013593505050565b60008060408385031215611c7057600080fd5b8235611c7b81611924565b915060208381013567ffffffffffffffff80821115611c9957600080fd5b818601915086601f830112611cad57600080fd5b813581811115611cbf57611cbf611a02565b611cef847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611a31565b91508082528784828501011115611d0557600080fd5b80848401858401376000848284010152508093505050509250929050565b60005b83811015611d3e578181015183820152602001611d26565b50506000910152565b6020815260008251806020840152611d66816040850160208701611d23565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008060008060608587031215611dae57600080fd5b8435611db981611924565b935060208501359250604085013567ffffffffffffffff811115611ddc57600080fd5b611de887828801611946565b95989497509550505050565b60008060008060008060008060a0898b031215611e1057600080fd5b8835611e1b81611924565b97506020890135611e2b81611924565b9650604089013567ffffffffffffffff80821115611e4857600080fd5b611e548c838d01611b52565b909850965060608b0135915080821115611e6d57600080fd5b611e798c838d01611b52565b909650945060808b0135915080821115611e9257600080fd5b50611e9f8b828c01611946565b999c989b5096995094979396929594505050565b600060208284031215611ec557600080fd5b813561064681611924565b8060005b60048110156109e0578151845260209384019390910190600101611ed4565b6080810161060d8284611ed0565b60008060008060008060a08789031215611f1a57600080fd5b8635611f2581611924565b95506020870135611f3581611924565b94506040870135935060608701359250608087013567ffffffffffffffff811115611f5f57600080fd5b611c1f89828a01611946565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fcf57600080fd5b83018035915067ffffffffffffffff821115611fea57600080fd5b60200191503681900382131561198857600080fd5b60006020828403121561201157600080fd5b5051919050565b6101008101818460005b6004811015612041578154835260209092019160019182019101612022565b5050506106466080830184611ed0565b8181038181111561060d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000808585111561209b57600080fd5b838611156120a857600080fd5b5050820193919092039150565b8183823760009101908152919050565b600082516120d7818460208701611d23565b919091019291505056fea2646970667358221220c477b3737eaa5179b9fd5b98728860c94c98ae7b6aebf1bad6c336620817a79b64736f6c63430008170033";

type BLSAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BLSAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BLSAccountFactory__factory extends ContractFactory {
  constructor(...args: BLSAccountFactoryConstructorParams) {
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
  ): Promise<BLSAccountFactory> {
    return super.deploy(
      entryPoint,
      aggregator,
      overrides || {}
    ) as Promise<BLSAccountFactory>;
  }
  override getDeployTransaction(
    entryPoint: PromiseOrValue<string>,
    aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(entryPoint, aggregator, overrides || {});
  }
  override attach(address: string): BLSAccountFactory {
    return super.attach(address) as BLSAccountFactory;
  }
  override connect(signer: Signer): BLSAccountFactory__factory {
    return super.connect(signer) as BLSAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLSAccountFactoryInterface {
    return new utils.Interface(_abi) as BLSAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BLSAccountFactory {
    return new Contract(address, _abi, signerOrProvider) as BLSAccountFactory;
  }
}
