module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        "4rem": "4rem",
      },
    },
  },
  plugins: [],
};
