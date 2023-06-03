import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between px-20 h-auto w-auto">
      <div className="w-[40px] h-[40px] md:mt-10 lg:mt-10">
        <img src={Logo} alt="" />
      </div>
      <ul className="flex flex-col md:flex-row lg:flex-row gap-[1rem] md:gap-[5rem] lg:gap-[5rem] items-center md:mt-10 lg:mt-10">
        <li className="hover:text-[#722ED1]">
          <Link to="#">About</Link>
        </li>
        <li className="hover:text-[#722ED1]">
          <Link to="#">Pricing</Link>
        </li>
        <li className="hover:text-[#722ED1]">
          <Link to="#">Contract Us</Link>
        </li>
        <li className="hover:text-[#722ED1]">
          <Link to="/login">Login</Link>
        </li>
        <li className="flex justify-center items-center border border-[#722ED1] w-[142px] h-[38px] rounded-full text-[#722ED1] hover:bg-[#722ED1]  hover:text-white mr-3 ease-in-out transition">
          <Link to="#">Start free trial</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
