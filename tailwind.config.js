/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D0C0B',
        surface: '#161411',
        surface2: '#1E1B17',
        coral: '#E8613A',
        amber: '#C4803A',
        text: '#F0EDE8',
        muted: '#9A9186',
      },
    },
  },
  plugins: [],
}