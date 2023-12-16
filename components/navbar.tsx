'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className=' z-50 fixed w-full top-0 bg-white flex flex-col md:flex-row items-center justify-between px-5 py-3'>
            <div className='flex md:w-auto w-full justify-between items-center'>
                <Link href='/' >
                    <img className='h-10 md:h-max' src="/assets/logo.svg" alt="logo" />
                </Link>
                <button
                    onClick={toggleDrawer}
                    className='text-black focus:outline-none md:hidden ml-auto'
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
            <ul className={`md:flex text-custom-blue ${isDrawerOpen ? 'flex flex-col text-end' : 'hidden md:flex items-center gap-5 '} `}>
            <li className='md:ml-4'>
                    <Link href='#work'>Products</Link>
                </li>
                <li className='md:ml-4'>
                    <Link href='#work'>How it works</Link>
                </li>
                <li className='md:ml-4 my-1 md:my-0'>
                    <Link href='#pricing'>Pricing</Link>
                </li>
                <li className='md:ml-4'>
                    <Link href='/contact'>Contact us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;




