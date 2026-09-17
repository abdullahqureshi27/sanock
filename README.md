# Sanock — Digital Design & Development Agency

A modern full-stack web application built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Neon Serverless PostgreSQL**, and **Resend**.

## Features

- **Next.js 16 + React 19 App Router** with SSR & API routes
- **Neon Serverless PostgreSQL** database integration
- **Resend Email API** for instant lead & contact notifications
- **Framer Motion & Lenis** smooth scrolling and micro-animations
- **Dynamic environment-based configuration** for all contact channels
- Fully responsive across mobile, tablet, and ultra-wide displays

## Getting Started

### Prerequisites

- Node.js 18+
- Neon PostgreSQL connection string
- Resend API key

### 1. Environment Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in your credentials:

```env
DATABASE_URL="postgresql://..."
RESEND_API_KEY="re_..."
ADMIN_EMAIL="your-email@example.com"
NEXT_PUBLIC_PHONE_NUMBER="+923082945620"
NEXT_PUBLIC_PHONE_DISPLAY="+92 308 2945620"
NEXT_PUBLIC_WHATSAPP_NUMBER="923082945620"
NEXT_PUBLIC_CONTACT_EMAIL="your-email@example.com"
```

### 2. Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```
