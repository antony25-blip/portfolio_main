/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: false,
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
          },                 
        colors: {
          primary: '#38bdf8',
          secondary: '#0ea5e9',
          accent: '#22d3ee',
          darkBg: '#020617',
          darkCard: '#020617',
        },
        boxShadow: {
          'glow': '0 0 40px rgba(56, 189, 248, 0.35)',
        },
        backgroundImage: {
          'hero-gradient':
            'radial-gradient(circle at top, rgba(56,189,248,0.25), transparent 60%), radial-gradient(circle at bottom, rgba(59,130,246,0.25), transparent 60%)',
        },
        animation: {
          'blob': 'blob 8s ease-in-out infinite',
          'float-slow': 'float 12s ease-in-out infinite',
          'float-medium': 'float 8s ease-in-out infinite',
          'float-fast': 'float 4s ease-in-out infinite',
          'bounce-slow': 'bounce 2.2s infinite',
        },
        keyframes: {
          blob: {
            '0%, 100%': { borderRadius: '40% 60% 60% 40% / 45% 40% 60% 55%' },
            '50%': { borderRadius: '60% 40% 40% 60% / 55% 60% 40% 45%' },
          },
          float: {
            '0%, 100%': { transform: 'translate3d(0, 0px, 0)' },
            '50%': { transform: 'translate3d(0, -18px, 0)' },
          },
        },
      },
    },
    plugins: [],
  };
  