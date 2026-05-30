# Mohamed Hassan – Portfolio

A professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Deploy on Vercel

### Option 1 – Vercel Dashboard (Recommended)
1. Create a free account at [vercel.com](https://vercel.com)
2. Click **"Add New Project"** → **"Import Git Repository"**
3. Upload this repo to GitHub first (see below), then import it
4. Add the environment variable:
   - `RESEND_API_KEY` = your key from [resend.com](https://resend.com) (free tier available)
5. Click **Deploy** – done!

### Option 2 – Upload to GitHub First
1. Go to [github.com/new](https://github.com/new) and create a new repository
2. Extract this zip and push the files:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
3. Then import into Vercel as above

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Required for the contact form. Get a free key at resend.com |

> **Note:** If you don't set `RESEND_API_KEY`, the contact form won't send emails, but the rest of the site works fine.

## 🛠 Local Development

```bash
npm install
# Create .env.local with: RESEND_API_KEY=re_your_key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Structure

- `components/hero.tsx` – Hero section
- `components/about.tsx` – About section
- `components/tech-stack.tsx` – Skills section
- `components/experience.tsx` – Work experience timeline
- `components/contact.tsx` – Contact form
- `public/Mohamed_Hassan_CV.pdf` – Your CV (downloadable)
