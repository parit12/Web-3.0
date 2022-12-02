import React, { Children, useEffect, useState } from "react";
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constant';


export const TransactionContext = React.createContext();
const { ethereum } = window;

const getEthereumcontract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [transcationCount, setTransactionCount] = React.useState(localStorage.getItem('transactionCount'));
    const [isLoading, setIsLoading] = React.useState(false);
    const [connectAccount, setConnectedAccount] = React.useState('');
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = React.useState({ addressTo: '', amount: ' ', keyword: ' ', message: ' ' });
    const handlechange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }
    const checkIfWaletIsConnected = async () => {
        if (!ethereum) {
            return alert("install metamask");
        }
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length) {
            setCurrentAccount(accounts[0]);
        } else {
            console.log('no account found');
        }
        console.log(accounts);
    }
    const connectWalet = async () => {
        try {
            console.log('working');
            if (!ethereum) {
                return alert("install metamask");
            }

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.error(error);
            throw new Error('No ehtereum object hel ');
        }
    }
    const sendTransaction = async () => {
        try {
            if (!ethereum) {
                alert('install meta mask');
            }
            const { addressTo, amount, keyword, message } = formData;
            const TranscationContract = getEthereumcontract();
            const parsedAmount = ethers.utils.parseEther(amount);
            await ethereum.request({
                methord: 'sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5028',
                    value: parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(adddressTo, parsedAmount, message, amount);

            setIsLoading(true);
            console.log('loading -${transactionHash}');
            setIsLoading(false);
            console.log('sucess ${transactionHash}');
            const transactionCount = transactionContract.getTranscationCount();

            setTransactionCount(transactionCount.toNumber());
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        checkIfWaletIsConnected();
    }, []);
    return (
        <TransactionContext.Provider value={{ connectWalet, currentAccount, formData, sendTransaction, handlechange }}>
            {children}
        </TransactionContext.Provider>
    )
}