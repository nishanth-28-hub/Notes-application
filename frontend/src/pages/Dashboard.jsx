import React, { useContext, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import NoteList from '../components/notes/NoteList';
import EditorHeader from '../components/editor/EditorHeader';
import RichTextEditor from '../components/editor/RichTextEditor';
import EmptyState from '../components/ui/EmptyState';
import CommentsPane from '../components/editor/CommentsPane';
import { NoteContext } from '../context/NoteContext';

const Dashboard = () => {
  const { notes, activeNote, setActiveNote, fetchNotes, togglePin, deleteNote } = useContext(NoteContext);
  const [showComments, setShowComments] = React.useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-color)' }}>
      <Sidebar />
      <NoteList 
        notes={notes.filter(n => !n.trashed)} 
        activeNoteId={activeNote?._id}
        onNoteSelect={setActiveNote}
        onPin={togglePin}
        onDelete={deleteNote}
      />
      
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '30px' }}>
        {activeNote ? (
          <>
            <EditorHeader 
              title={activeNote.title} 
              isPinned={activeNote.pinned}
              onToggleComments={() => setShowComments(!showComments)}
              onTogglePin={() => togglePin(activeNote._id)}
            />
            <RichTextEditor note={activeNote} />
          </>
        ) : (
          <EmptyState type="select" />
        )}
      </main>

      {showComments && <CommentsPane comments={activeNote?.comments} />}
    </div>
  );
};

export default Dashboard;
