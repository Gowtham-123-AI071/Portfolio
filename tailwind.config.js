/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        lightPurple: "#EDE9FE",
        neon: "#A855F7"
      },
      boxShadow: {
        neon: "0 0 30px rgba(168,85,247,0.6)"
      }
    }
  },
  plugins: []
};
