/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      scale: {
        200: "2",
        250: "2.5",
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents }) {
      const miscUtils = {
        ".position-unset": {
          position: "unset",
        },
      };
      addComponents(miscUtils);
    }),

    plugin(function ({ addVariant }) {
      addVariant("children-iterative", "& *");
      addVariant("children", "& > *");
      addVariant("supports-grid", "@supports (display: grid)");
    }),
  ],
};
