# My_Portfolio-3D

A modern 3D portfolio website built with **React** and **Vite** featuring smooth Hot Module Replacement (HMR), optimized performance, and 3D graphics integration.

---

## 🚀 Tech Stack

- **React** — UI library for building interactive user interfaces  
- **Vite** — Next-gen frontend tooling for fast builds and HMR  
- **@vitejs/plugin-react** — React plugin for Vite with Babel-based Fast Refresh  
- **@vitejs/plugin-react-swc** — React plugin for Vite using SWC compiler for faster refresh (choose one plugin)  
- **Three.js / react-three-fiber** — 3D rendering (if used in your portfolio)  
- **ESLint** — Code quality and linting rules  

---

## 🎯 Features

- Minimal and performant React + Vite setup  
- Fast refresh with HMR for quick development cycles  
- Clean, modular component architecture  
- Integration of 3D models and interactive elements (via Three.js or other libs)  
- Responsive and accessible design  
- ESLint configured for code consistency and best practices  

---

## 📁 Project Structure

.
├── public/ # Static assets (images, icons, fonts)
├── src/
│ ├── components/ # React components
│ ├── assets/ # Images, 3D models, styles
│ ├── App.jsx # Root React component
│ ├── main.jsx # Vite entry point
│ └── styles/ # CSS/SCSS files
├── index.html # Main HTML file
├── vite.config.js # Vite configuration
├── package.json # Project metadata and scripts
└── .eslintrc.js # ESLint configuration

yaml
---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/My_Portfolio-3D.git
cd My_Portfolio-3D
```
2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```
3. Start development server with HMR
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 to view your portfolio in the browser.
```

4. Build for production
```bash
npm run build
```
5. Preview production build locally

📚 ESLint
This project uses ESLint for code linting with recommended rules for React and Vite. Run the linter manually with:

```bash
npm run lint
```
