import React from 'react'
import './Location.css'
import { BsTelephoneFill } from "react-icons/bs";


const MyLocation = () => {
    const mapUrl = "https://www.google.com/maps/place/1492+Cypress+Pointe+Dr,+Mt+Pleasant,+SC+29466,+USA/@32.8914714,-79.8115215,17z/data=!3m1!4b1!4m6!3m5!1s0x88fe6c35c3e1b255:0xdae637fe8714ca64!8m2!3d32.8914714!4d-79.8089466!16s%2Fg%2F11c4vbcc5c?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
  return (
    <div className='location-main-div flex w-full h-screen px-24 gap-5 items-center justify-center' >
        <div className='flex flex-col w-3/5 h-[62%] '>
        <iframe
            className='w-full h-full'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.065680135058!2d-79.8115215!3d32.8914714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe6c35c3e1b255%3A0xdae637fe8714ca64!2s1492%20Cypress%20Pointe%20Dr%2C%20Mt%20Pleasant%2C%20SC%2029466%2C%20USA!5e0!3m2!1sen!2sus!4v1633964929008!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Location Map'
        ></iframe>
            <div className='flex w-full items-center justify-center gap-10'>
                <div className='flex w-64 bg-white mt-[-40px] p-5 gap-3 items-center justify-center rounded-lg shadow-lg'>
                    <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-pink-500 p-3 rounded-full'>
                        <BsTelephoneFill size={20} className='text-white' />
                    </span>
                    <span className='flex flex-col items-start justify-start'>
                        <p className='text-[16px] font-bold'>PHONE</p>
                        <p className='text-sm font-medium'>832-876-8529</p>
                    </span>
                </div>
                <div className='flex w-64 bg-white mt-[-40px] p-5 gap-3 items-center justify-center rounded-lg shadow-lg'>
                    <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-pink-500 p-3 rounded-full'>
                        <BsTelephoneFill size={20} className='text-white' />
                    </span>
                    <span className='flex flex-col items-start justify-start'>
                        <p className='text-[16px] font-bold'>Mobile</p>
                        <p className='text-sm font-medium'>+1832-876-8529</p>
                    </span>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-2/6 h-auto px-5'>
            <div className='flex flex-col w-full h-auto gap-[10px] p-10 border rounded-2xl shadow-2xl border-gray-300'>
                <p className='text-lg uppercase text-gray-400 font-semibold'>Contact Us</p>
                <h3 className='text-3xl text-gray-400 font-black'>Say <span className='text-pink-300'>Hello</span></h3>
                <p className='text-sm text-gray-400 justify-start leading-6'>
                    IF you need a working contact form by PHP script, please visit TemplateMos 
                    contact page for more info.
                </p>
                <input type='text' placeholder='Ful Name' className='h-10 w-full rounded-md bg-[#f4f7fb] outline-none 
                border-none shadow-none text-sm font-medium text-[#7a7a7a] px-4' />
                <input type='text' placeholder='Your Email'className='h-10 w-full rounded-md bg-[#f4f7fb] outline-none 
                border-none shadow-none text-sm font-medium text-[#7a7a7a] px-4' />
                <textarea rows={5} placeholder='Your Message' className='w-full rounded-md bg-[#f4f7fb] outline-none 
                border-none shadow-none text-sm font-medium text-[#7a7a7a] px-4' />
                <div className='flex w-full items-center justify-end'>
                    <button className=' flex text-sm text-white py-3 px-8 rounded-md 
                    bg-gradient-to-r from-orange-500 via-pink-500 to-pink-500
                    font-medium uppercase border-none outline-none'>SEND MESSAGE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyLocation