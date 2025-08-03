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
- **Hosting (optional):** Vercel or Netlify

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/tier-event-showcase.git
cd tier-event-showcase
