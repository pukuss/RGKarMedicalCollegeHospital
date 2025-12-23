import React, { useState } from 'react'
// import { EnrollProvider } from '../../Context/Enroll'
import { AccountProvider } from '../../page_comp/enroll/accountContex'
import { LucideSidebar, User2 } from 'lucide-react'



import Account from '../../page_comp/enroll/Account'
import EnrolForm from '../../page_comp/enroll/EnrolForm'

 
function Enrolment() {
  const [user , setuser] = useState("dsd")




  return (
    <AccountProvider value={{user}} >
      


      <div className=' w-full h-screen bg-cover bg-center relative top-10 md:top-16' style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/230744/pexels-photo-230744.jpeg')",
      }}>
        <div className='border relative  max-w-[1600px] m-auto'>

          <div className='bg-gray-700/30  rounded-[5px] flex justify-center not-md:flex-wrap not-sm:flex-wrap md:m-10 sm:m-2 m-2 '>

            {/* White backgroud box side  */}
            <div className=' relative bg-amber-50/10 border w-full rounded-[10px_0px_0px_10px] not-md:rounded-[10px] hover:border-2 hover:border-indigo-700'>
              <div className=' absolute shadow-indigo-400 shadow-[40px_50px_200px_70px] top-50 left-40 rounded-full'></div>

              <div className=' relative h-10 m-2 font-extrabold flex justify-between px-5 items-center gap-3 text-2xl '>
                <div><span>ADDMITION</span> <span>OPEN</span> <span className='font-sans text-red-600'>NOW</span></div>
                <div>{Account ? <User2 /> : <User2 />}</div>
              </div>


              {/* From  */}
              <div className=' border m-2 '>
                <EnrolForm />
              </div>
            </div>







            {/* black backgroud box side  */}
            <div className='bg-black w-full rounded-[0px_10px_10px_0px] relative h-120' >
              <div className=' absolute -bottom-35 -right-18 '
              ><img className=' w-80'
               src="https://cdn.pixabay.com/photo/2025/09/10/12/57/ai-generated-9826352_960_720.png" alt="" /></div>
            </div>
          </div>

        </div>
      </div>
    </AccountProvider>
  )
}

export default Enrolment
