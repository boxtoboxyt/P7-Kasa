import React, { useState, useEffect } from 'react';

import './Rate.scss';
import StarFull from '../assets/icons/StarFull.svg';
import StarEmpty from '../assets/icons/StarEmpty.svg';

const Rate = (host) => {
  const [StarEmptyNumber, setStarEmptyNumber] = useState();
  const maxRating = 5;

  useEffect(() => {
    +host.rating < maxRating && setStarEmptyNumber(maxRating - +host.rating);
  }, [host.rating]);

  return (
    <div className="rate">
      {[...Array(+host.rating)].map((e, index) => {
        return <img key={index} src={StarFull} alt="rate" />;
      })}
      {StarEmpty &&
        [...Array(StarEmptyNumber)].map((e, index) => {
          return <img key={index} src={StarEmpty} alt="rate" />;
        })}
    </div>
  );
};

export default Rate;