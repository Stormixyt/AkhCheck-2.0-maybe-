
-- AkhCheck core schema + basic RLS policies
-- Run this in your Supabase SQL editor

-- extensions
create extension if not exists pgcrypto;

-- profiles (extend auth.users)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  locale text,
  tz text,
  avatar_url text,
  bio text,
  private boolean default true,
  created_at timestamptz default now()
);

-- goals
create table if not exists goals (
  id uuid primary key default gen_random_uuid(),
  owner uuid references profiles(id) on delete cascade,
  title text not null,
  description text,
  goal_type text,
  target integer,
  recurrence jsonb,
  created_at timestamptz default now(),
  archived boolean default false,
  visibility text default 'private'
);

-- goal entries
create table if not exists goal_entries (
  id uuid primary key default gen_random_uuid(),
  goal_id uuid references goals(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  date date not null,
  value integer default 1,
  notes text,
  created_at timestamptz default now(),
  unique(goal_id, user_id, date)
);

-- groups & members
create table if not exists groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique,
  description text,
  owner uuid references profiles(id),
  is_private boolean default true,
  created_at timestamptz default now()
);

create table if not exists group_members (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references groups(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  role text default 'member',
  joined_at timestamptz default now()
);

-- messages (ciphertext only)
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references groups(id),
  sender uuid references profiles(id),
  ciphertext bytea not null,
  nonce bytea not null,
  created_at timestamptz default now()
);

-- challenges
create table if not exists challenges (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references groups(id),
  title text,
  description text,
  start_date date,
  end_date date,
  created_at timestamptz default now()
);

-- user settings
create table if not exists user_settings (
  user_id uuid primary key references profiles(id),
  tz text,
  prayer_pref jsonb,
  quiet_mode boolean default false,
  email_weekly_report boolean default true
);

-- Enable RLS and add example policies
alter table profiles enable row level security;
create policy profiles_owner on profiles for update using (auth.uid() = id);

alter table goals enable row level security;
create policy goals_owner on goals for insert using (auth.uid() = owner) with check (auth.uid() = owner);
create policy goals_select_for_owner on goals for select using (auth.uid() = owner);

alter table goal_entries enable row level security;
create policy entries_owner on goal_entries for insert using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy entries_select on goal_entries for select using (auth.uid() = user_id);

alter table groups enable row level security;
create policy groups_public_select on groups for select using (true);

alter table group_members enable row level security;
create policy group_members_insert on group_members for insert using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy group_members_select on group_members for select using (exists (select 1 from group_members gm where gm.group_id = group_members.group_id and gm.user_id = auth.uid()));

alter table messages enable row level security;
create policy messages_for_members on messages for select using (
  exists (select 1 from group_members gm where gm.group_id = messages.group_id and gm.user_id = auth.uid())
);
