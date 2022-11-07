import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  amount,
}) => {
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col items-center rounded-xl py-16 hover:shadow-2xl hover:scale-110 transition-all ease-in-out duration-500 px-8"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="flex-col flex justify-center w-full mb-6 p-2 items-center space-y-4">
          <a
            href={`https://goerli.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-xl">
              From: {addressFrom.slice(0, 5)}...
              {addressFrom.slice(-5, addressFrom.length)}
            </p>
          </a>
          <a
            href={`https://goerli.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-xl">
              To: {addressTo.slice(0, 5)}...
              {addressTo.slice(-5, addressTo.length)}
            </p>
          </a>
          <p className="text-white text-xl">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-xl">Message: {message}</p>
            </>
          )}
        </div>

        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
