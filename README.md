🧩 Task Management Application (Full Stack)

A modern full-stack Task Management web application built as part of a Full Stack Development Internship Assignment.
The project demonstrates frontend UI skills, backend API development, authentication, database integration, and clean project structure.

🚀 Features
✅ Core Functionality

User Authentication (Register / Login)

Create, Read, Update, Delete (CRUD) Tasks

Task status management:

Todo

In Progress

Completed

User-specific tasks (each user sees only their own tasks)

🎨 Frontend

Built with React + Vite

Tailwind CSS for modern UI

Responsive design (mobile + desktop)

Clean and minimal user interface

Reusable components & Context API for state management

⚙️ Backend

Node.js + Express

RESTful API design

JWT Authentication

Secure password hashing using bcrypt

Protected routes

Centralized error handling

🗄️ Database

MongoDB with Mongoose

Persistent task storage

User-task relationship

🏗️ Project Structure
task-management/
├── backend/
│   ├── config/        # Database connection
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth & error handling
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
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

🔐 API Endpoints
Authentication

POST /api/auth/register – Register new user

POST /api/auth/login – Login user

GET /api/auth/me – Get logged-in user (protected)

Tasks (Protected)

GET /api/tasks – Get all tasks

POST /api/tasks – Create task

PUT /api/tasks/:id – Update task

DELETE /api/tasks/:id – Delete task

GET /api/tasks/stats – Task statistics

⚡ Getting Started (Local Setup)
1️⃣ Clone the Repository
git clone https://github.com/the-ayushm/task-management.git
cd task-management

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in backend/:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development


Start backend:

node server.js


Backend runs at:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:3000

🧪 Tech Stack

Frontend

React

Vite

Tailwind CSS

Axios

Context API

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

bcrypt

🎯 Assignment Goals Covered

✔ Frontend development
✔ Backend logic
✔ REST API
✔ Database integration
✔ Authentication
✔ Code organization
✔ Clean UI
✔ GitHub submission

📌 Notes

This project was built for learning & assessment purposes

Focused on clean structure and fundamentals

Easily extendable (filters, pagination, deployment, testing)

👨‍💻 Author

Ayush
Full Stack Developer (MERN)
