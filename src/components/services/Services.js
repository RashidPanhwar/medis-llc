"use-client"
import './Services.css'

const Services = () => {
  const cards = [
    {name: 'Clinical Development', icon: '/assets/clinical-development.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'Medical Affairs', icon: '/assets/medical-affairs.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'PV / Drug Safety', icon: '/assets/drug-safety.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'Data Management', icon: '/assets/data-management.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'Medical Writing', icon: '/assets/medical-writing.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'EDC System', icon: '/assets/edc-system.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'Info Tech', icon: '/assets/information-tech.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    // {name: 'Useful Tricks', icon: '/assets/services/ready-target.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    // {name: 'Useful Tricks', icon: '/assets/services/ready-target.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    // {name: 'Useful Tricks', icon: '/assets/services/usefu-trick.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    // {name: 'Useful Tricks', icon: '/assets/services/creative-ideas.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    // {name: 'Useful Tricks', icon: '/assets/services/ready-target.png', desc: 'please tell your friends about the best css templates website that is TemplateMO'},
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const totalCards = cards.length;
  // const totalDots = Math.ceil(totalCards / 2);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === totalCards - 4 ? 0 : prevIndex + 4
  //     );
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [totalCards]);

  // const handleDotClick = (index) => {
  //   setCurrentIndex(index * 4);
  // };

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center gap-10'>
      <div className='flex flex-col items-center justify-center'>
          <p className='text-sm text-gray-400'>OUR SERVICES</p>
          <h3 className='text-3xl text-black font-bold'>Provided <span className='text-pink-300'> Services </span> </h3>
      </div>
      <div className='flex w-3/4 items-center justify-center'>
      <div className="relative w-full ">
      <div
        className="flex transition-transform overflow-x-auto overflow-y-hidden scrollbar-thin mb-10 duration-1000 ease-in-out"
        // style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-1/4 flex flex-col flex-shrink-0 gap-3 p-4 items-center justify-center"
          >
           <image src={card.icon} alt='icon' className='w-30 h-20 ' />
           <h3 className='text-2xl text-black font-bold text-center'>{card.name}</h3>
           <p className='text-center text-sm text-gray-400'>{card.desc}</p> 
          </div>
        ))}
      </div>
      {/* <div className="absolute bottom-0 left-1/2 mt-10 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex / 4 === index ? 'bg-black' : 'bg-gray-400'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div> */}
    </div>
      </div>
    </div>
  );
};

export default Services;
