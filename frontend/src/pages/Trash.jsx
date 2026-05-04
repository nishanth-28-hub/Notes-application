import React, { useContext } from 'react';
import Sidebar from '../components/layout/Sidebar';
import NoteCard from '../components/notes/NoteCard';
import EmptyState from '../components/ui/EmptyState';
import { NoteContext } from '../context/NoteContext';

const Trash = () => {
  const { notes } = useContext(NoteContext);
  const trashedNotes = notes.filter(n => n.trashed);

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-color)' }}>
      <Sidebar />
      <div style={{ width: '350px', borderRight: '1px solid var(--border)', padding: '20px' }}>
        <h3 style={{ color: '#ff6600', display: 'flex', alignItems: 'center', gap: '10px' }}>
          🗑️ Trash
        </h3>
        <div style={{ marginTop: '20px' }}>
          {trashedNotes.map(note => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <EmptyState type="trash" />
      </main>
    </div>
  );
};

export default Trash;
