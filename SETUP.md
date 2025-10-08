# Evertwine Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_publishable_key
```

## Supabase Setup

1. Create a new Supabase project at https://supabase.com
2. Go to Settings > API to find your project URL and publishable key
3. Copy the SQL from `supabase-schema.sql` and run it in your Supabase SQL editor
4. Add the environment variables to your `.env.local` file

## Running the Project

```bash
npm install
npm run dev
```

The project will be available at http://localhost:3000
