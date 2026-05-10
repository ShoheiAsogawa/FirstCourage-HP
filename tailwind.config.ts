import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#6D2E3A",
        "crimson-dark": "#542229",
        red: "#7A3E47",
        ink: "#111111",
        charcoal: "#1F1F1F",
        fog: "#FFFBF8",
        linen: "#FFFFFF",
        white: "#FFFFFF",
        "offwhite": "#F8F5F2",
        "red-soft": "#F3E8EA",
        gold: "#6D2E3A",
        "gold-soft": "#E5D0D4",
        blush: "#FAF4F5",
        navy: "#17273f"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 39, 63, 0.11)"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Yu Gothic",
          "YuGothic",
          "Hiragino Sans",
          "Meiryo",
          "sans-serif"
        ],
        serif: ["var(--font-serif)", "Yu Mincho", "Hiragino Mincho ProN", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
