import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum, SiJava, SiKlarna } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from './Loader.jsx'
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.jsx";
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
const Input = ({ placeholder, name, type, value, handlechange }) => {
    return (
        <input placeholder={placeholder} type={type} step="0.0001" value={value} onChange={(e) => handlechange(e, name)} className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-sm text-white border-none white-glassmorphism " />
    );
}
const Welcome = () => {
    const { connectWalet, currentAccount, formData, sendTransaction, handlechange } = useContext(TransactionContext);
    console.log('some', connectWalet);
    const handleSubmit = (e) => {

        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) {

            console.log('incomlete');
            return;
        }
        console.log(addressTo, amount, keyword, message);

        sendTransaction();
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 px-4 py-12">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-3xl text-white  text-gradient py-1">
                        send Crypto <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the crpto world and find new thing to do
                    </p>
                    {!currentAccount && (<button type="button" onClick={connectWalet} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg:-[#2546bd]"><p className="text-white text-base font-semibold">Connect Wallet</p></button>)}
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 inline-flex">
                        <div className={'rounded-tl-2xl text-white min-h-[70px] sm:px-0 px-2 sm:min-w-[120px]  w-[60px] flex justify-center items-center border-[0.5px] border-white-400'}>
                            Relaibility
                        </div>
                        <div className={commonStyles}>
                            Security
                        </div>
                        <div className={commonStyles}>
                            Etirium
                        </div>
                        <div className={commonStyles}>
                            Web 3.0
                        </div>
                        <div className={commonStyles}>
                            Low fees
                        </div>
                        <div className={commonStyles}>
                            Blockchain
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full  my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={28} color="#fff"></SiEthereum>
                                </div>
                                <BsInfoCircle fontSize={17} color='#fff'></BsInfoCircle>
                            </div>
                            <div>
                                <p className="text-white font-light text-sm"> 0xkngakl.....jhfkh</p>
                                <p className="text-white font-semibold text-lg mt-1"> Ethirium</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col  justify-strat items-center blue-glassmorphism">
                        <Input placeholder="Address to " name="addressTo" type="text" handlechange={handlechange} />
                        <Input placeholder="Amount  " name="amount" type="number" handlechange={handlechange} />
                        <Input placeholder="KeyWorld gif " name="keyword" type="text" handlechange={handlechange} />
                        <Input placeholder="Enter the message " name="message" type="text" handlechange={handlechange} />
                        <div className="h -[1px] w-full  my-2">
                            {false ? (<Loader />) : (<button type="button" onClick={handleSubmit} className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer'>Send Now</button>)

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome;


