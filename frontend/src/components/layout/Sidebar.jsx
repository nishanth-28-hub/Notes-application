import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { FiFileText, FiStar, FiTrash2, FiSun, FiMoon, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { id: 'all', label: 'All Notes', icon: <FiFileText />, path: '/dashboard' },
    { id: 'pinned', label: 'Pinned', icon: <FiStar />, path: '/pinned' },
    { id: 'trash', label: 'Trash', icon: <FiTrash2 />, path: '/trash' },
  ];

  return (
    <div style={{ width: '240px', background: 'var(--panel-bg)', height: '100vh', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border)' }}>
      <div style={{ padding: '24px', fontSize: '20px', fontWeight: 'bold', color: '#ff3399', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '24px' }}>✨</span> My Notes
      </div>

      <nav style={{ flex: 1, padding: '0 12px' }}>
        {navItems.map(item => (
          <NavLink 
            key={item.id} 
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px',
              textDecoration: 'none', marginBottom: '8px', transition: 'var(--transition)',
              backgroundColor: isActive ? 'var(--sidebar-active)' : 'transparent',
              color: isActive ? '#fff' : 'var(--text-muted)'
            })}
          >
            {item.icon} {item.label}
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: '20px', borderTop: '1px solid var(--border)' }}>
        <button onClick={toggleTheme} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '10px' }}>
          {theme === 'light' ? <FiMoon /> : <FiSun />} {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
        <button style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '10px' }}>
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
