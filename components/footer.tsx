import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#FFFBEA] flex flex-row md:px-28 p-3 md:p-5 items-center justify-between' >
        <h2 className='md:text-[28px] text-xl' >Smartpath</h2>
        <ul className='flex flex-col text-sm md:text-base text-right md:text-left md:flex-row gap-2 md:gap-16' >
          <li>Smartpath0607@gmail.com</li>
          <li>+91 9219904024</li>
          <li>Private Policy</li>
        </ul>
    </div>
  )
}

export default Footer