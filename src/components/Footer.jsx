import React from 'react'
import Logo from '../assets/logo.png'
const Footer = () => {
    return (
        <footer className='bg-[#011631] text-white py-4 min-h-[15vh] flex justify-between px-20 max-md:px-10 w-[100vw] items-center max-md:flex-col gap-4 text-center'>
            <p>&copy; Barcha huquqlar himoyalangan {new Date().getFullYear()}</p>
            <img className='w-16 cursor-pointer hover:scale-110 duration-300' src={Logo} alt="Karvon" srcset="" />
            <p>Sayt yaratuvchi | <a className='underline hover:text-white duration-300 text-yellow-300 w-50' href="https://startum.uz" target="_blank" rel="noopener noreferrer">STARTUM</a></p>
        </footer>
    )
}

export default Footer
