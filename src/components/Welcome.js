import React, { useContext } from "react";
import { AiFillPayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import { TransactionContext } from "../context/TransactionContext";

const commonStyles =
  "min-h-[70px] text-xl sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;
    e.preventDefault();

    if (!addressTo || !amount || !message) return;
    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 lg:space-x-36">
        <div className="flex flex-1 flex-col mr-10 justify-start">
          <h1 className="text-3xl text-white sm:text-5xl text-gradient py-1">
            Send Crypto <br /> across the world!{" "}
          </h1>
          <p className="text-white mt-5 text-left font-light md:w-9/12 w-11/12 text-base">
            Explore the Crypto world with Cryptex. Buy and sell cryptocurrencies
            with ease.
          </p>

          {!currentAccount ? (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 p-3 cursor-pointer text-purple-500 text-2xl bg-slate-500 hover:scale-125 hover:transition-all rounded-full hover:bg-slate-800 font-bold hover:text-orange-500"
            >
              Connect Wallet
            </button>
          ) : (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 p-3 cursor-pointer text-purple-500 text-2xl bg-slate-500 hover:scale-125 hover:transition-all rounded-full hover:bg-slate-800 font-bold hover:text-orange-500"
            >
              Successfully Connected
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles} `}>Relibility</div>

            <div className={commonStyles}>Security</div>

            <div className={`rounded-tr-2xl ${commonStyles} `}>Ethereum</div>

            <div className={`rounded-bl-2xl ${commonStyles} `}>Stability</div>

            <div className={commonStyles}>Low Fees</div>

            <div className={`rounded-br-2xl ${commonStyles} `}>Blockchain</div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col flex-1 justify-start items-center w-full md:mt-0 mt-10 gap-4 ">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>

              <div>
                <p className="text-white font-semibold text-sm ">
                  {currentAccount.slice(0, 10)}....
                  {currentAccount.slice(-18, currentAccount.length)}
                </p>
                <p className=" text-white text-xl font-semibold items-center">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:w-96 w-full flex flex-col justify-start blue-glassmorphism items-center ">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />

            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-10/12 mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer font-bold hover:scale-125 hover:transition-all hover:bg-slate-700 hover:text-orange-500"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
