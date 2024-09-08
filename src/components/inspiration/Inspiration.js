import React from 'react'
import './Inspiration.css';

const Inspiration = () => {
  return (
    <div className='w-full flex h-[100vh]  py-10 items-center justify-center px-20'>
        {/* <div className='over-lay'></div> */}
        <div className='inspire-bg z-10 opacity-100 w-4/5  h-30  p-8 flex flex-col items-center justify-center gap-10 rounded-lg shadow-xl'>
            <div className='z-10 opacity-100 w-full bg-transparent flex flex-col items-center justify-center gap-10'>
            <h3 className='text-4xl font-bold text-black capitalize'>Inspiring possibilities</h3>
            <p className='text-center text-xl text-black'>At SMED Clinical Research, we are dedicated to providing top-quality medical 
                advisory services that are specifically tailored to meet the needs of your business. 
                Our team of experienced researchers and medical professionals bring a wealth of 
                knowledge and expertise to every project, ensuring that your company receives the 
                best possible support and guidance. Our collaborative efforts synergize clinical 
                and business development perspectives, ensuring a well-rounded approach to your trials. 
                In addition, with the support of our financial advisors and data analysts, we offer 
                financial analysis services for investors interested in clinical research.
            </p>
            </div>
        </div>
    </div>
  )
}

export default Inspiration
