import React from 'react'
import './Hero.css';
// import heroImage from ''

const Hero = () => {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
        <div className='flex w-2/4 flex-col items-center justify-center text-justify'>
        <div className='flex flex-col items-start justify-center'>
            {/* <p className='relative z-10 text-lg text-gray-400'>Welcome To Our School</p> */}
            <p className='text-4xl text-black font-bold'>MEDIS assisting life science <br /> progress  by providing services</p>
            <p className='mt-4 text-lg text-black'> (contract & full time) to Startup, Biotech, Pharmaceutical and CORs in:</p>
            {/* <h3 className='text-6xl text-black font-bold'>Best Place To <br /> Learn Graphic <br /> <span className='text-pink-300'>Design!</span></h3> */}
            <button className='px-6 py-2 text-white text-lg font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-pink-500 rounded-md mt-10'>Join Us Now!</button>
        </div>
        </div>
        <div className='flex w-2/4 items-center justify-center'>
            <image src="/assets/hero/About-Page-health_Image.jpg" alt='img' className='w-96 h-96 rounded-lg shadow-lg' />
            {/* <img src={heroImage} alt='img' /> */}
        </div>
    </div>
  )
}

export default Hero