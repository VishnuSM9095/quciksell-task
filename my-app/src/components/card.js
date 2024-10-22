import React from 'react';
import '../App.css';
import threee from '../components/icons_FEtask/3 dot menu.svg';
import todo from '../components/icons_FEtask/To-do.svg';
import progresss from '../components/icons_FEtask/in-progress.svg';
import completedd from '../components/icons_FEtask/Done.svg';
import cancelled from '../components/icons_FEtask/Cancelled.svg';
import backlog from '../components/icons_FEtask/Backlog.svg';

const statusIcons = {
  'Todo': todo,
  'In progress': progresss,
  'Done': completedd,
  'Cancelled': cancelled,
  'Backlog': backlog
};

const Card = ({ ticket }) => {
  const tag = ticket.tag.includes('Feature Request') ? 'Feature Request' : '';
  const statusIcon = statusIcons[ticket.status] || threee;

  return (
    <div className="card">
      <div className="card-id">{ticket.id}</div>
      <div className="card-title">
        <img src={statusIcon} alt={ticket.status} />
        {ticket.title.length > 40 ? `${ticket.title.substring(0, 40)}...` : ticket.title}
      </div>
      <div className='subcard'>
        <div className='card-icon'></div>
        {tag && (
          <div className="tag-button">
            <span>{tag}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
