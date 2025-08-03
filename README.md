
# 🎟️ Tier-Based Event Showcase

A responsive, tier-based event listing platform built with **Next.js 14**, **Clerk.dev**, **Supabase**, and **Tailwind CSS**.

Users can log in and view events filtered by their subscription tier (Free, Silver, Gold, Platinum). Events above their tier are locked with upgrade options.

---

## ✨ Features

- 🔐 **Clerk Authentication** (Signup / Login)
- 🎯 **Tier-Based Access Control** using Clerk metadata
- 📅 **Event Management** with Supabase PostgreSQL
- 🖼️ **Event Grid UI** with Tailwind CSS
- 🔓 Bonus: Upgrade Tier UI & locked event overlays
- 🔐 Optional: Supabase RLS Setup (planned)

---

## ⚙️ Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Auth:** Clerk.dev
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS
- **Hosting (optional):** Vercel / Netlify

---

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io) or `npm`
- Git
- Clerk.dev account
- Supabase project

---

### 1. Clone the Repo

```bash
git clone https://github.com/<your-username>/tier-event-showcase.git
cd tier-event-showcase
```

---

### 2. Install Dependencies

```bash
# Using pnpm
pnpm install

# Or using npm
npm install
```

---

### 3. Create Environment Variables

Create a `.env.local` file in the root of your project:

```bash
touch .env.local
```

Paste the following and fill in your actual keys:

```env
# Clerk
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_API_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

> 🔒 Do **NOT** expose the `SUPABASE_SERVICE_ROLE_KEY` to the frontend.

---

### 4. Configure Supabase Database

- Create a table named `events` with the following schema:

```sql
create type tier_enum as enum ('free', 'silver', 'gold', 'platinum');

create table events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  event_date timestamp not null,
  image_url text,
  tier tier_enum not null
);
```

- Seed sample data:

```sql
insert into events (title, description, event_date, image_url, tier) values
('Free Event 1', 'Open to all.', now() + interval '1 day', 'https://via.placeholder.com/300', 'free'),
('Free Event 2', 'Everyone welcome.', now() + interval '2 days', 'https://via.placeholder.com/300', 'free'),
('Silver Event 1', 'Premium silver tier event.', now() + interval '3 days', 'https://via.placeholder.com/300', 'silver'),
('Silver Event 2', 'For silver tier.', now() + interval '4 days', 'https://via.placeholder.com/300', 'silver'),
('Gold Gala', 'Exclusive gold access.', now() + interval '5 days', 'https://via.placeholder.com/300', 'gold'),
('Platinum Night', 'Only for platinum elite.', now() + interval '6 days', 'https://via.placeholder.com/300', 'platinum');
```

---

### 5. Run the App Locally

```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🔐 Authentication via Clerk

- Go to [Clerk.dev](https://clerk.dev) and create a new application.
- Copy your publishable and secret keys into `.env.local`.
- Add your local URL (`http://localhost:3000`) and production domain to Clerk's **Allowed Origins**.

---

## 🛠️ Folder Structure

```bash
/app
  ├── events/               # Events page
  ├── admin/                # Tier upgrade simulation
  ├── layout.tsx           # Root layout
  ├── page.tsx             # Home page
/components
  ├── NavBar.tsx
  └── EventCard.tsx
/lib
  ├── supabase.ts
  ├── clerk.ts
  └── tiers.ts
/middleware.ts              # Auth-protected routes
/tailwind.config.ts
```

---

## 📦 Build & Deploy

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repo
4. Set environment variables (same as `.env.local`)
5. Deploy 🎉

---

## 💡 Simulate Tier Upgrade

- Visit `/admin` route or click "Upgrade Tier" on any locked event card.
- This updates your Clerk metadata (e.g., `tier: "platinum"`)

---

## 🧱 Optional: Supabase RLS (Row-Level Security)

You can enhance security by enabling RLS on the `events` table to restrict based on the user's tier. Let me know if you want help setting this up.

---

## 🧪 Troubleshooting

| Issue | Solution |
|-------|----------|
| `Cannot find module '@/components/...` | Ensure you have `baseUrl` and `paths` set in `tsconfig.json` |
| Clerk 403 error | Make sure your domain is whitelisted in Clerk dashboard |
| Supabase fetch fails | Check Supabase URL & anon key in `.env.local` |

---

## 🙋‍♂️ Author

**Ajit Omkarnath Mishra**  
📍 Mumbai, India  
🔗 [LinkedIn](https://linkedin.com/in/ajitom) | [GitHub](https://github.com/ajit-o)
