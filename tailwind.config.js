/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1200: "1200px",
        500: "500px",
        300: "300px",
      },
      height: {
        280: "280px",
        500: "500px",
      },
    },
  },
  plugins: [],
};
