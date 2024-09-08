import Link from 'next/link';
import React, {useState} from 'react'

const Courses = () => {
    const courses = [
        {name: 'Web Development'},
        {name: 'Graphic Design'},
        {name: 'Web Design'},
        {name: 'WordPress'}
    ]
    const [selectedIndex, setSelectedIndex] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div className='flex flex-col w-full h-screen gap-10 items-center justify-center'>
        <div className='flex flex-col w-full h-auto gap-2 items-center justify-center'>
            <p className='text-sm text-gray-400'>OUR COURSES</p>
            <h3 className='text-4xl font-bold text-black'>What You CAn <span className='text-pink-300'>Learn</span></h3>
            <p className='text-center text-sm text-gray-400'>You just think about TemplateMo whenever you need free CSS templates for <br /> your business website</p>
        </div>
        <div className='flex w-full'>
            <div className='flex flex-col w-2/6 justify-center gap-5 items-center '>
                {courses.map((items, index) => (
                    <button key={index} 
                    onClick={() => handleButtonClick(index)}
                    className={`flex items-center justify-center text-xl font-bold w-3/6 rounded-md py-4 px-5 border-4 ${
                        selectedIndex === index ? 'border-pink-400 text-pink-400' : 'border-pink-300 text-black'
                      }`}>
                        {items.name}
                    </button>
                ))}
            </div>
            <div className='flex w-4/6 p-10'>
                <div className='flex w-full shadow-xl rounded-lg gap-4'>
                    <div className='w-[550px] h-80'>
                        <img src="/assets/courses/courses-01.jpg" alt='img' className='rounded-tl-lg rounded-bl-lg h-full w-full' />
                    </div>
                    <div className='flex flex-col p-5 gap-6'>
                        <h3 className='text-2xl text-black font-bold'>Web Development</h3>
                        <p className='text-sm text-gray-400 text-justify'>Did you know that you can visit <a href='#' className='text-blue-400'>TooCSS website</a> for latest 
                            listing of HTML templates and a variety of useful templates.
                        </p>
                        <p className='text-sm text-gray-400 text-justify'>You just need to go and visit that website right now. IF you 
                            have any suggestion or comment about this template, you can 
                            feel free to go to contact page for our email address.
                        </p>
                        <div className='flex gap-3'>
                            <h3 className='text-lg text-black font-bold'>36 Hours</h3> 
                            <p className='text-lg text-black font-bold'>|</p>
                            <h3 className='text-lg text-black font-bold'>4 Weeks</h3>
                            <p className='text-lg text-black font-bold'>|</p>
                            <h3 className='text-lg text-black font-bold'>3 Certificates</h3>
                        </div>
                        <a href='#' className='text-blue-400 underline'>Subscribe Course</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses