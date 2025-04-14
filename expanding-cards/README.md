## Expanding Cards Project

**Description:**

The **Expanding Cards** project is a smooth, interactive UI feature built using **HTML**, **CSS**, and **JavaScript**. It displays a horizontal row of image panels that expand when clicked, giving a dynamic, engaging experience perfect for portfolios, landing pages, or travel websites.

[🔗**Live Demo**](https://50projects50days.com/projects/expanding-cards/)

---

**Tech Stack:**

- **HTML5** – Semantic structure of the page  
- **CSS3** – Flexbox layout, transitions, responsive design  
- **JavaScript** – DOM manipulation and event handling

---

**Features:**

- Beautiful, high-quality background images
- Smooth expand/collapse animation with CSS transitions
- Simple and clean JavaScript logic
- Responsive layout for mobile devices
- Hover-free interactivity – just click to expand!

---

**How It Works:**

1. Initially, the first card is marked as active.
2. Each panel listens for a click event.
3. When clicked:
   - JavaScript removes the `active` class from all panels.
   - Then it adds the `active` class to the clicked one.
4. CSS handles the animation using Flexbox (`flex: 5` for active, `flex: 0.5` for inactive), with a fade-in effect on the text (`h3`).

---

**Responsive Design:**

- On screens smaller than 480px, the layout adapts for better usability by hiding the last two panels.
- Fluid width and height make it adaptable to various screen sizes.

---

**📂 File Structure:**

```
expanding-cards/
├── index.html
├── style.css
└── script.js
```

**Use Cases:**
- Landing pages  
- Image galleries  
- Product showcases  
- Personal portfolios
---
  > 📌 Feel free to idea customize and contribute!