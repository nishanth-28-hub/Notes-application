import React, { useContext, useEffect, useState, useRef, useCallback } from 'react';
import Sidebar from '../components/layout/Sidebar';
import NoteList from '../components/notes/NoteList';
import EditorHeader from '../components/editor/EditorHeader';
import RichTextEditor from '../components/editor/RichTextEditor';
import EmptyState from '../components/ui/EmptyState';
import CommentsPane from '../components/editor/CommentsPane';
import ShareModal from '../components/ui/ShareModal';
import { NoteContext } from '../context/NoteContext';

const Dashboard = ({ view = 'all' }) => {
  const { notes, activeNote, setActiveNote, fetchNotes, togglePin, deleteNote, addNote, updateNote } = useContext(NoteContext);
  const [showComments, setShowComments] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Local state for the editor (so typing feels instant, no lag)
  const [localTitle, setLocalTitle] = useState('');
  const [localContent, setLocalContent] = useState('');
  const saveTimerRef = useRef(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  // When the active note changes, sync local state
  useEffect(() => {
    if (activeNote) {
      setLocalTitle(activeNote.title || '');
      setLocalContent(activeNote.content || '');
    } else {
      setLocalTitle('');
      setLocalContent('');
    }
  }, [activeNote?._id]);

  // Debounced auto-save (waits 600ms after you stop typing)
  const debouncedSave = useCallback((id, data) => {
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      updateNote(id, data);
    }, 600);
  }, [updateNote]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, []);

  const handleTitleChange = (newTitle) => {
    setLocalTitle(newTitle);
    if (activeNote) {
      debouncedSave(activeNote._id, { title: newTitle, content: localContent });
    }
  };

  const handleContentChange = (newContent) => {
    setLocalContent(newContent);
    if (activeNote) {
      debouncedSave(activeNote._id, { title: localTitle, content: newContent });
    }
  };

  const handleCreateNote = () => {
    addNote();
  };

  // Filter notes based on current view
  let filteredNotes = notes;

  if (view === 'all') {
    filteredNotes = notes.filter(n => !n.isTrashed);
  } else if (view === 'pinned') {
    filteredNotes = notes.filter(n => !n.isTrashed && n.isPinned);
  } else if (view === 'trash') {
    filteredNotes = notes.filter(n => n.isTrashed);
  }

  // Apply search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredNotes = filteredNotes.filter(n =>
      (n.title || '').toLowerCase().includes(q) || (n.content || '').toLowerCase().includes(q)
    );
  }

  // Sort: pinned first, then by last edited
  filteredNotes = [...filteredNotes].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.lastEdited || b.updatedAt) - new Date(a.lastEdited || a.updatedAt);
  });

  const viewLabels = { all: 'All Notes', pinned: 'Pinned', trash: 'Trash' };
  const viewEmojis = { all: '📝', pinned: '⭐', trash: '🗑️' };

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-color)' }}>
      <Sidebar />
      <NoteList 
        notes={filteredNotes}
        activeNoteId={activeNote?._id}
        onNoteSelect={setActiveNote}
        onPin={togglePin}
        onDelete={deleteNote}
        onCreate={handleCreateNote}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewLabel={viewLabels[view]}
        viewEmoji={viewEmojis[view]}
        showCreate={view === 'all'}
      />
      
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '30px', position: 'relative', overflow: 'auto' }}>
        {activeNote ? (
          <>
            <EditorHeader 
              title={localTitle}
              isPinned={activeNote.isPinned}
              onTitleChange={handleTitleChange}
              onToggleComments={() => setShowComments(!showComments)}
              onTogglePin={() => togglePin(activeNote._id)}
              onOpenShare={() => setShowShare(true)}
            />
            <RichTextEditor 
              note={activeNote} 
              onUpdate={handleContentChange}
            />
          </>
        ) : (
          <EmptyState type={view === 'trash' ? 'trash' : 'select'} />
        )}
      </main>

      {showComments && <CommentsPane comments={activeNote?.comments} onClose={() => setShowComments(false)} />}
      <ShareModal isOpen={showShare} onClose={() => setShowShare(false)} />
    </div>
  );
};

export default Dashboard;
