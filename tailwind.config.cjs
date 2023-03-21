/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'shadow-custom': "4x 4x 4x rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
