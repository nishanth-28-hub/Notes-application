import React, { useRef, useEffect } from 'react';
import Toolbar from './Toolbar';

const RichTextEditor = ({ note, onUpdate }) => {
  const editorRef = useRef(null);

  // Set initial content when a different note is selected
  useEffect(() => {
    if (editorRef.current && note) {
      editorRef.current.innerHTML = note.content || '';
    }
  }, [note?._id]);

  const handleInput = () => {
    if (onUpdate && editorRef.current) {
      onUpdate(editorRef.current.innerHTML);
    }
  };

  if (!note) return null;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Toolbar editorRef={editorRef} onContentChange={onUpdate} />
      <div 
        ref={editorRef}
        contentEditable 
        onInput={handleInput}
        data-placeholder="Start writing your note..."
        style={{
          flex: 1,
          padding: '16px 4px',
          fontSize: '16px',
          color: 'var(--text-main)',
          outline: 'none',
          lineHeight: '1.8',
          minHeight: '300px',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}
      />
      <style>{`
        [contentEditable]:empty:before {
          content: attr(data-placeholder);
          color: var(--text-muted);
          cursor: text;
        }
        [contentEditable] img {
          max-width: 100%;
          border-radius: 8px;
          margin: 8px 0;
        }
        [contentEditable] h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 12px 0 8px;
        }
        [contentEditable] ul {
          padding-left: 24px;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
