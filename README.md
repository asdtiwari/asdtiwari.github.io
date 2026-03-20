# Akhilesh Tiwari (asdtiwari) | Backend Engineer Portfolio

## The Architecture

This isn't just a static HTML site. It is a **Data-Driven Single Page Application (SPA)** built with a "Clean Architecture" mindset. By separating the **Content (`data.js`)** from the **Logic (`main.js`)** and **UI (Tailwind CSS)**, the system is highly maintainable and scales instantly.

### Key Technical Features:
- **Vanilla JS Engine:** Zero-dependency rendering for maximum performance and SEO.
- **Compiled Tailwind CSS v3:** Custom design system with a specialized "Dark Mode" for terminal aesthetics.
- **Dynamic Proof-of-Work:** Real-time integration with GitHub and LeetCode APIs to verify coding consistency.
- **SEO Optimized:** Rank #1 for the "asdtiwari" keyword through strategic Meta-tagging.

---

## Project Structure

```text
├── index.html          # Entry point & SEO Meta
├── tailwind.config.js  # Design System Configuration
├── package.json        # Build Dependencies
├── assets/
│   ├── js/
│   │   ├── data.js     # CONTENT LAYER (Edit this to update site)
│   │   └── main.js     # LOGIC LAYER (Functional Rendering)
│   ├── css/
│   │   ├── input.css   # Tailwind Source
│   │   └── output.css  # Minified Production CSS
│   └── images/         # Branding & Favicons
```

---

## How to Run Locally

```bash
# Clone the repo
git clone https://github.com/asdtiwari/asdtiwari.github.io.git

# Install dependencies
npm install

# Start Tailwind compiler
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch
```

Open the project with Live Server.

---