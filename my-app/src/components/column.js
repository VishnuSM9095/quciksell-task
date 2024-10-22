import React from 'react';
import Card from './card';
import '../App.css';
import '../card.css';
import '../column.css';
import threee from '../components/icons_FEtask/3 dot menu.svg';
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
  'No priority': nop,
  'Low': low,
  'Medium': med,
  'High': high,
  'Urgent': urgent
};

const userProfiles = {
  'SK': SK,
  'S': S,
  'Y': Y,
  'R': R,
  'A': A
};

const Column = ({ group, tickets, groupBy, users, groupData }) => {
  const groupIcon = groupBy === 'status' ? statusIcons[group] 
                  : groupBy === 'priority' ? priorityIcons[group] 
                  : userProfiles[groupData?.profile];

  return (
    <div className="column">
      <div className="column-header">
        {groupIcon && <img src={groupIcon} alt={group} className="group-icon" />}
        <h2>{group}</h2>
      </div>
      {tickets.map(ticket => (
        <Card key={ticket.id} ticket={ticket} groupBy={groupBy} users={users} />
      ))}
    </div>
  );
};

export default Column;
