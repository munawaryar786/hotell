import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#050505",
        primary: "#071D36",
        secondary: "#102A4C",
        accent: "#D4AF37",
        gold: "#D4AF37",
        beige: "#F3EFE7",
        ivory: "#FAF7F0",
        light: "#FAF7F0",
        muted: "#6B6258",
        charcoal: "#111827"
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 29, 54, 0.08)",
        lift: "0 28px 80px rgba(5, 5, 5, 0.18)",
        red: "0 18px 45px rgba(212, 175, 55, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
