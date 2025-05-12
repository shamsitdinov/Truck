import React from 'react'
import Way from '../assets/way.webp'

const Contact = () => {
    return (
        <div style={{
            backgroundImage: `url(${Way})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
            className='h-[75vh] flex justify-center items-center'>
            <form className='bg-[#011631c8] w-[50vw] p-4 rounded-lg text-white flex flex-col max-md:w-[70vw]'>
                <label>Ism va Familiya*</label>
                <input className='p-3 my-2 rounded-md text-gray-800' type="text" placeholder='Botirjon Karimov' />
                <div className='flex gap-4 max-lg:flex-col max-lg:gap-0'>
                    <div className='flex w-full flex-col'>
                        <label>Email manzil</label>
                        <input className='p-3 my-2  max-md:p-2 rounded-md text-gray-800' type="email" placeholder='example@mail.uz' autoComplete="new-password" />
                    </div>
                    <div className='flex w-full flex-col'>
                        <label>Telefon raqam*</label>
                        <input className='p-3 my-2  max-md:p-2 rounded-md text-gray-800' type="tel" placeholder='95-100-00-00' />
                    </div>
                </div>
                <label>Xabar*</label>
                <textarea className='h-[20vh] rounded-md max-md:p-2  p-2 text-gray-800 max-lg:h-[15vh] resize-none' placeholder='Xabar matni'></textarea>
                <button className="mt-2 rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300" >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Yuborish</span>
                </ button>
            </form>
        </div>
    )
}

export default Contact
