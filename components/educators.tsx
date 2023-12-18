import React from 'react'

const Educators = () => {
    const data = [
        {
            name:'Ayushi Mishra',
            exp:'1',
            classes:'NUR, K.G, 1st, 2nd, 3rd, 4rt, 5th,',
            subject:'All-subjects',
            qual:'BBA 1 year pursuing',
            lan:'English'
        },
        {
            name:'Pankaj',
            exp:'3',
            classes:'1to 8th',
            subject:'All-subjects',
            qual:' M.sc',
            lan:'English'
        },
        {
            name:'Pawan Kumar',
            exp:'28',
            classes:'9th, 10th, 11th, 12th, IIT ,JEE',
            subject:'Maths, Physics, Chemistry, Biology, Computer, IIT',
            qual:'M.sc & M.tech',
            lan:'English'
        },
        {
            name:'Aditya Kumar',
            exp:'6',
            classes:'9th to 12th & all competitive exams like jee, ssc , nda , cds and upsi etc.',
            subject:'Specially PCM English and other subjects',
            qual:'bsc (math), get(kanpur)',
            lan:'English'
        },
        {
            name:'Amit',
            exp:'5',
            classes:'All-subjects',
            subject:'Specially PCM English and other subjects',
            qual:'bsc(biology) & m.sc',
            lan:'English'
        },        
        {
            name:'Aman Patel',
            exp:'7',
            classes:'9th, 10th, 11th, 12th',
            subject:'Accountancy, Economics, Statistics, Commerce',
            qual:'Master of Commerce (Applied Economics)',
            lan:'English'
        },
    ]
    return (
        <div id='educators' className='px-3 md:px-28'>
            <h2 className='text-center my-8 text-2xl text-[32px]' >Meet Our Educators</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {data.map((t,i)=>
                <div className='flex flex-col gap-4' >
                        <img src={`/assets/ed${i+1}.png`} alt="assets" />
                    <div className='flex flex-row gap-2' >
                        <h2>{t.name} </h2>
                        <span className='bg-[#FFF4BC] py-1 px-2 text-xs rounded-md' >
                            {t.exp}+ years of experience
                        </span>
                    </div>
                    <div className='flex flex-row items-start text-sm justify-between' >
                        <span className='flex text-black/50 flex-row items-center gap-2' >
                            <img src="/assets/class.svg" alt="class" />
                            Classes
                        </span>
                        <h2 className='w-[60%]' >
                            {t.classes}
                        </h2>
                    </div>
                    <div className='flex flex-row items-start text-sm justify-between' >
                        <span className='flex text-black/50 flex-row items-center gap-2' >
                            <img src="/assets/subject.svg" alt="class" />
                            Subjects             
                        </span>
                        <h2 className='w-[60%]' >
                        {t.subject}
                        </h2>
                    </div>

                    <div className='flex flex-row items-start text-sm justify-between' >
                        <span className='flex text-black/50 flex-row items-center gap-2' >
                            <img src="/assets/qualification.svg" alt="class" />
                            Qualification                  
                        </span>
                        <h2 className='w-[60%]' >
                        {t.qual}
                        </h2>
                    </div>

                    <div className='flex flex-row items-start text-sm justify-between' >
                        <span className='flex text-black/50 flex-row items-center gap-2' >
                            <img src="/assets/language.svg" alt="class" />
                            Language                          
                        </span>
                        <h2 className='w-[60%]' >
                        {t.lan}
                        </h2>
                    </div>
                </div>
                    )}
            </div>

            <h2 className='text-[#9C3224] text-[28px] text-center my-8 ' >Our teachers are trusted by 1000+ students & Parents.</h2>

            <hr />
        </div>
    )
}

export default Educators