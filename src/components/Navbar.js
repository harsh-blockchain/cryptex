import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./cryptex.png";
import Navbaritems from "./Navbaritems";
import { TransactionContext } from "../context/TransactionContext";

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  const [toogle, setToogle] = React.useState(false);

  return (
    <div className="w-full flex md:justify-center items-center justify-between p-4">
      <div className="md:flex-[0.5] flex-initial  justify-center items-center">
        <img src={logo} alt="logo" className="w-52 cursor-pointer" />
      </div>

      <ul className=" text-white hidden md:flex list-none flex-row justify-between items-center flex-initial">
        {["Market", "Wallet", "Exchange", "Earn", "Analytics", "Resources"].map(
          (item, index) => (
            <Navbaritems title={item} key={index} />
          )
        )}

        {!currentAccount ? (
          <li
            className="text-green-500 bg-slate-500 py-2 rounded-full px-6 text-2xl font-bold text-center ml-9 hover:transition-all hover:bg-slate-700 hover:scale-125 hover:text-orange-500 cursor-pointer"
            onClick={connectWallet}
          >
            Login
          </li>
        ) : (
          <li
            onClick={connectWallet}
            className="text-green-500 bg-slate-500 py-2 rounded-full px-6 text-2xl font-bold text-center ml-9 hover:transition-all hover:bg-slate-700 hover:scale-125 hover:text-orange-500 cursor-pointer"
          >
            {currentAccount.slice(0, 5)}.....
            {currentAccount.slice(-5, currentAccount.length)}
          </li>
        )}
      </ul>
      <div className="flex relative">
        {toogle ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToogle(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToogle(true)}
          />
        )}

        {toogle && (
          <ul className="z-10 fixed top-0 -right-2 my-2 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                onClick={() => setToogle(false)}
                className=" md:hidden cursor-pointer"
              />
            </li>

            {[
              "Market",
              "Wallet",
              "Exchange",
              "Earn",
              "Analytics",
              "Resources",
            ].map((item, index) => (
              <Navbaritems title={item} classProps="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
