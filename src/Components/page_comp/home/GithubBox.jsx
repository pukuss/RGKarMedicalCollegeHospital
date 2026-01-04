import React from "react";
import GemeniBar from "../Effects/GemeniBar";
import { User } from "lucide-react";
import { div } from "framer-motion/client";


function GithubBox({GithubApiDeta}) {
     console.log(GithubApiDeta);
     
    return (
        <>
            <div
                className="bg-black/50 h-100 relative -top-2.5 max-w-[1600px] multi-color-border-box
                m-auto  rounded-b-3xl 
                animate-slideDown
                transition-all duration-300 p-5">
                <div className="">
                    <GemeniBar  />
                </div>
                <div className=" h-20  flex items-center justify-between  ">
                    <span className="flex justify-center items-center text-black  font-bold text-2xl">
                        <img
                            width="35"
                            height="35"
                            src="https://img.icons8.com/?size=100&id=vjqZo0sZlesU&format=png&color=000000"
                            alt="github"
                        />
                        <img
                            src="https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png"
                            alt=""
                            width={50}
                        />
                    </span>

                    <div className="pr-3">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 transition-all delay-150  text-white font-bold py-2 px-8 hover:border border-purple-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            onClick={() => console.log("clicked")}>
                            SingIn
                        </button>
                    </div>
                </div>

                {/* Dropdown box content-------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>  */}
                <div className=" rounded-2xl w-full relative  flex items-start justify-center  flex-col">
                    <div className="flex not-md:text-[12px] text-[16px] flex-col w-full">
                        
                        <div
                            className="h-20 w-20 sm:h-25 sm:w-25 p-1 rounded-full m-3 "
                            style={GithubApiDeta?.avatar_url?{
                                background:
                                    "linear-gradient(135deg, green,green,yellow,yellow,#FF1493,purple,purple,red,red )",
                            }:{background : "black"} 
                            }>


                            {GithubApiDeta?.avatar_url ? (
                                <span className="  h-25 w-25 rounded-full relative ">
                                    <img
                                        src={GithubApiDeta?.avatar_url}
                                        className=" rounded-full"
                                        alt=""
                                        srcset=""
                                    />
                                    <img
                                        className=" absolute bottom-3 left-2"
                                        src="https://www.gstatic.com/marketing-cms/assets/images/c5/3a/200414104c669203c62270f7884f/google-wordmarks-2x.webp=n-w150-h48-fcrop64=1,00000000ffffffff-rw"
                                        alt=""
                                        width={10}
                                    />
                                </span>
                            ) : (
                                <div className="border-3  border-b-indigo-500 border-t-pink-500 w-full h-full rounded-full flex justify-center items-center">
                                    <User size={30} color="lightgreen"/>
                                </div>
                            )}
                        </div>

                        <div className="w-full flex justify-center flex-col  gap-2">
                            <span className=" font-bold uppercase bg-linear-to-r from-white/20 to-black/30 rounded-[10px] flex p-2 hover:bg-blue-600">
                                Github ID :{GithubApiDeta?.id}
                            </span>

                            <span className=" font-bold uppercase bg-linear-to-r from-white/20 to-black/30 rounded-[10px] flex p-2 ">
                                User Name : {GithubApiDeta?.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GithubBox;
