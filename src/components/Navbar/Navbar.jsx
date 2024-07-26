import React from 'react'
import './Navbar.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navba-main-container'>
        <div className='top-banner'>
            <div className='banner-icon-div'>
                <FaFacebookSquare size={15} className='banner-icon' />
                <FaXTwitter size={15} className='banner-icon' />
                <IoMdMail size={15} className='banner-icon' />
            </div>
            <div className='baneer-contact-div'>
                <span>
                    <FaPhoneAlt size={15} /><p>823 874 8213</p>
                </span>
                <span>
                    <IoMdMail size={15} /><p>medisllc@XXXXXX.com</p>
                </span>
            </div>
        </div>
        <div className='navbar-items'>
            <div className='logo-div'>
                <h3>MEDIS LLC</h3>
            </div>
            <div className='men-item-div'>
                <p>
                    <Link to={'/'}>Home</Link>
                </p>
                <p>
                    <Link to={'/about'}>About</Link>
                </p>
                <p>
                    <Link to={'/contact'}>Contact</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
