import React from 'react';
import NoteCard from './NoteCard';
import SearchBar from './SearchBar';

const NoteList = ({ notes, activeNoteId, onNoteSelect, onPin, onDelete }) => {
  return (
    <div style={{ 
      width: '300px', 
      borderRight: '1px solid var(--border)', 
      display: 'flex', 
      flexDirection: 'column',
      height: '100%'
    }}>
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📝</span> All Notes
          </h3>
          <button style={{ 
            background: '#9d50bb', border: 'none', borderRadius: '8px', 
            width: '32px', height: '32px', color: '#fff', cursor: 'pointer' 
          }}>+</button>
        </div>
        <SearchBar />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 12px' }}>
        {notes.map(note => (
          <NoteCard 
            key={note._id} 
            note={note} 
            isActive={note._id === activeNoteId}
            onClick={() => onNoteSelect(note)}
            onPin={onPin}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
