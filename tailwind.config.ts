import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        black: "var(--color-black)",
      },
      fontFamily: {
        display: "var(--font-big-shoulders-display)",
        sans: "var(--font-barlow)",
      },
      zIndex: {
        hidden: "-1",
        base: "10",
      },
      screens: {
        sm: "480px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
export default config;
