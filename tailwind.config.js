/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0b",
        neon: {
          cyan: "#00f3ff",
          purple: "#9d00ff",
        },
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00f3ff 0%, #9d00ff 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 243, 255, 0.4)',
        'neon-purple': '0 0 15px rgba(157, 0, 255, 0.4)',
      },
      animation: {
        'trail': 'moveTrail 3s linear infinite',
      }
    },
  },
  plugins: [],
}
