/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dentistsTheme: {

          "primary": "#19D3AE",
          "secondary": "#0FCFEC",
          "accent": "#19D3AE",
          "neutral": "#3A4256",
          "base-100": "#FFFFFF",
          "info": "#7490E2",
          "success": "#1FB770",
          "warning": "#F4AD15",
          "error": "#DE354C",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
