/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        sm: "2rem",
        md: "10rem",
      },
    },
  },
  plugins: [],
};
