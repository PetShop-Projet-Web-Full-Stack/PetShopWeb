/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        xblue: {
          50: '#f0f5f9',
          75: '#f9fbfd',
          85: '#f1f5f9',
          100: '#eaf1f8',
          200: '#d4e3f1',
          300: '#bcd8f1',
          400: '#aac6e3',
          500: '#bbe9e4',
          600: '#7daad5',
          700: '#699ccd',
          780: '#72a4cf',
          999: '#1d71b8',
        },
        xgreen: {
          100: '#eef9f8',
          200: '#def4f1',
          300: '#cdefea',
          400: '#3ec8b8',
          450: '#1a7e7f',
          500: '#aae4dd',
          700: '#84d8ce',
          900: '#58cdc0',
          999: '#51bfaf',
        },
        xred: {
          100: '#fef4f4',
          200: '#ecdee2',
          400: '#ffdbdb',
          500: '#f4a2a2',
          700: '#e15656',
          900: '#c30e0e',
        },
        xgrey: {
          100: '#0B3F56',
          500: '#004862',
          600: '#bbccd3',
          700: '#588494',
          900: '#135d73',
          999: '#0b3f56',
        },
        xorange: {
          500: '#e5a221',
        },
      }
    },
  },
  plugins: [

  ],
};
