import React from 'react';

import data from '../api/logements.json';

import './accueil.scss';


import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import HostCard from '../components/UI/HostCard';

const Home = () => {
  return (
    <div className="content">
      <div className="contentCenter">
        <Header />
        <section className="main">
          <div className="img">
            <p>Chez vous, partout et ailleurs</p>
          </div>
          <ul className="cardLayout">
            {data.map((host) => (
              <li key={host.id}>
                <HostCard {...host} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;