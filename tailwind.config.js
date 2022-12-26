/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
