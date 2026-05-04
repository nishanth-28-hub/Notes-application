import React from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../components/auth/AuthCard';
import AuthBranding from '../components/auth/AuthBranding';

const Signup = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)', 
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' 
    }}>
      <div style={{ display: 'flex', width: '1100px', height: '650px' }}>
        <AuthCard type="signup">
          <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Create account</h2>
          <p style={{ color: '#666', marginBottom: '32px' }}>⭐ Start taking notes today</p>
          
          <form style={{ width: '100%' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px' }}>Name</label>
              <input type="text" placeholder="Your name" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px' }}>Email</label>
              <input type="email" placeholder="you@example.com" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px' }}>Password</label>
              <input type="password" placeholder="••••••••" style={inputStyle} />
            </div>
            <button style={{ 
              width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
              background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)', color: '#fff', 
              fontWeight: '700', cursor: 'pointer' 
            }}>Create account</button>
          </form>
          <p style={{ marginTop: '20px' }}>
            Already have an account? <Link to="/login" style={{ color: '#00b09b', fontWeight: '600' }}>Sign in</Link>
          </p>
        </AuthCard>
        <AuthBranding type="signup" />
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd' };

export default Signup;
