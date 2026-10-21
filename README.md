# News App

Live site: https://thenewsjw.netlify.app/

A social-media-style news feed. Pick a username, browse articles by topic, sort them, vote them up or down, and comment on them.

## Stack

React 18 · Vite 8 · React Router 7 · MUI 5 · Supabase

## Getting started

Requires Node `^20.19.0 || >=22.12.0` (Vite 8 needs a modern Node).

```bash
git clone https://github.com/Jord000/News-App.git
cd News-App
npm install
```

### 1. Set up `.env`

The app talks to Supabase directly, so it needs your project URL and anon key.

```bash
cp .env.example .env
```

Then open `.env` and fill in both values. You can find them in the Supabase dashboard under **Project Settings → API**:

| Variable | Where to find it |
| --- | --- |
| `VITE_SUPABASE_URL` | Project Settings → API → **Project URL** |
| `VITE_ANON_KEY` | Project Settings → API → **anon public** key |

> `VITE_` prefixed variables are exposed to the browser by Vite, so only ever use the **anon/public** key here. Never put your `service_role` key in `.env`.

`.env` is git-ignored, so your keys stay local. If you'd rather not run the app against the original project's database, create your own free project at [supabase.com](https://supabase.com), add the tables below, and use your own URL and key.

### 2. Run it

```bash
npm run dev
```

Open http://localhost:5173/ and log in with any username from the `users` table.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |

## How it works

- **Login** is a dropdown of usernames from the `users` table, stored in `sessionStorage`. There's no password — this is a demo, not real auth.
- **Feed** reads articles straight from Supabase, optionally filtered by topic and sorted by any column (`author`, `title`, `topic`, `votes`, `created_at`, `comment_count`, …). The filter and topic live in the URL as query params, so the view is shareable.
- **Voting** increments or decrements the `votes` column on the article. Votes alternate up and down — one vote at a time, per article.
- **Comments** can be added and deleted by the comment's author (deletion is available on the article page).
- **Errors** route to the 404 page.

## Supabase

if you need to setup supabase for the data store 

### 1. Set up the Supabase database

Create these four tables with the columns shown:

**`users`** — `username` (text, primary key), `name` (text), `avatar_url` (text)

**`articles`** — `article_id` (bigint, primary key), `title` (text), `topic` (text), `author` (text), `body` (text), `created_at` (timestamptz), `votes` (int, default 0), `article_img_url` (text)

**`comments`** — `comment_id` (bigint, primary key), `body` (text), `article_id` (bigint), `author` (text), `votes` (int, default 0), `created_at` (timestamptz)

**`topics`** — `slug` (text, primary key), `description` (text)

The `articles.topic` values should match the `topics.slug` values so the topic filter works.

### 2. Enable Row Level Security

In the Supabase dashboard, turn on RLS for each table and add policies that let the `anon` role read and write rows. The app is intentionally unauthenticated — anyone with the anon key can read, insert, and delete — so keep the policies permissive to match how the app behaves:

```sql
-- run for each table
alter table public.users    enable row level security;
alter table public.articles enable row level security;
alter table public.comments enable row level security;
alter table public.topics   enable row level security;

create policy "anon full access" on public.users    for all to anon using (true) with check (true);
create policy "anon full access" on public.articles for all to anon using (true) with check (true);
create policy "anon full access" on public.comments for all to anon using (true) with check (true);
create policy "anon full access" on public.topics   for all to anon using (true) with check (true);
```

## Deployment

Deployed on [Netlify](https://thenewsjw.netlify.app/) — `dist/` is the publish directory and `public/_redirects` handles SPA routing.

Set `VITE_SUPABASE_URL` and `VITE_ANON_KEY` in your Netlify environment variables so the build can pick them up.

A scheduled GitHub Action (`.github/workflows/keep-alive.yaml`) pings the database every three days to stop the free Supabase project being paused.

## Back end

This repo is the front end only. The original Express/Postgres API lives here:

- https://github.com/Jord000/News-App-BackEnd
- https://news-app-87li.onrender.com/

-Jordan 🐛

