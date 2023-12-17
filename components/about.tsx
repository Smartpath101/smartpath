import React from 'react'

const About = () => {
  return (
    <div id='aboutus' className='px-3 md:px-28  ' >
        <h2 className='text-[32px] text-center my-5' >About Us</h2>
        <div className='flex flex-col md:flex-row gap-5' >
            <img src="/assets/aboutus.png" alt="about" />
            <div>
            <p className='leading-[30px] text-center md:text-left' >
            "Welcome to SmartPath Learning, where education meets innovation! Our platform 
            revolutionizes traditional home tutoring by bringing cutting-edge teaching 
            methods right to your doorstep. SmartPath Learning connects you with top-tier 
            tutors who are not just experts in their fields but also adept at tailoring 
            lessons to match your unique learning style and pace. From core subjects to 
            specialized courses, our diverse range of educators ensures a personalized 
            learning journey for every student. Embrace the convenience of learning from 
            the comfort of your home while accessing a world of knowledge and academic 
            excellence. Join SmartPath Learning today and embark on your personalized 
            path to success!"
            </p>
            <div className='flex gap-2 md:items-end flex-col items-center py-8 md:py-0 md:flex-row' >
                <img className='w-max' src="/assets/cup.png" alt="cup" />
                <h2 className='text-[#9C3224] text-[28px] ' >
                1000 + Students <br />in out Community
                </h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About