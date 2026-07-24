import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';
import { FiFileText, FiStar, FiTrash2, FiSun, FiMoon, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { id: 'all', label: 'All Notes', icon: <FiFileText />, path: '/' },
    { id: 'pinned', label: 'Pinned', icon: <FiStar />, path: '/pinned' },
    { id: 'trash', label: 'Trash', icon: <FiTrash2 />, path: '/trash' },
  ];

  return (
    <div className="glass-panel" style={{ width: '220px', background: 'var(--sidebar-bg)', height: '100vh', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border)' }}>
      <div style={{ padding: '24px 20px', fontSize: '18px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--grad-auth-login)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        <span style={{ fontSize: '20px', WebkitTextFillColor: 'initial' }}>✨</span> My Notes
      </div>

      <nav style={{ flex: 1, padding: '0 12px' }}>
        {navItems.map(item => (
          <NavLink 
            key={item.id} 
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', borderRadius: '10px',
              textDecoration: 'none', marginBottom: '4px', transition: 'all 0.2s ease',
              backgroundColor: isActive ? 'var(--glass-bg)' : 'transparent',
              color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
              fontSize: '14px', fontWeight: isActive ? '600' : '400'
            })}
          >
            {item.icon} {item.label}
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: '16px', borderTop: '1px solid var(--border)' }}>
        <button onClick={toggleTheme} style={bottomBtnStyle}>
          {theme === 'light' ? <FiMoon size={14} /> : <FiSun size={14} />} {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
        <button onClick={handleLogout} style={bottomBtnStyle}>
          <FiLogOut size={14} /> Logout
        </button>
      </div>
    </div>
  );
};

const bottomBtnStyle = { 
  width: '100%', display: 'flex', alignItems: 'center', gap: '10px', 
  background: 'none', border: 'none', color: 'var(--text-muted)', 
  cursor: 'pointer', padding: '8px 14px', fontSize: '13px', borderRadius: '8px',
  transition: 'all 0.2s ease'
};

export default Sidebar;
