import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { NoteProvider } from './context/NoteContext';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = React.useContext(AuthContext);
  
  if (loading) return <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)', color: 'var(--text-main)' }}>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  
  return children;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NoteProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* All dashboard views use the same Dashboard component with a view prop */}
              <Route path="/" element={
                <ProtectedRoute>
                  <Dashboard view="all" />
                </ProtectedRoute>
              } />
              
              <Route path="/pinned" element={
                <ProtectedRoute>
                  <Dashboard view="pinned" />
                </ProtectedRoute>
              } />

              <Route path="/trash" element={
                <ProtectedRoute>
                  <Dashboard view="trash" />
                </ProtectedRoute>
              } />
            </Routes>
          </Router>
        </NoteProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
