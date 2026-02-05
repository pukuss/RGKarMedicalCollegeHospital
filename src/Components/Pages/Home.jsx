// import { Link,useLoaderData } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Server,
  DiamondIcon,
  DiamondMinus,
  User,
  PlusIcon,
  RegexIcon,
  RectangleEllipsisIcon,
  GoalIcon,
  SolarPanelIcon,
  LocateFixedIcon,
  ListTree,
  Copy,
} from "lucide-react";

import githubApi from "../Api/Github";
import Infenera from "../page_comp/home/Infenera";
import GemeniBar from "../page_comp/Effects/GemeniBar";
import GithubBox from "../page_comp/home/GithubBox";
import Hospitl_dashcomp from "../page_comp/home/Hospitl_dashcomp";



function Home() {
  // Github Dropdown
  const [githubOpen, setgithubOpen] = useState(false);
  const [GoogleOpen, setGoogleOpen] = useState(false);


  // COPY TEXT ITEM =================
  const copytext = (text)=> {
    navigator.clipboard.writeText(text)
  };

  // user after click copy button============ 
  const [copy, setCopy] = useState(false)



  // const GithubApiDeta = useLoaderData(); looder..............>>>
  // const GithubApiDeta = githubApi();

  const dropdownRef = useRef(null);

  const { GithubApiData, error } = githubApi();
  console.log(GithubApiData);
  console.log(error);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setgithubOpen(false); // auto-close
      }
    }

    if (githubOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [githubOpen]);

  return (
    <>
      <div className="">
        {/* Background video===============================================>>>  */}
        <div className=" w-full relative m-auto  shadow-[0px_10px_80px_50px] shadow-black">
          <video
            autoPlay
            muted
            loop
            className="w-full object-cover h-screen  "
            src="/bg_video/dna_bg.mp4"></video>
        </div>

        <div className=" absolute  w-full top-10 md:top-18 m-auto">
          <div className=" m-auto max-w-[1600px] md:h-[92vh] h-[95vh] overflow-hidden">
            <div className=" relative h-full flex  justify-center items-center">
              <div>
                <span
                  // style={{
                  //   backgroundImage: "url('/src/assets/images/text_bg.jpg')",
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "center",
                  //   WebkitBackgroundClip: "text",
                  //   backgroundClip: "text",
                  //   color: "transparent",
                  // }}
                  className=" not-md:text-[4vw] text-6xl font-bold font-BBH">
                  CarePlus Multispeciality Medicale College & Hospital
                </span>
              </div>

              {/* bottome apply button and logo and section  */}
              <div className="flex justify-between items-center  absolute bottom-10">
                <span>{/* <Logo /> */}</span>
              </div>

              <div className=" w-full text-gray-500 absolute bottom-0 h-5 flex  font-black italic text-[12px] items-center not-md:text-[9px] gap-3">
                <span> Emergency Hotline: +91 8945512739</span>
                <span> Available 24×7 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main containar Of Home Page   */}
        <div className=" w-full m-auto mt-20 not-md:p-2  overflow-hidden">
          <div
            className=" z-10  
          bg-[url('https://images.pexels.com/photos/1824273/pexels-photo-1824273.jpeg')] 
          bg-cover bg-right  max-w-[1600px] m-auto rounded-2xl relative border border-purple-700">
            
            
            <div className=" flex m-10 justify-center gap-5 items-center p-5">
              <div className="border h-40 w-40 rounded-full bg-linear-to-r from-purple-800 to-teal-400 flex items-center cursor-pointer">
                <div className="m-5 font-black flex  flex-wrap justify-center items-center  ">
                  <p>HOSPITAL</p>
                  <h1 className=" text-4xl">27/7</h1>
                  <p>{Date.now()}</p>
                </div>
              </div>

              <div
                className="border cursor-pointer p-5 h-40 w-40 rounded-full bg-linear-to-r from-purple-600 via-purple-500 to-pink-500 flex items-center justify-center">
                <div className="m-5 font-black flex  flex-wrap justify-center items-center relative  ">
                  <p>EMERGENCY</p>
                  <h1 className=" text-3xl flex justify-center items-center gap-2">COPY  <Copy size={25} color="white"/></h1>
                  <p className=" text-nowrap">Contact No...</p>
                  
                  <div
                    onClick={()=> {
                      setCopy(true)
                      copytext("+91 8945512739")
                      
                      setTimeout(() => {
                        setCopy(false)
                      }, 3000);
                    }}
                    
                    className="bg-black flex justify-center gap-2 items-center flex-wrap absolute h-40 w-40 opacity-0 hover:opacity-70  rounded-full border-2 border-purple-500 hover:scale-110 transition-transform duration-300">
                    <h4> {copy? "COPYED":"COPY HEAR"}</h4>
                    <Copy size={20} color="white"/>
                  </div>
                </div>
              </div>
            </div>



            {/* github dropdown arrow =============================================== */}
            <div className=" p-10 flex m-5 gap-1 absolute bottom-0 not-md:-bottom-10 ">
              <button
                onClick={() => {
                  setgithubOpen(!githubOpen);
                  setGoogleOpen(false);
                }}
                className={`flex hover:animate-slideDown duration-300 justify-center items-center shadow-sm shadow-black text-nowrap not-md:text-[10px] border pr-10 px-3 py-1 rounded-xl   transition-all d bg-black font-bold gap-2
                ${
                  githubOpen
                    ? "bg-emerald-400/40 shadow-2xl backdrop-blur-3xl shadow-emerald-400"
                    : "hover:bg-gray-600"
                }`}>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/pulsar-gradient/48/github.png"
                  alt="github"
                />
                GitHub
              </button>

              {/* Google dropdown arrow ======================================= */}
              <button
                onClick={() => {
                  setGoogleOpen(!GoogleOpen);
                  setgithubOpen(false);
                }}
                className=" flex hover:animate-slideDown duration-300 justify-center items-center shadow-sm shadow-black text-nowrap not-md:text-[10px] border pr-10 px-3 py-2 rounded-xl hover:bg-gray-600  transition-all d bg-black font-bold gap-2">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="github"
                />
                Google
              </button>
            </div>
          </div>

          {/* ========================GITHUB OPEN=============================== */}
          {/* ================================================================== */}

          {/*  GitHub dorpdown bar */}
          {githubOpen && (
            <div ref={dropdownRef} className=" block">
              <GithubBox GithubApiDeta={GithubApiData} />
            </div>
          )}

          {/* ========================GOOGLE OPEN=============================== */}
          {/* ================================================================== */}

          {/*  Google dorpdown bar------------=============================================>>>>>>>>>>>>>>> */}
          {GoogleOpen && (
            <div className=" block">
              <div
                className="bg-amber-50/20 h-100 relative -top-2.5 max-w-[1600px] 
               m-auto  rounded-b-3xl 
                animate-slideDown
               transition-all duration-5000 p-5">
                <div className=" h-20  flex items-center justify-between ">
                  <span className="flex justify-center items-center text-black  font-bold text-2xl">
                    {/* <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                      alt="github"
                    /> */}
                    <img
                      src="https://www.gstatic.com/marketing-cms/assets/images/c5/3a/200414104c669203c62270f7884f/google-wordmarks-2x.webp=n-w150-h48-fcrop64=1,00000000ffffffff-rw"
                      alt=""
                      width={100}
                    />
                  </span>

                  <div className="p-10">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      onClick={() => console.log("clicked")}>
                      SingIn
                    </button>
                  </div>
                </div>

                {/* Dropdown box content  */}
                <div className=" rounded-2xl w-full relative  flex justify-center flex-col">
                  <span className=" font-bold  p-2 hover:bg-amber-500 block">
                    Github ID :{GithubApiData?.id}
                  </span>
                  <span className="bg-linear-to-r from-gray-700 to-blue-400/50 flex p-2 ">
                    User Name :{GithubApiData?.name}
                  </span>
                  <span className="  h-40 w-40 rounded-2xl relative">
                    <img
                      src={GithubApiData?.avatar_url}
                      className=" rounded-3xl"
                      alt=""
                    />
                    <img
                      className=" absolute bottom-3 left-2"
                      src="https://www.gstatic.com/marketing-cms/assets/images/c5/3a/200414104c669203c62270f7884f/google-wordmarks-2x.webp=n-w150-h48-fcrop64=1,00000000ffffffff-rw"
                      alt=""
                      width={60}
                    />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Doctor anime and about Hospital 2 color grid area  */}
          <div className=" ">
            <div className=" max-w-[1600px] m-auto  mt-1.5  relative">
              <div className=" h-full w-full  rounded-[7px] overflow-hidden">
                <div className="p-5 w-full h-full bg-[linear-gradient(9deg,rgba(100,0,255,0.5)_50%,rgba(255,0,225,0.1)_100%)] ">
                  <div className="p-2 flex items-center gap-3 rounded-lg not-md:text-[14px] w-full font-BBH text-purple-500 mb-2 bg-purple-500/20">
                    <span>
                      <LocateFixedIcon />
                    </span>
                    <span>Hospital Faculty</span>
                  </div>

                  <div className=" font-bold  not-md:text-[14px]">
                    At{" "}
                    <span className="font-extrabold text-purple-500">
                      CarePlus Multispeciality Medicale College & Hospital
                    </span>{" "}
                    , healthcare is not just treatment — it is responsibility.
                    We combine medical expertise, modern infrastructure, and
                    compassionate care to ensure every patient receives the
                    attention they deserve.
                  </div>
                </div>
              </div>
            </div>

            <div className=" max-w-[1600px] m-auto flex flex-col justify-end mt-20 gap-10">
              {/* ad area  */}
              {/* <div className=" w-[80%] m-auto ">
                <img
                  className=" object-cover flex border w-full rounded-2xl overflow-hidden border-blue-700 shadow-fuchsia-600 shadow-[0px_0px_30px_2px] hover:shadow-emerald-500 hover:drop-shadow-2xl"
                  src="/Promotion/EnfenEra.png"
                />
              </div> */}

              {/* ----------------------------------- */}
              {/* the INFENERA next wave box */}
              {/* ----------------------------------------- */}
              <div className=" w-full h-full">
                <Infenera />
              </div>
            </div>
          </div>

          <div className=" max-w-[1600px] m-auto mt-10 rounded-2xl overflow-hidden p-2 ">
            <Hospitl_dashcomp />
          </div>
        </div>
      </div>{" "}
      {/*main dev*/}
    </>
  );
}

export default Home;
