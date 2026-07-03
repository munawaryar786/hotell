import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B4EA2",
        secondary: "#083B7A",
        accent: "#0B4EA2",
        gold: "#EAF3FF",
        light: "#EAF3FF",
        muted: "#4B5563"
      },
      boxShadow: {
        soft: "0 16px 48px rgba(11, 78, 162, 0.08)",
        lift: "0 24px 70px rgba(8, 59, 122, 0.16)",
        red: "0 18px 45px rgba(11, 78, 162, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
