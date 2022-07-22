import { CHAIN_ID, ChainId } from "./network";

type Addresses = {
    [key in ChainId]: string;
};

interface AddressMap {
    RockPaperScissors: Addresses
}

export type ContractName = keyof AddressMap;

const contracts: AddressMap = {
    RockPaperScissors: {
        56:     '0x0000000000000000000000000000000000000000',
        97:     '0x6e75Bf17941d0D40d425FB4250e8E31AeA312FD5',
        31337:   '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    }
}

const getAddress = (contractName: ContractName) => contracts[contractName][CHAIN_ID];

export default getAddress;