import React from 'react';
import { FiPin, FiTrash2 } from 'react-icons/fi';
import { formatDate } from '../../utils/formatters';

const NoteCard = ({ note, isActive, onClick, onPin, onDelete }) => {
  return (
    <div 
      onClick={onClick}
      style={{
        padding: '16px',
        borderRadius: '16px',
        cursor: 'pointer',
        marginBottom: '12px',
        transition: 'all 0.2s ease',
        position: 'relative',
        background: isActive ? 'rgba(157, 80, 187, 0.15)' : 'transparent',
        border: isActive ? '1px solid #9d50bb' : '1px solid transparent',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h4 style={{ 
          margin: '0 0 4px 0', 
          fontSize: '16px', 
          color: 'var(--text-main)',
          fontWeight: '600' 
        }}>
          {note.title || "Untitled"}
        </h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          <FiPin 
            onClick={(e) => { e.stopPropagation(); onPin(note._id); }}
            style={{ 
              color: note.pinned ? '#9d50bb' : 'var(--text-muted)',
              fill: note.pinned ? '#9d50bb' : 'none',
              cursor: 'pointer'
            }} 
          />
          {isActive && (
            <FiTrash2 
              onClick={(e) => { e.stopPropagation(); onDelete(note._id); }}
              style={{ color: '#ff4d4d', cursor: 'pointer' }} 
            />
          )}
        </div>
      </div>
      <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)' }}>
        {formatDate(note.updatedAt)}
      </p>
    </div>
  );
};

export default NoteCard;
