import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0C447C",
          "navy-deep": "#042C53",
          blue: "#378ADD",
          "blue-mid": "#185FA5",
          "blue-light": "#B5D4F4",
          "blue-pale": "#E6F1FB",
          "blue-wash": "#F0F7FE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
