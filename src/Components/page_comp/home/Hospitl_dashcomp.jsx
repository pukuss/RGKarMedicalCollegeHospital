import { div } from 'framer-motion/client';
import React, { useState } from 'react'

function Hospitl_dashcomp() {
  
  const Item = ["🧭 Emergency" , "💉 Surgery", " 💅 Long-term care" ,"👩‍👧‍👦 Family treatment" ,"💜 Critical cases"];
  const [useItem , setUseItem] = useState(null)
  const [active , setActive] =  useState("")

  const userUI = ()=>{switch (useItem) {
    case 0:
      return (
        <div>
          hello 1
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
        <div className='w-full h-60 bg-black flex transition-all delay-300 '>

          <div className='  w-[30%] md:w-[25%] h-full p-1'>
                <div className=' h-full w-full not-md:text-[14px] gap-1.5 border-r-2 p-1  flex flex-col justify-center items-start border-purple-950'>
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
