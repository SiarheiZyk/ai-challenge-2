# Leaderboard Clone

A React leaderboard application built with Vite and Tailwind CSS.

## Live Demo

**[https://siarheizyk.github.io/Leaderboard_Clone/](https://siarheizyk.github.io/Leaderboard_Clone/)**

## Deployment (GitHub Pages)

The app is automatically deployed to GitHub Pages on every push to the `main` branch via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

### First-time setup

1. Go to your repository **Settings → Pages**.
2. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
3. Push to `main` — the workflow will build the app and publish the `dist/` folder to GitHub Pages.

### How it works

1. **Build** – `npm run build` compiles the Vite/React app into the `dist/` directory.  
   The `base` option in `vite.config.js` is set to `/Leaderboard_Clone/` so all asset paths are correct for the project sub-path.
2. **Deploy** – `actions/upload-pages-artifact` packages `dist/` and `actions/deploy-pages` publishes it.

No build artifacts are committed; the `dist/` folder is excluded by `.gitignore`.

## Local Development

```bash
npm install   # or: pnpm install
npm run dev   # starts the dev server at http://localhost:5173
npm run build # production build → dist/
npm test      # run unit tests with Vitest
```
