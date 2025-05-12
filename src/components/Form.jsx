import React from 'react'
import bgimg from '../assets/taxi.jpg'
const Form = () => {
    return (
        <div style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }} className=' h-[75vh] w-[100vw] flex justify-center items-center'>
            <form className='flex flex-col p-4 max-md:w-[70vw]  w-[40vw] gap-3'>
                <label>Ism va Familiya</label>
                <input className='p-3 border-2 rounded-sm border-gray-500' type="text" placeholder='Tolipov Botirjon' />
                <label>Avtomashina raqami</label>
                <input className='p-3 border-2 rounded-sm border-gray-500' type="text" placeholder='60 A 100 CD' />
                <label>Telefon raqami</label>
                <input className='p-3 border-2 rounded-sm border-gray-500' type="tel" placeholder='95-100-00-00' />
                <label>Chegaralangan Yuk og'irligi</label>
                <input className='p-3 border-2 rounded-sm border-gray-500' type="text" placeholder='2.5' />
                <input className='bg-green-600 py-2 text-white cursor-pointer rounded-sm hover:shadow-lg hover:opacity-80 shadow-green-500 duration-300' type="submit" value="Saqlash" />
            </form>
        </div>
    )
}

export default Form
