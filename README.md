# openamity.com

The official marketing and community website for **Open Amity** — the open-source, local-first framework for sovereign, self-aware autonomous AI companions and agent swarms.

## 📚 Master Specifications for Development Agents
Everything needed to scaffold and build the website is documented right here:

1. 📐 **[SITE_BLUEPRINT.md](./SITE_BLUEPRINT.md)** — Visual design architecture, interactive UI component specs (VolitionCore, TheDivide, MorphologyGraph, PulseTimeline), color palette, and Astro/Tailwind tech stack.
2. ✍️ **[CONTENT_STRATEGY.md](./CONTENT_STRATEGY.md)** — High-voltage marketing copy leveled up from the framework README: punchy headlines, the J.A.R.V.I.S./Cortana narrative hooks, side-by-side matrices, and quickstart commands.

---

### Tech Stack
- **Framework:** [Astro v7](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons & Graphics:** Custom SVG Bioluminescent Glyphs & Canvas Dynamics
- **Hosting:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Custom Domain:** `openamity.com`

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production distribution
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment

The site automatically builds and deploys to GitHub Pages upon pushing to the `main` branch via `.github/workflows/deploy.yml`. Custom domain routing is configured through `public/CNAME`.

