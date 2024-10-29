import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F2F2F2",
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        // Atau jika tidak menggunakan variable:
        // sans: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        slideUp: 'slideUp 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
};

export default config;