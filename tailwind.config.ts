import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          900: "#0A0A0A",
          800: "#1A1A1A",
          700: "#2A2A2A",
        },
        bone: {
          DEFAULT: "#FFFFFF",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
        },
        mist: {
          400: "#8A8A8A",
          500: "#6B6B6B",
        },
        lime: {
          DEFAULT: "#bbff00",
        },
      },
      fontFamily: {
        serif: ["var(--font-body)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -10px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.97)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "drift": "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
