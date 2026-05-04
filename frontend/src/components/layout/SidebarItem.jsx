import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ label, icon, to }) => {
  return (
    <NavLink 
      to={to}
      style={({ isActive }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 20px',
        borderRadius: '14px',
        textDecoration: 'none',
        marginBottom: '4px',
        transition: 'all 0.2s ease',
        backgroundColor: isActive ? '#00aeef' : 'transparent',
        color: isActive ? '#ffffff' : '#94a3b8'
      })}
    >
      <span style={{ fontSize: '20px' }}>{icon}</span>
      <span style={{ fontWeight: '500' }}>{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
