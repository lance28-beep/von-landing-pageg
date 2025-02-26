import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandPartners from './components/BrandPartners';
import ServiceSolutions from './components/ServiceSolutions';
import CarCollection from './components/CarCollection';
import Testimonials from './components/Testimonials';
import VehicleBuilder from './components/VehicleBuilder';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import Collection from './components/Collection';

function App() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Element name="hero" className="reveal">
        <Hero />
      </Element>
      <Element name="brandPartners" className="reveal">
        <BrandPartners />
      </Element>
      <Element name="serviceSolutions" className="reveal">
        <ServiceSolutions />
      </Element>
      <Element name="carCollection" className="reveal">
        <CarCollection />
      </Element>
      <Element name="testimonials" className="reveal">
        <Testimonials />
      </Element>
      <Element name="vehicleBuilder" className="reveal">
        <VehicleBuilder />
      </Element>
      <Element name="collection" className="reveal">
        <Collection />
      </Element>
      <Element name="contactForm" className="reveal">
        <ContactForm />
      </Element>
      <Element name="locationMap" className="reveal">
        <LocationMap />
      </Element>
      <Footer />
    </div>
  );
}

export default App;