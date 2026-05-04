import React from 'react';

const EmptyState = ({ type = 'select' }) => {
  const content = {
    select: {
      icon: "/assets/images/empty-state.png",
      title: "Select a note or create a new one",
      subtitle: "Your creative space awaits! ✨"
    },
    trash: {
      icon: "/assets/images/trash-empty.png",
      title: "No notes in trash",
      subtitle: "Items you delete will appear here."
    }
  }[type];

  return (
    <div style={{ 
      flex: 1, display: 'flex', flexDirection: 'column', 
      alignItems: 'center', justifyContent: 'center', padding: '40px' 
    }}>
      <img src={content.icon} alt="Empty State" style={{ width: '120px', marginBottom: '24px', opacity: 0.8 }} />
      <h2 style={{ color: 'var(--text-main)', marginBottom: '8px', fontSize: '22px' }}>{content.title}</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>{content.subtitle}</p>
    </div>
  );
};

export default EmptyState;
