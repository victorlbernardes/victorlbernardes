# Victor Bernardes — Personal Portfolio & Curriculum

[![GitHub Pages Deployment](https://github.com/victorlbernardes/victorlbernardes.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/victorlbernardes/victorlbernardes.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-victorlbernardes.github.io-00f0ff?style=flat-square&logo=googlechrome&logoColor=black)](https://victorlbernardes.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Victor_Bernardes-0a66c2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/victor-luiz-bernardes-da-silva-36bb53a3/)
[![itch.io](https://img.shields.io/badge/itch.io-victorlbernardes-fa5c5c?style=flat-square&logo=itchdotio&logoColor=white)](https://victorlbernardes.itch.io/delta-v-docking-simulator)

> The official personal portfolio and interactive curriculum of **Victor Bernardes** — Technical Lead & Senior Software Engineer. Built with an 80s Retrowave / Cyber-Retro aesthetic, full bilingual support (English / Portuguese), light and dark themes, and automated GitHub Pages deployment.

---

## 🚀 Live Demo

**[https://victorlbernardes.github.io](https://victorlbernardes.github.io)**

---

## ⚡ Tech Stack & Architecture

- **Core Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite 6](https://vite.dev/)
- **Styling & Design System:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** *Orbitron*, *Chakra Petch*, *JetBrains Mono*, and *Inter*
- **Deployment & CI/CD:** [GitHub Actions](https://github.com/features/actions) targeting [GitHub Pages](https://pages.github.com/)

---

## 🕹️ Key Features

- **80s Retrowave & Cyber-Retro Aesthetic:** Custom perspective horizon grid, neon laser glow accents, and workstation terminal HUD.
- **Bilingual Internationalization (i18n):** Instant runtime language switching between **English (`EN`)** (default) and **Português (`PT`)**.
- **Dark & Light Mode:**
  - **Dark Mode:** Deep space black (`#05060a`) with high-contrast cyber neons (Laser Cyan, Synth Pink, Sunset Amber).
  - **Light Mode:** Crisp technical blueprint / lab aesthetic with excellent contrast and readability.
- **Interactive Career Timeline:** Filterable chronology across Tech Leadership, Distributed Backends, and Game Development projects.
- **Featured Systems & Game Showcases:**
  - **Arena ESporte:** Modular Spring Boot media ecosystem with DDD/Hexagonal architecture, Next.js portal, and React 18 studio.
  - **Guardian-RPG:** Local tabletop RPG engine with an AI Narrator, powered by **Drogon Framework (C++)** and WebSockets across mobile (React Native) and web.
  - **Delta-V: Docking Simulator:** Orbital physics docking simulation published on [itch.io](https://victorlbernardes.itch.io/delta-v-docking-simulator).
- **Direct Contact Station:** Email, official brand LinkedIn (`#0a66c2`), and itch.io (`#fa5c5c`) access points.

---

## 📁 Repository Structure

```
victorlbernardes.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml         # Automated GitHub Pages CI/CD workflow
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive header with theme, lang & social links
│   │   ├── Hero.tsx           # Retrowave 3D grid, terminal HUD & CTAs
│   │   ├── About.tsx          # Professional executive bio & languages
│   │   ├── Experience.tsx     # Filterable career timeline
│   │   ├── Skills.tsx         # ROM cartridge skill modules
│   │   ├── Projects.tsx       # System & game dossiers
│   │   ├── Education.tsx      # Academic degrees & MBA
│   │   ├── Contact.tsx        # Comms station (Email, LinkedIn, itch.io)
│   │   └── Footer.tsx         # Monospace system footer
│   ├── data/
│   │   └── cvData.ts          # Central bilingual CV data dictionary (EN / PT)
│   ├── App.tsx                # Main app layout, theme & language state
│   ├── index.css              # Custom retrowave grid & scanlines CSS
│   └── main.tsx               # Application bootstrap
├── index.html                 # HTML shell with Google Fonts
├── tailwind.config.js         # Custom retro theme palette & fonts
├── tsconfig.json              # Strict TypeScript configuration
├── vite.config.ts             # Vite build configuration (base: '/')
└── package.json
```

---

## 🛠️ Local Development

### Prerequisites

- **Node.js:** v18+ (tested on Node v20 / v22 / v26)
- **npm** or **pnpm**

### Setup & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/victorlbernardes/victorlbernardes.github.io.git
   cd victorlbernardes.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready artifacts will be generated in the `dist/` directory.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚀 GitHub Pages Deployment

The repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml` that automatically builds and deploys the site whenever commits are pushed to the `main` branch.

### Enabling GitHub Pages in Repository Settings:
1. Go to your repository on GitHub: `https://github.com/victorlbernardes/victorlbernardes.github.io`
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The workflow will trigger on push and publish the site to `https://victorlbernardes.github.io`.

---

## 📄 License

Created by **Victor Bernardes**. All rights reserved.
