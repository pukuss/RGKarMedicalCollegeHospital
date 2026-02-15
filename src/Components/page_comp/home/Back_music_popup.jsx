import { Play as PlayIcon, Pause } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function Back_music_popup() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [hide , setHide] = useState("")
    const audioRef = useRef(null);



  const playMusic = () => {
    audioRef.current.play();
  };

  const pauseMusic = () => {
    audioRef.current.pause();
  };

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopUp(true);
    }, 3000);

    const SLIDEOFF = setTimeout(() =>{
        setHide("hidden")
    }, 15000)

    const closeTimer = setTimeout(() => {
      setOpenPopUp(false);
    }, 168000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      clearTimeout(SLIDEOFF);
    };
  }, []);

  console.log(hide);
  
  return (
    <>
      {openPopUp && (
        <div
        style={{backgroundImage: `url('https://i.pinimg.com/736x/6d/bb/bf/6dbbbf96777bdf8f286ee2f669b18eda.jpg')`,
           backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        }}
         className={` backdrop-blur-md transition-all duration-500 ease-out bg-black italic rounded-2xl p-3 fixed bottom-10 left-5 text-[#fefaae] z-50 ${hide} shadow-inner shadow-black`}>
          <audio
            ref={audioRef}
            src="/bg_video/i_will_allaws _find_you.mp3"
            preload="auto"
          />

          <h1 className="text-sm mb-2 font-alluser">
            🎧 Get a better experience with music
          </h1>

          <div className="flex gap-3">
            <button onClick={playMusic}>
              <PlayIcon />
            </button>
             <h5 className="text-white font-black">I Will Allaws Find You</h5>
          </div>
        </div>
      )}
    </>
  );
}

export default Back_music_popup;
