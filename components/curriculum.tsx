import React from 'react'

const Curriculum = () => {
  return (
    <div id='curriculum' className='w-full px-3 md:px-28' >
      <div className='flex flex-col items-center mt-10 mb-5' >
      <h2 className='md:text-[32px] text-[24px]' >Our Curriculum Details</h2>
      <h3 className='bg-[#FFF4BC] w text-sm rounded px-2 py-1' >We offer tuition for CBSE, ICSE, and more</h3>
      </div>
      <div className='flex flex-col mt-5 md:flex-row gap-5 ' >
        <div
          style={{
            background: 'linear-gradient(180deg, #FFF4BC 0%, rgba(255, 244, 188, 0.00) 100%)'
          }}
          className='p-3 flex-1'
        >
          <h2 className='text-2xl mb-2 ' >Classes</h2>
          <div className='text-xl flex flex-row justify-between text-black/50' >
            <div className='text-lg md:text-xl' >
              <p> &#8729; Nursery Level</p>
              <p> &#8729; Kindergartens</p>
              {[1, 2, 3, 4, 5, 6].map(t =>
                <p> &#8729; Class {t}</p>
              )}
            </div>
            <div className='mr-8' >
              {[7, 8, 9, 10, 11].map(t =>
                <p> &#8729; Class {t}</p>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(180deg, #FFF4BC 0%, rgba(255, 244, 188, 0.00) 100%)'
          }}
          className='p-3 flex-1'
        >
          <h2 className='text-2xl mb-2 ' >Subjects</h2>
          <div className='text-xl text-black/50' >
            <div className='text-lg md:text-xl' >
              <p> &#8729; Maths</p>
              <p> &#8729; Physics</p>
              <p> &#8729; Chemistry</p>
              <p> &#8729; Biology</p>
              <p> &#8729; Computer</p>
              <p> &#8729; English</p>
              <p> &#8729; Accounting</p>
              <p> &#8729; Economics</p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(180deg, #FFF4BC 0%, rgba(255, 244, 188, 0.00) 100%)'
          }}
          className='p-3 flex-1'
        >
          <h2 className='text-2xl mb-2 ' >Competitive examinations</h2>
          <div className='text-xl text-black/50' >
            <div className='text-lg md:text-xl' >
              <p> &#8729; IIT JEE</p>
              <p> &#8729; NEET</p>
              <p> &#8729; SCC</p>
              <p> &#8729; Defence</p>

            </div>
          </div>
        </div>
      </div>
      <hr className='my-10' />
    </div>
  )
}

export default Curriculum