import React, { useState } from 'react';

import './Carousel.scss';
import arrow from '../assets/icons/arrowCollaps.svg';

const Carousel = (host) => {
  const [picture, setPicture] = useState(0);
  const [slidingRight, setSlidingRight] = useState(false);
  const [slidingLeft, setSlidingLeft] = useState(false);

  const sliderRight = () => {
    setSlidingRight(true);
    setTimeout(() => setSlidingRight(false), 100);

    picture === host.pictures.length - 1
      ? setPicture(0)
      : setPicture((prevState) => prevState + 1);
  };

  const sliderLeft = () => {
    setSlidingLeft(true);
    setTimeout(() => setSlidingLeft(false), 100);

    picture === 0
      ? setPicture(host.pictures.length - 1)
      : setPicture((prevState) => prevState - 1);
  };

  return (
    <div className="carousel">
      <div
        className={`${"arrows"} ${
          host.pictures.length <= 1 && "hidden"
        }`}
      >
        <img
          src={arrow}
          alt="left arrow"
          onClick={sliderLeft}
          className="leftArrow"
        />
        <img
          src={arrow}
          alt="right arrow"
          onClick={sliderRight}
          className="rightArrow"
        />
      </div>
      <li
        className={`${"img"} ${
          slidingRight ? "slideRight" : null
        } ${slidingLeft ? "slideLeft" : null}`}
      >
        {/*<li className={classes.img}>*/}
        <img
          src={host.pictures[picture]}
          alt="host"
          // className={sliding ? classes.slide : null}
        />
      </li>
      <span className="hidden">{`${picture + 1}/${
        host.pictures.length
      }`}</span>
    </div>
  );
};

export default Carousel;