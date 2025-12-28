import React from 'react'

function Hospitl_dashcomp() {
  return (
    <>
        <div className='w-full border bg-black flex'>
            <div className='bg-gray-500 w-[30%] md:w-[15%] h-full p-2'>
                <div className='border h-full w-full not-md:text-[14px] gap-3  flex flex-col justify-center items-start '>
                    
                    <div className='bg-white/20 w-full p-1 font-alluser font-extrabold rounded-[5px] flex pl-2 cursor-pointer hover:bg-sky-300/50'>
                    🧭 Emergency
                    </div>
                    
                    <div className='bg-white/20 w-full p-1 font-alluser font-extrabold rounded-[5px] flex pl-2 cursor-pointer hover:bg-sky-300/50'>
                    💉 Surgery
                    </div>
                    
                    <div className='bg-white/20 w-full p-1 font-alluser font-extrabold rounded-[5px] flex pl-2 cursor-pointer hover:bg-sky-300/50'>
                    💅 Long-term care
                    </div>
                    
                    <div className='bg-white/20 w-full p-1 font-alluser font-extrabold rounded-[5px] flex pl-2 cursor-pointer hover:bg-sky-300/50'>
                    👩‍👧‍👦 Family treatment
                    </div>
                    
                    <div className='bg-white/20 w-full p-1 font-alluser font-extrabold rounded-[5px] flex pl-2 cursor-pointer hover:bg-sky-300/50'>
                    💜 Critical cases
                    </div>
                </div>
            </div>

            <div className='bg-amber-950 w-[70%] md:w-[85%] h-full'>fyff</div>
        </div>
    </>
  )
}

export default Hospitl_dashcomp
