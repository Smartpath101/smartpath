import React from 'react'
import { FaGreaterThan } from "react-icons/fa6";

const Demo = () => {
  return (
    <div style={{
        backgroundColor:'rgba(255, 244, 188, 0.49)'
    }} 
    className='h-screen w-full flex items-center justify-around flex-col'
    >
        <div className='flex items-center px-2 md:px-0 justify-evenly gap-1 md:gap-0 flex-row w-full' >
            <span className='bg-customYellow text-center p-1 md:p-4 rounded-md md:rounded-xl ' >
                <h2 className='text-[28px] md:text-[60px]' >1</h2>
                <p className='text-sm md:text-[28px] ' >Tell us your needs</p>
            </span>
            <FaGreaterThan className='text-[#00000033] text-xl md:text-[80px]' />
            <span className='bg-customYellow text-center p-1 md:p-4 rounded-md md:rounded-xl ' >
                <h2 className='text-[28px] md:text-[60px]' >1</h2>
                <p className='text-sm md:text-[28px] ' >Tell us your needs</p>
            </span>
            <FaGreaterThan className='text-[#00000033] text-xl md:text-[80px]' />
            <span className='bg-customYellow text-center p-1 md:p-4 rounded-md md:rounded-xl ' >
                <h2 className='text-[28px] md:text-[60px]' >1</h2>
                <p className='text-sm md:text-[28px] ' >Tell us your needs</p>
            </span>
        </div>
        <img className='w-max' src="/assets/hero2.svg" alt="hero" />
        <h2 className='text-[#9C3224] text-[20px] md:text-[28px]' >#1 Home tuition for your children</h2>
    </div>
  )
}

export default Demo