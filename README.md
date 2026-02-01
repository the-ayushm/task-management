# Task Management Application (Full Stack)

Modern MERN task management app with secure authentication and user-specific task tracking.

## ✨ Features

- User registration & login
- Protected routes
- CRUD tasks
- Task status: Todo, In Progress, Completed
- User-specific tasks

## 🧰 Tech Stack

**Frontend:** React, Vite, Tailwind CSS, Context API, Axios

**Backend:** Node.js, Express.js, MongoDB, Mongoose

**Authentication:** JWT, bcrypt

## 🗂️ Project Structure

```text
task-management/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── main.jsx
│   └── index.html
│
└── .gitignore
```

## 🔗 API Endpoints

**Authentication**
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

**Tasks**
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
- GET /api/tasks/stats

## 🚀 Getting Started

**Backend Setup**

1. Navigate to `backend/` directory
2. Create `.env` file with:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret>
   JWT_EXPIRE=7d
   ```
3. Run: `node server.js`
   - Server runs on http://localhost:5000

**Frontend Setup**

1. Navigate to `frontend/` directory
2. Create `.env` file with:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```
3. Run: `npm run dev`
   - Dev server runs on http://localhost:3000

## ✅ Assignment Coverage

- MERN full-stack architecture
- JWT-based authentication with protected routes
- Task CRUD with status workflow
- User-specific data isolation

## 👤 Author

Ayush Kesharwani
