/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      // ===================== COLORS =====================
      colors: {
        // Primary Palette
        primary: {
          DEFAULT: '#E91EDB',
          50: '#fff3fe',
          100: '#ffe6ff',
          200: '#ffccfd',
          300: '#ffa4f9',
          400: '#ff6df3',
          500: '#fe37f4',
          600: '#e91edb',
          700: '#bc0fac',
          800: '#9a0e8c',
          900: '#7d1270',
          950: '#55004b',
        },
        secondary: {
          DEFAULT: '#FF7C44',
          50: '#fff4ed',
          100: '#ffe7d4',
          150: '#F55F1A',
          200: '#ffcaa8',
          300: '#ffa571',
          400: '#ff7c44',
          500: '#fe4e11',
          600: '#ef3407',
          700: '#c62208',
          800: '#9d1e0f',
          900: '#7e1b10',
          950: '#440a06',
        },
        accent: {
          DEFAULT: '#C6E1FF',
          50: '#eff6ff',
          100: '#daebff',
          200: '#C6E1FF',
          300: '#91c8ff',
          400: '#5eaafc',
          500: '#3887f9',
          600: '#2268ee',
          700: '#1a53db',
          800: '#1c43b1',
          900: '#1c3c8c',
          950: '#162659',
        },
        neutral: {
          white: '#ffffff',
          black: '#1B181B',
          50: '#F2F1F2',
          100: '#f0eef0',
          200: '#ded9de',
          300: '#c0b8c1',
          400: '#9d919f',
          500: '#827384',
          600: '#6b5d6c',
          700: '#574c58',
          800: '#4b414b',
          900: '#413941',
        },
        // Semantic / system colors
        success: '#1DCE22',
        info: '#3C88F5',
        danger: '#EE0707',
        warning: '#F58B21',
        loud: '#F8F420',
        background: '#ffffff',
        foreground: '#1B181B',
        muted: '#f8f7f8',
        'muted-foreground': '#827384',
        border: '#ded9de',
        input: '#f0eef0',
        ring: '#C6E1FF',
        // Figma aliases
        'magenta-600': '#EE1477',
        'amethyst-600': '#E91EDB',
        'primary-orange': '#FF7C44',
        'primary-amethyst': '#E91EDB',
        'primary-blue': '#C6E1FF',
        'neutral-black': '#1B181B',
        'main-dark-bg': '#292524',
      },

      // ===================== TYPOGRAPHY =====================
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        sans: ['Rethink Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Rethink Sans', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Rethink Sans', 'Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Headings Scale
        'heading-xs': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '700' }], // 18/24
        'heading-sm': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '700' }], // 20/28
        'heading-base': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }], // 24/32
        'heading-lg': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }], // 28/36
        'heading-xl': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 32/40
        'heading-2xl': ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }], // 40/48

        // Body text scale
        'body-xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }], // 12/16
        'body-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14/20
        'body-base': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16/24
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 18/28
        // Body Semibold
        'body-semibold-xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '600' }],
        'body-semibold-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }],
        'body-semibold-base': ['1rem', { lineHeight: '1.25rem', fontWeight: '600' }],
        'body-semibold-lg': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
      },

      // ===================== SPACING =====================
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      // ===================== BORDER RADIUS =====================
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },

      // ===================== SHADOWS =====================
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(233, 30, 219, 0.15)',
        'secondary': '0 4px 14px 0 rgba(255, 124, 68, 0.15)',
        'accent': '0 4px 14px 0 rgba(198, 225, 255, 0.25)',
        'soft': '0 2px 8px 0 rgba(27, 24, 27, 0.08)',
        'medium': '0 4px 16px 0 rgba(27, 24, 27, 0.12)',
        'strong': '0 8px 32px 0 rgba(27, 24, 27, 0.16)',
      },

      // ===================== ANIMATIONS =====================
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        scaleIn: { '0%': { transform: 'scale(0.95)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        pulseSoft: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.8' } },
      },

      // ===================== BACKGROUND GRADIENTS =====================
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E91EDB, #FF7C44)',
        'gradient-accent': 'linear-gradient(135deg, #C6E1FF, #ffa4f9)',
        'gradient-dark': 'linear-gradient(135deg, #4b414b, #1B181B)',
        'gradient-soft': 'linear-gradient(135deg, #f8f7f8, #ffffff)',
      },
    },
  },

  // ===================== PLUGINS =====================
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'h1,h2,h3,h4,h5,h6,p': { margin: 0 },
        body: { fontFamily: theme('fontFamily.dm-sans') },
      })
    },
  ],
}