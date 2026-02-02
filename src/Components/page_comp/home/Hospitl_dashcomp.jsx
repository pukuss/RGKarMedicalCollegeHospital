import { div } from "framer-motion/client";
import { LetterText } from "lucide-react";
import React, { useState } from "react";

function Hospitl_dashcomp() {
  const Item = [
    "🧭 Emergency",
    "💉 Surgery",
    " 💅 Long-term care",
    "👩‍👧‍👦 Family treatment",
    "💜 Critical cases",
  ];
  const [useItem, setUseItem] = useState(null);
  const [active, setActive] = useState("");

  const userUI = () => {
    switch (useItem) {

      // EMERGENCY ===========================================
      case 0:
        return (
          <div className="h-full bg-gray-100  text-black p-2">
  {/* Contact Bar */}
  <div className="text-black not-md:text-[10px] flex justify-between font-bold bg-white w-full text-[12px] items-center ">
    <div className="flex justify-center gap-2 items-center ">
      <LetterText className="p-1  rounded-lg bg-gray-400" />
      prashantaa007@gmail.com
    </div>
    <div>+91 8945512739</div>
  </div>

  {/* Emergency Status */}
  <div className="bg-white text-[16px] flex justify-between p-2 mt-2  not-md:mt-0.5 rounded-lg items-center">
    <div className="font-alluser text-red-600">EMERGENCY</div>
    <div className="bg-red-100 text-red-700 w-2/3 rounded-[10px] p-2 text-center text-[12px]">
      Available 24×7 Emergency Support
    </div>
  </div>

  {/* Emergency Action */}
  <div className="bg-white mt-2 rounded-lg">
    <div className="border-b border-t m-4  not-md:m-0.5 p-3 border-gray-500/50">
      <div className="flex not-md:flex-wrap justify-between items-center not-md:justify-center gap-2">
        <div className="text-[14px] not-md:text-[12px] font-semibold text-gray-700">
          Book Your Emergency Service Now
        </div>

        <button
          type="button"
          className="px-16 not-md:px-10 not-md:text-[14px]
          flex items-center justify-center bg-red-500 rounded-lg p-2
          text-white text-[18px] hover:bg-red-600 transition-all
          font-alluser">
          BOOK UNIT
        </button>
      </div>

      <div className="text-[9px] mt-2 text-gray-500 text-center">
        Report any emergency issue via email or call immediately.
      </div>
    </div>
  </div>
</div>

        );
        break;


        // SURGERY===================================
      case 1:
        return (
          <div className="h-full bg-amber-200 p-2 text-black">
  {/* Contact Bar */}
  <div className="text-black not-md:text-[10px] flex justify-between p-2 font-bold bg-white w-full text-[12px] items-center rounded-2xl">
    <div className="flex justify-center items-center gap-2">
      <LetterText className="p-1 rounded-lg bg-gray-400" />
      prashantaa007@gmail.com
    </div>
    <div>+91 8945512739</div>
  </div>

  {/* Surgery Status */}
  <div className="bg-white text-[16px] flex justify-between p-2 mt-2  not-md:mt-0.5 rounded-lg items-center">
    <div className="font-alluser text-amber-700">SURGERY</div>
    <div className="bg-gray-400/50 w-2/3 rounded-[10px] p-2 text-center text-[12px]">
      Available for 24×7 Surgical Care
    </div>
  </div>

  {/* Surgery Action */}
  <div className="bg-white mt-2  not-md:mt-0 rounded-lg">
    <div className="border-b border-t m-5  not-md:m-0.5 p-5 border-gray-500/50">
      <div className="flex not-md:flex-wrap justify-between items-center not-md:justify-center gap-2">
        <div className="text-[14px] not-md:text-[12px] font-semibold text-gray-700">
          Book Your Surgery Consultation
        </div>

        <button
          type="button"
          className="px-20 not-md:px-12 not-md:text-[16px]
          flex justify-center items-center bg-amber-400/70 rounded-lg p-2
          text-blue-600 text-[20px] hover:bg-amber-500 transition-all
          font-alluser hover:text-white">
          BOOK UNIT
        </button>
      </div>

      <div className="text-[9px] mt-2 text-gray-500 text-center">
        Report any surgery-related issue via email or contact support.
      </div>
    </div>
  </div>
</div>

        );
        break;



        // LONG TERM CAER ==================================
      case 2:
        return (
         <div className="h-full bg-teal-200 p-2 text-black">
  {/* Contact Bar */}


  {/* Long-Term Care Status */}
  <div className="bg-white text-[16px] flex justify-between p-1 not-md:mt-0 rounded-lg items-center not-md:text-[12px]">
    <div className="font-alluser text-teal-700">
      LONG-TERM CARE
    </div>
    <div className="bg-teal-300/60 w-2/3 rounded-[10px] p-1 text-center text-[12px]">
      Continuous Care • 24×7 Support
    </div>
  </div>

  {/* Care Details */}
  <div className="bg-white  rounded-lg">
    <div className="border-b border-t  not-md:m-0.5 p-1 border-gray-500/50">
      
      <p className="text-[13px] not-md:text-[7px] text-gray-600 leading-relaxed">
        Dedicated long-term medical care for chronic illness, elderly patients
        and post-surgery recovery. Our team ensures continuous monitoring,
        comfort and personalized treatment for better quality of life.
      </p>

      <div className="grid grid-cols-2 not-md:grid-cols-1 gap-3 not-md:gap-0.5 mt-3 text-[12px] not-md:text-[9px] text-black">
        <div className="bg-teal-100 rounded-lg p-1">
          🩺 Chronic Disease Management
        </div>
        <div className="bg-teal-100 rounded-lg p-1">
          👵 Elderly & Assisted Care
        </div>
        <div className="bg-teal-100 rounded-lg p-1">
          🏠 Home Nursing & Monitoring
        </div>
        <div className="bg-teal-100 rounded-lg p-1">
          🔄 Post-Surgery Recovery Care
        </div>
      </div>

      <div className="flex not-md:flex-col justify-between items-center ">
        <div className="text-[8px] text-gray-500">
          Compassionate care designed for long-term health and comfort.
        </div>

        <button
          type="button"
          className="px-14 not-md:px-10 not-md:p-1 not-md:text-[13px]
          bg-teal-400/80 rounded-lg p-2 text-white text-[16px]
          hover:bg-teal-500 transition-all font-alluser">
          Request Long-Term Care
        </button>
      </div>

    </div>
  </div>
</div>

        );

        break;



        // FAMELY TRETMENT=========================
      case 3:
        return (
          <div className=" h-full bg-white p-3 shadow-sm">
  {/* Header */}
  <div className="flex justify-between items-center flex-wrap gap-2">
    <h2 className="text-[18px] font-bold text-gray-800 font-alluser">
      Family Treatment
    </h2>
    <span className="text-[12px] bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
      All Age Care
    </span>
  </div>

  {/* Description */}
  <p className="text-[13px] text-gray-600 not-md:mt-0 leading-relaxed not-md:text-[9px]">
    Comprehensive healthcare services for the whole family — children,
    adults and elders. Focused on preventive care, regular checkups
    and personalized treatment plans.
  </p>

  {/* Services */}
  <div className="grid grid-cols-2 not-md:grid-cols-1 gap-2 not-md:gap-0.5  mt-3 not-md:mt-0 text-[12px] not-md:text-[9px] text-black">
    <div className="bg-amber-300/60 rounded-lg p-2">
      👶 Child & Pediatric Care
    </div>
    <div className="bg-amber-300/60 rounded-lg p-2">
      🧑 Adult Health Checkups
    </div>
    <div className="bg-amber-300/60 rounded-lg p-2">
      👵 Elderly & Geriatric Care
    </div>
    <div className="bg-amber-300/60 rounded-lg p-2">
      🏥 Preventive Family Treatment
    </div>
  </div>

  {/* Action */}
  <div className="flex justify-between items-center mt-4 not-md:mt-0 not-md:flex-col gap-2 not-md:gap-0">
    <p className="text-[11px] text-gray-500">
      Trusted healthcare for your entire family.
    </p>

    <button
      type="button"
      className="px-8 py-2  not-md:py-0 rounded-xl bg-amber-400 text-black text-[14px]
      hover:bg-amber-500 transition-all font-alluser">
      Book Family Care
    </button>
  </div>
</div>

        );
        break;



        // CRITICAL CASES ===================================
      case 4:
        return(
          <div className="h-full bg-purple-200 p-2 text-black">
  {/* Contact Bar */}
  <div className="text-black not-md:text-[10px] flex justify-between p-2 font-bold bg-white w-full text-[12px] items-center rounded-2xl">
    <div className="flex justify-center items-center gap-2">
      <LetterText className="p-1 rounded-lg bg-gray-400" />
      prashantaa007@gmail.com
    </div>
    <div>+91 8945512739</div>
  </div>

  {/* Critical Status */}
  <div className="bg-white text-[16px] flex justify-between p-2 mt-2  not-md:mt-0.5 rounded-lg items-center">
    <div className="font-alluser text-purple-700">
      CRITICAL CASES
    </div>
    <div className="bg-purple-300/60 w-2/3 rounded-[10px] p-2 text-center text-[12px]">
      24×7 Intensive & Emergency Critical Care
    </div>
  </div>

  {/* Critical Action */}
  <div className="bg-white mt-2  not-md:mt-0.5 rounded-lg">
    <div className="border-b border-t m-5  not-md:m-0  not-md:p-2.5 p-3 border-gray-500/50">
      <div className="flex not-md:flex-wrap justify-between items-center not-md:justify-center gap-2">
        <div className="text-[14px] not-md:text-[12px] font-semibold text-gray-700">
          Immediate Support for Life-Threatening Conditions
        </div>

        <button
          type="button"
          className="px-20 not-md:px-12 not-md:text-[16px]
          flex justify-center items-center bg-purple-400/70 rounded-lg p-2
          text-purple-800 text-[20px] hover:bg-purple-500 transition-all
          font-alluser hover:text-white">
          REQUEST ICU
        </button>
      </div>

      <div className="text-[9px] mt-2 text-gray-500 text-center">
        Please contact immediately for cardiac, trauma, stroke or ICU cases.
      </div>
    </div>
  </div>
</div>

        );
        break;

      default:
        return (
          <div className="h-full bg-purple-200 p-2 text-black">
  {/* Contact Bar */}
  <div className="text-black not-md:text-[10px] flex justify-between p-2 font-bold bg-white w-full text-[12px] items-center rounded-2xl">
    <div className="flex justify-center items-center gap-2">
      <LetterText className="p-1 rounded-lg bg-gray-400" />
      prashantaa007@gmail.com
    </div>
    <div>+91 8945512739</div>
  </div>

  {/* Critical Status */}
  <div className="bg-white text-[16px] flex justify-between p-2 mt-2  not-md:mt-0.5 rounded-lg items-center">
    <div className="font-alluser text-purple-700">
      CRITICAL CASES
    </div>
    <div className="bg-purple-300/60 w-2/3 rounded-[10px] p-2 text-center text-[12px]">
      24×7 Intensive & Emergency Critical Care
    </div>
  </div>

  {/* Critical Action */}
  <div className="bg-white mt-2  not-md:mt-0.5 rounded-lg">
    <div className="border-b border-t m-5  not-md:m-0  not-md:p-2.5 p-3 border-gray-500/50">
      <div className="flex not-md:flex-wrap justify-between items-center not-md:justify-center gap-2">
        <div className="text-[14px] not-md:text-[12px] font-semibold text-gray-700">
          Immediate Support for Life-Threatening Conditions
        </div>

        <button
          type="button"
          className="px-20 not-md:px-12 not-md:text-[16px]
          flex justify-center items-center bg-purple-400/70 rounded-lg p-2
          text-purple-800 text-[20px] hover:bg-purple-500 transition-all
          font-alluser hover:text-white">
          REQUEST ICU
        </button>
      </div>

      <div className="text-[9px] mt-2 text-gray-500 text-center">
        Please contact immediately for cardiac, trauma, stroke or ICU cases.
      </div>
    </div>
  </div>
</div>
        );
        break;
    }
  };

  return (
    <>
      <div className="w-full  bg-black flex h-60 transition-all delay-300  ">
        <div className=" h-full w-[30%] md:w-[25%] not-md:text-[14px] gap-1.5 border-r-2 p-1  flex flex-col  justify-center items-start border-purple-950 ">
          {Item.map((element, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("index", useItem, "useitem", useItem);
                  setUseItem(index);
                }}
                className={`
                            ${index === useItem ? "bg-gray-900 border border-pink-600 transition-all delay-150" : "bg-[#02021f]"}
                            w-full p-1 font-alluser font-extrabold rounded-[5px] flex pl-2 py-2  cursor-pointer hover:bg-gray-900`}>
                {element}
              </div>
            );
          })}
        </div>

        <div className="bg-amber-950 w-[70%] md:w-[85%] rounded-[5px] ">
          {userUI()}
        </div>
      </div>
    </>
  );
}

export default Hospitl_dashcomp;
