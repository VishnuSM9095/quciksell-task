import React, { useEffect, useState, useRef } from 'react';
import Board from './components/board';
import GroupBySelect from './components/controls/GroupBySelect';
import SortBySelect from './components/controls/SortBySelect';
import './App.css';
import display from './components/icons_FEtask/Display.svg';
import down from './components/icons_FEtask/down.svg';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdown if the click is outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation(); // Prevent click from propagating to document
    setDropdownOpen(prevState => !prevState); // Toggle dropdown state
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-item" onClick={toggleDropdown}>
          <img src={display} alt="Display" />
          <span>Display</span>
          <img src={down} alt="Dropdown" className={`dropdown-icon ${isDropdownOpen ? 'rotated' : ''}`} />
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <div className="dropdown-section">
              <span>Grouping</span>
              <GroupBySelect value={groupBy} onChange={(e) => setGroupBy(e.target.value)} downIcon={down} />
            </div>
            <div className="dropdown-section">
              <span>Ordering</span>
              <SortBySelect value={sortBy} onChange={(e) => setSortBy(e.target.value)} downIcon={down} />
            </div>
          </div>
        )}
      </nav>
      {/* Board */}
      <Board tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
