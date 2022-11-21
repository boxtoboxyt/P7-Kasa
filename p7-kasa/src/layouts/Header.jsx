import React from 'react';

import classes from "./header.scss";
import logo from "../assets/logo/logo.png";
import Navigation from '../components/Navigation/Navigation';

const header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="logo Kasa" />
            </div>
            <Navigation />

        </header>
    );
}

export default header;
