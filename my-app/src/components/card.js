import React from 'react';
import '../../src/App.css';

const priorityLabels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>User:</strong> {ticket.userId}</p>
      <p><strong>Priority:</strong> {priorityLabels[ticket.priority] || 'No Priority'}</p>
      <p><strong>Tags:</strong> {ticket.tag.join(', ')}</p>
    </div>
  );
};

export default Card;
