# Portfolio Starter (Vanilla HTML/CSS/JS)

This is a tiny starter you can open in Visual Studio Code and preview instantly.

## Quick Start

1. **Open the folder in VS Code** (`File → Open Folder…`).
2. Install the extension **Live Server** (by Ritwick Dey).
3. Right‑click `index.html` → **Open with Live Server**.
4. Your site will open at `http://localhost:5500` (or similar).

## Publish for Free (GitHub Pages)

1. Create a new public repository on GitHub (e.g., `my-portfolio`).
2. In VS Code terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
4. Wait a minute—your site will be at `https://<your-username>.github.io/my-portfolio/`.

## Next Steps
- Replace the title and text.
- Add images to `/assets` and reference them from `index.html`.
- Create new sections (About, Gallery, Contact).
- Add hover effects and a simple navbar.
