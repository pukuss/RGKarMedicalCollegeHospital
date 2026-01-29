import React from "react";
import { NavLink, UNSAFE_decodeViaTurboStream } from "react-router-dom";
import { ArrowBigLeft, ArrowBigRight, ArrowRight, DonutIcon, EqualApproximatelyIcon, IdCard, SquareChevronDown, SquareChevronUpIcon, Verified } from "lucide-react";
import Addmition_status from "../page_comp/addmition/Addmition_status";

function Addmition() {
  setTimeout(() => {
    
  }, 5000);

  const USERITEM = ["NURSING" , "DOCTOR" , "D-FHARMA" , "SURGENT"]

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
            <div className="not-md:text-[12px]">
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




{/* -------------Herocu section--------------------->> */}
          <div
          className=" h-[80vh] md:p-5 max-w-[1600px] m-auto ">

            <div className=" h-full w-full grid md:grid-cols-2 ">
              <div className=" flex items-center h-full w-full not-md:justify-center">
                <div className="flex flex-col md:items-start items-center not-md:justify-start md:gap-20 m-4 md:m-10">
                  <div className=" flex flex-col">
                    <span className="font-alluser animate-slideDown font-extrabold text-4xl text-white md:text-7xl">ADDMITION OPEN</span>
                    <span className="font-extrabold not-md:text-[10px] animate-slideDown text-purple-500">  CarePlus Multispeciality Medicale College & Hospital </span>
                  </div>
                  <div className=" text-2xl not-md:text-[16px] font-alluser md:items-start flex flex-col">
                    <span className="text-7xl not-md:text-3xl text-purple-600 text-shadow-2xs shadow-purple-300"> India's Top 10</span>
                    <span>MULTISPECIALITY HOSPITAL</span>
                    <span className="text-[26px] not-md:text-[10px] font-bebas">When you Want to be A doctor</span>
                  </div>
                  
                  <div>
                    <button 
                    className="border font-alluser border-pink-600 m-5 flex gap-5 justify-center items-center px-10 not-md:px-5 rounded-[5px] bg-purple-600/50"
                    type="button">
                       <span>VISIT  OUR COURSE</span>
                       <span className="border rounded-full p-2 not-md:p-0 m-1 bg-white/20"> <ArrowBigRight /></span>
                    </button>
                  </div>

                </div>
              </div>

              <div className=" animate-slideDown w-full h-full grid grid-rows-2 gap-1">
                <div className="flex  justify-center items-center max-h-full gap-3 bg-purple-200/10 backdrop-blur-lg md:m-10 p-5 md:p-10 rounded-[10px]">
                  {
                    USERITEM.map((element)=> {
                      return <div 
                      className="border cursor-pointer font-alluser not-md:h-18 not-md:w-18 not-md:text-[12px]  h-1/2 w-1/4 flex justify-center items-center bg-purple-500/10 backdrop-blur-lg hover:bg-green-400/30 transition-all delay-150 ">
                        {element}</div>
                    })
                  }
                  {/* <div className="border h-1/2 w-1/4 flex justify-center items-center hover:bg-fuchsia-600/50">NURSING</div>
                  <div className="border h-1/2 w-1/4 flex justify-center items-center">DOCTOR</div>
                  <div className="border h-1/2 w-1/4 flex justify-center items-center">D-FARMA</div>
                  <div className="border h-1/2 w-1/4 flex justify-center items-center">SURGENT</div> */}
                </div>
                <div className=" flex justify-end items-end">
                  <div className="m-2 font-BBH text-[8px] ">
                    
                    <div className="flex justify-center items-center text-cyan-500 gap-2">
                      <label className="text-[12px]" htmlFor="">
                        Email
                      </label>
                      <input
                        className="pl-2 font-alluser text-[12px] px-25 bg-pink-500/20 rounded-2xl h-6 border border-purple-700"
                        type="email"
                        placeholder="Drop You Email"
                        name=""
                        id="" />
                      <button
                        className="border rounded-full p-2 px-2.5"
                        type="submit">
                        ={">"}
                      </button>
                    </div>
                    <span>INFENERA HOSPITAL&CO PVT LTD</span>
                  </div>
                </div>
              </div>

              <div>
              </div>
              {/* <div className="border h-full w-full"></div> */}
            </div>
          </div>

          
        </div>

        <div className=" z-30">
sd
        </div>










{/* 
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
        </div> */}
      </div>

      <Addmition_status />



    </>
  );
}


export default Addmition;
