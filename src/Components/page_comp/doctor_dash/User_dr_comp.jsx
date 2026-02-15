import { ID } from "appwrite";
import {
    Activity,
    BiohazardIcon,
    Copy,
    Lasso,
    Timer,
    TimerReset,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function User_dr_comp({
    name = "user",
    avater_Url,
    specialization,
    expriance,
    qualification = "MBBS",
    reg_no,
    hospital,
    OPD_time,
    email = "hospital@gmail.com",
    ID_DR,
    DOB,
    BIO = "hii i am prashanta and this web site created by me ",
    // working_day,
    gru_from,

    last_seen = "00:00",
    DR_active = false,
}) {
    // copy funtion
    const copytext = (text) => {
        navigator.clipboard.writeText(text);
    };

    const advancBox = ["WORKKING DAY'S", "OPD TIME", "EXPRIANCE", "BOOKING"];

    const [render_img, setRnderImg] = useState("");

    useEffect(() => {
        const img = new Image();
        img.src =
            "https://i.pinimg.com/1200x/a6/60/6f/a6606f6ec8abf4aa36f43dbf31dbcd24.jpg";
    }, []);

    return (
        <div className=" font-alluser ">
            <div className="  h-25 gap-5  grid grid-cols-[60px_1fr] items-center p-2">
                <div className=" w-[70px] h-[70px] bg-red-500 flex items-center rounded-xl justify-center">
                    PHOTO
                </div>

                <div className=" h-[70px] justify-items-start p-2 grid grid-rows-2 gap-1 rounded-2xl bg-black/20">
                    <div className="flex gap-10">
                        Name : <span>{name}</span>{" "}
                    </div>
                    <div className="flex gap-4">
                        Specialist : <span>{specialization}</span>
                    </div>
                </div>
            </div>

            {/* Doctor is active or not check section  */}
            <div className=" g flex p-2 text-[12px] gap-5 items-center">
                <Activity size={15} color="red" />
                <h5
                    className={`${DR_active ? "bg-green-500" : "bg-sky-500"} border px-5 rounded-2xl `}>
                    {DR_active ? "Active" : "INACTIVE"}
                </h5>
                <span className="bg-gray-900 flex gap-4  px-4 rounded-2xl">
                    <TimerReset size={15} />
                    {last_seen}
                </span>
            </div>

            <div className=" grid md:grid-cols-2 sm:grid-cols-1 font-alluser">
                <div className=" flex gap-5  p-2">
                    <div
                        style={{
                            backgroundImage:
                                "url('https://i.pinimg.com/1200x/a6/60/6f/a6606f6ec8abf4aa36f43dbf31dbcd24.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className=" border  border-sky-500/50 text-white  shadow-blac flex flex-col flex-1 rounded-xl p-4 gap-3 shadow-[inset_0_5px_205px_rgba(0,0,0,0.7)]">
                        <div className="flex gap-5">
                            <h1>QUALIFICATION : </h1>
                            <h6>{qualification}</h6>
                        </div>

                        <div className="flex gap-5">
                            <h1> EMAIL :</h1>
                            <h6>{email}</h6>
                        </div>

                        <div className="flex gap-5">
                            <h1>Grajuate From :</h1>
                            <h6>{gru_from}AIIMS DILHI</h6>
                        </div>

                        <div className="flex gap-5">
                            <h1>Grajuate From :</h1>
                            <h6>{gru_from}</h6>
                        </div>

                        <div
                            onClick={() => {
                                copytext({ ID_DR });
                            }}
                            className="flex  items-center border  rounded-2xl  px-2  hover:bg-green-400  gap-5 cursor-pointer ">
                            <h1>UID : </h1>
                            <h6>{ID_DR}AIIMS DILHI</h6>
                            <Copy size={15} />
                        </div>

                        <div className="flex gap-5">
                            <h1>DOB :</h1>
                            <h6>{DOB}AIIMS DILHI</h6>
                        </div>
                    </div>

                    {/* section two ============================================== */}
                    <div className=" grid p-2 flex-1 rounded-xl font-alluser">
                        {advancBox.map((element, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        backgroundImage: `url('https://i.pinimg.com/1200x/a6/60/6f/a6606f6ec8abf4aa36f43dbf31dbcd24.jpg')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "bottom",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                    className=" opacity-50 backdrop-blur-lg relative flex justify-center overflow-hidden transition-all   items-center text-2xl h-10 p-6 rounded-xl shadow shadow-black">
                                    <h1>{element}</h1>
                                    <div className="bg-red-500 flex justify-center items-center absolute w-full h-full hover:opacity-100 opacity-0 transition-all duration-200 ">
                                        123
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-gray-800/10 p-3">
                    <div className="border  p-2 rounded-2xl flex gap-8">
                        <div className="flex gap-2 flex-nowrap ">
                            <BiohazardIcon />
                            <h1>BIO </h1>
                        </div>
                        <p>{BIO}</p>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User_dr_comp;
