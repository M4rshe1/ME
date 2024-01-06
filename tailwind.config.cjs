/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", './src/**/*.{tsx, ts, js}', "**/*.md"],
    darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

