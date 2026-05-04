import React, { createContext, useState } from 'react';
import api from '../services/api';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);

  const fetchNotes = async () => {
    const res = await api.get('/notes');
    setNotes(res.data);
  };

  const addNote = async (noteData) => {
    const res = await api.post('/notes', noteData);
    setNotes([res.data, ...notes]);
    setActiveNote(res.data);
  };

  const updateNote = async (id, data) => {
    const res = await api.put(`/notes/${id}`, data);
    setNotes(notes.map(n => n._id === id ? res.data : n));
  };

  const deleteNote = async (id) => {
    await api.delete(`/notes/${id}`);
    setNotes(notes.filter(n => n._id !== id));
    if (activeNote?._id === id) setActiveNote(null);
  };

  const togglePin = async (id) => {
    const res = await api.patch(`/notes/${id}/pin`);
    setNotes(notes.map(n => n._id === id ? res.data : n));
  };

  return (
    <NoteContext.Provider value={{ 
      notes, activeNote, setActiveNote, fetchNotes, 
      addNote, updateNote, deleteNote, togglePin 
    }}>
      {children}
    </NoteContext.Provider>
  );
};
