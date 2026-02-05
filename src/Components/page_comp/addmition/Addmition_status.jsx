import React from 'react'
import { AlignHorizontalDistributeCenter, BugPlay, CircleArrowOutDownLeftIcon, FileQuestionIcon, IdCard ,MailQuestion,PoundSterling,QuoteIcon,Redo,Verified } from 'lucide-react'

function Addmition_status() {
  return (
    <>
      <div className=''>
        <div>
          <div
          className='w-full flex  gap-5 px-5 font-black py-3 rounded-2xl border italic bg-gray-900'>
            
            <div className='flex border-r-3 px-5 '><Redo /> <h3>ADDMITION STATUS</h3></div>
            <div className=' flex justify-between'>
                <ul className=' px-5 flex gap-8 justify-center items-center'>
                  <li className='flex items-center gap-2'><MailQuestion size={20} /> ABOUT</li>
                  
                  <li className='flex text-[12px] text-nowrap flex-wrap items-center justify-between gap-1 '>
                    <h3>CMMH HOSPITAL</h3>
                    <span className='text-nowrap flex justify-center items-center'>
                    <p>MEDI</p><p className='text-amber-500'>PLUS+</p>
                    </span>
                  </li>
                </ul>
       {/* IN FEATURE I SHOUD BE UPDATE SOON         <ul>
                  <li></li>
                </ul> */}
            </div>
          </div>


          <div className='border rounded-2xl'>
            

          </div>



        </div>

      </div>
    </>
  )
}

export default Addmition_status
