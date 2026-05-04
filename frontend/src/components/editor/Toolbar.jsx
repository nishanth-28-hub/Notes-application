import React from 'react';
import { FiBold, FiItalic, FiUnderline, FiType, FiList, FiImage, FiMic } from 'react-icons/fi';

const Toolbar = ({ onVoiceToggle, isListening }) => {
  const tools = [
    { icon: <FiBold />, cmd: 'bold' },
    { icon: <FiItalic />, cmd: 'italic' },
    { icon: <FiUnderline />, cmd: 'underline' },
    { icon: <FiType />, cmd: 'formatBlock', val: 'H1' },
    { icon: <FiList />, label: 'List', cmd: 'insertUnorderedList' },
  ];

  return (
    <div style={{ display: 'flex', gap: '8px', padding: '12px', background: 'var(--panel-bg)', borderRadius: '12px', marginBottom: '12px', border: '1px solid var(--border)' }}>
      {tools.map((tool, index) => (
        <button 
          key={index}
          onClick={() => document.execCommand(tool.cmd, false, tool.val)}
          style={{ padding: '8px', display: 'flex', alignItems: 'center', gap: '6px', background: '#2d2b52', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer' }}
        >
          {tool.icon} {tool.label}
        </button>
      ))}
      <div style={{ height: '24px', width: '1px', background: 'var(--border)', margin: '0 8px' }} />
      <button style={{ padding: '8px 12px', background: '#2d2b52', border: 'none', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FiImage /> Image
      </button>
      <button 
        onClick={onVoiceToggle}
        style={{ 
          padding: '8px 12px', 
          background: isListening ? '#ff3399' : '#2d2b52', 
          border: 'none', color: '#fff', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px' 
        }}
      >
        <FiMic /> Voice
      </button>
    </div>
  );
};

export default Toolbar;
