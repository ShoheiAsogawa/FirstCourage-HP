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
        crimson: "#BF1B1C",
        "crimson-dark": "#991315",
        red: "#D94C4C",
        ink: "#111111",
        charcoal: "#1F1F1F",
        fog: "#FFF9F8",
        linen: "#FFFFFF",
        white: "#FFFFFF",
        "offwhite": "#FFF4F3",
        "red-soft": "#F8E7E7",
        gold: "#C9A34A",
        "gold-soft": "#F0DFAE",
        blush: "#FDF1F1",
        navy: "#17273f"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 39, 63, 0.11)",
        luxury: "0 25px 60px -15px rgb(0 0 0 / 0.1), 0 10px 20px -5px rgb(0 0 0 / 0.05)",
        "luxury-hover": "0 30px 70px -20px rgb(0 0 0 / 0.15), 0 12px 28px -8px rgb(0 0 0 / 0.08)",
        "crimson-glow": "0 8px 30px rgb(185 28 28 / 0.2), 0 4px 12px rgb(185 28 28 / 0.1)",
        "card": "0 2px 12px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)",
        "elevated": "0 20px 60px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04)"
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
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in-down": "fadeInDown 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "draw-line": "drawLine 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        shimmer: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" }
        },
        drawLine: {
          "0%": { width: "0" },
          "100%": { width: "100%" }
        }
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "luxury": "cubic-bezier(0.23, 1, 0.32, 1)"
      }
    }
  },
  plugins: []
};

export default config;
