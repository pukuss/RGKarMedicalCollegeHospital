import React, { useEffect, useRef, useState } from "react";
import { RG_Kar_Hospital_lgo,} from "../assets/Assets";
import { NavLink,useNavigate } from "react-router-dom";
import { LucideMenu, User2 } from "lucide-react";
import Account from "./page_comp/enroll/Account";





function Navbar() {


  const [open, setopen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const RefMenuBar = useRef(null);
  
  // const UserTheme = <User2 />
  const navigate = useNavigate();



  useEffect(() => {
    function handleClickOutside(event) {
      // console.log(RefMenuBar.current.contains(event.target));
      
      if (RefMenuBar.current && !RefMenuBar.current.contains(event.target)) {
        setopen(false); // auto-close
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);



  const menuclass =
    "font-black text-[12px] hover:border hover:text-emerald-500 flex bg-green-500/10 border border-green-500 p-2 cursor-pointer rounded-[8px]";

  const Dex_menu =
    "flex md:text-[12px]  cursor-pointer whitespace-nowrap hover:text-amber-500 font-black p-2 rounded-[10px] ";

  return (
    <>
      {/* Navbar */}
      <nav  className=" overflow-hidden fixed w-screen h-10 md:h-16 flex  justify-center items-center bg-gray-500/10  z-50 backdrop-blur-lg">
        <div className="items-center relative h-full w-[1600px] flex justify-between px-5">
          {/* Logo */}
          <div className="w-24 ">
            <div className="border-r-10 border-amber-500 w-29 rounded-tr-full ">
              <div className="border-r-8  w-27 rounded-tr-full border-amber-50">
                <div className="border-r-10 w-25 rounded-tr-full border-emerald-500 ">
                  {/* <img src={RG_Kar_Hospital_lgo} className="h-10 md:h-16" /> */}
                  <div className=" h-full -space-y-2 font-black">
                    <h1 className="">CMMH</h1>
                    <h6 className="text-amber-400 text-[12px]">HOSPITAL</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="md:flex md:flex-nowrap xl:gap-2 md:gap-2 hidden ">
            <li className={Dex_menu}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-blue-500 border-b-blue-400 border-b-2 font-black " : "font-black"}`
                }>
                HOME
              </NavLink>
            </li>

            <li className={Dex_menu}>
              <NavLink
                to="addmition"
                className={({ isActive }) =>
                  `${isActive ? "text-blue-500 font-black" : "font-black"}`
                }>
                ADDMITION
              </NavLink>
            </li>

            <li className={Dex_menu}>
              <NavLink
              to={"Academic"}
              className={({isActive})=>
                `${isActive ? "text-blue-500": "font-black"}`
              } 
              >
                ACADEMICS
              </NavLink>
            </li>

            <li className={Dex_menu}>HOSPITAL SERVICES</li>
            <li className={Dex_menu}>FOR NMC</li>
            <li className={Dex_menu}>ODER NOTICE</li>
            <li className={Dex_menu}>STUDENT CORNAR</li>
            <li className={Dex_menu}>CONTACT US</li>
            <li className={Dex_menu}>ABOUT US</li>
          </ul>

          <div className="flex  justify-between items-center gap-5  ">
           {/* ----------------------------------------- */}
           {/* LogIn LOgOut Button  */}
           {/* ------------------------------------- */}
           
            <button
              // onClick={() => setClicked((prev)=> !prev)}
              onClick={() =>{
                 setClicked((prev)=> !prev);
                 navigate("/register")

              }}

              className={`  text-sm flex justify-center items-center font-bold px-4 not-md:py-4 py-1.5 rounded-[10px] not-md:h-7 hover:px-8 transition-all duration-300 ${
                clicked ? "border-red-600 border shadow-2xl bg-red-600/30 shadow-red-600 " : " border-green-400 border hover:bg-green-500/20 text-green-500 shadow-2xl shadow-green-600"
              }`}>
                
              {clicked ? "LogOut": (<div className="flex gap-3 items-center justify-center ">
                Get Start <User2 
                  className="border border-amber-50 bg-amber- rounded-full"
                  size={25}
                  color="white"/>
              </div>)}
            </button>

            { clicked &&  (
              <Account /> 
            )}

           
           
           
            {/* Hamburger */}
            <button
              onClick={() => setopen(!open)}
              className="md:hidden  h-6 w-18 justify-between items-center font-black flex gap-1 outline-none">
              {/* <img src={MenuBar} alt="" /> */}
              {/* <h1>MENU</h1> */}
              <LucideMenu className={open?'text-lime-400':'text-amber-500'}/>
              <h1>Menu</h1>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div ref={RefMenuBar} className="w-50 flex fixed right-2 top-10 mt-2 z-40 transition-all duration-1000 " 
          // onClick={(e) => e.stopPropagation()}
        >
          <ul style={
            {backgroundImage:`url('https://i.pinimg.com/736x/67/2d/7e/672d7e04694b4d2fa200cad07c533153.jpg')`,
              backgroundPosition:"center",
              backgroundSize: "cover",
                   backgroundRepeat: "no-repeat",

            }}
           className="gap-1 md:hidden w-full rounded-lg transition-all duration-1000 p-5 flex flex-col shadow-[inset_0_0_70px_rgba(0,0,0,0.9)] shadow-black bg-blacks ">
            <li>
              {" "}
              {/*Home*/}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${menuclass}  ${
                    isActive
                      ? "text-zinc-100 border border-zinc-400/40 backdrop-blur-md italic rounded-xl px-4 py-2 bg-zinc-900/40 transition-all duration-500 shadow-lg shadow-zinc-950/20 hover:border-zinc-300 hover:bg-zinc-900/60"
                      : "text-zinc-500/80 border border-zinc-500/10 backdrop-blur-sm italic rounded-xl px-4 py-2 bg-white/5 transition-all duration-500 hover:text-zinc-400 hover:border-zinc-500/30 hover:bg-white/10"
                  }`
                }>
                Home
              </NavLink>
            </li>

            <li>
              {" "}
              {/*addmition*/}
              <NavLink
                to="addmition"
                className={({ isActive }) =>
                  `${menuclass}  ${
                    isActive
                      ? "text-zinc-100 border border-zinc-400/40 backdrop-blur-md italic rounded-xl px-4 py-2 bg-zinc-900/40 transition-all duration-500 shadow-lg shadow-zinc-950/20 hover:border-zinc-300 hover:bg-zinc-900/60"
                      : "text-zinc-500/80 border border-zinc-500/10 backdrop-blur-sm italic rounded-xl px-4 py-2 bg-white/5 transition-all duration-500 hover:text-zinc-400 hover:border-zinc-500/30 hover:bg-white/10"
                  }`
                }>
                ADDMITION
              </NavLink>
            </li>
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
