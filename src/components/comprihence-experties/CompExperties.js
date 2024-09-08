import React from 'react'
// import './ComprehansiveExperties.css';

const CompExperties = () => {
  return (
    <div className='flex w-full h-auto py-10 px-28 items-center justify-center'>
        <div className='flex w-5/6 rounded-lg shadow-lg gap-7 p-10 bg-[#FAF9F6] z-40 items-center justify-between bg-cover'>
            <div className='w-[40%] h-auto'>
                <image src='/assets/hero/Research__Clinical_Trials_-_Banner.original.jpg' alt='img' className='h-[550px] rounded-tl-lg rounded-bl-lg z-50' />
            </div>
            <div className='flex w-[60%] z-30 flex-col'>
                <div className='flex flex-col w-full gap-10'>
                <h3 className='text-4xl text-black font-bold'>Comprehensive expertise:</h3>
                <p className='text-xl text-black'>SMED Clinical Research is a leading medical advisory company that 
                    offers a comprehensive range of services to support businesses in the 
                    healthcare industry.
                </p>
                <p className='text-xl text-black'>
                    Our team of experts is committed to providing the highest quality medical 
                    advisory, medical writing, medical support, and financial analysis services 
                    to help businesses achieve their goals and objectives.
                </p>
                <p className='text-xl text-black'>
                    At SMED Clinical Research, we understand that businesses need to stay 
                    ahead of the curve to succeed. 
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompExperties
