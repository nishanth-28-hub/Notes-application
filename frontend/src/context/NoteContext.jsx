import React, { createContext, useState, useCallback, useRef } from 'react';
import api from '../services/api';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const activeNoteIdRef = useRef(null);

  // Keep ref in sync so we can check inside async callbacks
  const selectNote = (note) => {
    setActiveNote(note);
    activeNoteIdRef.current = note?._id || null;
  };

  const fetchNotes = async () => {
    try {
      const res = await api.get('/notes');
      setNotes(res.data);
    } catch (err) {
      console.error('Failed to fetch notes:', err);
    }
  };

  const addNote = async () => {
    try {
      const res = await api.post('/notes', { title: 'Untitled', content: '' });
      setNotes(prev => [res.data, ...prev]);
      selectNote(res.data);
    } catch (err) {
      console.error('Failed to add note:', err);
    }
  };

  // Save to server WITHOUT resetting activeNote (prevents cursor/title jumping)
  const updateNote = useCallback(async (id, data) => {
    try {
      const res = await api.put(`/notes/${id}`, data);
      // Only update the notes list (sidebar preview), NOT activeNote
      // This prevents resetting the title input or editor content mid-typing
      setNotes(prev => prev.map(n => n._id === id ? res.data : n));
    } catch (err) {
      console.error('Failed to update note:', err);
    }
  }, []);

  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes(prev => prev.filter(n => n._id !== id));
      if (activeNoteIdRef.current === id) {
        selectNote(null);
      }
    } catch (err) {
      console.error('Failed to delete note:', err);
    }
  };

  const togglePin = async (id) => {
    try {
      const res = await api.patch(`/notes/${id}/pin`);
      setNotes(prev => prev.map(n => n._id === id ? res.data : n));
      // Update activeNote pin status without resetting title/content
      if (activeNoteIdRef.current === id) {
        setActiveNote(prev => prev ? { ...prev, isPinned: res.data.isPinned } : prev);
      }
    } catch (err) {
      console.error('Failed to toggle pin:', err);
    }
  };

  return (
    <NoteContext.Provider value={{ 
      notes, activeNote, setActiveNote: selectNote, fetchNotes, 
      addNote, updateNote, deleteNote, togglePin 
    }}>
      {children}
    </NoteContext.Provider>
  );
};
