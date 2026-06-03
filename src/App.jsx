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
        image="/chips.png"
        name="Banana Chips"
        rating="4.5"
        price="149"
      />
      <Card
        image="/mango.png"
        name="Mango Chips"
        rating="4.5"
        price="200"
      />
      <Card
        image="/apple.png"
        name="Apple Chips"
        rating="4.2"
        price="149"
      />
      <Card
        image="/sb.png"
        name="Strawberry Chips"
        rating="4.2"
        price="180"
      />
      <Card
        image="/potato.png"
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