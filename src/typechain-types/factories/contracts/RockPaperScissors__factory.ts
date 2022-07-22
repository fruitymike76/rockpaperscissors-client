/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RockPaperScissors,
  RockPaperScissorsInterface,
  GameContext,
} from "../../contracts/RockPaperScissors";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "waitingForOpponentTimeout",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "moveTimeout",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "scoreThreshold",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "roundThreshold",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "ownerTipRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "referralTipRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimTimeout",
            type: "uint256",
          },
        ],
        internalType: "struct GameContext.ContextData",
        name: "context",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newIndex",
        type: "uint256",
      },
    ],
    name: "ContextUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum RockPaperScissors.GameState",
        name: "state",
        type: "uint8",
      },
    ],
    name: "GameUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "ref",
        type: "address",
      },
    ],
    name: "NewReferral",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "round",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum RockPaperScissors.Move",
        name: "challengerMove",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum RockPaperScissors.Move",
        name: "opponentMove",
        type: "uint8",
      },
    ],
    name: "ValidatedMoves",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "adr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "abortGame",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "password",
        type: "string",
      },
    ],
    name: "acceptGame",
    outputs: [],
    stateMutability: "payable",
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
    name: "balances",
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
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "claimPot",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentContext",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "waitingForOpponentTimeout",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "moveTimeout",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "scoreThreshold",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "roundThreshold",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "ownerTipRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "referralTipRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimTimeout",
            type: "uint256",
          },
        ],
        internalType: "struct GameContext.ContextData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "getGame",
    outputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "adr",
                    type: "address",
                  },
                  {
                    internalType: "uint8",
                    name: "score",
                    type: "uint8",
                  },
                  {
                    internalType: "bytes32",
                    name: "hashedMove",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes32",
                    name: "move",
                    type: "bytes32",
                  },
                ],
                internalType: "struct RockPaperScissors.Player",
                name: "challenger",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "adr",
                    type: "address",
                  },
                  {
                    internalType: "uint8",
                    name: "score",
                    type: "uint8",
                  },
                  {
                    internalType: "bytes32",
                    name: "hashedMove",
                    type: "bytes32",
                  },
                  {
                    internalType: "bytes32",
                    name: "move",
                    type: "bytes32",
                  },
                ],
                internalType: "struct RockPaperScissors.Player",
                name: "opponent",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "pot",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updateTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "acceptBlockNumber",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "validateBlockNumber",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "passwordHash",
                type: "bytes32",
              },
              {
                internalType: "enum RockPaperScissors.GameState",
                name: "state",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "round",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "referral",
                type: "address",
              },
              {
                internalType: "address",
                name: "winner",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "contextIndex",
                type: "uint256",
              },
            ],
            internalType: "struct RockPaperScissors.Game",
            name: "game",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "waitingForOpponentTimeout",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "moveTimeout",
                type: "uint256",
              },
              {
                internalType: "uint8",
                name: "scoreThreshold",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "roundThreshold",
                type: "uint8",
              },
              {
                internalType: "uint256",
                name: "ownerTipRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "referralTipRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "claimTimeout",
                type: "uint256",
              },
            ],
            internalType: "struct GameContext.ContextData",
            name: "context",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct RockPaperScissors.GameWrapper",
        name: "",
        type: "tuple",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "referrals",
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
    inputs: [],
    name: "registerReferral",
    outputs: [],
    stateMutability: "payable",
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
        name: "referral",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "passwordHash",
        type: "bytes32",
      },
    ],
    name: "startNewGame",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "hashedMove",
        type: "bytes32",
      },
    ],
    name: "submitHashedMove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "move",
        type: "bytes32",
      },
    ],
    name: "submitMove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
    ],
    name: "surrenderGame",
    outputs: [],
    stateMutability: "payable",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "waitingForOpponentTimeout",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "moveTimeout",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "scoreThreshold",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "roundThreshold",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "ownerTipRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "referralTipRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimTimeout",
            type: "uint256",
          },
        ],
        internalType: "struct GameContext.ContextData",
        name: "context",
        type: "tuple",
      },
    ],
    name: "updateContext",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620022b8380380620022b883398101604081905262000034916200011f565b806200004033620000b6565b6003805460009081526002602081815260409283902085518155908501516001820155918401519082018054606086015160ff9081166101000261ffff1990921693169290921791909117905560808301519181019190915560a0820151600482015560c09091015160059091015550620001c4565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b805160ff811681146200011a57600080fd5b919050565b600060e082840312156200013257600080fd5b60405160e081016001600160401b03811182821017156200016357634e487b7160e01b600052604160045260246000fd5b80604052508251815260208301516020820152620001846040840162000108565b6040820152620001976060840162000108565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6120e480620001d46000396000f3fe60806040526004361061010e5760003560e01c80639b121ce6116100a5578063c1b6944c11610074578063e850497a11610059578063e850497a146102ae578063f2fde38b146102b6578063fa2e8052146102d657600080fd5b8063c1b6944c14610293578063d7a4de3d1461029b57600080fd5b80639b121ce6146102005780639ca423b3146102135780639e231e2d14610253578063a2f77bcc1461026657600080fd5b8063715018a6116100e1578063715018a61461018e5780638013ff93146101a35780638da5cb5b146101c557806390de2720146101ed57600080fd5b80630ff943541461011357806327e235e314610128578063583bbb2b1461016857806366a47f631461017b575b600080fd5b610126610121366004611c14565b6102e9565b005b34801561013457600080fd5b50610155610143366004611c4d565b60006020819052908152604090205481565b6040519081526020015b60405180910390f35b610126610176366004611c14565b610481565b610126610189366004611c68565b610650565b34801561019a57600080fd5b50610126610853565b3480156101af57600080fd5b506101b86108b9565b60405161015f9190611c81565b3480156101d157600080fd5b506001546040516001600160a01b03909116815260200161015f565b6101266101fb366004611c68565b61096c565b61012661020e366004611cd4565b610aae565b34801561021f57600080fd5b5061024361022e366004611c4d565b60046020526000908152604090205460ff1681565b604051901515815260200161015f565b610126610261366004611c68565b610b75565b34801561027257600080fd5b50610286610281366004611c68565b610cc9565b60405161015f9190611d2d565b610126610e9d565b6101266102a9366004611e91565b610f3f565b610126611157565b3480156102c257600080fd5b506101266102d1366004611c4d565b61122f565b6101556102e4366004611f0d565b611311565b6000828152600660209081526040808320600d81015484526002928390529220849291600b83015460ff16600381111561032557610325611cec565b148015610345575042816001015483600701546103429190611f4d565b10155b6103835760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b60448201526064015b60405180910390fd5b81546001600160a01b03163314806103a7575060038201546001600160a01b031633145b6103dd5760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161037a565b60006103e883611447565b6002810154909150156104295760405162461bcd60e51b815260206004820152600960248201526814d55093525515115160ba1b604482015260640161037a565b60008681526006602052604081209061044182611447565b600281018890559050600061045583611470565b600281015490915060000361046c57505050610479565b61047589611494565b5050505b505050505050565b6000828152600660209081526040808320600d810154845260029092529091208391906001600b83015460ff1660038111156104bf576104bf611cec565b1480156104df575042816001015483600701546104dc9190611f4d565b10155b6105185760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161037a565b81546001600160a01b031633148061053c575060038201546001600160a01b031633145b6105725760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161037a565b600061057d83611447565b6001810154909150156105be5760405162461bcd60e51b815260206004820152600960248201526814d55093525515115160ba1b604482015260640161037a565b6000868152600660205260408120906105d682611447565b60018101889055905060006105ea83611470565b600181015490915060000361060157505050610479565b600b8301805460ff191660029081179091554260078501555b6040518a907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a3505050505050505050565b6000818152600660209081526040808320600d810154845260029092529091206005810154600783015484939291429161068a9190611f4d565b10156106d95781546001600160a01b03166106d45760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161037a565b6107c2565b6001600b83015460ff1660038111156106f4576106f4611cec565b148061071857506002600b83015460ff16600381111561071657610716611cec565b145b8015610736575042816001015483600701546107349190611f4d565b105b61076f5760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161037a565b600061077a83611696565b80549091506001600160a01b031633146107c05760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161037a565b505b6000848152600660205260409020426007820155600b8101805460ff19166003179055600c81018054336001600160a01b03199091168117909155610808908290611735565b600b81015460ff16600381111561082157610821611cec565b60405186907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a35050505050565b6001546001600160a01b031633146108ad5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161037a565b6108b76000611876565b565b6108ff6040518060e001604052806000815260200160008152602001600060ff168152602001600060ff1681526020016000815260200160008152602001600081525090565b5060038054600090815260026020818152604092839020835160e081018552815481526001820154928101929092529182015460ff8082169483019490945261010090049092166060830152918201546080820152600482015460a082015260059091015460c082015290565b600081815260066020526040902081906001600b82015460ff16600381111561099757610997611cec565b14806109bb57506002600b82015460ff1660038111156109b9576109b9611cec565b145b6109f45760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161037a565b80546001600160a01b0316331480610a18575060038101546001600160a01b031633145b610a4e5760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161037a565b600083815260066020526040812090610a6682611470565b8054909150610a7f9083906001600160a01b0316611735565b8054610a959083906001600160a01b03166118c8565b600b82015460ff16600381111561082157610821611cec565b6001546001600160a01b03163314610b085760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161037a565b60038054906000610b1883611f65565b909155505060035460009081526002602052604090208190610b3a8282611f91565b50506003546040519081527fc6a04e59094de274366f3ecee930ad5696298e207c05a878af5bdfd3df9dc54b9060200160405180910390a150565b600081815260066020526040902080548291906001600160a01b031633148015610baa575060038101546001600160a01b0316155b8015610bce57506000600b82015460ff166003811115610bcc57610bcc611cec565b145b610c075760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161037a565b6000838152600660208190526040909120600b8101805460ff191660031790554260078201559081015415610c7f57600681018054600091829055825460405191926001600160a01b039091169183156108fc0291849190818181858888f19350505050158015610c7c573d6000803e3d6000fd5b50505b600b81015460ff166003811115610c9857610c98611cec565b60405185907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a350505050565b610cd1611b13565b600082815260066020818152604080842081516102008101835281546001600160a01b03808216610180840190815260ff600160a01b9384900481166101a086015260018601546101c086015260028601546101e08601529084528551608081810188526003808801549485168352949093048216818901526004860154818801526005860154606080830191909152978501529684015494830194909452600783015494820194909452600882015492810192909252600981015460a0830152600a81015460c0830152600b8101549193909260e085019290911690811115610dbd57610dbd611cec565b6003811115610dce57610dce611cec565b8152600b82015460ff61010080830482166020808601919091526001600160a01b03620100009094048416604080870191909152600c870154909416606080870191909152600d909601546080958601526101608701516000908152600280835290859020855160e0810187528154815260018201548185015291810154808616838801529390930490931683870152600382015494830194909452600481015460a08301526005015460c0820152815193840182529383529082019290925242918101919091529392505050565b3360009081526004602052604090205460ff1615610efd5760405162461bcd60e51b815260206004820152600a60248201527f5245474953544552454400000000000000000000000000000000000000000000604482015260640161037a565b33600081815260046020526040808220805460ff19166001179055517f67e6399acf49956ebe97f4074f1c674c1c02725966606eb359cdaab2743ebd399190a2565b6000838152600660209081526040808320600d8101548452600290925290912081548592859285926001600160a01b031615801590610f89575060038201546001600160a01b0316155b8015610fad57506000600b83015460ff166003811115610fab57610fab611cec565b145b8015610fc95750805460078301544291610fc691611f4d565b10155b6110025760405162461bcd60e51b815260206004820152600a602482015269554e454c494749424c4560b01b604482015260640161037a565b8154336001600160a01b03909116036110475760405162461bcd60e51b81526020600482015260076024820152664144445245535360c81b604482015260640161037a565b611051848461190d565b82600a0154146110a35760405162461bcd60e51b815260206004820152600860248201527f50415353574f5244000000000000000000000000000000000000000000000000604482015260640161037a565b348260060154146110f65760405162461bcd60e51b815260206004820152600560248201527f56414c5545000000000000000000000000000000000000000000000000000000604482015260640161037a565b6000888152600660208190526040822090810180549192349261111a908490611f4d565b9091555050426007820155600b81018054600160ff1990911681179091554360088301556003820180546001600160a01b0319163317905561061a565b336000908152602081905260409020546111b55760405162461bcd60e51b815260040161037a9060208082526004908201527f5a45524f00000000000000000000000000000000000000000000000000000000604082015260600190565b33600081815260208190526040808220805490839055905190929183156108fc02918491818181858888f193505050501580156111f6573d6000803e3d6000fd5b5060405181815233907f7a091cb75d8d5f5e7ecba428a87e35adb231681f6ee35c9fc6ce90966401ff5b9060200160405180910390a250565b6001546001600160a01b031633146112895760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161037a565b6001600160a01b0381166113055760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161037a565b61130e81611876565b50565b6001600160a01b038216600090815260046020526040812054839060ff168061134157506001600160a01b038116155b61138d5760405162461bcd60e51b815260206004820152600860248201527f524546455252414c000000000000000000000000000000000000000000000000604482015260640161037a565b600061139761194d565b60008181526006602081905260408220600354600d8201553491810191909155426007820155600a8101879055600b810180546001600160a01b038a1662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff90911617905580546001600160a01b0319163317815591925060405183907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a350949350505050565b6003810154600090336001600160a01b0390911603611467575060030190565b5090565b919050565b6003810154600090336001600160a01b039091160361148d575090565b5060030190565b6000818152600660209081526040808320600d81015484526002909252822090916114c160038401611967565b905060006114ce84611967565b905060006114dd8584846119e2565b9050857f4dc769b42f8bdeb226325fa9dd9828bbff51b0974ccf8426e7942988ad70cc5e86600b0160019054906101000a900460ff16848660405161152493929190611ff7565b60405180910390a2436009860155600b85018054610100900460ff1690600161154c83612027565b825460ff9182166101009390930a92830291909202199091161790555080546001600160a01b0316156115af578054600160a01b900460ff1681601461159183612027565b91906101000a81548160ff021916908360ff160217905550506115bb565b6115b885611acf565b90505b8054600285015460ff908116600160a01b9092041614806115f457506002840154600b8601546101009182900460ff9081169290910416145b1561161457805461160f9086906001600160a01b03166118c8565b61164a565b6000600486018190556005860181905560018087018290556002870191909155600b8601805460ff191690911790554260078601555b600b85015460ff16600381111561166357611663611cec565b60405187907f543420551063d8f91eff6de94de597e59a20bfdc22d0c6c0fd349e379cec169790600090a3505050505050565b60006001600b83015460ff1660038111156116b3576116b3611cec565b036116cf57600182015460000361146757816003015b92915050565b6002600b83015460ff1660038111156116ea576116ea611cec565b0361170457600282015460000361146757816003016116c9565b505060001960005260066020527f63187d71e139eee983a88d0737447c7451979b3dbb75903c76b5fe430d36588e90565b8160060154600003611745575050565b600d820154600090815260026020526040812060068401805490839055600382015491929091611776908390611afa565b600b8601549091506201000090046001600160a01b0316156117ec5760006117a2838560040154611afa565b90506117ae8184612046565b600b8701546201000090046001600160a01b03166000908152602081905260408120805492955083929091906117e5908490611f4d565b9091555050505b6117f68183612046565b91508060008061180e6001546001600160a01b031690565b6001600160a01b03166001600160a01b03168152602001908152602001600020600082825461183d9190611f4d565b90915550506001600160a01b0384166000908152602081905260408120805484929061186a908490611f4d565b90915550505050505050565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6118d28282611735565b600b8201805460ff19166003179055426007830155600c90910180546001600160a01b039092166001600160a01b0319909216919091179055565b6000811561194357828260405160200161192892919061205d565b60405160208183030381529060405280519060200120611946565b60005b9392505050565b600580546000918261195e83611f65565b91905055905090565b600080826002015460405160200161198191815260200190565b604051602081830303815290604052805190602001209050826001015481146119ad5750600092915050565b600283015460031660048110156119d8578060038111156119d0576119d0611cec565b949350505050565b5060009392505050565b60008160038111156119f6576119f6611cec565b836003811115611a0857611a08611cec565b03611a3f575060001960005260066020527f63187d71e139eee983a88d0737447c7451979b3dbb75903c76b5fe430d365891611946565b6000836003811115611a5357611a53611cec565b6001901b836003811115611a6957611a69611cec565b611a74906004611f4d565b6001901b1790508060821480611a8a5750806024145b80611a955750806048145b80611aa05750806012145b80611aab5750806014145b80611ab65750806018145b15611ac657505060038301611946565b50929392505050565b8054600382015460009160ff600160a01b918290048116919092049091161115611467575060030190565b6000612710611b09838561206d565b611946919061208c565b604080516102608101825260006101e082018181526102008301829052610220830182905261024083018290526060808401918252845160808082018752848252602082018590529581018490529081018390529383019390935260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c08201529081908152602001611c076040518060e001604052806000815260200160008152602001600060ff168152602001600060ff1681526020016000815260200160008152602001600081525090565b8152602001600081525090565b60008060408385031215611c2757600080fd5b50508035926020909101359150565b80356001600160a01b038116811461146b57600080fd5b600060208284031215611c5f57600080fd5b61194682611c36565b600060208284031215611c7a57600080fd5b5035919050565b60e081016116c98284805182526020810151602083015260ff604082015116604083015260ff60608201511660608301526080810151608083015260a081015160a083015260c081015160c08301525050565b600060e08284031215611ce657600080fd5b50919050565b634e487b7160e01b600052602160045260246000fd5b6004811061130e57634e487b7160e01b600052602160045260246000fd5b611d2981611d02565b9052565b8151805180516001600160a01b0316835260208082015160ff1690840152604080820151908401526060908101519083015261034082019060208181015180516001600160a01b031660808601529081015160ff1660a0850152604081015160c0850152606081015160e0850152506040810151610100818186015260608301519150610120828187015260808401519250610140838188015260a08501519350610160848189015260c086015161018089015260e08601519450611df66101a0890186611d20565b9285015160ff9081166101c0890152918501516001600160a01b039081166101e0890152908501511661020087015292015161022085015250602084810151805161024086015290810151610260850152604080820151831661028086015260608201519092166102a085015260808101516102c085015260a08101516102e085015260c00151610300840152909201516103209091015290565b600080600060408486031215611ea657600080fd5b83359250602084013567ffffffffffffffff80821115611ec557600080fd5b818601915086601f830112611ed957600080fd5b813581811115611ee857600080fd5b876020828501011115611efa57600080fd5b6020830194508093505050509250925092565b60008060408385031215611f2057600080fd5b611f2983611c36565b946020939093013593505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611f6057611f60611f37565b500190565b600060018201611f7757611f77611f37565b5060010190565b6000813560ff811681146116c957600080fd5b81358155602082013560018201556002810160ff611fb160408501611f7e565b16815461ff00611fc360608701611f7e565b60081b168261ffff198316171783555050506080820135600382015560a0820135600482015560c082013560058201555050565b60ff841681526060810161200a84611d02565b83602083015261201983611d02565b826040830152949350505050565b600060ff821660ff810361203d5761203d611f37565b60010192915050565b60008282101561205857612058611f37565b500390565b8183823760009101908152919050565b600081600019048311821515161561208757612087611f37565b500290565b6000826120a957634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122057b29f74835fa2172dfa64b5cfca9fbcfbca6907fab30024629478a124e4f32b64736f6c634300080e0033";

type RockPaperScissorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RockPaperScissorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RockPaperScissors__factory extends ContractFactory {
  constructor(...args: RockPaperScissorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    context: GameContext.ContextDataStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RockPaperScissors> {
    return super.deploy(context, overrides || {}) as Promise<RockPaperScissors>;
  }
  override getDeployTransaction(
    context: GameContext.ContextDataStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(context, overrides || {});
  }
  override attach(address: string): RockPaperScissors {
    return super.attach(address) as RockPaperScissors;
  }
  override connect(signer: Signer): RockPaperScissors__factory {
    return super.connect(signer) as RockPaperScissors__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RockPaperScissorsInterface {
    return new utils.Interface(_abi) as RockPaperScissorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RockPaperScissors {
    return new Contract(address, _abi, signerOrProvider) as RockPaperScissors;
  }
}
