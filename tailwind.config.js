/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        retro: {
          void: '#05060a',
          dark: '#0a0c16',
          card: '#0f1222',
          border: '#1c223a',
          cyan: '#00f0ff',
          pink: '#ff2a85',
          amber: '#ffb800',
          purple: '#9d00ff',
          green: '#00ff66',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Chakra Petch', 'sans-serif'],
        tech: ['Chakra Petch', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.45)',
        'neon-pink': '0 0 15px rgba(255, 42, 133, 0.45)',
        'neon-amber': '0 0 15px rgba(255, 184, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
