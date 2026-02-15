import React, { useEffect, useEffectEvent, useState } from 'react'
import useAccount from './accountContex'
import { Ban, Contact, ShoppingCart, } from 'lucide-react';
import { div } from 'framer-motion/client';
import useFromdata from '../../../appwrite/addmition_conf'


const Courses = [
    "NEET Course", "mbbs", "d.farma", "gnm nursing"
]





function EnrolForm({ SEND_DETA }) {
    const [BamkOffer, setBamkOffer] = useState(false)
    const [usedBankOffer, setusedBankOffer] = useState(false)


    // STORE FORM DETA IN A OBJECT AND EXPORT IT ===============>>> 
    const [User_Enroll_deta, setUser_Enroll_deta] = useState({
        User_Name: "",
        Father_Name: "",
        Addhar_UID: "",
        HSP_Name: "RG Kar Medicale College & Hospital ",
        Contact_Number: "+91",
        nationility: "",
        category: "",
        gender: "",
        neet_UID: "",
        course: "",

    })

    console.log(User_Enroll_deta);



    // erusable event component------------------>>
    function HandelForm(e) {
        const { name, value } = e.target;
        setUser_Enroll_deta((prev) => (
            { ...prev, [name]: value }
        ))
    }

    // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await useFromdata.SEND_ADMI_DATA(User_Enroll_deta);
      alert("Data Sent Successfully ✅");
    } catch (error) {
      console.log("Submit Error:", error);
    }
  };




    const { user } = useAccount()
    // console.log(user);


    return (
        <>

            {/* From  */}
            <div className=' bg-amber-900/0 flex justify-start w-full h-full font-bold text-[16px] not-md:text-[13px] overflow-hidden '>
                <form
                   onSubmit={handleSubmit}
                    action="" className='w-full flex flex-col gap-6 p-5'>

                    {/* -----------------------Name----------------------------- */}
                    <div className='  w-full flex justify-between items-center pl-2' >  {/* name  */}
                        <label htmlFor="username">Name : </label>
                        <input
                            className='border-b  px-1 md:w-[25vw] not-md:w-[50vw] bg-none outline-none bg-white/20 rounded-xl p-2'
                            type="text"
                            placeholder='NAME'
                            name="User_Name"
                            // value={User_Enroll_deta}
                            // onChange={(e)=> setUser_Enroll_Deta((prev)=> {User_Name : e.target.value})}
                            onChange={HandelForm}
                            id="username" />
                    </div>

                    {/* -----------------------Father Name --------------------------------- */}
                    <div className='  w-full flex justify-between items-center pl-2' >  {/* name  */}
                        <label htmlFor="Father_name">Father Name : </label>
                        <input
                            className='border-b px-1 md:w-[25vw] w-[50vw] bg-none outline-0 bg-white/20 rounded-xl p-2'
                            type="text"
                            placeholder='Father Name'
                            name="Father_Name"
                            onChange={HandelForm}
                            id="Father_name" />
                    </div>



                    {/*----------------- Addhar No ------------------------*/}
                    <div className=' w-full flex justify-between items-center pl-2 '>
                        <label htmlFor="Addhar_UID"> Addhar No: </label>
                        <input
                            className='border-b px-1 md:w-[25vw] w-[50vw] outline-0 bg-white/20 rounded-xl p-2'
                            type="text"
                            name='Addhar_UID'
                            inputMode='numeric'
                            maxLength={12}
                            onChange={HandelForm}
                            placeholder="1234 5678 9012"
                            id="Addhar_UID" />
                    </div>


                    {/*---------------------- Hospital Name------------------------------ */}
                    <div className=' w-full flex justify-between  items-center pl-2'>
                        <label htmlFor="HSP">Hospital Name / ID : </label>
                        <input
                            className='border-b px-1 md:w-[25vw] w-[50vw]  outline-0 bg-white/20 rounded-xl p-2'
                            type="text"
                            name="HSP_Name"
                            readOnly
                            value={"RG Kar Medicale College & Hospital "}
                            id="HSP" />
                    </div>

                    {/* ---------------------contact Number---------------------------- */}
                    <div className=' w-full flex justify-between items-center pl-2'>   {/* Hospital Name */}
                        <label htmlFor="Contact_Number">Contact Number : </label>
                        <input
                            className='border-b px-1 md:w-[25vw] w-[50vw]  outline-0  bg-white/20 rounded-xl p-2'
                            type="text"
                            value={User_Enroll_deta.Contact_Number}
                            name="Contact_Number"
                            placeholder='Phone Number'
                            onChange={HandelForm}
                            id="Contact_Number" />
                    </div>

                    {/* --------------------------Nationality---------------------------- */}
                    <div className=' w-full flex justify-between items-center pl-2'>   {/* Hospital Name */}
                        <label htmlFor="Nationality">Nationality : </label>
                        <select className='p-2 outline-0 bg-white/20 rounded-xl'
                            onChange={HandelForm}
                            name="nationility"
                            id="Nationality" >
                            <option value="Nationality">Nationality</option>
                            <option value="india">Indian</option>
                            <option value="bangladesh">BanglaDesh</option>
                            <option value="nepal">Nepal</option>
                            <option value="italy">Italy</option>
                        </select>
                    </div>

                    {/* -------------------------Category-------------------------------------- */}
                    <div className=' w-full flex not-md:text-[12px] justify-between items-center pl-2'>   {/* Hospital Name */}
                        <label htmlFor="Category">Category / SC ST OBC : </label>
                        <select className=' bg-white/20 rounded-xl  p-2 outline-0'
                            name="category"
                            onChange={HandelForm}
                            id="Category" >
                            <option value="none">SC / ST / OBC / Generl</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                            <option value="OBC">OBC</option>
                            <option value="GENERAL">GENERAL</option>
                        </select>
                    </div>



                    {/*----------------------- Gender------------------------  */}
                    <div className='flex justify-between  p-2 rounded-[10px] bg-gray-400/30'>
                        <div>
                            <label htmlFor="">Gender :</label>
                        </div>

                        <div className='flex gap-4 items-center justify-center'>
                            <div className='flex items-center gap-1' >
                                <input className='flex items-center outline-0 cursor-pointer accent-green-600'
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    // checked={gender === male}
                                    onChange={HandelForm}
                                    id="male" />
                                <label htmlFor="male">Male</label>
                            </div>

                            <div className='flex items-center gap-1' >
                                <input className='flex items-center cursor-pointer:'
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    onChange={HandelForm}
                                    id="female" />
                                <label htmlFor="female">Female</label>
                            </div>

                            <div className='flex items-center gap-1' >
                                <input className='flex items-center cursor-pointer:'
                                    type="radio"
                                    name="gender"
                                    value="custom"
                                    onChange={HandelForm}
                                    id="custom" />
                                <label htmlFor="custom">Custom</label>
                            </div>
                        </div>
                    </div>



                    {/* ---------------------------NEET UID ----------------------------------- */}
                    <div className='p-2 w-full flex justify-between items-center pl-2 -bg-conic-270 bg-sky-300/20 rounded-lg'>
                        <label htmlFor="">NEET UID SCORE : </label>
                        <input
                            className='border border-emerald-600 rounded-xl px-1 w-[50vw] bg-green-400/10 pl-4 p-1 md:w-[25vw]  outline-0'
                            placeholder='NEET UID'
                            type="text"
                            onChange={HandelForm}
                            name="neet_UID"
                            id="" />
                    </div>


                    {/* ------------------Courses----------------------- */}
                    <div className='flex justify-between gap-[10vw] items-center'>
                        <label htmlFor="course">Courses : </label>

                        <select
                            className='bg-green-500/20 rounded-[7px] p-1.5 outline-0 transition-all delay-300 hover:border border-green-400'
                            onChange={HandelForm}
                            name="course"
                            onClick={() => {
                                if (!usedBankOffer)
                                    setBamkOffer(true)
                                setusedBankOffer(true)

                            }}
                            id="course">

                            {Courses.map((element) => (
                                <option
                                    className='font-bold bg-gray-700 rounded-2xl hover:bg-green-500/30'
                                    key={element}
                                    name="course"
                                    value={element}>
                                    {element.toUpperCase()}</option>
                            ))}
                        </select>

                        <button
                            className='bg-sky-400 p-2 px-5 rounded-xl border  '
                            type="submit"
                            // onClick={() => SEND_DETA(User_Enroll_deta)}
                        >Enroll </button>
                    </div>



                    {/* ------------------------Pop up Banking Offer & Discount Offer ------------------------------ */}

                    {BamkOffer && (
                        <div className=' cursor-pointer group border h-20 border-purple-500 bg-purple-500/10 rounded-xl flex not-md:text-[12px] overflow-hidden'>
                            {/* Section one  */}
                            <div className=' overflow-hidden w-1/4 group flex  justify-between'>
                                <div className='grid h-34 bg-amber-200 w-full '>
                                    <div className=' border'>
                                        {/* image  */}
                                    </div>
                                    <p className='font-black text-[10px] text-black/50'>Get The Offer</p>
                                </div>
                            </div>
                            {/* Section Two  */}
                            <div className=' font-black  grid px-4'>
                                <h1 className='text-[16px] '>Earn Upto 30% Off</h1>
                                <div className=''>
                                    <h1 className='text-gray-400'>USE HDFC CREDIT CARD</h1>
                                    <p className='flex text-[12px] text-gray-500/80 gap-4 font-alluser'>Pay Up-To ₹8L-40L <ShoppingCart size={15} color='gray' /> </p>
                                </div>
                            </div>

                        </div>
                    )}

                </form>
            </div>
        </>
    )
}

export default EnrolForm
// export {Courses}