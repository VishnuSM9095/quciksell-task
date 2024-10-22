// src/components/controls/SortBySelect.js

import React from 'react';

const SortBySelect = ({ value, onChange }) => {
  return (
    <label>
      Sort By:
      <select value={value} onChange={onChange}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </label>
  );
};

export default SortBySelect;
