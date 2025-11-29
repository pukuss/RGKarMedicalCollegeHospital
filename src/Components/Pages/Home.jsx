import React from "react";
import { RG_Kar_Hospital_lgo } from "../../assets/Assets";
import Logo from "../../assets/RGKar_Logo";
import { Link } from "react-router-dom";
import { useState } from "react";

import githubApi from "../Api/Github";

function Home() {
  // Github Dropdown
  const [githubOpen, setgithubOpen] = useState(false);
  const [GoogleOpen , setGoogleOpen] = useState(false)
  const GithubApiDeta = githubApi();






  return (
    <>
      <div className="">
        {/* Background video  */}
        <div className=" w-full relative m-auto shadow-emerald-400">
          <video
            autoPlay
            muted
            loop
            className="w-full object-cover h-screen  "
            src="/bg video/dna_bg.mp4">
            
          </video>
        </div>




        <div className=" absolute  w-full top-10 md:top-18 m-auto">
          <div className=" m-auto max-w-[1400px] w-full ">
            <div className="flex justify-between items-center pr-10">
              <span>
                <Logo />
              </span>
              <div className="flex flex-col justify-center items-start text-blue-700 text-3xl text-shadow-[0px_0px_1px] text-shadow-blue-400 font-bold italic">
                {/* addmition and exam > button? */}
                <div>
                  <Link className="relative inline-block text-[12px] group">
                    <span className="relative z-10 block not-md:px-3 not-md:py-1 px-5 py-2 overflow-hidden font-medium leading-tight text-gray-600 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 not-md:px-3 not-md:py-1 py-2 rounded-lg bg-amber-50"></span>
                      <span className="absolute left-0 w-48 bg-red-600 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 group-hover:-rotate-180 ease"></span>
                      <span className="relative after:content-['>'] ">
                        addmition & exam{" "}
                      </span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full not-md:h-8 h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-emerald-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
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
                  className=" not-md:text-[30px] text-7xl font-bold ">
                  RG Kar Medicale College & Hospital
                </span>
              </div>
            </div>
          </div>
        </div>







        {/* Main containar Of Home Page   */}
        <div className=" h-screen w-full m-auto mt-5 not-md:p-2">
          <div className=" z-10 bg-[url('src/assets/images/background.jpg')] bg-cover bg-center  max-w-[1600px] m-auto rounded-2xl relative">
            <div className="  flex flex-col items-start w-full relative">
              <span className="p-2 font-bold md:text-2xl  ">
                Information of NEET PG Admission-2025 of R. G. Kar Medical
                College
              </span>

              <div className="flex  gap-10 p-3 bg-amber-50/10 min-w-full rounded-[0px_15px_0px_0px]">
                <button className=" group flex items-center justify-center not-md:text-[10px]  px-5 py-1.5 rounded-2xl border font-bold gap-2">
                  <img
                    src="/src/assets/icon/Student_icon.png"
                    className="h-5 "
                    alt=""
                  />
                  <span>ACTIVITS</span>
                  <span className="opacity-0 group-hover:opacity-100 flex items-center justify-center transition text-[18px]">
                    ›
                  </span>
                </button>

                <button className=" shadow-sm shadow-black text-nowrap flex not-md:text-[10px] items-center justify-center  border  md:px-5 px-2 py-0 rounded-2xl bg-black font-bold gap-2">
                  STUDENT UNION
                </button>
              </div>
            </div>

            <div className="h-[600px] w-full items-center gap-10 md:justify-between flex md:px-10 not-md:flex-col ">
              {/* <div className="md:h-[400px]  md:max-w-[50%] flex items-center justify-center ">
                <img
                  className="animate-slideUp flex justify-center items-center md:h-[90%] w-full rounded-2xl border-b-blue-950 shadow-md shadow-blue-300"
                  src="/src/assets/images/admin.jpg"
                  alt="background img"
                />
              </div> */}

              <div className=" md:w-[60%] font-bold gap-5 flex flex-col ">
                <span
                  style={{
                    backgroundImage: "url('/src/assets/images/text_bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                  className="text-[clamp(25px,3vw,32px)] ">
                  R. G. Kar Medical College was established in 1886
                </span>

                <span className="not-md:text-[10px] text-gray-400">
                  making it one of the oldest medical colleges in India. It was
                  named after the renowned Indian philanthropist Dr. Radha
                  Gobinda Kar. This college is affiliated with the West Bengal
                  University of Health Sciences (WBUHS) and is recognized by the
                  Medical Council of India (MCI) for undergraduate and
                  postgraduate medical education. The college offers
                  undergraduate (MBBS), postgraduate (MD/MS), post doctorate
                  (DM/MCh), PG Diploma, Fellowship programs in various medical
                  disciplines. It also provides opportunities for research and
                  specialization in different fields of medicine. R. G. Kar
                  Medical College is associated with R. G. Kar Medical College
                  and Hospital, which is a major government teaching hospital in
                  Kolkata. The hospital provides healthcare services to the
                  community and serves as a training ground for medical
                  students. This college campus is equipped with modern
                  facilities, including classrooms, laboratories, a library, and
                  accommodation for students and faculty. The institution
                  emphasizes research and academic excellence. It has several
                  departments and research centers dedicated to advancing
                  medical knowledge and patient care. R. G. Kar Medical College
                  has a rich history and has produced many accomplished medical
                  professionals who have made significant contributions to the
                  field of medicine.
                </span>

              </div>
            </div>


                      {/* github dropdown arrow  */}
            <div className=" p-10 flex gap-1 ">
              <button
                onClick={() => {
                  setgithubOpen(!githubOpen)
                  setGoogleOpen(false)
                }}
                className={`flex hover:animate-slideDown duration-300 justify-center items-center shadow-sm shadow-black text-nowrap not-md:text-[10px] border pr-10 px-3 py-1 rounded-xl   transition-all d bg-black font-bold gap-2
                ${githubOpen ? "bg-emerald-400/40 shadow-2xl backdrop-blur-3xl shadow-emerald-400": "hover:bg-gray-600"}
                `}>
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/pulsar-gradient/48/github.png"
                  alt="github"
                />
                GitHub
              </button>


                  {/* Google dropdown arrow  */}
              <button
                onClick={() => {
                  setGoogleOpen(!GoogleOpen)
                  setgithubOpen(false)
                }  }
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





          {/*  GitHub dorpdown bar */}
          {githubOpen && (
            <div className=" block">
              <div
                className="bg-amber-50/20 h-100 relative -top-2.5 max-w-[1600px] 
               m-auto  rounded-b-3xl 
                animate-slideDown
               transition-all duration-5000 p-5">
                <div className=" h-20  flex items-center justify-between ">
                  <span className="flex justify-center items-center text-black  font-bold text-2xl">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/pulsar-gradient/48/github.png"
                      alt="github"
                    />
                    <img
                      src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png"
                      alt=""
                      width={80}
                    />
                  </span>

                  <div className="p-10">
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      
                      onClick={()=>console.log("clicked")}>
                      SingIn
                    </button>
                  </div>
                </div>

                {/* Dropdown box content  */}
                <div className=" rounded-2xl w-full relative  flex justify-center flex-col">
                  <span className=" font-bold  p-2 hover:bg-amber-500 block">
                    Github ID :{GithubApiDeta.id}
                  </span>
                  <span className="bg-linear-to-r from-gray-700 to-blue-400/50 flex p-2 ">
                    User Name :{GithubApiDeta.name}
                  </span>
                </div>


              </div>
            </div>
          )}

           {/*  Google dorpdown bar */}
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
                      
                      onClick={()=>console.log("clicked")}>
                      SingIn
                    </button>
                  </div>
                </div>

                {/* Dropdown box content  */}
                <div className=" rounded-2xl w-full relative  flex justify-center flex-col">
                  <span className=" font-bold  p-2 hover:bg-amber-500 block">
                    Github ID :{GithubApiDeta.id}
                  </span>
                  <span className="bg-linear-to-r from-gray-700 to-blue-400/50 flex p-2 ">
                    User Name :{GithubApiDeta.name}
                  </span>
                </div>


              </div>
            </div>
          )}




{/* Doctor anime and about Hospital 2 color grid area  */}
          <div className=" ">
            <div 
            className=" max-w-[1600px] m-auto h-[500px] mt-1.5 grid grid-cols-2 relative">
              <div className="grid w-full  rounded-2xl overflow-hidden">
              <div
              className="  relative bg-[linear-gradient(185deg,rgba(255,145,0,1)_0%,rgba(237,221,83,1)_100%)]">

              </div>
              <div 
              className=" bg-[linear-gradient(90deg,rgba(136,0,255,1)_0%,rgba(255,0,225,1)_100%)] overflow-hidden ">
                  <img 
                  className="transition-transform duration-300 object-cover object-bottom-right  absolute  h-[370px] not-md:w-[400px]  md:h-[500px] bottom-0 " 
                  src="/src/assets/images/anime_doctor.png" alt=""  />                 
              </div>
              </div>
              <div 
              className=" flex items-center">
                <span className=" not-md:text-[12px] m-5 text-gray-300 font-bold  text-2xl">RG Kar Medical College & Hospital stands as one of the most trusted pillars of healthcare, delivering advanced medical treatment with compassion and dedication. With a legacy of excellence and a team of experienced doctors, nurses, and medical professionals, we are committed to providing world-class care to every patient. Our modern facilities, state-of-the-art diagnostics, and 24×7 emergency services ensure that quality treatment is always within reach. At RG Kar, we believe in healing with empathy—where every life matters, every patient receives personal attention, and every step of care is guided by integrity and expertise.</span>
              </div>
            </div>




            <div
            className=" max-w-[1200px] m-auto flex justify-end mt-20" >
              <div className=" w-full h-full"
              ><img
                className=" object-cover flex border w-full rounded-2xl overflow-hidden border-blue-700 shadow-fuchsia-600 shadow-2xl hover:shadow-emerald-500 hover:drop-shadow-2xl"
              src="/src/assets/Promotion/EnfenEra.png"  /></div>
          </div>



            
          </div>


          


        </div>
      </div>
    </>
  );
}

export default Home;