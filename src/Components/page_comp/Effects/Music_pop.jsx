import { Music3Icon } from "lucide-react";
import React, { useRef, useState } from "react";
import useGithubApi from '../../Api/Github'
function Music_pop({img}) {
    const {GithubApiData} = useGithubApi()
    const [showPopup, setShowPopup] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    console.log(GithubApiData);
    
    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative">

            {/* Button */}
            <div
                onClick={() => {
                    setShowPopup(prev => !prev);
                    
                }}
                className="cursor-pointer p-5 rounded-full 
        bg-linear-to-r from-sky-400 to-purple-500">

                <Music3Icon />
            </div>

            {/* Popup */}
            {showPopup && (
                <div
                    style={{
                            backgroundImage:
                                "url('https://i.pinimg.com/1200x/a6/60/6f/a6606f6ec8abf4aa36f43dbf31dbcd24.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    onClick={toggleMusic}
                    className="fixed bottom-8 w-70 flex gap-5  right-25 bg-pink-400  rounded-2xl p-5  shadow-[inset_0_5px_205px_rgba(0,0,0,0.7)]">
                    
                    <div className="">
                        <div className=" rounded-2xl ">
                            <img className="h-20 rounded-2xl" src={GithubApiData?.avatar_url} alt="" />
                        </div>
                    </div>
                    <p className="text-white text-sm border h-6 px-5 rounded-2xl">
                        {isPlaying ? "Playing..." : "Paused"}
                    </p>
                </div>
            )}

            {/* Audio ALWAYS mounted */}
            <audio
                loop
                ref={audioRef}
                src="/bg_video/Or_saha_na_jaye.mp3"
            />

        </div>
    );
}

export default Music_pop;
