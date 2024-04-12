import React from 'react';

const FilterDropdown = ({ statuses, onSelectStatus }) => {
  return (
    <div>
      <label>Filter by Status:</label>
      <select onChange={(e) => onSelectStatus(e.target.value)}>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;