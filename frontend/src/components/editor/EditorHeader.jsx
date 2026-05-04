import React from 'react';
import { FiMessageSquare, FiShare2, FiStar } from 'react-icons/fi';

const EditorHeader = ({ title, isPinned, onToggleComments, onOpenShare, onTogglePin }) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <span style={{ fontSize: '24px', color: 'var(--text-main)' }}>📄</span>
        <h2 style={{ fontSize: '28px', color: 'var(--text-main)', margin: 0 }}>{title || "Untitled"}</h2>
      </div>
      <p style={{ color: '#9d50bb', fontSize: '18px', marginBottom: '16px' }}>#</p>
      
      <div style={{ display: 'flex', gap: '12px' }}>
        <button onClick={onToggleComments} style={btnStyle}>
          <FiMessageSquare /> Comments
        </button>
        <button onClick={onOpenShare} style={btnStyle}>
          <FiShare2 /> Share
        </button>
        <button 
          onClick={onTogglePin} 
          style={{ 
            ...btnStyle, 
            backgroundColor: isPinned ? '#ff3399' : '#2d2b52',
            borderColor: isPinned ? '#ff3399' : 'transparent' 
          }}
        >
          <FiStar fill={isPinned ? "white" : "none"} /> Pinned
        </button>
      </div>
    </div>
  );
};

const btnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  borderRadius: '20px',
  border: '1px solid #2d2b52',
  background: '#2d2b52',
  color: '#ffffff',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500'
};

export default EditorHeader;
