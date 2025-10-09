// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        got: ["GameOfThrones", "serif"], // 👈 custom font name
      },
    },
  },
  plugins: [],
};
