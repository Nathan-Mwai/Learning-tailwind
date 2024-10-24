import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // This is to help in screens like phone, laptop and desktops and even tvs!!
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Coloring my way
        vuejs: {
          245: "#58bfa0",
          675:"#9265db",
        },
      },
    },
  },
  plugins: [],
};
export default config;
