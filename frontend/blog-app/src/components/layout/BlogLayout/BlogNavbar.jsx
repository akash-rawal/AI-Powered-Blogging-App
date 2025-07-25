import React, { useContext, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { BLOG_NAVBAR_DATA } from "../../../utils/data";
import LOGO from "../../../assets/6534601.jpg";
import SideMenu from "../SideMenu";
import  {UserContext } from "../../../context/userContext";
import ProfileInfoCard from "../../Cards/ProfileInfoCard";
import Login from "../../Auth/Login";
import SignUp from "../../Auth/SignUp";
import Modal from "../../Loaders/Modal";

const BlogNavbar = ({ activeMenu }) => {
  const {user , setOpenAuthForm} = useContext(UserContext);
  const [openSideMenu, setopenSideMenu] = useState(false);
  const [openSearchBar, setopenSearchBar] = useState(false);

  return (
    <>
      <div className="bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
        <div className="container mx-auto flex items-center justify-between gap-5">
          <div className="flex gap-5">
            <button
              className="block lg:hidden text-black -mt-1"
              onClick={() => {
                setopenSideMenu(!openSideMenu);
              }}
            >
              {openSideMenu ? (
                <HiOutlineX className="text-2xl" />
              ) : (
                <HiOutlineMenu className="text-2xl" />
              )}
            </button>
            <Link to="/">
              <img src={LOGO} alt="logo" className="h-[24px] md:h-[40px]" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {BLOG_NAVBAR_DATA.map((item, index) => {
              if (item?.onlySideMenu) return;
              return (
                <Link key={item.id} to={item.path}>
                  <li className="text-[15px] text-black font-medium list-none relative group cursor-pointer">
                    {item.label}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-[2px] bg-sky-500 transition-all duration-300 origin-left 
                                            ${
                                              index == 0
                                                ? "scale-x-100"
                                                : "scale-x-0"
                                            } group-hover:scale-x-100`}
                    ></span>
                  </li>
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-6">
            <button
              className="hover:text-sky-500 cursor-pointer"
              onClick={() => setopenSearchBar(true)}
            >
              <LuSearch className="text-[22-px]" />
            </button>


            {!user? <button
              className="flex items-center justify-center gap-3 bg-linear-to-r from-sky-500 to-cyan-400 text-xs md:text-sm font-semibold text-white px-5 md:px-7 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer hover:shadow-cyan-200"
              onClick={() => setOpenAuthForm(true)}
            >
              Login/SignUp
            </button>: <div className="hidden md:block">
                  <ProfileInfoCard/>
            </div>}


          </div>

          {openSideMenu && (
            <div className="fixed top-[61px] -ml-4 bg-white">
              <SideMenu activeMenu={activeMenu} isBlogMenu  setopenSideMenu={setopenSideMenu}/>
            </div>
          )}
        </div>
      </div>
      <AuthModel/>
    </>
  );
};

export default BlogNavbar;
const AuthModel = () => {
  const { openAuthForm, setOpenAuthForm } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <>
      <Modal
        isOpen={openAuthForm}
        onClose={() => {
          setOpenAuthForm(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div className="">
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
};

