# Anish Poudel - Portfolio Website

Professional portfolio website for Anish Poudel, Economics student at Michigan State University.

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Extract the ZIP file
2. Navigate to the project directory:
   ```bash
   cd anish-portfolio-final
   ```

3. **IMPORTANT**: Add these files to the `public/` folder:
   - `profile.jpg` (your professional photo)
   - `Resume-Anish.pdf` (your resume)

4. Install dependencies:
   ```bash
   npm install
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
anish-portfolio-final/
├── public/
│   ├── profile.jpg          ← ADD YOUR PHOTO HERE
│   ├── Resume-Anish.pdf     ← ADD YOUR RESUME HERE
│   └── projects/
│       ├── cfb-*.png (included)
│       └── aquavive-*.png (included)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css (85% zoom)
│   │   └── projects/
│   │       ├── smart-water-bottle/
│   │       │   └── page.tsx
│   │       └── college-football-analysis/
│   │           └── page.tsx
│   └── components/
│       ├── Header.tsx (Resume only)
│       ├── Hero.tsx (improved Resume button, full photo modal)
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       └── Footer.tsx
└── (config files)
```

# Deployment to Vercel

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy (Vercel will auto-detect Next.js)

Your site will be live at: `anish-portfolio.vercel.app`

# Built With

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Vercel (deployment)

# Contact

- Email: poudelanish077@gmail.com
- LinkedIn: linkedin.com/in/anish-poudel077/
