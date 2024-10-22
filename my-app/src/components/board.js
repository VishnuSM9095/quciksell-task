import React from 'react';
import Column from './column';
import '../App.css';

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

  // Ensure "Done" and "Cancelled" columns are always present
  if (!sortedGroupedTickets["Done"]) {
    sortedGroupedTickets["Done"] = [];
  }
  if (!sortedGroupedTickets["Cancelled"]) {
    sortedGroupedTickets["Cancelled"] = [];
  }

  const orderedKeys = groupBy === 'priority' 
    ? ['0', '4', '3', '2', '1'] 
    : Object.keys(sortedGroupedTickets);

  return (
    <div className="board">
      {orderedKeys.map(group => {
        const groupLabel = groupBy === 'user'
          ? users.find(user => user.id === group)?.name || group
          : groupBy === 'priority'
          ? group === '0' ? 'No priority'
          : group === '1' ? 'Low'
          : group === '2' ? 'Medium'
          : group === '3' ? 'High'
          : 'Urgent'
          : group;

        const groupData = groupBy === 'user'
          ? users.find(user => user.id === group)
          : { name: groupLabel };

        return (
          <Column 
            key={group} 
            group={groupLabel} 
            tickets={sortedGroupedTickets[group]} 
            groupBy={groupBy} 
            users={users} 
            groupData={groupData}
          />
        );
      })}
    </div>
  );
};

export default Board;
