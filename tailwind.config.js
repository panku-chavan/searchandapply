const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],

  theme: {
    extend: {
      borderWidth: {
        '10': '10px',  // 12px border
        '12': '12px',  // 12px border
        '16': '16px',  // 16px border
        '20': '20px',  // 20px border
        // Add more as needed
      },
    },
  },
  plugins: [flowbite.plugin()],
};