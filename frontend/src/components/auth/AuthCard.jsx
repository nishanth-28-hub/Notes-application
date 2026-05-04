import React from 'react';

const AuthCard = ({ children, type }) => {
  const isLogin = type === 'login';
  const iconGradient = isLogin 
    ? 'linear-gradient(135deg, #ff3399 0%, #ff6600 100%)' 
    : 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)';

  return (
    <div style={{
      flex: 0.85,
      backgroundColor: '#ffffff',
      borderRadius: '32px',
      padding: '48px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      order: isLogin ? 2 : 1
    }}>
      <div style={{
        background: iconGradient,
        width: '56px',
        height: '56px',
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24px'
      }}>
        {/* Matching the specific icons from Figma */}
        <span style={{ color: '#fff', fontSize: '24px' }}>
          {isLogin ? "→" : "👤+"}
        </span>
      </div>
      {children}
    </div>
  );
};

export default AuthCard;
