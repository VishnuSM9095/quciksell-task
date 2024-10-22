// src/components/controls/GroupBySelect.js

import React from 'react';

const GroupBySelect = ({ value, onChange }) => {
  return (
    <label>
      Group By:
      <select value={value} onChange={onChange}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </label>
  );
};

export default GroupBySelect;
