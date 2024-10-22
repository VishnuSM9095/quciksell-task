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
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();

        // Handle null or undefined values
        setTickets(data.tickets || []); // Default to empty array
        setUsers(data.users || []); // Default to empty array
      } catch (error) {
        console.error("Error fetching data: ", error);
        setTickets([]); // Set to empty array on error
        setUsers([]); // Set to empty array on error
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    event.stopPropagation();
    setDropdownOpen(prevState => !prevState);
  };

  const handleGroupByChange = (value) => {
    setGroupBy(value);
    localStorage.setItem('groupBy', value); // Save to local storage
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
    localStorage.setItem('sortBy', value); // Save to local storage
  };

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>; // Display loading message while fetching
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-item1" onClick={toggleDropdown}>
          <img src={display} alt="Display" />
          <span>Display</span>
          <img src={down} alt="Dropdown" className={`dropdown-icon1 ${isDropdownOpen ? 'rotated' : ''}`} />
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <div className="dropdown-section">
              <span>Grouping</span>
              <GroupBySelect value={groupBy} onChange={(e) => handleGroupByChange(e.target.value)} downIcon={down} />
            </div>
            <div className="dropdown-section">
              <span>Ordering</span>
              <SortBySelect value={sortBy} onChange={(e) => handleSortByChange(e.target.value)} downIcon={down} />
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
