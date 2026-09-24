/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Open Amity Official Accents
        amityRed: '#a12924',
        amityRedLight: '#c23b36',
        amityRedDark: '#751b17',
        amityYellow: '#f7e3a5',
        amityYellowLight: '#fff2cc',
        amityYellowDark: '#d8c280',

        // PySide6 Dark Theme Greys (from Open Amity theme.py)
        pysideBg: '#1a1a1a',          // Main window BG_DARK
        pysideBgDarkest: '#121212',   // Deep obsidian / console base
        pysideCard: '#242424',        // BG_CARD
        pysideCardHover: '#2b2b2b',   // Card hover state
        pysideInput: '#383838',       // BG_INPUT
        pysideInputFocus: '#404040',  // BG_INPUT_FOCUS
        pysideButton: '#484848',      // BG_BUTTON
        pysideButtonHover: '#585858', // BG_BUTTON_HOVER
        pysideButtonPressed: '#383838', // BG_BUTTON_PRESSED
        pysidePre: '#1e1e24',         // Code block background
        pysideTooltip: '#2b2b2b',     // Tooltip background

        // PySide6 Borders
        pysideBorder: '#3c3c3c',      // BORDER_COLOR
        pysideBorderSubtle: '#2e2e2e',// BORDER_COLOR_DISABLED
        pysideBorderInput: '#585858', // BORDER_INPUT
        pysideBorderButton: '#666666',// BORDER_BUTTON
        pysideBorderPre: '#333338',   // Code block border

        // PySide6 Typography Colors
        pysideText: '#eeeeee',        // TEXT_PRIMARY
        pysideTextSecondary: '#cccccc', // TEXT_SECONDARY
        pysideTextMuted: '#aaaaaa',   // TEXT_MUTED
        pysideTextDisabled: '#777777',// TEXT_DISABLED
      },
      fontFamily: {
        ui: ['Ubuntu', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        reading: ['EB Garamond', 'Liberation Serif', 'Georgia', 'serif'],
        mono: ['Ubuntu Mono', 'monospace'],
      },
      boxShadow: {
        'amity-red': '0 0 25px -4px rgba(161, 41, 36, 0.45)',
        'amity-red-lg': '0 0 50px -8px rgba(161, 41, 36, 0.65)',
        'amity-yellow': '0 0 25px -4px rgba(247, 227, 165, 0.35)',
        'amity-yellow-lg': '0 0 50px -8px rgba(247, 227, 165, 0.5)',
        'inner-pyside': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
        'spin-reverse-slow': 'spin-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
};
