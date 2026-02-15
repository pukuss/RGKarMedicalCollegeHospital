import {
  AmpersandsIcon,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowRight,
  Book,
  CircleArrowDownIcon,
  DonutIcon,
  Dot,
  DotIcon,
  EqualApproximatelyIcon,
  FilterX,
  Goal,
  IdCard,
  Rocket,
  SquareChevronDown,
  SquareChevronUpIcon,
  Verified,
} from "lucide-react";
import Addmition_status from "../page_comp/addmition/Addmition_status";
import instaFeed from "../Api/InstaFeed";
import { Link } from "react-router-dom";

function Addmition() {
  setTimeout(() => {}, 5000);
  const { Postdata } = instaFeed();

  console.log(Postdata);




  const USERITEM = ["NURSING", "DOCTOR", "D-FHARMA", "SURGENT"];
  const COURSE = [
    {
      name: "NURSING",
      course: "ANM GNM B.sc",
      year: "2 Years , 3.5 Years , 4 ",
      elegiblity: " 10+2 BIO-SCIENCE (PCB)",
    },
    {
      name: "DOCTOR -MBBS",
      course: "MBBS",
      year: "5.5 Years 4.5 + 1 Year Internship",
      elegiblity: "10+2 NEET UG&PG (PCB)",
    },
    {
      name: "DIPLOMA IN PHARMA",
      course: "D-PHARMA,B-PHARMA",
      year: "2 Years , 3 Years",
      elegiblity: "10+2 (PCB)",
    },
    {
      name: "SURGEON",
      course: "MBBS , MS/Mch ",
      year: "5.5 Years , 3.5 Years",
      elegiblity: "NEET UG&PG",
    },
  ];
  console.log(COURSE);

  const DOC_NEED =[
                    "Acknolegment Slip",
                    " Document Veryfication Slip",
                    " Payment Slip",
                    " Cust Certifiate",
                    " NEET Admit Card",
                    "NEET Rank Card",
                    "Birth Proof ",
                    " Valid Proof",
                    "10th Mark Sheet",
                    "12Th Mark Sheet",
  ]
console.log(DOC_NEED);





  return (
    <>
      <div
        className=" relative md:top-16 top-10 h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/Image/Arabic_background.jpg')",
        }}>
        <div className=" h-full w-full overflow-hidden">
          {/* Your content here */}
          <div className=" h-10 w-full flex justify-between px-3 items-center">
            {/* Top nav bar explore and logo ------------------------------>>>>>>>>>> */}
            <div className="not-md:text-[12px]">
              <span className="font-black ">INFEN</span>
              <span className="font-black text-purple-800">ERA</span>
            </div>

            {/* EXPLORE BUTTON------------------------------------->> */}
            <div>
              <button
                className=" bg-purple-600/50 px-5 gap-3 py-1 flex items-center font-alluser   font-extrabold"
                type="button">
                Explore More <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* -------------Herocu section--------------------->> */}
          <div className=" h-[80vh] md:p-5 max-w-[1600px] m-auto ">
            <div className=" h-full w-full grid md:grid-cols-2 ">
              <div className=" flex items-center h-full w-full not-md:justify-center">
                <div className="flex flex-col md:items-start items-center not-md:justify-start md:gap-20 m-4 md:m-10">
                  <div className=" flex flex-col">
                    <span className="animate-slideDown flex gap-2 font-extrabold text-4xl text-white md:text-7xl">
                      ADDMITION <p className="text-amber-400">OPEN</p>
                    </span>
                    <span className="font-extrabold not-md:text-[10px] animate-slideDown text-purple-500">
                      {" "}
                      CarePlus Multispeciality Medicale College & Hospital{" "}
                    </span>
                  </div>
                  <div className=" text-2xl not-md:text-[16px] font-black md:items-start flex flex-col">
                    <span className="text-7xl not-md:text-3xl text-purple-600 text-shadow-2xs shadow-purple-300">
                      {" "}
                      India's Top 10
                    </span>
                    <span>MULTISPECIALITY HOSPITAL</span>
                    <span className="text-[15px] not-md:text-[10px] font-black text-gray-400">
                      When you Want to be A doctor
                    </span>
                  </div>

                  <Link to={"/addmition/enroll"}>
                  <div>
                    <button
                      className="border font-black border-pink-600 m-1 flex gap-5 justify-center items-center px-10 not-md:px-5 rounded-xl bg-purple-600/50"
                      type="button">
                      <span>VISIT OUR COURSE</span>
                      <span className="border rounded-full p-2 not-md:p-0 m-1 bg-white/20">
                        {" "}
                        <ArrowBigRight />
                      </span>
                    </button>
                  </div>
                  </Link>
                </div>
              </div>

              <div className=" animate-slideDown w-full h-full  grid  gap-1 rounded-2xl">
                <div className="grid font-black  h-full gap-3 bg-blac backdrop-blur-lg rounded-xl p-5 ">


                  {COURSE.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className=" relative  z-10 hover:border-amber-500  flex group rounded-2xl bg-linear-to-br from-zinc-900 to-gray-800 border-2 border-purple-400 italic ">
                          {/* Sectione One  */}
                          <div className="border gap-2 p-2 justify-items-start max-w-40 md:w-60 grid rounded-[10px_0px_0px_10px] bg-white ">
                            <h1 className="text-gray-500 md:text-[14px] text-[12px]">COURSE</h1>
                            <h4 className="md:text-[18px] text-purple-600 ">{element.name}</h4>
                            <div className="border-t w-full text-[10px] flex group-hover:text-green-500 text-gray-600/70">View Details    {">"}</div>
                          </div>
                          {/* Section two  */}
                          <div className="  grid p-2 w-full border-amber-50 border-l-3 border-dashed ">
                            <h1 className="flex md:text-[12px] text-[10px] ">{element.elegiblity}</h1>
                            <div className="flex justify-between">
                              <h1>{element.course}</h1>
                              <p>Rupis</p>
                            </div>
                           <div className="flex justify-between" >
                             <h4 className="text-[10px] h-3 flex rounded-3xl px-2 items-center bg-green-500/20">{element.year}</h4>
                              <button
                                className="border px-3 h-6 flex items-center rounded-2xl text-[14px] bg-amber-600"
                              >Continue</button>
                          </div>
                           </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>


      </div>



        <div className="mt-20 max-w-[1600px] m-auto  ">
          <div className=" rounded-2xl my-20 bg-[#0073ff9c] flex items-center  justify-between md:px-10 px-5 font-black not-md:flex-wrap">
                  <div>
                    <h1 className="text-2xl text-gray-400">NEET UG & PG Information</h1>
                  </div>
                  <div>
                    <h1 className="text-xl border-b p-4 w-full">|  Document Requairment |</h1>
                    <ul className=" transition-all dur  flex  text-[14px] gap-4 p-2 m-4 rounded-2xl bg-linear-to-r from-sky-600/50 to-purple-700/50 flex-wrap">
                      {DOC_NEED.map((element, index)=>{
                        return (
                          <li  
                            className=" flex  items-center  gap-3 bg-linear-to-r from-gray-900 to-black rounded-sm cursor-pointer flex-wrap p-4 px-6 border-t-4 border-t-amber-500 border-purple-500 border-2"
                            key={index}>
                          <CircleArrowDownIcon  size={15} color="green"/> 
                          {element}
                        </li>
                        )
                      })}
                    </ul>
                  </div>
          </div>

          {/* Addmition status check se3ction================================= */}
          <div>
            <Addmition_status />
          </div>

        </div>

    </>
  );
}

export default Addmition;
