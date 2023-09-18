import Web3 from 'web3';

const web3 = new Web3(window.ethereum);
const CONTRACT_ADDRESS = "0xc5BadB7A23f2F61A6205c566561f9A21987E5E0B"

const CONTRACT_ABI = abi
export const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
export async function connectWallet(){
    const accounts = await window?.ethereum?.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
}

