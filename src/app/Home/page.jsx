import React from 'react'
import CompExperties from '@/components/comprihence-experties/CompExperties'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Inspiration from '@/components/inspiration/Inspiration'
import MyLocation from '@/components/location/Location'
import Navbar from '@/components/navbar/Navbar'
import Services from '@/components/services/Services'
import Offers from '@/components/what-we-offer/Offers'

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