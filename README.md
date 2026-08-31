# Manxel — Full-Stack Web Application

A responsive landing page and contact API built for the Manxel Technical Assessment.

---

## Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS, Framer Motion, Lenis Smooth Scroll, Axios
- **Backend:** Node.js, Express.js, MongoDB / Mongoose, Resend
- **Architecture:** MVC (Routes, Controllers, Models, Utils)

---

## Setup & Installation

### 1. Install Dependencies

Install root (frontend) dependencies:
```bash
npm install
```

Install backend dependencies:
```bash
cd server
npm install
cd ..
```

---

### 2. Environment Configuration

Create a `.env` file in the root or `server/` directory using `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/manxel
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=your_email@gmail.com
```

---

### 3. Database Setup

Make sure MongoDB is running locally on port `27017` (or provide your MongoDB Atlas URI in `MONGO_URI`).
The database name is `manxel` and inquiries are saved in the `contact_messages` collection.

---

### 4. Running the Application

**Start the backend server (Port 5000):**
```bash
node server/server.js
```

**Start the frontend development server (Port 5173):**
```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## API Endpoints

### `POST /api/contact`
Submits a customer inquiry.

**Request Payload:**
```json
{
  "name": "Adeel Khurram",
  "email": "test@example.com",
  "phone": "+923001234567",
  "subject": "Website Inquiry ($10K - $25K)",
  "message": "Project requirement details..."
}
```

**Response (`201 Created`):**
```json
{
  "success": true,
  "message": "Message sent successfully. Our team will contact you soon."
}
```

### `GET /api/health`
Checks server status.

---

## Author

- **Adeel Khurram**
- Email: [kk3123069@gmail.com](mailto:kk3123069@gmail.com)
