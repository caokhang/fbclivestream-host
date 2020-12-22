import { Component } from "react";
import React from 'react';
import Hero from './Hero';
import Clients from './Clients';
import About from './About';
import Server from './Service';
import Pricing from './Pricing';
import Contact from './Contact';


class Section extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Clients />
        <About />
        <Server />
        <Pricing />
        <Contact />


      </div>
    );
  }
}

export default Section;
