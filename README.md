# MASENO GIRL CHILD EMPOWERMENT (MGCE) Website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAmirZaid11%2Fmgce-web&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY)


This is a complete, modern, production-ready multi-page website built for MGCE. 
It uses Next.js 15, React 19, Tailwind CSS, Shadcn UI, Framer Motion, and Supabase.

## Tech Stack
- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database/Auth**: Supabase (Official Client)
- **Forms**: React Hook Form + Zod

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is recommended currently as some libraries are still aligning peer dependencies with React 19 which Next.js 15 uses by default).*

2. **Environment Variables**
   Copy the example environment file and add your actual Supabase keys:
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Required Supabase Setup
To make the interactive features work (Community Auth, Contact Form, Admin Dashboard), you must configure your Supabase project:
1. **Authentication**: Enable Email Signup in Supabase Authentication settings.
2. **Database Schema**:
   Run the following SQL in your Supabase SQL Editor:
   ```sql
   create table public.messages (
     id uuid default gen_random_uuid() primary key,
     name text not null,
     email text not null,
     message text not null,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null
   );
   
   -- Optional RLS
   alter table public.messages enable row level security;
   create policy "Enable insert for all users" on public.messages for insert with check (true);

-- Anonymous Posts Table (Sisters' Voice)
create table public.anonymous_posts (
  id uuid default gen_random_uuid() primary key,
  type text not null, -- 'story' or 'quote'
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for Anonymous Posts
alter table public.anonymous_posts enable row level security;
create policy "Enable insert for all" on public.anonymous_posts for insert with check (true);
create policy "Enable read for all" on public.anonymous_posts for select using (true);
   ```
3. Update `.env.local` with your database credentials.

## Deployment

### Deploy to Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add your Environment Variables (`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`) in the Vercel project settings.

### Production Build
To create an optimized production build:
```bash
npm run build
```
Then start the production server:
```bash
npm run start
```


