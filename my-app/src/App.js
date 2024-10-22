// src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './components/board';
import GroupBySelect from './components/controls/GroupBySelect';
import SortBySelect from './components/controls/SortBySelect';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="App">
      <div className="controls">
        <GroupBySelect value={groupBy} onChange={handleGroupByChange} />
        <SortBySelect value={sortBy} onChange={handleSortByChange} />
      </div>
      <Board tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
