import React from 'react';
import { FiStar, FiTrash2 } from 'react-icons/fi';
import { formatDate } from '../../utils/formatter';

// Strip HTML tags and get a plain text preview
const getPreview = (html) => {
  if (!html) return '';
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.length > 80 ? text.substring(0, 80) + '...' : text;
};

const NoteCard = ({ note, isActive, onClick, onPin, onDelete }) => {
  const preview = getPreview(note.content);

  return (
    <div 
      className="animate-fade-in"
      onClick={onClick}
      style={{
        padding: '14px 16px',
        borderRadius: '12px',
        cursor: 'pointer',
        marginBottom: '8px',
        transition: 'all 0.2s ease',
        position: 'relative',
        background: isActive ? 'var(--glass-bg)' : 'transparent',
        border: isActive ? '1px solid var(--accent)' : '1px solid transparent',
        boxShadow: isActive ? '0 4px 12px rgba(157, 80, 187, 0.1)' : 'none'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h4 style={{ 
          margin: '0 0 4px 0', 
          fontSize: '14px', 
          color: 'var(--text-main)',
          fontWeight: '600',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '180px'
        }}>
          {note.isPinned && <span style={{ marginRight: '4px' }}>📌</span>}
          {note.title || "Untitled"}
        </h4>
        <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
          <FiStar 
            size={14}
            onClick={(e) => { e.stopPropagation(); onPin(note._id); }}
            style={{ 
              color: note.isPinned ? '#9d50bb' : 'var(--text-muted)',
              fill: note.isPinned ? '#9d50bb' : 'none',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }} 
          />
          {isActive && (
            <FiTrash2 
              size={14}
              onClick={(e) => { e.stopPropagation(); onDelete(note._id); }}
              style={{ color: '#ff4d4d', cursor: 'pointer' }} 
            />
          )}
        </div>
      </div>
      {preview && (
        <p style={{ 
          margin: '4px 0 0 0', 
          fontSize: '12px', 
          color: 'var(--text-muted)', 
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {preview}
        </p>
      )}
      <p style={{ margin: '6px 0 0 0', fontSize: '11px', color: 'var(--text-muted)', opacity: 0.7 }}>
        {formatDate(note.lastEdited || note.updatedAt)}
      </p>
    </div>
  );
};

export default NoteCard;
