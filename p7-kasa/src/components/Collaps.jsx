import React, { useState } from 'react';

import  './Collaps.scss';
import arrow from '../assets/icons/arrowCollaps.svg';

const Collaps = (host) => {
  const [collaps, setCollaps] = useState(true);

  const collapsHandler = () => {
    setCollaps(!collaps);
  };

  return (
    <div className="container">
      {host.children?.constructor === Array && (
        <>
          <div className="topContainer" onClick={collapsHandler}>
            <h2>Équipements</h2>
            <img
              className={collaps ? "rotate" : ''}
              src={arrow}
              alt="arrow"
            />
          </div>
          <ul className={collaps ? "hidden" : ''}>
            {host.children.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </>
      )}
      {host.children?.constructor === String && (
        <>
          <div className="topContainer" onClick={collapsHandler}>
            <h2>Description</h2>
            <img
              className={collaps ? "rotate" : ''}
              src={arrow}
              alt="arrow"
            />
          </div>
          <p className={collaps ? "hidden" : ''}>{host.children}</p>
        </>
      )}
      {host.title && (
        <>
          <div className="topContainer" onClick={collapsHandler}>
            <h2>{host.title}</h2>
            <img
              className={collaps ? "rotate" : ''}
              src={arrow}
              alt="arrow"
            />
          </div>
          <p className={collaps ? "hidden" : ''}>{host.text}</p>
        </>
      )}
    </div>
  );
};

export default Collaps;