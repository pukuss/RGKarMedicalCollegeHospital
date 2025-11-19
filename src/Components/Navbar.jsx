
         
        //  <div className='border-r-10 border-amber-500 w-29 rounded-tr-full '>
        //   <div className='border-r-8  w-27 rounded-tr-full border-amber-50' >
        //   <div className='border-r-10 w-25 rounded-tr-full border-emerald-500 '>
        import React, { useState } from "react";
import { RG_Kar_Hospital_lgo, MenuBar } from "../assets/Assets";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setopen] = useState(false);
    const [clicked, setClicked] = useState(false);


  const menuclass =
    "font-bold text-[10px] hover:border hover:text-emerald-500 flex bg-gradient-to-r from-slate-900 to-slate-700 p-2 cursor-pointer rounded-[10px]";

  const Dex_menu =
    "flex md:text-[10px] cursor-pointer whitespace-nowrap hover:text-amber-500 font-bold p-2 rounded-[10px]";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-screen h-10 md:h-16 flex justify-center items-center bg-[#16003B] z-50">
        <div className="items-center relative h-full w-[1600px] flex justify-between px-5">
          
          {/* Logo */}
          <div className="w-24 ">
             <div className='border-r-10 border-amber-500 w-29 rounded-tr-full '>
              <div className='border-r-8  w-27 rounded-tr-full border-amber-50' >
                <div className='border-r-10 w-25 rounded-tr-full border-emerald-500 '>
              <img src={RG_Kar_Hospital_lgo} className="h-10 md:h-16" />
              </div>
             </div>
             </div>
          </div>




          {/* Desktop Menu */}
          <ul className="md:flex md:flex-nowrap xl:gap-2 md:gap-2 hidden">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-amber-500" : "text-amber-50"
                }
              >
                Home
              </NavLink>
            </li>

            <li className={Dex_menu}>ADDMITION</li>
            <li className={Dex_menu}>ACADEMICS</li>
            <li className={Dex_menu}>HOSPITAL SERVICES</li>
            <li className={Dex_menu}>FOR NMC</li>
            <li className={Dex_menu}>ODER NOTICE</li>
            <li className={Dex_menu}>STUDENT CORNAR</li>
            <li className={Dex_menu}>CONTACT US</li>
            <li className={Dex_menu}>ABOUT US</li>
          </ul>


          <div>
            <button 
            onClick={() => setClicked(true)}
      className={`text-sm font-bold px-5 py-1 rounded-[10px]  border  hover:border-b-blue-500 hover:animate-pulse ${
        clicked ? "bg-green-500" : "bg-blue-500"
      }`}
            >LogIn</button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setopen(!open)}
            className="md:hidden h-10 w-10"
          >
            <img src={MenuBar} alt="" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="w-50 flex absolute right-2 top-10 mt-2 z-40">
          <ul className="gap-1 md:hidden w-full rounded-2xl p-5 flex flex-col bg-gradient-to-r from-fuchsia-600/50 to-blue-400/50">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                `${menuclass}  ${isActive ? "text-emerald-500 border border-emerald-700 italic" : "text-amber-50"}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className={menuclass}>ADDMITION</li>
            <li className={menuclass}>ACADEMICS</li>
            <li className={menuclass}>HOSPITAL SERVICES</li>
            <li className={menuclass}>FOR NMC</li>
            <li className={menuclass}>ODER NOTICE</li>
            <li className={menuclass}>STUDENT CORNAR</li>
            <li className={menuclass}>ABOUT US</li>
            <li className={menuclass}>CONTACT US</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
