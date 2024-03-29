/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // primarry colors
        primary: {
          main: "#3818D9",
          second: "#F7F5FF",
          border: "#A899F1",
        },
        // Danger colors
        danger: {
          main: "#BA1717",
          second: "#F9F2F2",
          border: "#E2A1A1",
        },
        // Warning colors
        warning: {
          main: "#E9C400",
          second: "#FCFAF1",
          border: "#F3DE71",
        },
        // Success colors
        success: {
          main: "#03781D",
          second: "#F0F9F2",
          border: "#6DC580",
        },
        // Info colors
        info: {
          main: "#006FD5",
          second: "#F0F8FF",
          border: "#79B0E2",
        },
        // Gray colors
        gray: {
          0: "#FFFFFF",
          100: "#ECECEC",
          200: "#D8D8D8",
          300: "#C5C5C5",
          400: "#B1B1B1",
          500: "#9E9E9E",
          600: "#7E7E7E",
          700: "#5F5F5F",
          800: "#3F3F3F",
          900: "#202020",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
