import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0B0B",
        secondary: "#171717",
        accent: "#E11D2E",
        gold: "#F4B400",
        light: "#F8FAFC",
        muted: "#4B5563"
      },
      boxShadow: {
        soft: "0 16px 48px rgba(11, 11, 11, 0.08)",
        lift: "0 24px 70px rgba(11, 11, 11, 0.16)",
        red: "0 18px 45px rgba(225, 29, 46, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
