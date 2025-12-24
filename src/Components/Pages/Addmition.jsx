import React from "react";
import { NavLink } from "react-router-dom";

function Addmition() {
  setTimeout(() => {
    
  }, 5000);


  return (
    <>
      <div 
        className=" relative top-[60px] h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/public/Image/Arabic_background.jpg')",
        }}
      >
         <div className=" h-full w-full flex items-center justify-center">
          {/* Your content here */}
          
        </div>

        <div className="max-w-[1800px] m-auto rounded-2xl mt-10">
          <img
           className=" m-auto rounded-2xl"
          src="/public/Image/page_img/Addmition_bg.png " alt="" srcset="" />

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

export default Addmition;
