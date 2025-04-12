# 🚀 Gadget Galaxy - React Gadget Store

Welcome to **Gadget Galaxy**, a modern and responsive gadget showcase built with **React**! Browse through the latest tech gadgets, filter by category, and manage your cart and wishlist effortlessly.

## 🔗 Live Website

👉 [Visit the Live Site](https://your-live-site-url.com)

## 📄 Requirement Document

👉 [View Project Requirements](https://your-requirement-document-link.com)

---

## ⚛️ React Fundamentals Used

This project utilizes key React concepts:

- **JSX** – Declarative UI structure
- **Props & Components** – Reusable, modular components
- **State Management** – `useState`, `useEffect` for dynamic interaction
- **React Router DOM** – Client-side routing with nested routes
- **Context API** – Shared state (cart/wishlist) across components
- **Conditional Rendering** – Wishlist button disables if already added
- **Responsive Design** – Tailwind CSS for mobile-friendly layout

---

## 🧠 Data Management

We used:

- **Context API**: For global state management (cart & wishlist)
- **Local Storage** *(Optional/Extension)*: Can be added for data persistence

---

## 💡 Features

1. **🛒 Add to Cart** – Add gadgets and calculate total price dynamically.
2. **💖 Add to Wishlist** – Add once, disable heart icon afterward.
3. **📊 Statistics Page** – Interactive graphs (bar & pie) showing product data.
4. **📱 Responsive Design** – Mobile-first and adaptable layouts.
5. **❌ 404 Page** – Custom-designed error page for invalid routes.

---

## 🛤️ Available Routes

| Route             | Description                        |
|------------------|------------------------------------|
| `/`              | Home Page                          |
| `/dashboard`     | Cart & Wishlist Management         |
| `/products/:id`  | Single Product Details Page        |
| `/techtrends`    | Latest trends in the gadget world  |
| `/statistics`    | Bar & Pie Charts of product stats  |
| `*`              | Custom 404 Error Page              |

---

## 🛠️ Tech Stack

- **React**
- **React Router**
- **Tailwind CSS**
- **React Toastify**
- **Chart.js / Recharts**

---

## 📦 Installation

```bash
npm install
npm run dev
