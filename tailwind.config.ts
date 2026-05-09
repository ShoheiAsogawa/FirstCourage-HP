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
        "navy-3": "#2d4a6e",
        fog: "#f6f4ef",
        linen: "#fbfaf7",
        gold: "#b79a5b",
        "gold-soft": "#e7dcc0",
        "gold-light": "#f5f0e3",
        sage: "#6f8074",
        "warm-white": "#fefdfb"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 39, 63, 0.11)",
        card: "0 2px 12px rgba(23, 39, 63, 0.06), 0 1px 3px rgba(23, 39, 63, 0.04)",
        "card-hover": "0 8px 30px rgba(23, 39, 63, 0.12), 0 2px 8px rgba(23, 39, 63, 0.06)",
        "gold-glow": "0 4px 20px rgba(183, 154, 91, 0.15)",
        "navy-glow": "0 8px 32px rgba(23, 39, 63, 0.18)",
        elevated: "0 20px 60px rgba(23, 39, 63, 0.14), 0 4px 16px rgba(23, 39, 63, 0.06)"
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
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite"
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
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
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
          "50%": { opacity: "0.8" }
        }
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)"
      }
    }
  },
  plugins: []
};

export default config;
