import CompExperties from '@/components/comprihence-experties/CompExperties'
import Courses from '@/components/cources/Courses'
import DiscountBanner from '@/components/discount-banner/DiscountBanner'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Inspiration from '@/components/inspiration/Inspiration'
import MyLocation from '@/components/location/Location'
import Navbar from '@/components/navbar/Navbar'
import Services from '@/components/services/Services'
import Testimonials from '@/components/testimonials/Testimonials'
import Offers from '@/components/what-we-offer/Offers'
// import { Inspiration } from 'next/font/google'
import React from 'react'
// import Navbar from '../components/navbar/Navbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const FrontPage = () => {
  return (
    <div>
      
        <Navbar />
        <section id='hero'>
          <Hero />
        </section>
        <section id='inspire'>
          <Inspiration />
        </section>
        <section id='experties'>
          <CompExperties />
        </section>
        <section id='services'>
          <Services />
        </section>
        <section id='offers'>
          <Offers />
        </section>
        <section id='location'>
          <MyLocation />
        </section>
        <Footer />
    </div>
  )
}

export default FrontPage