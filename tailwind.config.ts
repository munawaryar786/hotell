import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        secondary: "#102A4C",
        accent: "#D4AF37",
        gold: "#D4AF37",
        ivory: "#F8F3E7",
        light: "#F8F3E7",
        muted: "#64748B",
        charcoal: "#111827"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 31, 58, 0.08)",
        lift: "0 28px 80px rgba(11, 31, 58, 0.16)",
        red: "0 18px 45px rgba(212, 175, 55, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
