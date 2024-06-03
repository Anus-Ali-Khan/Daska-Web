import React from 'react'
import Image from 'next/image'
import one from "../../public/pexels-emmy-e-1252107-2381069.jpg"
import { FaLongArrowAltRight } from "react-icons/fa";

const Position = () => {
  return (
    <>
      <div className=' bg-gradient-to-r from-cyan-900 to-blue-500 w-[88%] mx-auto relative h-[60vh] rounded-2xl'>
        
            <Image src={one} className=' w-[100px] rounded-full p-[4px] bg-yellow-300 h-[100px]  left-24 flex absolute top-32 '/>
            <h1 className='absolute text-2xl font-bold text-white left-[30%] top-[50%]'>We are always looking for new talents <br /> who want to become part of our journey</h1>
            <Image src={one} className=' w-[100px] rounded-full p-[4px] bg-yellow-300 h-[100px]  right-24 flex absolute top-20 '/>
            <Image src={one} className=' w-[100px] rounded-full p-[4px] bg-yellow-300 h-[100px]  right-48 flex absolute top-64 '/> 
            <div className='absolute left-[34%] top-[80%] flex gap-x-5'>          
              <button className='px-6 py-5 text-lg text-white bg-purple-800 rounded-xl'>Read More</button>
           <div className='flex items-center text-white gap-x-2 '>
           <p className='text-xl'>View Open Positions</p>
           <FaLongArrowAltRight />
           </div>

           </div>
           
      </div>
    </>
  )
}

export default Position
