/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6c5fcc",

          secondary: "#13f25d",

          accent: "#a0fffd",

          neutral: "#211E2A",

          "base-100": "#DBDBF0",

          info: "#A9CFEA",

          success: "#50DCB7",

          warning: "#F9B35D",

          error: "#DE353B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
