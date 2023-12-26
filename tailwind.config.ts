import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          '100': 'rgba(181, 204, 34)',
          '800': 'rgba(103, 117, 16)',
        },
        config: {
          text: 'rgba(50, 50, 50)',
        },
      },
      maxWidth: {
        desktop: '1192px',
      },
      spacing: {
        desktop: '124px',
      },
    },
  },
  plugins: [],
};
export default config;
