# Manxel — Full-Stack Developer Technical Assessment

A high-performance, responsive brand landing page and REST API backend built for **Manxel Studio** using **React.js**, **Node.js / Express**, and **MongoDB**.

---

## 📑 Table of Contents
1. [Project Overview](#-project-overview)
2. [Technology Stack & Rationale](#-technology-stack--rationale)
3. [System Architecture & Data Flow](#-system-architecture--data-flow)
4. [Key Features & Sections](#-key-features--sections)
5. [Database Schema & Models](#-database-schema--models)
6. [API Specification](#-api-specification)
7. [Installation & Setup Guide](#-installation--setup-guide)
8. [Testing the API](#-testing-the-api)
9. [Project Directory Structure](#-project-directory-structure)

---

## 🎯 Project Overview

This project was developed as part of the **Manxel Full-Stack Developer Technical Assessment**. It consists of:
- A responsive, animated React frontend matching modern design standards with micro-interactions, smooth scrolling, and editorial typography.
- A functional Node.js/Express REST backend handling form submissions with input validation, sanitization, and database persistence.
- Complete MongoDB integration using Mongoose models for structured schema storage.

---

## 🛠 Technology Stack & Rationale

### Frontend
- **React.js (v19)** — Component-based architecture, efficient state management with Hooks (`useState`, `useRef`), and high reusability.
- **Vite (v8)** — Next-generation frontend tooling providing lightning-fast HMR and optimized production bundles.
- **Tailwind CSS (v4)** — Utility-first styling for layout control, responsiveness, and consistent color variables.
- **Framer Motion** — Production-ready motion library for scroll-triggered reveals, layout transitions, and accordion animations.
- **Axios** — Promise-based HTTP client for API communication and error handling.
- **React Icons** — Scalable vector icon set for UI clarity.

### Backend
- **Node.js** — Asynchronous, event-driven JavaScript runtime for scalable network applications.
- **Express.js** — Fast, unopinionated REST API framework with modular routing and middleware architecture.
- **CORS** — Cross-Origin Resource Sharing middleware for secure client-server communication.
- **Dotenv** — Environment variable management keeping sensitive configuration isolated from codebase.

### Database
- **MongoDB & Mongoose** — Document-oriented NoSQL database providing high flexibility, schema validation, native JSON data flow, and built-in timestamp management (`createdAt`, `updatedAt`).

> **Why MongoDB?**  
> Contact inquiries and form submissions naturally represent self-contained document objects. MongoDB allows flexible schema growth (e.g., adding metadata, tags, or tracking info) without complex relational table migrations while maintaining high write throughput.

---

## 🔄 System Architecture & Data Flow

```
┌─────────────────┐       HTTP POST        ┌─────────────────────┐
│   React Form    │ ─────────────────────> │   Express Route     │
│  (Contact.jsx)  │                        │  (/api/contact)     │
└─────────────────┘                        └──────────┬──────────┘
        ▲                                             │
        │ JSON Response                               ▼
        │ (Success / Error)                ┌─────────────────────┐
        │                                  │     Controller      │
        └───────────────────────────────── │ (contactController) │
                                           └──────────┬──────────┘
                                                      │
                                                      ▼
                                           ┌─────────────────────┐
                                           │  Schema Validation  │
                                           │   & Sanitization    │
                                           └──────────┬──────────┘
                                                      │
                                                      ▼
                                           ┌─────────────────────┐
                                           │    MongoDB / Atlas  │
                                           │  (contacts schema)  │
                                           └─────────────────────┘
```

### Complete Request Lifecycle:
1. **User Interaction:** User fills out the Contact form and clicks `Submit Response`.
2. **Frontend Validation:** Client-side regex checks fields (Name, Email, Phone, Message) for validity before network dispatch.
3. **API Request:** Form data is sent via `Axios.post('/api/contact', payload)` (proxied through Vite dev server to backend port `5000`).
4. **Route Dispatch:** Express router catches the request at `POST /api/contact` and invokes `contactController.createContact`.
5. **Backend Validation:** Controller validates required fields, trims inputs, and verifies email format.
6. **Database Persistence:** Mongoose creates and saves the new document in MongoDB collection.
7. **Response & UI Update:** Backend returns `HTTP 201 Created` with record ID. Frontend displays success confirmation and resets the form.

---

## 🌟 Key Features & Sections

| Section | Component | Description |
| :--- | :--- | :--- |
| **Header / Navbar** | `Navbar.jsx` | Fixed navigation bar with brand badge logo, smooth section jump links, and animated mobile drawer menu. |
| **Hero Banner** | `Hero.jsx` | Dynamic headline, animated action CTAs, and continuous animated moving cards preview showcase. |
| **The Value You Get** | `About.jsx` | 6 strategic value proposition cards with SVG icons and 6-dot progression ratings. |
| **The Action Behind Process** | `About.jsx` | Interactive process section featuring dynamic hover color transition (`#E5E5E5` ⇄ `#000000`) and 6 milestone cards. |
| **Services / What We Do** | `Services.jsx` | 3 two-tier cards covering Visual Identity, Web Design, and App Design with dual-tone SVGs and category badges. |
| **Featured Portfolio** | `Portfolio.jsx` | 8 curated project showcase cards with hover scale/blur and slide-up floating link info bar. |
| **Client Logo Carousel** | `FAQ.jsx` | 6 authentic client SVG logos moving in a continuous, seamless infinite loop with zero reset glitch. |
| **FAQs Accordion** | `FAQ.jsx` | Interactive accordion with questions tailored to Manxel brand, animated expand/collapse, and toggles. |
| **Contact Section** | `Contact.jsx` | Dual-column layout with direct contact cards and functional dark form connected to the REST API. |
| **Footer** | `Footer.jsx` | Sleek `#0d0d0d` footer with atmospheric red glow, navigation links, copyright, and watermark. |

---

## 🗄 Database Schema & Models

**Collection / Model:** `Contact` (mapped to MongoDB collection `contacts`)

```javascript
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
      maxlength: [20, 'Phone cannot exceed 20 characters'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [200, 'Subject cannot exceed 200 characters'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [5000, 'Message cannot exceed 5000 characters'],
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);
```

---

## 📡 API Specification

### 1. Submit Contact Form
- **Endpoint:** `POST /api/contact`
- **Content-Type:** `application/json`

#### Request Body:
```json
{
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "phone": "+1 555 123 4567",
  "subject": "Project Inquiry (Budget: $10K - $25K)",
  "message": "We would like to redesign our enterprise web application."
}
```

#### Success Response (`201 Created`):
```json
{
  "success": true,
  "message": "Message sent successfully.",
  "data": {
    "id": "66ce8f01b34e2c918a42b10a"
  }
}
```

#### Validation Error Response (`400 Bad Request`):
```json
{
  "success": false,
  "message": "Please provide a valid email address."
}
```

---

### 2. Health Check
- **Endpoint:** `GET /api/health`
- **Response (`200 OK`):**
```json
{
  "status": "ok",
  "timestamp": "2026-08-29T14:45:00.000Z"
}
```

---

## 🚀 Installation & Setup Guide

### Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **MongoDB** (Local instance running at `mongodb://localhost:27017` or a MongoDB Atlas connection string)

---

### Step 1: Clone or Extract the Project
```bash
cd Manxel
```

---

### Step 2: Configure Environment Variables
Copy `.env.example` to `.env` inside the `server/` directory:
```bash
# Windows PowerShell
copy server\.env.example server\.env

# macOS / Linux
cp server/.env.example server/.env
```

Ensure `server/.env` contains your desired settings:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/manxel
```

---

### Step 3: Install Dependencies
Install dependencies for both frontend and backend:

```bash
# Install frontend dependencies (in root)
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

---

### Step 4: Start the Backend Server
In one terminal window, run:
```bash
cd server
npm start
```
*You should see:*
```
✓ MongoDB connected
✓ Server running on port 5000
```

---

### Step 5: Start the React Frontend
In a second terminal window, run:
```bash
npm run dev
```
*Frontend will be running at:* **`http://localhost:5173`**

---

## 🧪 Testing the API

### Method 1: Interactive Web Form
1. Open `http://localhost:5173` in your browser.
2. Scroll to the **Contact** section.
3. Fill out the fields and submit.
4. Verify the green success banner appears and data is saved to MongoDB.

### Method 2: cURL Command
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John Doe\",\"email\":\"john@example.com\",\"phone\":\"+1234567890\",\"subject\":\"Website Redesign\",\"message\":\"Hello from cURL test\"}"
```

---

## 📁 Project Directory Structure

```
Manxel/
├── public/                     # Static public assets & icons
├── server/                     # Node.js / Express Backend
│   ├── controllers/
│   │   └── contactController.js# Contact form request handler & validation
│   ├── models/
│   │   └── Contact.js          # Mongoose schema for contact messages
│   ├── routes/
│   │   └── contact.js          # Express API route definitions
│   ├── .env                    # Local environment variables (not for commit)
│   ├── .env.example            # Environment configuration template
│   ├── package.json            # Backend dependencies
│   └── server.js               # Express application entry point
├── src/                        # React Frontend Source
│   ├── assets/                 # Brand assets and images
│   ├── components/
│   │   ├── About.jsx           # Value You Get & Process sections
│   │   ├── Contact.jsx         # Contact form with API integration
│   │   ├── FAQ.jsx             # Client logo carousel & FAQ accordion
│   │   ├── Footer.jsx          # Footer with watermark & socials
│   │   ├── Hero.jsx            # Hero section with moving preview
│   │   ├── Navbar.jsx          # Header with navigation & mobile menu
│   │   ├── Portfolio.jsx       # 8-card featured project showcase
│   │   ├── Services.jsx        # What We Do services cards
│   │   └── Testimonials.jsx    # Client reviews & testimonials
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styling, tokens & marquee keyframes
│   └── main.jsx                # React root mount
├── .env.example                # Root environment template
├── index.html                  # HTML5 entry page
├── package.json                # Frontend dependencies & scripts
├── vite.config.js              # Vite configuration & backend API proxy
└── README.md                   # Comprehensive project documentation
```

---

## 📄 License & Assessment Information
Created for the **Manxel Full-Stack Developer Assessment** (August 2026). All brand assets, typography, and interactive components are structured according to assessment specifications.
