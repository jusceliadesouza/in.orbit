/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/app.tsx", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": "Inter, sans-serif"
      }
    },
  },
  plugins: [],
};
