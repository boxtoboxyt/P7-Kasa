import React from 'react';

import data from '../api/About.json';

import './About.scss';
import background from '../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Collaps from '../components/Collaps';

const About = () => {
  return (
    <div className="content">
      <div className="contentCenter">
        <Header />
        <section className="main">
          <div className="img">
            <picture>
              <source media="(min-width: 992px)" srcSet={background} />
              <img src={background} alt="background" />
            </picture>
          </div>

          <div className="container">
            <Collaps {...data.trust} />
            <Collaps {...data.respect} />
            <Collaps {...data.service} />
            <Collaps {...data.security} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;