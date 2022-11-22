import React from 'react';
import { useNavigate } from 'react-router-dom';

import useDocumentTitle from '../hook/useDocumentTitle';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import './Code404.scss';

const Code404 = ({ title }) => {
  useDocumentTitle(title);

  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate('/');
  };

  return (
    <div className="content">
      <div className="classes.contentCenter">
        <Header />
        <section className="container">
          <h2>404</h2>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <button onClick={goHomeHandler}>
            Retournez sur la page d'accueil
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Code404;