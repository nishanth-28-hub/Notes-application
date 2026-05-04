import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ value, onChange }) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <FiSearch style={{ 
        position: 'absolute', left: '12px', top: '50%', 
        transform: 'translateY(-50%)', color: 'var(--text-muted)' 
      }} />
      <input 
        type="text"
        placeholder="Search notes..."
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '10px 10px 10px 36px',
          borderRadius: '10px',
          border: '1px solid var(--border)',
          background: 'rgba(255, 255, 255, 0.05)',
          color: 'var(--text-main)',
          outline: 'none',
          fontSize: '14px'
        }}
      />
    </div>
  );
};

export default SearchBar;
