import React from 'react'
import './Footer.css';
// import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-main-div'>
      <div className='footer-contact-and-email'>
        <span>
            <FaPhoneAlt size={15} /><p>823 874 8213</p>
        </span>
        <div className='footer-email-div'>
            <input type='text' placeholder='Enter Your Email' />
            <button>Get in Touch</button>
        </div>
      </div>
      <p>Copy Rights Reserved</p>
    </div>
  )
}

export default Footer
