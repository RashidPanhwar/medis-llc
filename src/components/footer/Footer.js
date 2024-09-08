import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Assigning unique keys using an object with a name or id could also help
  const socialIcons = [
    { icon: <FaFacebookF size={20} className='text-white' />, name: 'facebook' },
    { icon: <FaSquareXTwitter size={20} className='text-white' />, name: 'twitter' },
    { icon: <RiLinkedinLine size={20} className='text-white' />, name: 'linkedin' },
    { icon: <FaInstagram size={20} className='text-white' />, name: 'instagram' }
  ];

  return (
    <div className='flex flex-col w-full items-center justify-center p-4'>
      <div className='flex w-full items-center justify-center gap-5'>
        {socialIcons.map((item, index) => (
          <a 
            key={item.name} // Using name as a unique key prop
            className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-orange-500 via-pink-500 to-pink-500 p-3 rounded-lg shadow-lg'
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className='flex w-full items-center justify-center p-2'>
        <a href='#' className='text-sm font-bold text-black'>
          All Rights Reserved To Medis llc
        </a>
      </div>
    </div>
  );
};

export default Footer;
