import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HostCard.scss';

const HostCard = (host) => {
  const navigate = useNavigate();

  const getHostId = () => {
    navigate(`/host/${host.id}`);
  };

  return (
    <div className='card' onClick={getHostId}>
      <h2>{host.title}</h2>
      <img src={host.cover} alt="host place" />
    </div>
  );
};

export default HostCard;