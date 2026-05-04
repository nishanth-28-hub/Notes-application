import React from 'react';

const CommentItem = ({ data }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '4px' }}>
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#9d50bb' }} />
        <span style={{ fontWeight: '600', fontSize: '13px', color: '#fff' }}>User Name</span>
      </div>
      <div style={{ 
        background: '#2d2b52', 
        padding: '10px 14px', 
        borderRadius: '12px', 
        fontSize: '14px',
        color: '#e2e8f0'
      }}>
        {data.text}
      </div>
    </div>
  );
};

export default CommentItem;
