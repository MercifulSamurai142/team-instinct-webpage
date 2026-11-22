# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

# TEAM INSTINCT — Official Esports Organization Web Portal

Official web platform for **Team Instinct**, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed with a modular architecture ready for scaling and future **Supabase** integration (rosters, match telemetry, store inventory, and scouting applications).

---

## Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Linter:** Oxlint
- **Deployment Target:** Vercel (or Netlify)

---

## Prerequisites & Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MercifulSamurai142/team-instinct-webpage.git
cd team-instinct-webpage
```

### 2. Install NVM & Node.js (v22 LTS)

Vite requires Node.js 20.19+ or 22.12+. Using NVM (Node Version Manager) ensures the exact Node version is active.

```
# Install NVM (Linux / macOS)
curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh) | bash

# Reload shell configuration
source ~/.bashrc   # or `source ~/.zshrc` if using Zsh

# Install and activate Node.js 22 LTS
nvm install 22
nvm use 22

# Verify installation
node -v
npm -v
```

### 3. Install Dependencies

```
npm install
```

### 4. Running & Building the Project

```
npm run build
npm run dev
```

## Project Structure

```
team-instinct-webpage/
├── public/
│   └── assets/
│       └── images/           # Static brand assets (logo-crest.png, logo-emblem.png)
├── src/
│   ├── components/
│   │   ├── layout/           # Sticky Header, live match ticker, Footer
│   │   ├── modals/           # PlayerModal, StreamModal, NewsModal, CartDrawer
│   │   ├── sections/         # Hero, Partners, Roster, Matches, Merch, News, Tryouts
│   │   └── ui/               # FallbackImage, ToastContainer
│   ├── context/              # AppContext (global cart, modals, active division, toasts)
│   ├── data/                 # mockData.ts (default placeholder data)
│   ├── hooks/                # Custom hooks (useCountdown)
│   ├── lib/                  # Asset paths & future Supabase client setup
│   ├── types/                # Strict TypeScript interfaces
│   ├── App.tsx               # Root page layout
│   ├── index.css             # Tailwind directives & custom utilities
│   └── main.tsx              # Application entry point
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```