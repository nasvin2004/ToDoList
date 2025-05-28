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

```

.
├── Backend/                          # Express.js server for authentication and tasks
│   ├── config/                       # Passport strategies for social login
│   │   └── passport.js
│   ├── middlewares/                 # Custom middlewares
│   │   └── verifyToken.js           # JWT token verification
│   ├── Model/                       # Mongoose models
│   │   ├── task.js
│   │   └── user.js
│   ├── Routes/                      # API route handlers
│   │   ├── dashboard.js
│   │   ├── manual-login.js
│   │   ├── social-login.js
│   │   └── task.js
│   ├── .env                         # Environment variables
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js                    # Main server entry point
│
├── Frontend/                        # React app with Vite and TailwindCSS
│   ├── public/
│   │   └── sounds/                  # Sound assets (if any)
│   │       └── vite.svg
│   ├── src/
│   │   ├── assets/                  # Icons and media
│   │   │   └── react.svg
│   │   ├── Component/               # UI components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── SocialAuthSuccess.jsx
│   │   │   ├── SocialLogin.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskModal.jsx
│   │   ├── utils/                   # Utility files
│   │   │   ├── api.js
│   │   │   └── confetti.js
│   │   ├── App.jsx                  # Main App component
│   │   ├── main.jsx                 # React entry point
│   │   ├── App.css
│   │   └── index.css
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── README.md

```
---

---
📐 Architecture Diagram
> [image](https://github.com/user-attachments/assets/d0dc4262-a56d-4ebf-8f96-13a6677ff32a)
---
