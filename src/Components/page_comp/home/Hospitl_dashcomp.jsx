import { div } from 'framer-motion/client';
import { LetterText } from 'lucide-react';
import React, { useState } from 'react'

function Hospitl_dashcomp() {
  
  const Item = ["🧭 Emergency" , "💉 Surgery", " 💅 Long-term care" ,"👩‍👧‍👦 Family treatment" ,"💜 Critical cases"];
  const [useItem , setUseItem] = useState(null)
  const [active , setActive] =  useState("")

  const userUI = ()=>{switch (useItem) {
    case 0:
      return (
        <div className='h-full bg-gray-100 p-2 text-black '>
          <div className='text-black not-md:text-[10px] flex justify-between p-2 font-bold bg-white  w-full text-[12px] items-center  rounded-2xl '>
            <div className='flex justify-center items-center gap-2 '>
              <LetterText className=' p-1 rounded-lg  bg-gray-400' /> 
              prashantaa007@gmail.com</div>
            <div>+91 8945512739
            </div>
          </div>


          <div className='bg-white  text-[16px] flex justify-between p-2 mt-2 rounded-lg items-center'>
            <div className='font-alluser'>EMERGENY</div>
            <div className=' bg-gray-400/50 w-2/3 rounded-[10px] p-2' 
            > Availabail For 24x7</div>
          </div>

          <div className='bg-white'>
            <div className='border-b border-t m-5 border-gray-500/50'>
<div className='flex'>
  <div className='border'>R</div>
  <div className='border grid-cols-2'>
    
  </div>
</div>

<div>
  <button className=' border px-20 flex justify-end items-center'
   type="button">BOOK UNIT</button>
</div>
<div></div>
            </div>
          </div>

        </div>
      )
      break;
  
      case 1:
          return (
        <div>
          hello 2
        </div>
      )
        break;
      
      case 2:
        console.log("two");
        break;
      
      case 3:
        console.log("three");
        break;
      
      case 4:
        console.log("four");
        break;
        
        

    default:
      break;
  }};


  
  
  return (
    <>
        <div className='w-full  bg-black flex h-60 transition-all delay-300  '>

                <div className=' h-full w-[30%] md:w-[25%] not-md:text-[14px] gap-1.5 border-r-2 p-1  flex flex-col  justify-center items-start border-purple-950 '>
                    {Item.map((element,index)=>{ 
                        return <div
                          key={index}
                          onClick={()=>{
                            console.log("index",useItem , "useitem", useItem);
                            setUseItem(index)
                          }}
                          className={`
                            ${index === useItem? "bg-gray-900 border border-pink-600 transition-all delay-150": "bg-[#02021f]"}
                            w-full p-1 font-alluser font-extrabold rounded-[5px] flex pl-2 py-2  cursor-pointer hover:bg-gray-900`}>
                        {element}
                        </div>
                    })}
                </div>



            <div className='bg-amber-950 w-[70%] md:w-[85%] rounded-[5px] '>
              {
                userUI()
              }
            </div>
        </div>
    </>
  )
}

export default Hospitl_dashcomp
