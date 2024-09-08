import React, {useState, useEffect} from 'react'

const Testimonials = () => {
    const testimonialsData = [
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
        {desc: '"Think about our website first when you need free HTML Templates for your website"', name: 'David Martin', designation: 'CTO of Tech Company', icon: '/assets/quote.png'},
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = testimonialsData.length;
  const totalDots = Math.ceil(totalCards / 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalCards - 4 ? 0 : prevIndex + 4
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalCards]);

  const handleDotClick = (index) => {
    setCurrentIndex(index * 4);
  };

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center gap-4'>
        <div className='flex flex-col w-full items-center justify-center'>
            <p className='text-sm text-gray-400'>TESTIMONIALS</p>
            <h3 className='text-2xl text-black font-bold'>What You <span className='text-pink-300'>Think</span></h3>
        </div>
        <div className='flex w-3/4'>
        <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform mb-10  duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
      >
        {testimonialsData.map((items, index) => (
            <div key={index} 
                className='w-1/4 flex flex-col flex-shrink-0 shadow-lg gap-3 p-4 items-center justify-center'
            >
                <p className='text-gray-400 text-sm italic font-light'>{items.desc}</p>
                <div className='flex w-full items-center justify-between'>
                    <span className='flex flex-col gap-1 '>
                        <h3 className='text-lg text-black font-semibold'>{items.name}</h3>
                        <p className='text-sm text-gray-400 font-light'>{items.designation}</p>
                    </span>
                    <img src={items.icon} alt='icon' className='w-10 h-10'/>
                </div>
            </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 mt-10 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex / 4 === index ? 'bg-black' : 'bg-gray-400'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
        </div>
    </div>
  )
}

export default Testimonials