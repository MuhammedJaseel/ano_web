module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Authority
        primary: {
          DEFAULT: "#2D1B69", // deep-purple-900
          50: "#F5F3FF", // purple-50
          100: "#EDE9FE", // purple-100
          200: "#DDD6FE", // purple-200
          300: "#C4B5FD", // purple-300
          400: "#A78BFA", // purple-400
          500: "#8B5CF6", // purple-500
          600: "#7C3AED", // purple-600
          700: "#6D28D9", // purple-700
          800: "#5B21B6", // purple-800
          900: "#2D1B69", // custom-deep-purple
        },
        // Secondary Colors - Technical Credibility
        secondary: {
          DEFAULT: "#4C3A9B", // purple-700
          50: "#FAF5FF", // purple-50
          100: "#F3E8FF", // purple-100
          200: "#E9D5FF", // purple-200
          300: "#D8B4FE", // purple-300
          400: "#C084FC", // purple-400
          500: "#A855F7", // purple-500
          600: "#9333EA", // purple-600
          700: "#4C3A9B", // custom-purple
          800: "#6B21A8", // purple-800
          900: "#581C87", // purple-900
        },
        // Accent Colors - Innovation Highlights
        accent: {
          DEFAULT: "#00D4AA", // teal-400
          50: "#F0FDFA", // teal-50
          100: "#CCFBF1", // teal-100
          200: "#99F6E4", // teal-200
          300: "#5EEAD4", // teal-300
          400: "#00D4AA", // custom-teal
          500: "#14B8A6", // teal-500
          600: "#0D9488", // teal-600
          700: "#0F766E", // teal-700
          800: "#115E59", // teal-800
          900: "#134E4A", // teal-900
        },
        // Background Colors
        background: "#FAFBFC", // gray-50
        surface: "#F4F6F8", // gray-100
        // Text Colors
        text: {
          primary: "#1A202C", // gray-900
          secondary: "#4A5568", // gray-600
          tertiary: "#718096", // gray-500
          disabled: "#A0AEC0", // gray-400
        },
        // Semantic Colors
        success: {
          DEFAULT: "#10B981", // green-500
          light: "#D1FAE5", // green-100
          dark: "#047857", // green-700
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          light: "#FEF3C7", // amber-100
          dark: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          light: "#FEE2E2", // red-100
          dark: "#DC2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-200
          light: "#F7FAFC", // gray-100
          dark: "#CBD5E0", // gray-300
        },
      },
      fontFamily: {
        headline: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
        cta: ['Poppins', 'sans-serif'],
        accent: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'none': 'none',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in',
        'slide-up': 'slideUp 300ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}