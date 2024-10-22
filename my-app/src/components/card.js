import React from 'react';
import '../App.css';
import '../card.css';
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
      <div className="card-header">
        <div className="card-id">{ticket.id}</div>
        <img src={threee} alt="Menu" className="menu-icon" />
      </div>
      <div className="card-title">
        <img src={statusIcon} alt={ticket.status} className="status-icon" />
        {ticket.title.length > 30 ? `${ticket.title.substring(0, 30)}...` : ticket.title}
      </div>
      <div className="card-footer">
        <div className="card-tag">
          {tag && (
            <div className="tag-button">
              <span>{tag}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
