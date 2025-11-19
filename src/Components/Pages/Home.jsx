import React from 'react'
import { RG_Kar_Hospital_lgo } from '../../assets/Assets'
import Logo from '../../assets/RGKar_Logo'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className=''>
{/* Background video  */}
                <div className=' w-screen relative  shadow-emerald-400'>
                  <video
                  autoPlay
                  muted
                  loop
                  className='w-full object-cover h-screen ' src="/bg video/bgvideo.mp4">fvbxcvb</video>
                </div>
      <div className=' absolute  w-screen top-10 md:top-18 m-auto'>
        <div className=' m-auto border max-w-[1400px] w-full '>
          
          <div className='flex justify-between items-center pr-10'> 
            <span><Logo /></span>
            <div 
            className='text-gray-600 text-3xl text-shadow-[0px_0px_1px] text-shadow-blue-400 font-bold italic'>
  RG Kar Medicale College & Hospital

  <div>
    <Link class="relative inline-block text-[12px] group">
    <span class="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-2 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative after:content-['>'] ">addmition & exam  </span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
  </div>


  </div>
          </div>


        </div>
      </div>

      <div className='bg-amber-500 h-screen'></div>  
    </div>
    </>
  )
}

export default Home
