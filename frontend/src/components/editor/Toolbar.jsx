import React, { useRef } from 'react';
import { FiBold, FiItalic, FiUnderline, FiType, FiList, FiImage } from 'react-icons/fi';

const Toolbar = ({ editorRef, onContentChange }) => {
  const fileInputRef = useRef(null);

  const execCommand = (cmd, val) => {
    // Focus the editor first so execCommand works on it
    if (editorRef?.current) {
      editorRef.current.focus();
    }
    document.execCommand(cmd, false, val);
    // Trigger a content change after formatting
    if (onContentChange && editorRef?.current) {
      setTimeout(() => onContentChange(editorRef.current.innerHTML), 0);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file || !editorRef?.current) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      editorRef.current.focus();
      document.execCommand('insertImage', false, event.target.result);
      if (onContentChange) {
        setTimeout(() => onContentChange(editorRef.current.innerHTML), 0);
      }
    };
    reader.readAsDataURL(file);
    // Reset so the same file can be selected again
    e.target.value = '';
  };

  const tools = [
    { icon: <FiBold size={16} />, cmd: 'bold', tooltip: 'Bold' },
    { icon: <FiItalic size={16} />, cmd: 'italic', tooltip: 'Italic' },
    { icon: <FiUnderline size={16} />, cmd: 'underline', tooltip: 'Underline' },
    { icon: <FiType size={16} />, cmd: 'formatBlock', val: 'H2', tooltip: 'Heading' },
    { icon: <FiList size={16} />, cmd: 'insertUnorderedList', tooltip: 'Bullet List' },
  ];

  return (
    <div style={{ 
      display: 'flex', gap: '4px', padding: '10px 12px', 
      background: 'var(--glass-bg)', borderRadius: '10px', 
      marginBottom: '12px', border: '1px solid var(--border)',
      alignItems: 'center', flexWrap: 'wrap'
    }}>
      {tools.map((tool, index) => (
        <button 
          key={index}
          title={tool.tooltip}
          onMouseDown={(e) => e.preventDefault()} // Prevent editor losing focus
          onClick={() => execCommand(tool.cmd, tool.val)}
          style={toolBtnStyle}
        >
          {tool.icon}
        </button>
      ))}

      <div style={{ height: '20px', width: '1px', background: 'var(--border)', margin: '0 6px' }} />

      <button 
        title="Insert Image"
        onClick={() => fileInputRef.current?.click()}
        style={toolBtnStyle}
      >
        <FiImage size={16} />
      </button>
      <input 
        ref={fileInputRef}
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload}
        style={{ display: 'none' }} 
      />
    </div>
  );
};

const toolBtnStyle = {
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid transparent',
  color: 'var(--text-main)',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.15s ease',
  minWidth: '36px',
  minHeight: '36px'
};

export default Toolbar;
