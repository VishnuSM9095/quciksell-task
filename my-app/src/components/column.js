import React from 'react';
import Card from './card';
import '../../src/App.css';

const Column = ({ group, tickets }) => {
  return (
    <div className="column">
      <h2>{group}</h2>
      {tickets.map(ticket => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
