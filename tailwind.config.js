/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#ff9500",
      },
      animation: {
        wave: "waving 2.5s 1.8s",
        textReveal: "reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 1s",
        reveal: "reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1)",
        opacity: "opacity 2s cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        waving: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        textReveal: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "40%": { opacity: 0 },
          "100%": { transform: "translateY(0)" },
        },
        reveal: {
          "0%": { transform: "translateY(30%) scale(0.9)" },
          "100%": { transform: "translateY(0%) scale(1)" },
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
