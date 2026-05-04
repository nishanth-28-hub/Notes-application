import React from 'react';

const AuthBranding = ({ type }) => {
  const isLogin = type === 'login';
  
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff',
      padding: '40px',
      order: isLogin ? 1 : 2 // Image is left on Login, right on Signup
    }}>
      <img 
        src={isLogin ? "/assets/images/auth-login.jpg" : "/assets/images/auth-signup.jpg"} 
        alt="Auth Illustration" 
        style={{ 
          width: '80%', 
          borderRadius: '24px', 
          marginBottom: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)' 
        }} 
      />
      <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '12px' }}>
        {isLogin ? "Capture Your Ideas" : "Join Thousands of Users"}
      </h1>
      <p style={{ 
        textAlign: 'center', 
        fontSize: '18px', 
        opacity: 0.9, 
        maxWidth: '400px',
        lineHeight: '1.6' 
      }}>
        {isLogin 
          ? "The smart way to organize your thoughts and collaborate with others" 
          : "Organize, collaborate, and share your notes seamlessly"}
      </p>
      {!isLogin && (
        <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>✨</span> <b>Smart Notes</b>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>⭐</span> <b>Collaborate</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthBranding;
