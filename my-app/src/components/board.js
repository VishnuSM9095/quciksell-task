import React from 'react';
import Column from './column';
import '../../src/App';

const groupTickets = (tickets, groupBy) => {
  return tickets.reduce((acc, ticket) => {
    const key = groupBy === 'user' ? ticket.userId : ticket[groupBy];
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

  return (
    <div className="board">
      {Object.keys(sortedGroupedTickets).map(group => {
        const groupLabel = groupBy === 'user' 
          ? users.find(user => user.id === group)?.name || group 
          : group;

        return (
          <Column key={group} group={groupLabel} tickets={sortedGroupedTickets[group]} />
        );
      })}
    </div>
  );
};

export default Board;
