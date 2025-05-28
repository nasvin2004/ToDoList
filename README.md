# ToDoList

---
📢 Acknowledgement
This project is a part of a hackathon run by
👉 https://www.katomaran.com
---

---
A full-stack web application built with **Node.js**, **Express**, **MongoDB**, and **JWT Authentication** to manage tasks efficiently with both **manual** and **social login** support.
---

---

## 🌐 Live Demo

> [Live App URL](https://todolist-frontend-app.onrender.com/)

---

---
📺 Demo Video
> [Watch the demo here]() 
---

---
## 🧰 Tech Stack

| Area     | Tech                      |
| -------- | ------------------------- |
| Frontend | React, Vite, TailwindCSS  |
| Backend  | Node.js, Express, MongoDB |
| Auth     | Passport.js, JWT          |
| UI Tools | React Toastify, Confetti  |
| Styling  | Tailwind CSS              |

---

---
## 🎯 Features

✅ Manual Login with JWT

🌐 Social Login via Google, GitHub, Facebook

🧩 Protected Dashboard with Task Management

🎨 Confetti animation on successful task creation

🛡️ Token-based route protection

⚡ Fast build with Vite + TailwindCSS

---

---
## 📦 Project Structure

Backend/
│
├── config/
│   └── passport.js         # Passport strategies for OAuth
│
├── middlewares/
│   └── verifyToken.js      # JWT validation middleware
│
├── Model/
│   ├── user.js             # User schema
│   └── task.js             # Task schema
│
├── Routes/
│   ├── dashboard.js        # Dashboard endpoint
│   ├── manual-login.js     # Manual auth route
│   ├── social-login.js     # OAuth login route
│   └── task.js             # Task routes
│
├── server.js               # Entry point
└── .env                    # Environment config

Frontend/
│
├── public/
│
├── src/
│   ├── assets/             # Icons
│   ├── Component/          # React components
│   │   ├── Dashboard.jsx
│   │   ├── SocialAuthSuccess.jsx
│   │   ├── SocialLogin.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskModal.jsx
│   ├── utils/
│   │   ├── api.js          # API service
│   │   └── confetti.js     # UI animation
│   ├── App.jsx             # Main app
│   ├── main.jsx            # App root
│   └── index.css

---

---
📐 Architecture Diagram
> [image](https://github.com/user-attachments/assets/d0dc4262-a56d-4ebf-8f96-13a6677ff32a)
---
