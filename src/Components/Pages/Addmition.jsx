import React from "react";
import { NavLink } from "react-router-dom";

function Addmition() {
  setTimeout(() => {
    
  }, 5000);


  return (
    <>
      <div 
        className=" relative md:top-16 top-10 h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/Image/Arabic_background.jpg')",
        }}
      >
         <div className=" h-full w-full overflow-hidden">
          {/* Your content here */}
          <div 
          className=" h-10 w-full flex justify-between px-3 items-center">
            {/* Top nav bar explore and logo ------------------------------>>>>>>>>>> */}
            <div>
              <span className="font-BBH ">
                INFEN
              </span>
              <span className="font-BBH text-purple-800">
                ERA
              </span>
            </div>

            {/* EXPLORE BUTTON------------------------------------->> */}
            <div>
              <button
                className=" bg-purple-600/50 px-5 gap-3 py-1 flex items-center font-alluser   font-extrabold"
                type="button">Explore More  <ArrowRight size={20} />
              </button>
             
            </div>
          </div>


          <div
          className="border h-50 md:p-5 max-w-[1600px] m-auto">

            <div className=" h-full w-full grid grid-cols-2 ">
              <div className="border flex items-center h-full w-full not-md:justify-center">
                <div className="flex flex-col not-md:justify-center items-center">
                  <span className="font-alluser font-extrabold text-white md:text-3xl">ADDMITION OPEN</span>
                  <span className="font-extrabold text-gray-500/50">RGkar Collenge & Hospital </span>
                </div>
              </div>

              <div className="border w-full grid grid-rows-2 gap-1">
                <div className="bg-white"></div>
                <div className="bg-white"></div>
              </div>
              {/* <div className="border h-full w-full"></div> */}
            </div>
          </div>

          
        </div>













        <div className="max-w-[1800px] m-auto rounded-2xl mt-10">
          <img
           className=" m-auto rounded-2xl"
          src="/Image/page_img/Addmition_bg.png " alt="Addmition banner"  />

          <div className=" p-5">
            <NavLink
                to="Enroll"
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "text-emerald-500 border border-emerald-700 italic"
                      :  " hover:bg-amber-50 hover:text-red-600 text-shadow-2xs text-shadow-fuchsia-500 transition-all delay-150  text-amber-50 font-knews bg-red-800 text-2xl md:text-3xl px-25 md:px-55 rounded-2xl py-2"
                  }`
                }>
                <span> ENROL NOW </span> 
              </NavLink>
             
          </div>
        </div>
      </div>
    </>
  );
}
import { ArrowBigRight, ArrowRight } from "lucide-react";

export default Addmition;
