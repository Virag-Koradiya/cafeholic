/**
 * Cafeholic Design System
 * A minimal, Gen Z cafe theme design system
 */

const designSystem = {
  // Color palette
  colors: {
    primary: {
      DEFAULT: '#8B5A2B', // Warm coffee brown
      light: '#A67C52', // Lighter coffee brown
      dark: '#6B4A2B', // Darker coffee brown
      foreground: '#FFFAF5', // Light cream for text on primary
    },
    secondary: {
      DEFAULT: '#D2B48C', // Light coffee/latte color
      light: '#E6D2B8', // Lighter latte
      dark: '#BFA27C', // Darker latte
      foreground: '#2C2418', // Dark coffee for text on secondary
    },
    accent: {
      DEFAULT: '#F9A826', // Vibrant orange for highlights
      light: '#FFBE5C', // Lighter orange
      dark: '#E08E00', // Darker orange
      foreground: '#FFFAF5', // Light cream for text on accent
    },
    background: {
      DEFAULT: '#FFFAF5', // Warm cream background
      alt: '#F5EBE0', // Slightly darker cream for alternating sections
      dark: '#2C2418', // Dark coffee color for dark sections
    },
    text: {
      primary: '#2C2418', // Dark coffee for primary text
      secondary: '#6B5D4E', // Medium brown for secondary text
      light: '#FFFAF5', // Light cream for text on dark backgrounds
      muted: '#9E9287', // Muted brown for less important text
    },
    success: {
      DEFAULT: '#4CAF50', // Green for success states
      foreground: '#FFFFFF',
    },
    error: {
      DEFAULT: '#F44336', // Red for error states
      foreground: '#FFFFFF',
    },
    warning: {
      DEFAULT: '#FF9800', // Orange for warning states
      foreground: '#FFFFFF',
    },
    info: {
      DEFAULT: '#2196F3', // Blue for info states
      foreground: '#FFFFFF',
    },
    border: '#E6DDD1', // Light border color
    input: '#F5EBE0', // Input background
    ring: 'rgba(139, 90, 43, 0.3)', // Focus ring color
  },

  // Typography
  typography: {
    fontFamily: {
      primary: "'Poppins', sans-serif", // Modern, clean font for headings and UI
      secondary: "'DM Sans', sans-serif", // Readable font for body text
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },

  // Spacing
  spacing: {
    '0': '0',
    '1': '0.25rem', // 4px
    '2': '0.5rem', // 8px
    '3': '0.75rem', // 12px
    '4': '1rem', // 16px
    '5': '1.25rem', // 20px
    '6': '1.5rem', // 24px
    '8': '2rem', // 32px
    '10': '2.5rem', // 40px
    '12': '3rem', // 48px
    '16': '4rem', // 64px
    '20': '5rem', // 80px
    '24': '6rem', // 96px
    '32': '8rem', // 128px
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
    full: '9999px', // Fully rounded
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(44, 36, 24, 0.05)',
    md: '0 4px 6px rgba(44, 36, 24, 0.1)',
    lg: '0 10px 15px rgba(44, 36, 24, 0.1)',
    xl: '0 20px 25px rgba(44, 36, 24, 0.15)',
    inner: 'inset 0 2px 4px rgba(44, 36, 24, 0.05)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },

  // Z-index
  zIndex: {
    '0': '0',
    '10': '10',
    '20': '20',
    '30': '30',
    '40': '40',
    '50': '50',
    '100': '100',
    'auto': 'auto',
  },
};

export default designSystem;
