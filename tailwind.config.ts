import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "1024px",
      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        marquee2: "marquee2 15s linear infinite",
        // uncomment the following 2 lines if you want a carousel
        // that goes Left 2 Right instead of RTL
        //
        // marqueeReverse: "marquee 15s linear infinite reverse",
        // marquee2Reverse: "marquee2 15s linear infinite reverse",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marquee2: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      fontFamily: {
        saint: ["var(--font-saint)"],
        destra: ["var(--font-destra)"],
        monor: ["var(--font-monor)"],
        bebas: ["var(--font-bebas)"],
        honey: ["var(--font-honey)"],
      },
    },
    plugins: [],
  },
};
export default config;
