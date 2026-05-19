# 🍦 HOCCO Ice Cream Website

A modern multi-page React website inspired by the HOCCO brand.  
This project includes reusable components, dynamic rendering using arrays, React Router navigation, responsive layouts, and clean UI sections.

---

# 🚀 Features

- Multi-page React website
- Dynamic rendering using `.map()`
- Reusable React components
- React Router navigation
- Active navigation links
- Responsive card layouts
- Timeline/Journey section
- Culture section
- Custom 404 Page
- Clean component-based architecture

---

# 🛠️ Tech Stack

- React JS
- React Router
- CSS3
- JSX

---

# 📂 Folder Structure

```bash
src/
│
├── components/
│   ├── Culture.jsx
│   ├── CultureCard.jsx
│   ├── Journey.jsx
│   ├── JourneyCard.jsx
│   ├── NavBar.jsx
│   ├── Page.jsx
│   ├── Page2.jsx
│   └── PageNotFound.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Brands.jsx
│   ├── Legacy.jsx
│   └── Product.jsx
│
├── style/
│   ├── navbar.css
│   ├── culture.css
│   ├── journey-page.css
│   ├── page.css
│   └── pnf.css
│
└── App.jsx
```

---

# 📄 Pages

## 🏠 Home Page
- Navigation bar
- Brand landing section

---

## 🍨 Product Page
- Product categories
- Dynamic product banners
- CTA sections

---

## 🕰️ Our Legacy Page
- Company history timeline
- Reverse card layout
- Culture section

---

## ❌ 404 Page
- Custom page not found UI

---

# 🧩 Components Overview

## NavBar Component
Used for navigation across pages using `NavLink`.

### Features
- Active link styling
- Responsive menu icon

```jsx
<NavLink
  className={({isActive}) => isActive ? "active" : ""}
  to="/product"
>
  our products
</NavLink>
```

---

## Page Component

Renders product category banners dynamically using `.map()`.

```jsx
pageData.map((data, idx) => {
  return (
    <div key={idx}>
      <img src={data.img} alt="" />
    </div>
  )
})
```

---

## JourneyCard Component

Displays HOCCO journey/history timeline cards.

### Features
- Reverse layout support
- Dynamic rendering
- Timeline structure

```jsx
className={`journey-card ${data.reverse ? "reverse" : ""}`}
```

---

## Culture Section

Displays company culture cards dynamically.

### Includes
- Image
- Title
- Description

---

# 🔄 Dynamic Rendering

The project heavily uses arrays + `.map()` for scalable UI rendering.

Example:

```jsx
const aboutData = [
  {
    img: "...",
    title: "...",
    desc: "..."
  }
]
```

---

# 🎨 UI Highlights

- Soft pastel backgrounds
- Modern card layouts
- Timeline UI
- Minimal clean typography
- Responsive spacing

---

# ⚡ Installation

## Clone the repository

```bash
git clone <your-repository-link>
```

---

## Install dependencies

```bash
npm install
```

---

## Run development server

```bash
npm run dev
```

---

# 📌 Learning Concepts Used

- React Components
- Props
- Dynamic Rendering
- Array Mapping
- Conditional Classes
- React Router
- Reusable UI
- CSS Styling
- Component Structure

---

# 💡 Future Improvements

- Fully responsive navbar
- Mobile menu functionality
- Animations using Framer Motion
- API integration
- Product details page
- Dark mode support

---

# 👨‍💻 Author
Chetan
Made with ❤️ using React JS.