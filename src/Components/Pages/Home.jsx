// import { Link,useLoaderData } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { NavLink , Link } from "react-router-dom";
import {Server , DiamondIcon, DiamondMinus, PlusIcon, RegexIcon, RectangleEllipsisIcon, GoalIcon, SolarPanelIcon} from 'lucide-react'


import githubApi from "../Api/Github";


import Infenera from "../page_comp/home/Infenera";



function Home() {
  // Github Dropdown
  const [githubOpen, setgithubOpen] = useState(false);
  const [GoogleOpen, setGoogleOpen] = useState(false)
  // const GithubApiDeta = useLoaderData(); looder..............>>>
  const GithubApiDeta = githubApi()
  const dropdownRef = useRef(null)






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
          <div className=" m-auto max-w-[1600px] md:h-[92vh] h-[95vh]">


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
                  className=" not-md:text-[30px] text-7xl font-bold ">
                  RG Kar Medicale College & Hospital
                </span>



                <div className=" animate-slideDown transition-all duration-300 grid grid-cols-2 gap-5 w-[50%] md:w-[25%] absolute md:bottom-20 bottom-20 right-0">
                  <div className=" rounded-2xl"> <img className=" rounded-[5px]" src="/src/assets/images/hospital_1.jpg" alt="" /></div>
                  <div className=" rounded-2xl "> <img className=" rounded-[5px]" src="/src/assets/images/hospital_2.jpg" alt="" /></div>


                </div>
              </div>








              {/* bottome apply button and logo and section  */}
              <div className="flex justify-between items-center  absolute bottom-0">
                <span>
                  {/* <Logo /> */}
                </span>



                {/* apply now up pg button  */}
                <Link to={"/Addmition/Enroll"}>
                <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-89 cursor-pointer items-center justify-center rounded-full shadow-blue-950 shadow-lg bg-emerald-500/80 hover:bg-gray-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Apply Now UG / PG {">"}
                  </span>
                </button>
                </Link>

              </div>


            </div>






          </div>
        </div>







        {/* Main containar Of Home Page   */}
        <div className=" h-screen w-full m-auto mt-5 not-md:p-2">
          <div className=" z-10 bg-[url('https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg')] bg-cover bg-center  max-w-[1600px] m-auto rounded-2xl relative">
            <div className="  flex flex-col items-start w-full relative">
              <span className="p-2 font-bold md:text-2xl  ">
                Information of NEET PG Admission-2025 of R. G. Kar Medical
                College
              </span>




              <div className="flex  gap-10 p-3 bg-amber-50/10 min-w-full rounded-[0px_15px_0px_0px]">
                {/* activitis button   */}
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


                {/* union button  */}
                <button className=" shadow-sm shadow-black text-nowrap flex not-md:text-[10px] items-center justify-center  border  md:px-5 px-2 py-0 rounded-2xl bg-black font-bold gap-2">
                  STUDENT UNION
                </button>
              </div>
            </div>




            <div className="h-[600px] w-full items-center gap-10 md:justify-between flex md:px-10 not-md:flex-col ">
              <div className=" md:w-[60%] font-bold gap-5 flex flex-col ">
                <span
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                  className="text-[clamp(25px,3vw,32px)] ">
                  R. G. Kar Medical College was established in 1886
                </span>


                {/* information box and detalis of rgkar and text button activits and union  */}
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
                ${githubOpen ? "bg-emerald-400/40 shadow-2xl backdrop-blur-3xl shadow-emerald-400" : "hover:bg-gray-600"}
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





          {/*  GitHub dorpdown bar */}
          {githubOpen && (
            <div ref={dropdownRef} className=" block">
              <div
                className="bg-amber-50/20 h-100 relative -top-2.5 max-w-[1600px] 
               m-auto  rounded-b-3xl 
                animate-slideDown
               transition-all duration-300 p-5">
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

                      onClick={() => console.log("clicked")}>
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
                  <span className="  h-40 w-40 rounded-2xl relative">
                    <img src={GithubApiDeta.avatar_url} className=" rounded-3xl"  alt="" srcset="" />
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

                      onClick={() => console.log("clicked")}>
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
                   <span className="  h-40 w-40 rounded-2xl relative">
                    <img src={GithubApiDeta.avatar_url} className=" rounded-3xl"  alt="" srcset="" />
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
                    src="/src/assets/images/anime_doctor.png" alt="" />
                </div>
              </div>
              <div
                className=" flex items-center">
                <span className=" not-md:text-[12px] m-5 text-gray-300 font-bold  text-2xl">RG Kar Medical College & Hospital stands as one of the most trusted pillars of healthcare, delivering advanced medical treatment with compassion and dedication. With a legacy of excellence and a team of experienced doctors, nurses, and medical professionals, we are committed to providing world-class care to every patient. Our modern facilities, state-of-the-art diagnostics, and 24×7 emergency services ensure that quality treatment is always within reach. At RG Kar, we believe in healing with empathy—where every life matters, every patient receives personal attention, and every step of care is guided by integrity and expertise.</span>
              </div>
            </div>




            <div
              className=" max-w-[1600px] m-auto flex flex-col justify-end mt-20 gap-10" >
              {/* ad area  */}
              <div className=" w-[80%] m-auto ">
                <img
                  className=" object-cover flex border w-full rounded-2xl overflow-hidden border-blue-700 shadow-fuchsia-600 shadow-[0px_0px_30px_2px] hover:shadow-emerald-500 hover:drop-shadow-2xl"
                  src="/src/assets/Promotion/EnfenEra.png" />
              </div>



              
{/* ----------------------------------- */}
{/* the INFENERA next wave box */}
{/* ----------------------------------------- */}
              <div className=" w-full h-full">
                <Infenera />

              </div>



            </div>




          </div>





        </div>
      </div> {/*main dev*/}
    </>
  );
}

export default Home;