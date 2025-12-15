import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // blue
        secondary: "#64748b", // gray
        background: "#f8fafc",
      },
    },
  },
  plugins: [],
};

export default config;
