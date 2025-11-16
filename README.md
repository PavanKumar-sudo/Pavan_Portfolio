## Pavan Builds Webs – Portfolio

Modern, responsive developer portfolio built with **React + TypeScript + Vite + Tailwind + shadcn/ui**.  
It showcases services, projects, skills, and a contact form that sends messages directly to your email via **EmailJS**.

---

### Tech Stack

- **Framework**: React + TypeScript (Vite)
- **Styling**: Tailwind CSS, custom utility classes (glassmorphism, gradients, animations)
- **UI Library**: shadcn/ui + Lucide icons
- **Forms / Email**: EmailJS (client-side email sending)
- **Notifications**: Sonner (toasts)

---

### Getting Started (Local Development)

1. **Install dependencies**

```bash
npm install
```

2. **Environment variables**

Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=        # your EmailJS service ID
VITE_EMAILJS_TEMPLATE_ID=      # your EmailJS template ID
VITE_EMAILJS_PUBLIC_KEY=      # your EmailJS public key
```

Never commit real secrets; in this project the EmailJS **public** key is safe to expose on the client, but service/template IDs can be rotated per environment.

3. **Run the dev server**

```bash
npm run dev
```

The app will be available at the Vite dev URL (usually `http://localhost:5173`).

---

### Project Structure (High Level)

- `src/components/Home.tsx` – Hero section, intro, social links, CTA buttons.
- `src/components/Services.tsx` – Service cards and modern “Skill Coverage Overview” block.
- `src/components/ServiceCard.tsx` – Reusable card with glassmorphism and skill bar.
- `src/components/Projects.tsx` – Animated project cards and CTA.
- `src/components/Contact.tsx` – Contact info and EmailJS-powered contact form.
- `src/components/ui/` – shadcn/ui components + `sonner` toast styling.
- `src/config/links.ts` – Centralized external URLs (GitHub, LinkedIn, live demo links).
- `src/config/projects.ts` – Project metadata (titles, descriptions, tech stack, gradients).

To change links or projects, edit **only** `links.ts` and `projects.ts` – components will pick up the changes automatically.

---

### EmailJS Integration (Contact Form)

The contact form in `Contact.tsx` sends submissions using EmailJS:

- Reads configuration from env vars:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
- Sends `name`, `email`, and `message` fields to your configured Gmail.
- Shows modern success/error toasts using Sonner.

> Make sure your EmailJS template expects `from_name`, `reply_to`, and `message` (or adjust the `templateParams` in `Contact.tsx`).

---

### Deploying to Vercel

1. **Create a Vercel project**
   - Go to `https://vercel.com`, import this GitHub repo.

2. **Set environment variables in Vercel**
   - In *Project Settings → Environment Variables*, add:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - Use the same values as your local `.env` (or environment-specific values).

3. **Build settings**
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`

4. **Deploy**
   - Trigger a deploy from Vercel; it will run `npm install` and `npm run build` and host the static output.

5. **Custom domain (optional)**
   - In Vercel project settings, add your custom domain and point DNS to Vercel as instructed.

---

### Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run preview # preview local production build
lint            # (if configured in package.json) run linters
```

---

### Notes

- This is a **frontend-only** portfolio; no backend or database is included in this repo.
- Be careful not to store real secrets (API keys, database URLs) in the client; use a proper backend if you add private integrations later.
