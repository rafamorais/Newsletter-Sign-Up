/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "theme-tomato": "hsl(4, 100%, 67%)",
        "theme-dark-slate-gray": "hsl(234, 29%, 20%)",
        "theme-charcoal-gray": "hsl(235, 18%, 26%)",
        "theme-gray": "hsl(231, 7%, 60%)",
        "theme-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
