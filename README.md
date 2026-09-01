# 🍽️ Maison – Restaurant Website

A modern restaurant web application built with **Next.js, TypeScript, and Convex**, designed to provide an elegant and interactive digital dining experience.

---

## 🌐 Live Project

🚀 **[Visit the Live Website →](https://restaurant-website-ruby-six.vercel.app)**

---

## 📌 About The Project

Maison is a modern restaurant website designed with a premium and minimal aesthetic.

The application provides visitors with an elegant way to explore the restaurant, discover its offerings, learn more about Maison, and interact with different sections of the website.

The project combines a modern **Next.js frontend** with a **Convex backend** for application data and functionality.

---

## ✨ Features

- 🍽️ Modern restaurant interface
- 📖 Menu and restaurant information
- 🏠 Restaurant showcase
- 📱 Responsive design
- 🎨 Premium and minimal UI
- 📩 Contact functionality
- 👤 User authentication
- 🔐 Login functionality
- ⚡ Convex backend integration
- 🧩 Reusable React components
- ⚠️ Error handling

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Convex

### UI

- Reusable React Components
- Modern responsive design

### Deployment & Tools

- Vercel
- Git
- GitHub
- npm

---

## 🏗️ Application Architecture

```text
                         User
                          │
                          ▼
                    Next.js App
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
           Pages      Components    Providers
             │            │
             └────────────┼────────────┘
                          ▼
                        Convex
                          │
                          ▼
                       Backend
```

## 📁 Project Structure

```text
Maison-Restaurant/
├── app/             # Next.js pages and routes
├── components/      # Reusable UI components
├── convex/          # Convex backend
├── lib/             # Utility functions
├── providers/       # Application providers
├── public/          # Static assets
├── next.config.ts   # Next.js configuration
├── package.json     # Dependencies and scripts
└── tsconfig.json    # TypeScript configuration
