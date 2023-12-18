import React from 'react'
import { GoStarFill } from "react-icons/go";

const Testimonials = () => {
  return (
    <div className='md:px-28 w-full py-5' >
      <hr />
      <h2 className='text-2xl md:mt-10 mt-8 px-5 md:px-0 text-center md:text-4xl' >Proud Parents, Happy Students</h2>
      <div className='flex md:flex-row flex-col items-center my-7 gap-5' >
        <div
          style={{
            background: 'linear-gradient(180deg, #FFDC5B 52.19%, rgba(255, 231, 140, 0.00) 100%)'
          }}
          className='flex-1 flex w-full items-center flex-col justify-center ' >
          <div className='text-white my-8 text-5xl flex flex-row gap-4' >
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
          </div>
          <div className='bg-[#FFF4BC] px-5 py-14 leading-[28px] text-sm md:text-base mx-10' >
            “SmartPath Learning has been the life changer for our child.
            The educators are experienced and well trained. Their contribution
            is paying well, as we have seen the change in our child’s grades.
            Really appreciate SmartPath Learning”
          </div>
          <div className='flex items-center justify-center gap-2 flex-col mt-5 ' >
            <img src="/assets/tm1.svg" alt="test" />
            <p className='text-sm' >Rajesh Sharma(Parent)</p>
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(180deg, #FFDC5B 52.19%, rgba(255, 231, 140, 0.00) 100%)'
          }}
          className='flex-1 flex w-full items-center flex-col justify-center ' >
          <div className='text-white my-8 text-5xl flex flex-row gap-4' >
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
          </div>
          <div className='bg-[#FFF4BC] px-5 py-14 leading-[28px] text-sm md:text-base mx-10' >
            “Exceptional experience at Smartpath Tutor Center! The personalized attention and
            innovative teaching methods exceeded my expectations. The tutors are not only
            knowledgeable but also incredibly supportive”
          </div>
          <div className='flex items-center justify-center gap-2 flex-col mt-5 ' >
            <img src="/assets/tm2.svg" alt="test" />
            <p className='text-sm' >Anshul Kumar</p>
          </div>
        </div>
      </div>
      <hr className=' mt-14 md:mt-10' />
    </div>
  )
}

export default Testimonials