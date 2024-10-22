import React from 'react';
import Column from './column';
import '../../src/App.css'; // Ensure the correct path to your CSS file
const priorityOrder = ['No priority', 'Urgent', 'High', 'Medium', 'Low'];

const priorityLabels = {
  0: 'No priority',
  1: 'Low',
  2: 'Medium',
  3: 'High',
  4: 'Urgent'
};

const groupTickets = (tickets, groupBy) => {
  return tickets.reduce((acc, ticket) => {
    const key = groupBy === 'priority' ? priorityLabels[ticket.priority] : groupBy === 'user' ? ticket.userId : ticket[groupBy];
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
};

const sortTickets = (tickets, sortBy) => {
  return [...tickets].sort((a, b) => {
    if (sortBy === 'priority') {
      return b.priority - a.priority;
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
};

const Board = ({ tickets, users, groupBy, sortBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy);
  const sortedGroupedTickets = Object.keys(groupedTickets).reduce((acc, key) => {
    acc[key] = sortTickets(groupedTickets[key], sortBy);
    return acc;
  }, {});

  const renderColumns = () => {
    if (groupBy === 'priority') {
      return priorityOrder.map(groupLabel => {
        return (
             
          <Column key={groupLabel} group={groupLabel} tickets={sortedGroupedTickets[groupLabel] || []} />
        );
      });
    } else {
      return Object.keys(sortedGroupedTickets).map(group => {
        const groupLabel = groupBy === 'user'
          ? users.find(user => user.id === group)?.name || group
          : group;
        return (
          <Column key={group} group={groupLabel} tickets={sortedGroupedTickets[group]} />
        );
      });
    }
  };

  return (
    <div className="board">
        
      {renderColumns()}
    </div>
  );
};

export default Board;
