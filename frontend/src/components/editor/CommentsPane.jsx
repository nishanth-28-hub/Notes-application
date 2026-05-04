import React from 'react';
import CommentItem from './CommentItem';
import { FiSend } from 'react-icons/fi';

const CommentsPane = ({ comments = [] }) => {
  return (
    <div style={{
      width: '320px',
      borderLeft: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(21, 20, 43, 0.5)'
    }}>
      <div style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
          <span>💬</span> Comments
        </h3>
      </div>
      
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {comments.length > 0 ? (
          comments.map(c => <CommentItem key={c.id} data={c} />)
        ) : (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '40px' }}>
            No comments yet
          </p>
        )}
      </div>

      <div style={{ padding: '20px', borderTop: '1px solid var(--border)' }}>
        <div style={{ position: 'relative' }}>
          <input 
            placeholder="Add a comment..." 
            style={{
              width: '100%',
              padding: '12px 40px 12px 16px',
              borderRadius: '12px',
              border: '1px solid #2d2b52',
              background: '#0b0a1a',
              color: '#fff'
            }} 
          />
          <FiSend style={{ position: 'absolute', right: '12px', top: '14px', color: '#9d50bb', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default CommentsPane;
