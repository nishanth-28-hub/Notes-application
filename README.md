# ✨ Notes Application

A full-stack, Apple Notes-inspired note-taking web application with real-time auto-save, rich text editing, and a modern glassmorphic UI.

Built with **React** (Vite) on the frontend and **Node.js/Express** with **MongoDB** on the backend.

---

## 📸 Features

| Feature | Description |
|---------|-------------|
| **Rich Text Editor** | Bold, italic, underline, headings, bullet lists — all via a clean toolbar |
| **Inline Image Insert** | Upload and embed images directly into your notes |
| **Auto-Save** | Notes save automatically 600ms after you stop typing — no save button needed |
| **Editable Titles** | Click on any note title to rename it inline, updates instantly in the sidebar |
| **Pin Notes** | Pin important notes to the top of your list |
| **Search** | Real-time search filtering across note titles and content |
| **Trash / Soft Delete** | Deleted notes are moved to trash, not permanently removed |
| **Dark / Light Mode** | Toggle between themes with a single click |
| **JWT Authentication** | Secure signup/login with hashed passwords and token-based auth |
| **Share Modal** | UI for sharing notes with collaborators (extendable) |
| **Comments Panel** | Toggle a side panel for note-level comments (extendable) |

---

## 🏗️ Tech Stack

### Frontend
- **React 18** — Component-based UI
- **Vite** — Lightning-fast dev server and build tool
- **React Router v6** — Client-side routing
- **Axios** — HTTP client for API calls
- **React Icons (Feather)** — Clean, consistent iconography
- **CSS Variables + Glassmorphism** — Modern, translucent UI design

### Backend
- **Node.js + Express** — REST API server
- **MongoDB + Mongoose** — Document database with schema validation
- **JWT (jsonwebtoken)** — Token-based authentication
- **bcryptjs** — Password hashing
- **Cloudinary + Multer** — Media upload support (extendable)
- **mongodb-memory-server** — In-memory MongoDB for local development (no external DB needed!)

---

## 📂 Project Structure

```
Notes-application/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js    # Signup, login, getMe
│   │   │   └── noteController.js    # CRUD + pin + trash
│   │   ├── middleware/
│   │   │   └── authMiddleware.js    # JWT token verification
│   │   ├── models/
│   │   │   ├── User.js             # User schema (name, email, password)
│   │   │   └── Note.js             # Note schema (title, content, isPinned, isTrashed)
│   │   ├── routes/
│   │   │   ├── authRoutes.js       # POST /signup, POST /login, GET /me
│   │   │   └── noteRoutes.js       # GET, POST, PUT, PATCH, DELETE
│   │   └── server.js               # Express app entry point
│   ├── .env                         # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/                # AuthCard, AuthBranding
│   │   │   ├── editor/              # EditorHeader, RichTextEditor, Toolbar, CommentsPane
│   │   │   ├── layout/              # Sidebar
│   │   │   ├── notes/               # NoteList, NoteCard, SearchBar
│   │   │   └── ui/                  # EmptyState, ShareModal
│   │   ├── context/
│   │   │   ├── AuthContext.jsx      # Login, signup, logout state
│   │   │   ├── NoteContext.jsx      # Notes CRUD, active note state
│   │   │   └── ThemeContext.jsx     # Dark/light mode toggle
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx        # Main app (all notes, pinned, trash views)
│   │   │   ├── Login.jsx            # Login page
│   │   │   └── Signup.jsx           # Signup page
│   │   ├── services/
│   │   │   └── api.js               # Axios instance with auth interceptor
│   │   ├── style/
│   │   │   ├── global.css           # Design tokens, glassmorphism utilities, animations
│   │   │   └── theme.css            # Dark/light theme variables
│   │   ├── utils/
│   │   │   └── formatter.js         # Date formatting helper
│   │   ├── App.jsx                  # Routes and providers
│   │   └── main.jsx                 # React entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ ([download](https://nodejs.org))
- **npm** (comes with Node.js)
- No external MongoDB needed — the app uses an in-memory database by default!

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Notes-application.git
cd Notes-application
```

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configure Environment Variables

The backend uses a `.env` file at `backend/.env`:

```env
PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/notesDB
JWT_SECRET=my_super_secret_note_app_123
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_key
CLOUDINARY_SECRET=your_cloud_secret
```

> **Note:** If `MONGO_URI` contains `<username>` (the default), the app automatically falls back to an **in-memory MongoDB server** — no external database setup needed for development!

### 4. Run the Application

Open **two terminal windows**:

```bash
# Terminal 1 — Backend (runs on port 5001)
cd backend
npm run dev

# Terminal 2 — Frontend (runs on port 5173)
cd frontend
npm run dev
```

### 5. Open in Browser

Navigate to **http://localhost:5173** — create an account and start taking notes!

---

## 🔌 API Reference

All API routes are prefixed with `/api`. Protected routes require a `Bearer <token>` header.

### Auth Routes (`/api/auth`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/signup` | ❌ | Create a new account |
| POST | `/login` | ❌ | Login and receive JWT token |
| GET | `/me` | ✅ | Get current user profile |

### Note Routes (`/api/notes`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | ✅ | Get all non-trashed notes for the user |
| POST | `/` | ✅ | Create a new note |
| PUT | `/:id` | ✅ | Update note title, content, or tags |
| PATCH | `/:id/pin` | ✅ | Toggle pin/unpin on a note |
| DELETE | `/:id` | ✅ | Soft-delete (move to trash) |

---

## 🎨 Design System

The app uses a custom design system with CSS variables and glassmorphism:

- **Typography:** [Outfit](https://fonts.google.com/specimen/Outfit) — modern, rounded sans-serif
- **Theme:** Dark mode by default, with light mode toggle
- **Glass Panels:** Translucent backgrounds with `backdrop-filter: blur(16px)`
- **Animations:** Fade-in transitions, hover scale effects, gradient shifts
- **Scrollbars:** Custom purple-tinted scrollbar styling

---

## 🛠️ Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run `npm run build` in the frontend directory to verify no errors
5. Commit your changes (`git commit -m 'Add your feature'`)
6. Push to the branch (`git push origin feature/your-feature`)
7. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).