import React from 'react';
import Toolbar from './Toolbar';

const RichTextEditor = () => {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Toolbar />
      <div 
        contentEditable 
        data-placeholder="Start writing your notes... Type / for commands ✨"
        style={{
          flex: 1,
          padding: '20px 0',
          fontSize: '18px',
          color: 'var(--text-main)',
          outline: 'none',
          lineHeight: '1.6',
          minHeight: '400px'
        }}
      />
      <style>{`
        [contentEditable]:empty:before {
          content: attr(data-placeholder);
          color: var(--text-muted);
          cursor: text;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
