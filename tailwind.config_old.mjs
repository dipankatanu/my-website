/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",

  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.html"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },

      /* Portfolio-like heading rhythm */
      letterSpacing: {
        tighter2: "-0.03em",
      },

      fontSize: {
        /* Optional: “display” sizes you can use for hero/section headings */
        "display-1": [
          "3.25rem",
          { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" },
        ], // ~52px
        "display-2": [
          "2.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "800" },
        ], // ~40px
        "display-3": [
          "2rem",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "800" },
        ], // ~32px
      },
    },
  },

  plugins: [typography],
};
