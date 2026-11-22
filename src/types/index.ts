export type DivisionKey = 'VALORANT' | 'CS2' | 'APEX' | 'BGMI';

export interface DivisionMeta {
  title: string;
  subtitle: string;
  winrate: string;
}

export interface PlayerGear {
  mouse: string;
  keyboard: string;
  sens: string;
}

export interface Player {
  id: string;
  game: DivisionKey;
  ign: string;
  name: string;
  role: string;
  flag: string;
  country: string;
  kd: string;
  hs: string;
  acs: string;
  avatarUrl?: string; // Ready for Supabase Storage URLs
  gear: PlayerGear;
  bio: string;
}

export interface UpcomingMatch {
  id: string;
  game: string;
  event: string;
  opponent: string;
  oppTag: string;
  date: string;
  format: string;
  status: 'UPCOMING' | 'LIVE';
}

export interface MatchResult {
  id: string;
  game: string;
  event: string;
  opponent: string;
  oppTag: string;
  score: string;
  outcome: string;
  date: string;
}

export interface MerchItem {
  id: string;
  name: string;
  tag: string;
  price: number;
  desc: string;
  iconName: 'shirt' | 'vest' | 'mousepad';
  accent: string;
  sizes: string[];
  imageUrl?: string; // Ready for Supabase Storage URLs
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  qty: number;
}

export interface NewsArticle {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  content: string;
}

export interface ToastMessage {
  id: string;
  message: string;
}