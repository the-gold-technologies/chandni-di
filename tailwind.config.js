/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#c62828", // Core Brand Red matching the logo
          800: "#991b1b",
          900: "#7f1d1d",
          dark: "#18181b", // Core Brand Charcoal matching the logo
          cream: "#fbfbf9",
        },
        charcoal: {
          800: "#27272a",
          900: "#18181b",
          950: "#0f0f11",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        emerald: {
          50: "#ecfdf5",
          600: "#059669",
          700: "#047857",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 12px 32px rgba(24, 24, 27, 0.07)",
        elevated: "0 20px 40px -10px rgba(198, 40, 40, 0.15)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
