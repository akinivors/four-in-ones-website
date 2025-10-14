import type { Config } from "tailwindcss";
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#FBF5EB',
        'brand-dark': '#1A4D64',
        'brand-teal': '#407e8eff',
        'brand-orange': '#E88C32',
        'brand-text': '#2C2C2C',
      },
      fontFamily: {
        'lora': ['var(--font-lora)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [
    forms,
  ],
} satisfies Config;
