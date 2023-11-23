/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        xgrey: {
          100: "#0B3F56",
          500: "#004862",
          600: "#bbccd3",
          700: "#588494",
          900: "#135d73",
          999: "#0b3f56",
        },
      },
    },
  },
  plugins: [],
};
