import React from 'react';
import Card from './card';
import '../App.css';
import '../card.css';
import '../column.css';
import todo from '../components/icons_FEtask/To-do.svg';
import progresss from '../components/icons_FEtask/in-progress.svg';
import completedd from '../components/icons_FEtask/Done.svg';
import cancelled from '../components/icons_FEtask/Cancelled.svg';
import backlog from '../components/icons_FEtask/Backlog.svg';
import grey from '../components/icons_FEtask/greyy.svg';
import SK from '../components/icons_FEtask/SK.svg';
import S from '../components/icons_FEtask/S.png';
import Y from '../components/icons_FEtask/Y_profile.png';
import R from '../components/icons_FEtask/R.png';
import A from '../components/icons_FEtask/A_profile.png';
import low from '../components/icons_FEtask/Img - Low Priority.svg';
import med from '../components/icons_FEtask/Img - Medium Priority.svg';
import high from '../components/icons_FEtask/Img - High Priority.svg';
import urgent from '../components/icons_FEtask/SVG - Urgent Priority colour.svg';
import nop from '../components/icons_FEtask/No-priority.svg';
import plus from '../components/icons_FEtask/add.svg';
import three from '../components/icons_FEtask/3 dot menu.svg';


const statusIcons = {
  'Todo': todo,
  'In progress': progresss,
  'Done': completedd,
  'Cancelled': cancelled,
  'Backlog': backlog
};

const priorityIcons = {
  'No priority': nop,
  'Low': low,
  'Medium': med,
  'High': high,
  'Urgent': urgent
};

const userProfiles = {
  'Shankar Kumar': SK,
  'Suresh': S,
  'Yogesh': Y,
  'Ramesh': R,
  'Anoop sharma': A
};

const Column = ({ group, tickets, groupBy, users }) => {
  const groupIcon = groupBy === 'status' ? statusIcons[group] 
                  : groupBy === 'priority' ? priorityIcons[group] 
                  : null; 

  const user = users.find(user => user.name === group);
  const userProfile = userProfiles[user?.name] || grey; 
  const availabilityClass = user?.available ? 'available' : 'unavailable'; 

  const ticketCount = tickets.length;

  return (
    <div className="column">
      <div className='head-col'>
        <div className="column-header">
          {groupIcon && <img src={groupIcon} alt={group} className="group-icon" />}
          {groupBy === 'user' && userProfile && (
            <div className="user-info">
              <img src={userProfile} alt={user?.name} className="user-profile" />
              <span className={`availability ${availabilityClass}`}></span>
            </div>
          )}
          
          <h2>{group} <span className="ticket-count">{ticketCount}</span></h2>
          
        </div>
        <div className='right-set'>
          <img src={plus} alt='pplus'></img>
          <img src={three} alt='pplus'></img>
        </div>
      </div>
      {tickets.map(ticket => (
        <Card key={ticket.id} ticket={ticket} groupBy={groupBy} users={users} />
      ))}
    </div>
  );
};

export default Column;
