import React from 'react';
import '../App.css';
import grey from '../components/icons_FEtask/greyy.svg';
import todo from '../components/icons_FEtask/To-do.svg';
import progresss from '../components/icons_FEtask/in-progress.svg';
import completedd from '../components/icons_FEtask/Done.svg';
import cancelled from '../components/icons_FEtask/Cancelled.svg';
import backlog from '../components/icons_FEtask/Backlog.svg';
import SK from '../components/icons_FEtask/SK.svg';
import S from '../components/icons_FEtask/S.png';
import Y from '../components/icons_FEtask/Y_profile.png';
import R from '../components/icons_FEtask/R.png';
import A from '../components/icons_FEtask/A_profile.png';
import low from '../components/icons_FEtask/Img - Low Priority.svg';
import med from '../components/icons_FEtask/Img - Medium Priority.svg';
import high from '../components/icons_FEtask/Img - High Priority.svg';
import urgent from '../components/icons_FEtask/SVG - Urgent Priority grey.svg';
import nop from '../components/icons_FEtask/No-priority.svg';

const statusIcons = {
  'Todo': todo,
  'In progress': progresss,
  'Done': completedd,
  'Cancelled': cancelled,
  'Backlog': backlog
};

const priorityIcons = {
  '0': nop,
  '1': low,
  '2': med,
  '3': high,
  '4': urgent
};

const userProfiles = {
  'SK': SK,
  'S': S,
  'Y': Y,
  'R': R,
  'A': A
};

const Card = ({ ticket, groupBy, users }) => {
  const user = users.find(user => user.id === ticket.userId);
  const statusIcon = statusIcons[ticket.status];
  const userProfile = userProfiles[user?.profile];
  const priorityIcon = priorityIcons[ticket.priority];

  return (
    <div className="card">
      <div className="card-id">
        {ticket.id}
        {groupBy !== 'user' && userProfile && <img src={userProfile} alt={user?.name} className="user-icon" />}
      </div>
      <div className="card-title">
        {groupBy === 'priority' && statusIcon && <img src={statusIcon} alt={ticket.status} />}
        {ticket.title.length > 40 ? `${ticket.title.substring(0, 40)}...` : ticket.title}
      </div>
      <div className="subcard">
        {groupBy === 'status' && priorityIcon && <img src={priorityIcon} alt={ticket.priority} className="priority-icon" />}
        {ticket.tag.includes('Feature Request') && (
          <div className="tag-button">
            <img src={grey} alt='greydot'></img>
            <span>Feature Request</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
