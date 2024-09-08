import React from 'react';
import CompExperties from '@/components/comprihence-experties/CompExperties';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import Inspiration from '@/components/inspiration/Inspiration';
import MyLocation from '@/components/location/Location';
import Navbar from '@/components/navbar/Navbar';
import Services from '@/components/services/Services';
import Offers from '@/components/what-we-offer/Offers';

const FrontPage = () => {
  // Debugging logs
  console.log('CompExperties:', CompExperties);
  console.log('Footer:', Footer);
  console.log('Hero:', Hero);
  console.log('Inspiration:', Inspiration);
  console.log('MyLocation:', MyLocation);
  console.log('Navbar:', Navbar);
  console.log('Services:', Services);
  console.log('Offers:', Offers);

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
  );
};

export default FrontPage;
