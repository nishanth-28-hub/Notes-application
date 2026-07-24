import React from 'react';
import { FiMessageSquare, FiShare2, FiStar } from 'react-icons/fi';

const EditorHeader = ({ title, isPinned, onTitleChange, onToggleComments, onOpenShare, onTogglePin }) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
        <span style={{ fontSize: '24px' }}>📄</span>
        <input 
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          placeholder="Untitled"
          style={{
            fontSize: '28px',
            color: 'var(--text-main)',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontWeight: '700',
            width: '100%',
            fontFamily: 'Outfit, sans-serif'
          }}
        />
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="glass-button" onClick={onToggleComments} style={btnStyle}>
          <FiMessageSquare size={14} /> Comments
        </button>
        <button className="glass-button" onClick={onOpenShare} style={btnStyle}>
          <FiShare2 size={14} /> Share
        </button>
        <button 
          className="glass-button"
          onClick={onTogglePin} 
          style={{ 
            ...btnStyle, 
            background: isPinned ? 'var(--accent)' : '',
            color: isPinned ? '#fff' : ''
          }}
        >
          <FiStar size={14} fill={isPinned ? "white" : "none"} /> {isPinned ? 'Pinned' : 'Pin'}
        </button>
      </div>
    </div>
  );
};

const btnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 14px',
  borderRadius: '20px',
  color: 'var(--text-main)',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: '500'
};

export default EditorHeader;
