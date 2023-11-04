import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/data";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="p-1 md:p-4 flex items-center justify-between h-10 w-full">
      <div className="flex flex-row items-center gap-2">
        <img src={logo} alt="" height={50} width={50} />
        <span className="text-2xl font-[1000] text-center">
          SNKR.
          <span className="font-extrabold text-sm">hub</span>
        </span>
      </div>

      <ul className="hidden md:flex text-sm  text-black font-semibold md:tracking-wide  flex-col  gap-2 md:flex-row  md:gap-8">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-xl " />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 
                  flex justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
        </li>
      </ul>
      {/* hidden max-sm:block */}
      <div className="block md:hidden">
        <img src="./hamburger.svg" alt="" height={20} width={20} />
        <ul className="hidden text-sm  text-black font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-xl " />
                {cart.length > 0 && (
                  <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 
                  flex justify-center items-center animate-bounce rounded-full text-white"
                  >
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
