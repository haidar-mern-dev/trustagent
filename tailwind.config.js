/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        theme_color: "var(--theme-color)",
        light_theme: "var(--light-theme)",
      },
    },
  },
  plugins: [],
};
