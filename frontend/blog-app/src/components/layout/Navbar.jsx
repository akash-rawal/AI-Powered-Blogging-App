import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

import LOGO from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (openSideMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openSideMenu]);
  return (
    <div className="flex justify-between items-center gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
      
      <button
        className="block lg:hidden text-black -mt-1"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <img src={LOGO} alt="logo" className="hidden md:block h-[26px]" />

      {openSideMenu && (
        <div className="fixed top-[61px] left-0 bg-white z-20">
          <SideMenu activeMenu={activeMenu}   setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
      <button onClick={() => navigate("/")} className="bg-linear-to-r from-sky-500 to-cyan-400 text-sm md:text-md font-semibold text-white py-1.5 md:py-1.5 hover:scale-[1.03] px-5 md:px-6 rounded-lg hover:bg-black hover:text-white  cursor-pointer hover:shadow-cyan-200 transition-all duration-300">Home</button>
    </div>
  );
};

export default Navbar;
