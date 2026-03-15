<div align="center">

# 🧠 TAB Deep Learning Leaderboard

> A full-stack web platform for tracking Deep Learning case study completions, rankings, and progress — built for the TAB community.

[![MIT License](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://mongoosejs.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)

<br/>

![TAB Deep Learning Banner](https://img.shields.io/badge/Deep%20Learning-TAB%20Community-a855f7?style=for-the-badge&logo=brain&logoColor=white)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [API Reference](#-api-reference)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌌 Overview

**TAB Deep Learning** is a community platform designed to help learners track their journey through structured Deep Learning content. Members can:

- Work through curated **case studies** spanning Python basics to advanced deep learning
- View a **live leaderboard** powered by Google Sheets to track points, streaks, and completion rates
- Submit their solutions via a **Google Form** to earn points and badges

The UI is styled with a dark galaxy/nebula aesthetic — think purple starfields and glowing neon cards.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📚 **Case Studies** | Accordion-style lesson browser organized by category (Python Basics → Deep Learning) |
| 🏆 **Live Leaderboard** | Real-time rankings fetched from Google Sheets via Apps Script |
| 📄 **Rich Content Viewer** | Supports `text`, `list`, `code`, and `composite` section types per case |
| 🚀 **Solution Submission** | One-click redirect to Google Form for submitting completed case studies |
| 🌙 **Galaxy UI** | Animated starfield background, glassmorphism cards, and neon purple gradients |
| 🔗 **Discord Integration** | Navbar link to the community Discord server |

---

## 🛠 Tech Stack

### Frontend (`/client`)
- **React 19** + **TypeScript** — component framework
- **Vite 7** — dev server & bundler
- **React Router DOM v7** — client-side routing
- **Axios** — HTTP client
- **React Icons** — icon library
- **React Markdown** — markdown rendering support

### Backend (`/server`)
- **Node.js** + **Express 5** — REST API server
- **TypeScript** — type-safe server code
- **Mongoose 9** + **MongoDB** — database ODM
- **CORS** — cross-origin request handling
- **dotenv** — environment configuration
- **ts-node-dev** — hot-reloading dev server

### External Services
- **Google Apps Script** — leaderboard data pipeline (Sheets → JSON API)
- **Vercel** — frontend hosting
- **MongoDB Atlas** — cloud database

---

## 📁 Project Structure

```
Project-DL-Leader-Board/
├── client/                     # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.ts        # Axios instance with base URL
│   │   ├── components/
│   │   │   └── Navbar.tsx      # Sticky nav with Discord link
│   │   ├── pages/
│   │   │   ├── Home.tsx        # Hero + case study grid
│   │   │   ├── CaseStudies.tsx # Accordion category browser
│   │   │   ├── CaseStudyDetails.tsx # Dynamic section renderer
│   │   │   └── Leaderboard.tsx # Live rankings table
│   │   ├── styles/             # Per-page CSS modules
│   │   ├── types/
│   │   │   └── CaseStudy.ts    # Shared TypeScript types
│   │   └── App.tsx             # Router setup
│   ├── vercel.json             # SPA rewrite rules
│   └── vite.config.ts
│
└── server/                     # Express + MongoDB backend
    └── src/
        ├── config/
        │   └── db.ts           # Mongoose connection
        ├── controllers/
        │   ├── caseController.ts
        │   └── userController.ts
        ├── models/
        │   ├── casestudy.ts    # Flexible section schema (Mixed content)
        │   └── User.ts
        ├── routes/
        │   ├── caseRoutes.ts
        │   └── userRoutes.ts
        └── server.ts           # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 20.19.0`
- **npm** or **yarn**
- A **MongoDB** connection string (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/A5hG0/Project-DL-Leader-Board.git
   cd Project-DL-Leader-Board
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

### Environment Variables

**Server** — create `server/.env`:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
PORT=5000
```

**Client** — create `client/.env.local`:
```env
VITE_API_BASE_URL=http://localhost:5000/
```

> For production, set `VITE_API_BASE_URL` to your deployed server URL.

### Running Locally

**Start the backend** (from `/server`):
```bash
npm run dev
# Server running on http://localhost:5000
```

**Start the frontend** (from `/client`):
```bash
npm run dev
# App running on http://localhost:5173
```

---

## 📡 API Reference

Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/cases` | Fetch all case studies |
| `GET` | `/cases/:id` | Fetch a single case study by ID |
| `GET` | `/users/leaderboard` | Fetch users sorted by score |

### Case Study Object

```json
{
  "_id": "...",
  "title": "Introduction to NumPy",
  "subtitle": "Working with arrays and matrices",
  "category": "Data Handling",
  "sections": [
    {
      "type": "text",
      "heading": "What is NumPy?",
      "content": "NumPy is a library for numerical computing..."
    },
    {
      "type": "code",
      "heading": "Example",
      "content": "import numpy as np\narr = np.array([1, 2, 3])",
      "language": "python"
    }
  ]
}
```

**Supported section types:** `text` · `list` · `code` · `composite`

---

## ☁️ Deployment

### Frontend (Vercel)

The `client/vercel.json` includes a catch-all rewrite for SPA routing:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

Set the environment variable `VITE_API_BASE_URL` in your Vercel project settings to point to your production API.

### Backend

Deploy to any Node.js-compatible host (Railway, Render, Fly.io, etc.). Make sure to set `MONGO_URI` and `PORT` in the platform's environment config.

The server's CORS config already includes `https://deep-learning-tab.vercel.app` — update this to match your deployed frontend URL if needed.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m 'Add: your feature description'`
4. **Push** to the branch: `git push origin feature/your-feature-name`
5. Open a **Pull Request**

Want to submit a case study solution instead? Use the 🚀 [Submit Case Study](https://forms.gle/xEqjJn1KwwTyB7ey8) form.

---

## 💬 Community

Join the TAB Discord to discuss case studies, ask questions, and connect with other learners:

[![Discord](https://img.shields.io/badge/Join%20Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/E7huSCxRsW)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with 💜 for the TAB Deep Learning community</sub>
</div>