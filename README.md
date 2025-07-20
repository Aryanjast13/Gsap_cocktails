# Velvet Pour – GSAP Cocktails Landing Page

A visually rich, animated cocktails landing page built with **React**, **Vite**, **GSAP**, and **TailwindCSS**.

## Features

- Smooth scroll-based animations powered by GSAP and ScrollTrigger
- Responsive design with TailwindCSS utility classes
- Modular React components for easy maintenance
- Animated hero section with video background
- Cocktail and mocktail menu with interactive navigation
- About, Art, and Contact sections with engaging transitions

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/gsap-cocktails.git
   cd gsap-cocktails
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
├── public/
│   ├── images/         # Static images
│   ├── fonts/          # Custom fonts
│   └── robots.txt
├── src/
│   ├── components/     # React components
│   ├── constants/      # Data/constants
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind & custom styles
├── index.html
├── package.json
└── vite.config.js
```

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## Customization

- **Images & Videos:** Place your assets in the `public/images/` and `public/videos/` folders.
- **Menu Items:** Edit `src/constants/index.js` to update cocktails, mocktails, and other content.
- **Styling:** Modify `src/index.css` for custom styles or Tailwind utilities.

## License

MIT

---

Inspired by modern bar and cocktail experiences. Crafted with ❤️ using React and GSAP.
