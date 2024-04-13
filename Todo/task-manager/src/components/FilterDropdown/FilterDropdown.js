import React from 'react';
import './FilterDropdown.css'; // Import CSS file

const FilterDropdown = ({ statuses, onSelectStatus }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}> {/* Apply CSS class to center and add spacing */}
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

