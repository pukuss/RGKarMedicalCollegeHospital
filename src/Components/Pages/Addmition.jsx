import {
  AmpersandsIcon,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowRight,
  Book,
  DonutIcon,
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

                  <div>
                    <button
                      className="border font-black border-pink-600 m-1 flex gap-5 justify-center items-center px-10 not-md:px-5 rounded-[5px] bg-purple-600/50"
                      type="button">
                      <span>VISIT OUR COURSE</span>
                      <span className="border rounded-full p-2 not-md:p-0 m-1 bg-white/20">
                        {" "}
                        <ArrowBigRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className=" animate-slideDown w-full h-full  grid  gap-1 rounded-2xl">
                <div className="grid  h-full gap-3 bg-blac backdrop-blur-lg rounded-xl p-5 ">


                  {COURSE.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className=" relative z-10 hover:border-amber-500   grid auto-rows-[minmax(40px,auto)]  group rounded-2xl bg-linear-to-br from-zinc-900 to-gray-800 border border-purple-400 italic p-2">
                        <div className=" flex  justify-between px-2 font-black items-center">
                          <h1 className="flex items-center gap-2">
                            <Rocket color="skyblue" size={15} /> {element.name}
                          </h1>
                          <h6 
                            className="text-transparent bg-clip-text bg-linear-to-r from-sky-50 to-blue-400">
                            Rupis
                          </h6>
                          <div className=" absolute bg-amber-400 shadow-amber-500  shadow-[50px_30px_80px_15px] -z-10"></div>
                        </div>
                        <h6 className=" gap-2 border-purple-500/20 border max-w-max px-5 h-7 rounded-4xl group-hover:bg-lime-600/20 font-black bg-blue-400/10 ml-2 items-center flex text-[12px]">
                          <Book size={15} color="gold" />
                          {element.course}
                        </h6>

                        <div className=" text-amber-400 text-[12px] grid justify-items-end px-5 p2 border border-amber-50/10 rounded-xl bg-black/20">
                          <h3>
                            <label className="text-amber-50 " htmlFor="">
                              DURATION :{" "}
                            </label>{" "}
                            {element.year}
                          </h3>
                          <h3>
                            <label className="text-amber-50" htmlFor="">
                              DURATION :{" "}
                            </label>{" "}
                            {element.year}
                          </h3>
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



        <div className="mt-20 max-w-[1600px] m-auto ">
          <div>
            <Addmition_status />
          </div>

        </div>

    </>
  );
}

export default Addmition;
