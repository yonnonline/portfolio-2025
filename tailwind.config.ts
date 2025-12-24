import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xl: "1200px",
        lg: "1024px",
        md: "768px",
        sm: "576px"
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        border: "hsl(var(--border))"
      },
      fontFamily: {
        display: ["'Inter'", "'Pretendard Variable'", "system-ui", "sans-serif"],
        body: ["'Pretendard Variable'", "'Inter'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
