import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        section: 'clamp(3.75rem, 7.82vw, 6.25rem) 1rem',
      },
      boxShadow: {
        white: '0 10px 15px -3px rgba(255, 255, 255, 0.02), 0 4px 6px -2px rgba(255, 255, 255, 0.01)',
      },
      colors: {
        secondary: 'rgb(14, 119, 239)',
        accent: '#111827',
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        spin_2s_linear_infinite: "spin_2s_linear_infinite 2s linear infinite",
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        spin_2s_linear_infinite: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}


export default config;
