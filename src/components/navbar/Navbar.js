import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex w-full justify-between px-10 py-2 items-center bg-gradient-to-r from-orange-500 via-pink-500 to-pink-500 '
    
    >
        <div className='flex w-2/6 items-center justify-start gap-5'>
            <image src='/assets/medis-llc.png' alt='logo' className='w-16 h-auto' />
            <h3 className='text-4xl text-white font-bold'>MEDIS LLC</h3>
        </div>
        <div className='flex'>
            <div className='flex w-full gap-5 text-white'>
                <h3 className='cursor-pointer'>
                    <AnchorLink href='#hero'>Home</AnchorLink>
                    
                </h3>
                <h3>
                    <AnchorLink href='#inspire'>About</AnchorLink>
                </h3>
                <h3>
                    <AnchorLink href='#experties'>Experties</AnchorLink>
                </h3>
                <h3>
                    <AnchorLink href='#services'>Services</AnchorLink>
                </h3>
                <h3>
                    <AnchorLink href='#offers'>Offers</AnchorLink>
                </h3>
                <h3>
                    <AnchorLink href='#location'>Contact Us</AnchorLink>
                </h3>
            </div>
        </div>
    </nav>
  )
}

export default Navbar