import type {
  DivisionKey,
  DivisionMeta,
  MatchResult,
  MerchItem,
  NewsArticle,
  Player,
  UpcomingMatch,
} from '../types';

export const DIVISION_META: Record<DivisionKey, DivisionMeta> = {
  VALORANT: {
    title: 'VALORANT — VCT CHALLENGERS ROSTER',
    subtitle: 'Head Coach: Marcus "Valkyrie" Vance • Global Power Rank: #7',
    winrate: '74.2%',
  },
  CS2: {
    title: 'COUNTER-STRIKE 2 — ESL PRO DIVISION',
    subtitle: 'Head Coach: Henrik "Krono" Lindqvist • HLTV World Rank: #11',
    winrate: '68.9%',
  },
  APEX: {
    title: 'APEX LEGENDS — ALGS CHAMPIONSHIP SQUAD',
    subtitle: 'Coach: Devon "Stratos" Cole • ALGS Split Playoffs Finalist',
    winrate: '71.5%',
  },
  BGMI: {
    title: 'BGMI / PUBG MOBILE — SOUTH ASIA TITANS',
    subtitle: 'Coach: Rohan "Garuda" Sharma • 3x BMPS Podium Finishers',
    winrate: '79.0%',
  },
};

export const ROSTER_DATA: Player[] = [
  // VALORANT
  { id: 'v1', game: 'VALORANT', ign: 'IGNIS', name: 'Kieran Hale', role: 'DUELIST', flag: '🇺🇸', country: 'USA', kd: '1.34', hs: '31.8%', acs: '268', gear: { mouse: 'VoltGear Viper Pro 4K', keyboard: 'VoltGear Rapid TKL', sens: '800 DPI • 0.31' }, bio: 'Explosive entry duelist renowned for hyper-aggressive Jett and Raze space creation on LAN.' },
  { id: 'v2', game: 'VALORANT', ign: 'VOLT', name: 'Seung-Min Park', role: 'IGL / INITIATOR', flag: '🇰🇷', country: 'South Korea', kd: '1.14', hs: '27.4%', acs: '219', gear: { mouse: 'VoltGear Aero Mini', keyboard: 'VoltGear Rapid TKL', sens: '800 DPI • 0.27' }, bio: 'Mastermind mid-round caller orchestrating Team Instinct’s signature fast-execute protocols.' },
  { id: 'v3', game: 'VALORANT', ign: 'SOLARIS', name: 'Lucas Lindholm', role: 'CONTROLLER', flag: '🇸🇪', country: 'Sweden', kd: '1.18', hs: '29.1%', acs: '212', gear: { mouse: 'VoltGear Viper Pro 4K', keyboard: 'HyperCore Hall-60', sens: '400 DPI • 0.54' }, bio: 'Ice-cold clutch specialist with a 42% 1vX conversion rate across international qualifiers.' },
  { id: 'v4', game: 'VALORANT', ign: 'PYRE', name: 'Mateo Silva', role: 'SENTINEL / FLEX', flag: '🇧🇷', country: 'Brazil', kd: '1.22', hs: '33.0%', acs: '231', gear: { mouse: 'VoltGear Aero Mini', keyboard: 'VoltGear Rapid TKL', sens: '800 DPI • 0.29' }, bio: 'Unbreakable site anchor and Chamber/Cypher virtuoso locking down flanks.' },

  // CS2
  { id: 'c1', game: 'CS2', ign: 'THUNDER', name: 'Nikolai Petrov', role: 'AWPER', flag: '🇺🇦', country: 'Ukraine', kd: '1.31', hs: '44.2%', acs: '1.26 Rating', gear: { mouse: 'VoltGear Viper Pro 4K', keyboard: 'HyperCore Hall-60', sens: '800 DPI • 1.05' }, bio: 'Lightning-fast primary sniper dominating opening picks on Mirage and Ancient.' },
  { id: 'c2', game: 'CS2', ign: 'BLAZE', name: 'Kasper Nielsen', role: 'ENTRY FRAGGER', flag: '🇩🇰', country: 'Denmark', kd: '1.16', hs: '58.4%', acs: '1.18 Rating', gear: { mouse: 'VoltGear Aero Mini', keyboard: 'VoltGear Rapid TKL', sens: '400 DPI • 2.10' }, bio: 'Fearless space-taker leading the pack with crisp first-bullet accuracy.' },
  { id: 'c3', game: 'CS2', ign: 'APEX', name: 'Tomasz Kowalski', role: 'IGL / RIFLER', flag: '🇵🇱', country: 'Poland', kd: '1.08', hs: '52.1%', acs: '1.09 Rating', gear: { mouse: 'VoltGear Viper Pro 4K', keyboard: 'VoltGear Rapid TKL', sens: '800 DPI • 0.95' }, bio: 'Veteran tactical captain with deep utility setups and adaptive T-side calling.' },
  { id: 'c4', game: 'CS2', ign: 'EMBER', name: 'Julien Moreau', role: 'LURKER / SUPPORT', flag: '🇫🇷', country: 'France', kd: '1.15', hs: '55.0%', acs: '1.14 Rating', gear: { mouse: 'VoltGear Aero Mini', keyboard: 'HyperCore Hall-60', sens: '800 DPI • 1.12' }, bio: 'Precision timing lurker dismantling enemy rotations in late-round scenarios.' },

  // APEX LEGENDS
  { id: 'a1', game: 'APEX', ign: 'STRIKE', name: 'Jordan Brooks', role: 'IGL / FRAGGER', flag: '🇺🇸', country: 'USA', kd: '2.85', hs: '36.5%', acs: '1,140 Avg Dmg', gear: { mouse: 'VoltGear Viper Pro 4K', keyboard: 'HyperCore Hall-60', sens: '800 DPI • 1.40' }, bio: 'ALGS MVP finalist guiding Team Instinct through chaotic final-ring rotations.' },
  { id: 'a2', game: 'APEX', ign: 'NOVA', name: 'Ren Takahashi', role: 'CONTROLLER FRAGGER', flag: '🇯🇵', country: 'Japan', kd: '3.12', hs: '38.2%', acs: '1,210 Avg Dmg', gear: { mouse: 'Custom Pro Pad', keyboard: 'Pro Tournament Controller', sens: '4-3 Linear No Deadzone' }, bio: 'Close-quarters SMG powerhouse unmatched in bubble and building fights.' },
  { id: 'a3', game: 'APEX', ign: 'CINDER', name: 'Liam O’Connor', role: 'ANCHOR / SUPPORT', flag: '🇬🇧', country: 'UK', kd: '2.41', hs: '31.0%', acs: '980 Avg Dmg', gear: { mouse: 'VoltGear Aero Mini', keyboard: 'VoltGear Rapid TKL', sens: '800 DPI • 1.25' }, bio: 'Defensive backbone ensuring resets, zone control, and sniper pressure.' },
  { id: 'a4', game: 'APEX', ign: 'FLARE', name: 'Carlos Mendez', role: 'FLEX / SUB', flag: '🇲🇽', country: 'Mexico', kd: '2.60', hs: '34.1%', acs: '1,030 Avg Dmg', gear: { mouse: 'VoltGear Viper Pro 4K', keyboard: 'VoltGear Rapid TKL', sens: '800 DPI • 1.35' }, bio: 'Versatile multi-legend specialist stepping in across regional scrims and cups.' },

  // BGMI
  { id: 'b1', game: 'BGMI', ign: 'SURYA', name: 'Aarav Verma', role: 'IGL / ASSAULTER', flag: '🇮🇳', country: 'India', kd: '2.48', hs: '29.4%', acs: '615 Avg Dmg', gear: { mouse: 'iPhone 16 Pro Max (120FPS)', keyboard: '4-Finger Claw Gyro', sens: 'Gyro 360% ADS' }, bio: 'Decorated Indian BGMI captain celebrated for clutch zone predictions and aggressive drops.' },
  { id: 'b2', game: 'BGMI', ign: 'AGNI', name: 'Kabir Mehta', role: 'ENTRY ASSAULTER', flag: '🇮🇳', country: 'India', kd: '2.79', hs: '34.8%', acs: '680 Avg Dmg', gear: { mouse: 'iPhone 16 Pro Max (120FPS)', keyboard: '4-Finger Claw Gyro', sens: 'Gyro 380% ADS' }, bio: 'Top-fragging M416 & DBS entry monster consistently topping tournament MVP charts.' },
  { id: 'b3', game: 'BGMI', ign: 'VAJRA', name: 'Devansh Nair', role: 'SNIPER / DMR', flag: '🇮🇳', country: 'India', kd: '2.25', hs: '39.1%', acs: '570 Avg Dmg', gear: { mouse: 'iPhone 16 Pro Max (120FPS)', keyboard: '3-Finger Claw Gyro', sens: 'Gyro 310% ADS' }, bio: 'Long-range bolt-action specialist opening knock opportunities across Erangel and Miramar.' },
  { id: 'b4', game: 'BGMI', ign: 'TEJAS', name: 'Harshvardhan Rao', role: 'SUPPORT / CLUTCH', flag: '🇮🇳', country: 'India', kd: '2.18', hs: '27.9%', acs: '540 Avg Dmg', gear: { mouse: 'iPhone 16 Pro Max (120FPS)', keyboard: '4-Finger Claw Gyro', sens: 'Gyro 350% ADS' }, bio: 'Utility expert delivering pinpoint frag grenades and smoke walls under pressure.' },
];

export const UPCOMING_MATCHES: UpcomingMatch[] = [
  { id: 'm1', game: 'VALORANT', event: 'VCT Pacific Ascension — Upper Semis', opponent: 'CYBER APEX', oppTag: 'APX', date: 'TODAY • 18:00 IST', format: 'BO3', status: 'UPCOMING' },
  { id: 'm2', game: 'CS2', event: 'ESL Challenger League — Group A', opponent: 'NORDIC WOLVES', oppTag: 'NWF', date: 'NOV 22 • 21:30 IST', format: 'BO3', status: 'UPCOMING' },
  { id: 'm3', game: 'BGMI', event: 'BGMI Pro Series — Grand Finals Day 1', opponent: '16-TEAM LOBBY', oppTag: 'BMPS', date: 'NOV 24 • 16:00 IST', format: '6 MATCHES', status: 'UPCOMING' },
  { id: 'm4', game: 'APEX LEGENDS', event: 'ALGS Year 6 Split 1 Pro League', opponent: 'GROUP B vs C', oppTag: 'ALGS', date: 'NOV 26 • 01:00 IST', format: '6 GAMES', status: 'UPCOMING' },
];

export const MATCH_RESULTS: MatchResult[] = [
  { id: 'r1', game: 'VALORANT', event: 'VCT Challengers — Quarterfinals', opponent: 'SENTINELS ACADEMY', oppTag: 'SEN', score: '2 - 1', outcome: 'VICTORY', date: 'NOV 18, 2026' },
  { id: 'r2', game: 'CS2', event: 'IEM Katowice Open Qualifier', opponent: 'TITAN GAMING', oppTag: 'TTN', score: '2 - 0', outcome: 'VICTORY', date: 'NOV 15, 2026' },
  { id: 'r3', game: 'BGMI', event: 'Masters Invitational Finals', opponent: 'OVERALL STANDINGS', oppTag: '#1', score: '142 PTS', outcome: 'CHAMPIONS', date: 'NOV 11, 2026' },
  { id: 'r4', game: 'APEX LEGENDS', event: 'ALGS Regional Scrim Cup', opponent: '20-TEAM LOBBY', oppTag: '#2', score: '78 PTS', outcome: 'PODIUM', date: 'NOV 08, 2026' },
];

export const MERCH_DATA: MerchItem[] = [
  {
    id: 'merch-jersey',
    name: '2026 Phoenix Pro Player Jersey',
    tag: 'AUTHENTIC PRO EDITION',
    price: 79.99,
    desc: 'Breathable micro-mesh athletic knit with metallic gold phoenix crest and customizable gamertag back print.',
    iconName: 'shirt',
    accent: 'from-instinctGold/25 via-phoenixFlame/20 to-obsidian',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'merch-hoodie',
    name: 'Instinct Ember Heavyweight Hoodie',
    tag: 'LIMITED DROP',
    price: 94.99,
    desc: '480GSM French terry obsidian fleece featuring high-density gold lightning embroidery on sleeves and chest.',
    iconName: 'vest',
    accent: 'from-phoenixFlame/25 via-instinctAmber/15 to-obsidian',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'merch-mousepad',
    name: 'Phoenix Fire Pro Gaming Mousepad XL',
    tag: 'ESPORTS GRADE',
    price: 44.99,
    desc: '900x400x4mm hybrid speed-control weave with anti-fray gold stitching and non-slip natural rubber base.',
    iconName: 'mousepad',
    accent: 'from-instinctAmber/25 via-instinctGold/15 to-obsidian',
    sizes: ['LG', 'XL'],
  },
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'n1',
    category: 'VALORANT',
    date: 'NOV 19, 2026',
    title: 'Team Instinct Clinches VCT Ascension Semifinal Berth After Thriller Over Sentinels Academy',
    summary: 'Led by IGNIS’s 29-kill Raze masterclass on Bind, Team Instinct reversed an early deficit to seal a 2-1 series triumph.',
    content: 'In front of over 65,000 concurrent viewers, Team Instinct demonstrated why their resilient mid-round adaptations are feared across the circuit. After dropping Haven 11-13, IGL VOLT called a triple-controller composition on Bind that completely shut down opposing site hits, culminating in a decisive 13-7 closeout.',
  },
  {
    id: 'n2',
    category: 'ORGANIZATION',
    date: 'NOV 14, 2026',
    title: 'Unveiling the 2026 Phoenix & Lightning Pro Kit in Partnership with VoltGear',
    summary: 'Engineered for stage performance under bright arena lights, our 2026 jersey fuses golden telemetry lines with phoenix flame.',
    content: 'The 2026 Team Instinct Pro Kit represents months of ergonomic testing with our VALORANT, CS2, Apex, and BGMI players. Featuring moisture-wicking obsidian fabric, gold-foil crest detailing, and reinforced collar stitching, the jersey is now available worldwide in our official store.',
  },
  {
    id: 'n3',
    category: 'BGMI DIVISION',
    date: 'NOV 11, 2026',
    title: 'Team Instinct Lifts the Masters Invitational Trophy in Mumbai with 3 Chicken Dinners',
    summary: 'SURYA and AGNI combined for 48 finishes across 12 matches to secure first place and a $50,000 grand prize.',
    content: 'Dominating the final day of the Masters Invitational, Team Instinct’s BGMI roster showcased textbook edge-to-edge zone control. AGNI earned Tournament MVP honors with 680 average damage per match, solidifying Instinct’s #1 seed heading into the Grand Finals.',
  },
];