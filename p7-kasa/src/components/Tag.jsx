import React from 'react';

import './Tag.scss';

const tag = (host) => {
  return (
    <ul className="tag">
      {host.tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};

export default tag;