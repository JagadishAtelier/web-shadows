/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        "primary-foreground": "#ffffff",
        background: "#F3F4F6",
        foreground: "#111827",
        muted: "#6B7280",
      },
    },
  },
  plugins: [],
}
