# Manxel — Digital Agency Website

A modern and responsive agency website built with **React**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- **Modern & Responsive UI**: Clean layout that works smoothly across mobile, tablet, and desktop screens.
- **Micro-Interactions**: Video marquee animations, client logo ticker, and smooth section hover effects.
- **Scroll Spy Navigation**: Active section tracking with underline indicator and mobile drawer menu.
- **Contact & Inquiry Form**: Client-side validation with real-time feedback.
- **Backend API**: REST endpoint connected to MongoDB to store user messages and send email notifications.

---

## 🛠️ Tech Stack

### Frontend:
- **React.js (v19)** with **Vite**
- **Tailwind CSS (v4)** for styling
- **Framer Motion** for animations
- **Axios** for API requests

### Backend:
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose** (Collection: `contact_messages`)
- **Nodemailer** for email notifications
- **Dotenv** & **CORS**

---

## 📦 Getting Started

### 1. Install Dependencies

Install frontend packages:
```bash
npm install
```

Install backend packages:
```bash
cd server
npm install
cd ..
```

---

### 2. Environment Variables

Create a `.env` file inside the `server/` folder (or copy from `.env.example`):

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/manxel
ADMIN_EMAIL=kk3123069@gmail.com
```

---

### 3. Run the Project

Start the backend server (runs on `http://localhost:5000`):
```bash
node server/server.js
```

In a second terminal, start the frontend (runs on `http://localhost:5173`):
```bash
npm run dev
```

---

## 📡 API Endpoint

- **`POST /api/contact`** — Submit a contact inquiry
  - **Body**: `{ "name": "...", "email": "...", "phone": "...", "subject": "...", "message": "..." }`
- **`GET /api/health`** — Check server status

---

## 👤 Author

- **Adeel Khurram**
- Email: [kk3123069@gmail.com](mailto:kk3123069@gmail.com)
