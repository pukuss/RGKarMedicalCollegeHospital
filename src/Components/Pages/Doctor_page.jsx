import React from 'react'
import User_dr_comp from '../page_comp/doctor_dash/User_dr_comp'
import Music_pop from '../page_comp/Effects/Music_pop'

function Doctor_page() {
  return (
    <>
    <div
        className=" relative md:top-16 top-10 h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/bg_video/cmmh.png')",
        }}>

          {/* -------------Herocu section--------------------->> */}
          <div className=" h-[80vh] md:p-5 max-w-[1600px] m-auto ">
          <User_dr_comp />
          
          </div>


          <div className=' fixed bottom-5 not-md:right-10 right-5'>
            <Music_pop />
          </div>
    </div>
    </>
  )
}

export default Doctor_page
