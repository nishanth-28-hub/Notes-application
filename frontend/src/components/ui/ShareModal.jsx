import React from 'react';
import { FiLink, FiUsers, FiX } from 'react-icons/fi';

const ShareModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', 
      alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#15142b', width: '450px', borderRadius: '24px',
        padding: '32px', border: '1px solid #2d2b52', position: 'relative'
      }}>
        <FiX onClick={onClose} style={{ position: 'absolute', right: '24px', top: '24px', color: '#fff', cursor: 'pointer' }} />
        
        <h3 style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '12px', marginTop: 0 }}>
          <FiLink /> Share Note
        </h3>

        <div style={{ margin: '24px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <input type="checkbox" id="public" style={{ width: '18px', height: '18px' }} />
          <label htmlFor="public" style={{ color: '#fff', fontSize: '15px' }}>Make this note public</label>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '20px' }}>
          <FiUsers style={{ marginRight: '8px' }} /> Invite people
        </p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            placeholder="Enter email address" 
            style={{ 
              flex: 1, padding: '12px', borderRadius: '10px', 
              background: '#0b0a1a', border: '1px solid #2d2b52', color: '#fff' 
            }} 
          />
          <button style={{ 
            background: '#ff3399', color: '#fff', border: 'none', 
            borderRadius: '10px', padding: '0 20px', cursor: 'pointer', fontWeight: 'bold' 
          }}>Add</button>
        </div>

        <button 
          onClick={onClose}
          style={{ 
            width: '100%', marginTop: '24px', padding: '12px', 
            borderRadius: '10px', background: 'rgba(255,255,255,0.1)', 
            color: '#fff', border: 'none', cursor: 'pointer' 
          }}
        >Close</button>
      </div>
    </div>
  );
};

export default ShareModal;
