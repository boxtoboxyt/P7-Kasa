import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss';

const Navigation = () => {
  return (
    <ul className="links-list">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <li>ACCUEIL</li>
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        <li>A PROPOS</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;