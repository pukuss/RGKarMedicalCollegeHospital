import { AmpersandsIcon, ArrowBigLeft, ArrowBigRight, ArrowRight, Book, DonutIcon, EqualApproximatelyIcon, FilterX, Goal, IdCard, Rocket, SquareChevronDown, SquareChevronUpIcon, Verified } from "lucide-react";
import Addmition_status from "../page_comp/addmition/Addmition_status";
import instaFeed from "../Api/InstaFeed";

function Addmition() {
  setTimeout(() => {
    
  }, 5000);
  const {Postdata} = instaFeed()

  
  console.log(Postdata);
  

  const USERITEM = ["NURSING" , "DOCTOR" , "D-FHARMA" , "SURGENT"]
  const COURSE = [
    {name: "NURSING", course:"ANM GNM B.sc", year: "2 Years , 3.5 Years , 4 ", elegiblity: " 10+2 BIO-SCIENCE (PCB)"  },
    {name: "DOCTOR -MBBS", course:"MBBS", year: "5.5 Years 4.5 + 1 Year Internship", elegiblity: "10+2 NEET UG&PG (PCB)"},
    {name: "DIPLOMA IN PHARMA", course: "D-PHARMA,B-PHARMA" , year: "2 Years , 3 Years" , elegiblity: "10+2 (PCB)"},
    {name: "SURGEON", course: "MBBS , MS/Mch " ,year: "5.5 Years , 3.5 Years", elegiblity: "NEET UG&PG" },
  ]
console.log(COURSE);


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
              <span className="font-black ">
                INFEN
              </span>
              <span className="font-black text-purple-800">
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
                    <span className="animate-slideDown flex gap-2 font-extrabold text-4xl text-white md:text-7xl">ADDMITION <p className="text-amber-400">OPEN</p></span>
                    <span className="font-extrabold not-md:text-[10px] animate-slideDown text-purple-500">  CarePlus Multispeciality Medicale College & Hospital </span>
                  </div>
                  <div className=" text-2xl not-md:text-[16px] font-black md:items-start flex flex-col">
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



              <div className=" animate-slideDown w-full h-full  grid  gap-1 rounded-2xl">
                <div className="grid  h-full gap-3 bg-blac backdrop-blur-lg rounded-xl p-5 ">
                  {/* {
                    USERITEM.map((element)=> {
                      return <div 
                      className="border rounded-xl cursor-pointer font-alluser   not-md:text-[12px]   flex justify-center items-center bg-purple-500/10 backdrop-blur-lg hover:bg-green-400/30 transition-all delay-150 ">
                        {element}</div>
                    })
                  } */}

                  {
                    COURSE.map((element,index)=>{
                      return(
                        <div key={index} className=" hover:border-amber-500  grid auto-rows-[minmax(40px,auto)]  group rounded-2xl bg-linear-to-br from-zinc-900 to-black border border-white/10 italic p-2">
                          <div className=" flex justify-between px-2 font-black items-center">
                            <h1 className="flex items-center gap-2"><Rocket size={15} /> {element.name}</h1>
                            <h6>bill</h6>
                          </div>
                          <h6 className="border gap-2 border-amber-300 max-w-max px-5 h-7 rounded-4xl group-hover:bg-amber-400/50 font-black bg-black/50 ml-2 items-center flex text-[12px]">
                          <Book size={15} color="gold"/> 
                          {element.course}</h6>

                          <div className="font-alluser text-amber-400 text-[12px] grid justify-items-end px-5 p2 ">
                            <h3><label className="text-amber-50 " htmlFor="">DURATION : </label>  {element.year}</h3>
                             <h3><label className="text-amber-50" htmlFor="">DURATION : </label>  {element.year}</h3>
                          </div>

                        </div>
                      );
                    })
                  }
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

      {/* <Addmition_status /> */}
      {/* <Register /> */}


    </>
  );
}


export default Addmition;
