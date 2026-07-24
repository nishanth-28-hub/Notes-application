import React from 'react';
import NoteCard from './NoteCard';
import SearchBar from './SearchBar';

const NoteList = ({ notes, activeNoteId, onNoteSelect, onPin, onDelete, onCreate, searchQuery, onSearchChange, viewLabel, viewEmoji, showCreate }) => {
  return (
    <div className="glass-panel" style={{ 
      width: '300px', 
      background: 'var(--panel-bg)',
      borderRight: '1px solid var(--border)', 
      display: 'flex', 
      flexDirection: 'column',
      height: '100%',
    }}>
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 600 }}>
            <span>{viewEmoji || '📝'}</span> {viewLabel || 'All Notes'}
          </h3>
          {showCreate && (
            <button 
              onClick={onCreate} 
              style={{ 
                background: 'var(--grad-button)', border: 'none', borderRadius: '8px', 
                width: '32px', height: '32px', color: '#fff', cursor: 'pointer',
                fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'var(--transition)'
              }}
            >+</button>
          )}
        </div>
        <SearchBar value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 12px 12px' }}>
        {notes.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '40px', fontSize: '14px' }}>
            {searchQuery ? 'No notes match your search' : 'No notes here yet'}
          </p>
        ) : (
          notes.map(note => (
            <NoteCard 
              key={note._id} 
              note={note} 
              isActive={note._id === activeNoteId}
              onClick={() => onNoteSelect(note)}
              onPin={onPin}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NoteList;
