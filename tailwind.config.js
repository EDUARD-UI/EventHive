/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#007BFF',
          dark: '#0060cc',
          light: '#e8f2ff',
        },
        accent: {
          DEFAULT: '#FFC107',
          dark: '#d9a406',
        },
        ink: '#212529',
        muted: '#69707a',
        surface: '#ffffff',
        bg: '#f5f7fa',
        borderc: '#e6e9ef',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(33,37,41,.06), 0 1px 1px rgba(33,37,41,.04)',
        md: '0 10px 24px -8px rgba(33,37,41,.16)',
        lg: '0 24px 48px -12px rgba(33,37,41,.24)',
      },
      borderRadius: {
        card: '14px',
        sm: '8px',
      },
    },
  },
  plugins: [],
};
