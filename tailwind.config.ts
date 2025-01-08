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
        marine: "var(--color-marine)",
        pink: "var(--color-pink)",
        gray: {
          200: "var(--color-gray-200)",
          400: "var(--color-gray-400)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
        },
      },
      fontFamily: {
        display: "var(--font-big-shoulders-display)",
        sans: "var(--font-barlow)",
      },
      zIndex: {
        hidden: "-1",
        base: "10",
        header: "999",
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
