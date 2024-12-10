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
        "17px": "17px", // Add custom value for spacing
      },
      // keyframes: {
      //   rotatePie: {
      //     "0%": {
      //       transform: "rotate(0deg)", // Starts with no rotation
      //     },
      //     "100%": {
      //       transform: "rotate(360deg)", // Ends with a full rotation (360 degrees)
      //     },
      //   },
      // },
    },
  },
  plugins: [],
};
