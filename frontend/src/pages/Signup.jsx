import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/auth/AuthCard';
import AuthBranding from '../components/auth/AuthBranding';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)', 
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' 
    }}>
      <div style={{ display: 'flex', width: '1100px', height: '650px' }}>
        <AuthCard type="signup">
          <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Create account</h2>
          <p style={{ color: '#666', marginBottom: '32px' }}>⭐ Start taking notes today</p>
          
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px' }}>Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle} 
                required
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px' }}>Email</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle} 
                required
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px' }}>Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle} 
                required
              />
            </div>
            <button type="submit" style={{ 
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
