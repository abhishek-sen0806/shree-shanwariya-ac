/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#1D3B6F',
          700: '#132B54',
          800: '#0C1E3C', // Deep Navy Primary
          900: '#061325', // Deep Navy Base
          950: '#030A14',
        },
        electric: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#00A6FF', // Electric Blue
          600: '#0284C7',
          700: '#0369A1',
        },
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#FF6B35', // Warm Orange
          600: '#EA580C',
          700: '#C2410C',
        },
        coolgray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(6, 19, 37, 0.05)',
        'premium': '0 20px 40px -10px rgba(6, 19, 37, 0.12), 0 8px 16px -4px rgba(6, 19, 37, 0.06)',
        'glow-electric': '0 0 35px rgba(0, 166, 255, 0.35)',
        'glow-accent': '0 0 35px rgba(255, 107, 53, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        windBreeze: {
          '0%': { transform: 'translateX(-20px) translateY(0)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateX(60px) translateY(-10px)', opacity: '0' },
        },
        coolMist: {
          '0%': { transform: 'scale(0.95)', opacity: '0.3' },
          '50%': { transform: 'scale(1.05)', opacity: '0.7' },
          '100%': { transform: 'scale(0.95)', opacity: '0.3' },
        }
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'wind': 'windBreeze 6s ease-in-out infinite',
        'mist': 'coolMist 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
