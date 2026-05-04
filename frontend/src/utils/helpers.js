/**
 * Debounce function to prevent excessive API calls while typing
 * Useful for the SearchBar and Auto-saving notes
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

/**
 * Slash Command Logic
 * Matches the "Type / for commands" feature in Screenshot 2026-04-26 193414.jpg
 */
export const getSlashCommands = (text) => {
  const commands = [
    { command: '/h1', label: 'Heading 1', description: 'Large section heading' },
    { command: '/h2', label: 'Heading 2', description: 'Medium section heading' },
    { command: '/bullet', label: 'Bullet List', description: 'Create a simple bulleted list' },
    { command: '/image', label: 'Image', description: 'Insert an image from gallery' },
    { command: '/voice', label: 'Voice Note', description: 'Start voice-to-text recording' },
  ];

  if (!text.startsWith('/')) return [];
  return commands.filter((c) => 
    c.command.toLowerCase().includes(text.toLowerCase())
  );
};

/**
 * Validation helpers for AuthCard components
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  // Check if password is at least 8 characters
  return password.length >= 8;
};

/**
 * Truncates long text for the NoteCard preview
 */
export const truncateText = (text, maxLength = 60) => {
  if (!text) return "";
  // Remove HTML tags if content is from RichTextEditor
  const plainText = text.replace(/<[^>]*>?/gm, '');
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength) + "...";
};

/**
 * Generates the "Last edited" string seen in the editor status bar
 */
export const getLastEditedString = (date) => {
  if (!date) return "Not edited yet";
  const now = new Date();
  const editedAt = new Date(date);
  const diffInMinutes = Math.floor((now - editedAt) / 60000);

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  
  return `on ${editedAt.toLocaleDateString()}`;
};
