import React from "react";
import {
  Server,
  DiamondIcon,
  DiamondMinus,
  PlusIcon,
  RegexIcon,
  RectangleEllipsisIcon,
  GoalIcon,
  SolarPanelIcon,
} from "lucide-react";
import { NavLink,useNavigate } from "react-router-dom";




function Infenera() {
const navigate = useNavigate()



  return (
    <div className=" py-5 bg-purple-600/10 rounded-lg border border-purple-800">
      <div className=" font-extrabold mt-2 mx-4 flex justify-between gap-2 items-center py-2 rounded-[5px] bg-[linear-gradient(9deg,rgba(100,0,255,0.2)_50%,rgba(255,0,225,0.1)_100%)]">
        <div className=" text-[18px] flex mx-2 justify-start gap-2 items-center">
          <span className="text-red-700">THE</span> <span>INFENERA</span>{" "}
          <span>
            NEXT <span className=" text-red-600">WAVE</span>
          </span>
        </div>
        <div className="mx-2">
          <Server size={25} />
        </div>
      </div>

      <div className=" mx-4 font-extrabold">
        {/* Infenera plus  */}
        <div className="flex items-center justify-between mx-2 mt-5 ">
          <span className="text-gray-100/50 text-[12px]">NEW ARRIVLE</span>
          
          <span
          onClick={()=> navigate("Infenera")}
          className="flex gap-2 transition-all delay-150 cursor-grab py-2 hover:bg-emerald-500 px-4 hover:px-8  bg-indigo-400 rounded-[5px]">
            INFENERA{" "}
            <span className="flex text-indigo-800 text-shadow-blue-700 text-shadow-2xs ">
              PLUS <PlusIcon />
            </span>
          </span>
        </div>
        {/* Registour your self */}
        <div className="flex items-center justify-between mx-2 mt-5 ">
          <span className="text-gray-100/50 text-[12px]">
            REGISTER YOURSELF
          </span>
          <span className="flex gap-2 transition-all delay-150 cursor-grab py-2 hover:bg-emerald-500 px-4 hover:px-8  bg-indigo-400 rounded-[5px]">
            REGISTER{" "}
            <span className="flex gap-1 text-purple-700 text-shadow-blue-700 text-shadow-2xs ">
              {" "}
              NOW <GoalIcon />
            </span>
          </span>
        </div>

        {/* Payment & Security */}
        <NavLink to={"Registration"}>
          <div className="flex items-center justify-between mx-2 mt-5 ">
            <span className="text-gray-100/50 text-[12px]">
              PAYMENT & SECURITY{" "}
              <span className="text-emerald-400/60">V16</span>
            </span>
            <span className="flex gap-2 transition-all delay-150 cursor-grab py-2 bg-emerald-500/50 px-4 hover:px-8 not-md:text-[14px] hover:bg-[linear-gradient(9deg,rgba(100,0,255,0.7)_50%,rgba(255,0,225,0.1)_100%)]  rounded-[5px]">
              PAYMENT OFF 50%{" "}
              <span className="flex gap-1 text-lime-500 text-shadow-blue-700 text-shadow-2xs ">
                {" "}
                ADMIT <GoalIcon />
              </span>
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Infenera;
