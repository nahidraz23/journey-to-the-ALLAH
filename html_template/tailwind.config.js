/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./html_template/index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  }