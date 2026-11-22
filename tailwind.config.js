/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#070709',
        surface: '#101015',
        surfaceLight: '#17171f',
        instinctGold: '#FFD700',
        instinctAmber: '#F59E0B',
        phoenixFlame: '#FF4500',
        phoenixEmber: '#EA580C',
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        tech: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};