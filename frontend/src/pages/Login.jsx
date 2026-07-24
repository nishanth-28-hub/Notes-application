import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-page-login" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
      <div style={{ display: 'flex', width: '1000px', height: '600px', backgroundColor: 'transparent' }}>
        {/* Left Side: Branding */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
          <img src="/assets/auth-img.png" alt="Capture" style={{ width: '80%', borderRadius: '24px', marginBottom: '24px' }} />
          <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>Capture Your Ideas</h1>
          <p style={{ textAlign: 'center', opacity: 0.9, maxWidth: '300px' }}>The smart way to organize your thoughts and collaborate with others</p>
        </div>

        {/* Right Side: Form */}
        <div style={{ flex: 0.8, backgroundColor: '#fff', borderRadius: '32px', padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'var(--grad-auth-login)', padding: '12px', borderRadius: '12px', marginBottom: '20px' }}>
            <span style={{ color: '#fff', fontSize: '24px' }}>→</span>
          </div>
          <h2 style={{ fontSize: '28px', color: '#1a1a1a', marginBottom: '8px' }}>Welcome back</h2>
          <p style={{ color: '#666', marginBottom: '32px' }}>✨ Sign in to your notes</p>

          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
            
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '20px' }} 
              required
            />
            
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #ddd', marginBottom: '32px' }} 
              required
            />

            <button type="submit" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: 'var(--grad-auth-login)', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Sign in</button>
          </form>
          <p style={{ marginTop: '24px', color: '#666' }}>Don't have an account? <Link to="/signup" style={{ color: '#ff3399', textDecoration: 'none', fontWeight: '600' }}>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
