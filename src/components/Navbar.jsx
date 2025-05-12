import React, { useState } from 'react'
import { FaTruck } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)


    return (
        <nav className='bg-[#011631] h-[10vh] sticky top-0 w-[100vw] items-center text-white flex justify-between px-10 z-10 max-md:px-8'>
            <Link to="/"><img className='w-16 cursor-pointer hover:scale-110 duration-300 max-md:w-10' src={Logo} alt="Karvon" srcset="" /></Link>
            <ul className={!showNavbar ? 'gap-16 flex max-md:hidden' : 'gap-20 flex max-md:absolute max-md:right-0 max-md:top-[10vh] max-md:bg-[#011631c8] max-md:w-[40vw] max-md:text-center max-md:pt-4 max-md:h-[40vh] max-md:flex-col max-md:shadow-md max-md:shadow-slate-400'}>
                <li onClick={() => setShowNavbar(false)} className='hover:opacity-100 border-whit  duration-300 opacity-60 px-2 hover:border-white hover:border-b-2 border-transparent max-md:border-none'><Link to="/">Bosh sahifa</Link></li>
                <li onClick={() => setShowNavbar(false)} className='hover:opacity-100 border-whit  duration-300 opacity-60 px-2 hover:border-white hover:border-b-2 border-transparent max-md:border-none'><Link to="/about">Biz haqimizda</Link></li>
                <li onClick={() => setShowNavbar(false)} className='hover:opacity-100 border-whit  duration-300 opacity-60 px-2 hover:border-white hover:border-b-2 border-transparent max-md:border-none'><Link to="/contact">Aloqa</Link></li>
            </ul>

            <Link to="/form" class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all duration-300 bg-[#f55334] rounded-full hover:bg-white group">
                <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-300 transition-all border-white rounded-full"></span>
                <span class="relative w-full text-white transition-colors duration-300 ease-in-out group-hover:text-[#f55334] text-sm max-md:text-xs text-center">Haydovchilar uchun ro'yxatdan o'tish</span>
            </Link>
            {!showNavbar ? <FaBarsStaggered onClick={() => setShowNavbar(true)} className='text-3xl max-md:text-2xl hidden max-md:block cursor-pointer ' /> : <IoIosCloseCircleOutline onClick={() => setShowNavbar(false)} className='text-3xl max-md:text-2xl hidden max-md:block cursor-pointer' />}
        </nav>
    )
}

export default Navbar
