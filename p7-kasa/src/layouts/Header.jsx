import React from 'react';

import "./header.scss";
import logo from "../assets/logo/logo.png";
import Navigation from '../components/Navigation/Navigation';

const Header = () => {
    return (
        <header className='header-menu'>
            <div>
                <img src={logo} alt="logo Kasa" />
            </div>
            <Navigation />
        </header>
    );
}

export default Header;
