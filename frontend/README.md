# 🧠 ThinkBoard

> A full-stack note-taking app to organize your thoughts, built using the MERN stack.

---

## ✨ Features

- 📝 Create, view, update, and delete notes
- ⚡ Rate limiting to prevent abuse (using Upstash Redis)
- 🌐 Fully responsive UI (TailwindCSS + DaisyUI)
- 🔥 Toast notifications for actions and errors
- ⚙️ Custom Axios client with dynamic base URL handling
- 📦 Organized frontend/backend folder structure

---

## 🛠️ Tech Stack

### Frontend
- React + Vite
- React Router
- TailwindCSS + DaisyUI
- Axios
- React Hot Toast

### Backend
- Express.js
- MongoDB with Mongoose
- Upstash Redis for rate limiting
- Dotenv for config
- CORS enabled

---

## 📁 Folder Structure

ThinkBoard/
├── backend/
│ ├── config/ # DB and Redis setup
│ ├── controllers/ # Note controller logic
│ ├── middleware/ # Rate limiter middleware
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── .env # Environment config
│ └── server.js # Entry point
├── frontend/
│ ├── src/
│ │ ├── components/ # Navbar, Cards, etc.
│ │ ├── pages/ # Home, CreateNote, etc.
│ │ └── lib/ # Axios config
│ └── index.html # Root HTML
└── README.md


⚙️ API Endpoints
Method	 Endpoint	    Description
GET	     /api/notes	     Get all notes
POST	 /api/notes	     a new note
GET	     /api/notes/:id	 note by ID
PUT	     /api/notes/:id	 Update note
DELETE	 /api/notes/:id	 Delete note

