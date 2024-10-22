// src/components/Card.js

import React from 'react';
import '../../src/App.css';

const Card = ({ ticket }) => {
  const { id, title } = ticket;

  // Function to truncate the title
  const truncateTitle = (title) => {
    if (title.length > 30) {
      return title.slice(0, 30) + '...'; // Adjust the number to control the cut-off point
    }
    return title;
  };

  return (
    <div className="card">
      <div className="card-id">{id}</div>
      <div className="card-title">{truncateTitle(title)}</div>
      
    </div>
  );
};

export default Card;
