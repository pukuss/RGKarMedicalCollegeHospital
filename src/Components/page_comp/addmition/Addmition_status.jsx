import React from 'react'
import { IdCard ,Verified } from 'lucide-react'

function Addmition_status() {
  return (
    <>
      <div className='border'>
        
      <div className="border opacity- relative z-0 animate-slideDown  mt-15 md:mt-20 max-w-[1600px] m-auto h-[80vh] my-5  bg-cover bg-center bg-no-repeat   contrast-110 rounded-2xl
    saturate-110 "
          style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/top-view-see-through-leaf-texture_23-2148678486.jpg?t=st=1767633465~exp=1767637065~hmac=177b150a17eb07b2f0084a007022dfda868b4436fc33b3fd694f7698d4356c36&w=1060')",
          
        }}
       >

        <div className=" h-10 m-5 text-purple-600 flex justify-between items-center px-5 font-alluser">
          <div> 
            <img
              className="h-10 w-10 flex justify-center items-center"
             src="https://png.pngtree.com/png-clipart/20230930/original/pngtree-nurse-png-image_13019516.png"
            alt=""
            /></div>
          <div className="flex gap-3 items-center" >
            doctor UNIT V2V <IdCard  color="red"/> </div>
        </div>


        <div className=" flex gap-20 justify-between font-alluser text-orange-500/60 bg-amber-300/20 py-2 md:mx-4 rounded-2xl">
          <div className="flex md:gap-5 not-md:text-[12px]  not-md:w-1/2 gap-3 justify-center items-center flex-nowrap md:ml-10  text-purple-600">
            <span>APPLICATION STATUS</span>
            <span>STATE</span>
          </div>
          <div className="not-md:text-[12px]">
            CarePlus Multispeciality Medicale College & Hospital SAFTY V2V Service
          </div>
        </div>


        {/* VERSION CONTROL SECURITY ========================================================== */}
        <div className=" font-alluser text-blue-600/50 items-center m-5 flex gap-2 justify-end not-md:text-[12px]">
         V2V -2.O  security system <Verified color="blue"/>
        </div>





      </div>
      </div>
    </>
  )
}

export default Addmition_status
