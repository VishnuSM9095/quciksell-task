import React, { useState } from 'react';
import down from '../icons_FEtask/down.svg';

const SortBySelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (newValue) => {
    onChange({ target: { value: newValue } }); // Send new value back to parent
    setIsOpen(false); // Close dropdown on option select
  };

  return (
    <div className="dropdown-container">
      <div className="navbar-item" onClick={handleToggleDropdown}>
        <span>{value}</span>
        <img src={down} alt="Dropdown" className={`dropdown-icon ${isOpen ? 'rotated' : ''}`} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-option" onClick={() => handleOptionChange('priority')}>Priority</div>
          <div className="dropdown-option" onClick={() => handleOptionChange('title')}>Title</div>
        </div>
      )}
    </div>
  );
};

export default SortBySelect;
