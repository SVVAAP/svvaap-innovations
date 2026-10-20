/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: { DEFAULT: '#0b0c0e', 2: '#1a1c20' },
        paper: '#fafaf8',
        line: '#e6e5e1',
        muted: '#5d6066',
        signal: '#2f5bff',
      },
      maxWidth: {
        site: '80rem',
      },
    },
  },
  plugins: [],
}
