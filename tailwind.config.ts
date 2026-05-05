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
        ink: "#1e252c",
        navy: "#17273f",
        "navy-2": "#22395b",
        fog: "#f6f4ef",
        linen: "#fbfaf7",
        gold: "#b79a5b",
        "gold-soft": "#e7dcc0",
        sage: "#6f8074"
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
