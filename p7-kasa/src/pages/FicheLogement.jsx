import React from 'react';
import { useParams } from 'react-router-dom';

import data from '../api/logements.json';

import './FicheLogement.scss';


import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Rate from '../components/Rate';
import Collaps from '../components/Collaps';

const Host = () => {
  const params = useParams();
  const host = data.find((host) => host.id === params.id);

  return (
    <div className="content">
      <div className="contentCenter">
        <Header />
        <section className="main">
          <ul>
            <Carousel {...host} />
          </ul>
          <header className="header">
            <div className="topContainer">
              <h2>{host.title}</h2>
              <p>{host.location}</p>
              <Tag {...host} />
            </div>
            <div className="middleContainer">
              <Rate {...host} />
              <div className="hostInfo">
                <span>{host.host.name}</span>
                <img src={host.host.picture} alt="host person" />
              </div>
            </div>
          </header>
          <section className="bottomContainer">
            <Collaps>{host.description}</Collaps>
            <Collaps>{host.equipments}</Collaps>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Host;