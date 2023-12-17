'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className=' z-50 fixed w-full top-0 bg-white flex flex-col md:flex-row items-center justify-between py-3'>
            <div className='flex md:w-auto pl-5 w-full justify-between items-center'>
                <Link href='/' >
                    <img className='h-10 md:h-max' src="/assets/logo.svg" alt="logo" />
                </Link>
                <button
                    onClick={toggleDrawer}
                    className='text-black pr-5 focus:outline-none md:hidden ml-auto'
                >
                    <svg
                        className={`w-6 h-6 ${isDrawerOpen ? 'hidden' : ''}`}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                    <svg
                        className={`w-6 h-6 ${isDrawerOpen ? '' : 'hidden'}`}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                </button>
            </div>
            <ul className={`md:flex md:pr-5 text-custom-blue ${isDrawerOpen ? 'flex w-full flex-col bg-[#FFDC5B] text-center' : 'hidden md:flex items-center gap-5 '} `}>
                <li className='md:ml-4 my-3 md:my-0 '>
                    <Link href='#home'>Home</Link>
                </li>
                <hr className=' md:hidden w-1/2 m-auto bg-[#0000001F]' />
                <li className='md:ml-4 my-3 md:my-0'>
                    <Link href='#educators'>Our Educators</Link>
                </li>
                <hr className=' md:hidden w-1/2 m-auto bg-[#0000001F]' />
                <li className='md:ml-4 my-3 md:my-0 '>
                    <Link href='#curriculum'>Curriculum</Link>
                </li>
                <hr className=' md:hidden w-1/2 m-auto bg-[#0000001F]' />
                <li className='md:ml-4 my-3 md:my-0'>
                    <Link href='#aboutus'>About US</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;




