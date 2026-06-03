import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Service from './components/Service';
import Gym from './components/gym';
import Lifecycle from './components/Cycle';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className='popular'>
        <h3>Popular Snacks</h3>
      </div>
      
      <div className="products">
        <Card
          image={`${import.meta.env.BASE_URL}chips.png`}
          name="Banana Chips"
          rating="4.5"
          price="149"
        />

        <Card
          image={`${import.meta.env.BASE_URL}mango.png`}
          name="Mango Chips"
          rating="4.5"
          price="200"
        />

        <Card
          image={`${import.meta.env.BASE_URL}apple.png`}
          name="Apple Chips"
          rating="4.2"
          price="149"
        />

        <Card
          image={`${import.meta.env.BASE_URL}sb.png`}
          name="Strawberry Chips"
          rating="4.2"
          price="180"
        />

        <Card
          image={`${import.meta.env.BASE_URL}potato.png`}
          name="Potato Chips"
          rating="4.0"
          price="149"
        />
      </div>

      <Service />

      <Lifecycle />

      <Contact />

           

      <Footer />

    </>
  );
}

export default App;