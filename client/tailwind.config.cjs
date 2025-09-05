/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/ui/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: '#E6DDD1',
        input: '#F5EBE0',
        ring: 'rgba(139, 90, 43, 0.3)',
        background: '#FFFAF5',
        foreground: '#2C2418',
        primary: {
          DEFAULT: '#8B5A2B',
          light: '#A67C52',
          dark: '#6B4A2B',
          foreground: '#FFFAF5',
        },
        secondary: {
          DEFAULT: '#D2B48C',
          light: '#E6D2B8',
          dark: '#BFA27C',
          foreground: '#2C2418',
        },
        accent: {
          DEFAULT: '#F9A826',
          light: '#FFBE5C',
          dark: '#E08E00',
          foreground: '#FFFAF5',
        },
        destructive: {
          DEFAULT: '#F44336',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F5EBE0',
          foreground: '#9E9287',
        },
        success: {
          DEFAULT: '#4CAF50',
          foreground: '#FFFFFF',
        },
        warning: {
          DEFAULT: '#FF9800',
          foreground: '#FFFFFF',
        },
        info: {
          DEFAULT: '#2196F3',
          foreground: '#FFFFFF',
        },
        card: {
          DEFAULT: '#FFFAF5',
          foreground: '#2C2418',
        },
        popover: {
          DEFAULT: '#FFFAF5',
          foreground: '#2C2418',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        lg: '1rem',
        md: '0.5rem',
        sm: '0.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(44, 36, 24, 0.05)',
        DEFAULT: '0 4px 6px rgba(44, 36, 24, 0.1)',
        md: '0 4px 6px rgba(44, 36, 24, 0.1)',
        lg: '0 10px 15px rgba(44, 36, 24, 0.1)',
        xl: '0 20px 25px rgba(44, 36, 24, 0.15)',
        inner: 'inset 0 2px 4px rgba(44, 36, 24, 0.05)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
