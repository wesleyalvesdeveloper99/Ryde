/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Jakarta", "sans-serif"],
        JakartaBold: ["Jakarta-Bold", "sans-serif"],
        JakartaLight: ["Jakarta-Light", "sans-serif"],
        JakartaMedium: ["Jakarta-Medium", "sans-serif"],
        JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
        JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
        JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
      },
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        primary: {
          light: {
            DEFAULT: "#0286FF",
            100: "#F5F8FF",
            200: "#EBF4FF",
            300: "#C3D9FF",
            400: "#9BBFFF",
            500: "#0286FF",
            600: "#6A85E6",
            700: "#475A99",
            800: "#364573",
            900: "#242B4D",
          },
          dark: {
            DEFAULT: "#0286FF",
            100: "#1C2436",
            200: "#1A2232",
            300: "#18202E",
            400: "#161E2A",
            500: "#141B26",
            600: "#121922",
            700: "#10171E",
            800: "#0E151A",
            900: "#0C1216",
          },
        },
        secondary: {
          light: {
            DEFAULT: "#AAAAAA",
            100: "#F8F8F8",
            200: "#F1F1F1",
            300: "#D9D9D9",
            400: "#C2C2C2",
            500: "#AAAAAA",
            600: "#999999",
            700: "#666666",
            800: "#4D4D4D",
            900: "#333333",
          },
          dark: {
            DEFAULT: "#AAAAAA",
            100: "#1D1D1D",
            200: "#2A2A2A",
            300: "#3A3A3A",
            400: "#4A4A4A",
            500: "#5A5A5A",
            600: "#6A6A6A",
            700: "#7A7A7A",
            800: "#8A8A8A",
            900: "#9A9A9A",
          },
        },
        success: {
          light: {
            DEFAULT: "#38A169",
            100: "#F0FFF4",
            200: "#C6F6D5",
            300: "#9AE6B4",
            400: "#68D391",
            500: "#38A169",
            600: "#2F855A",
            700: "#276749",
            800: "#22543D",
            900: "#1C4532",
          },
          dark: {
            DEFAULT: "#38A169",
            100: "#153B2C",
            200: "#1B523E",
            300: "#216A50",
            400: "#278262",
            500: "#2D9974",
            600: "#33B186",
            700: "#39C998",
            800: "#3FE0AA",
            900: "#45F8BC",
          },
        },
        danger: {
          light: {
            DEFAULT: "#F56565",
            100: "#FFF5F5",
            200: "#FED7D7",
            300: "#FEB2B2",
            400: "#FC8181",
            500: "#F56565",
            600: "#E53E3E",
            700: "#C53030",
            800: "#9B2C2C",
            900: "#742A2A",
          },
          dark: {
            DEFAULT: "#F56565",
            100: "#4B1F1F",
            200: "#5F2A2A",
            300: "#732E2E",
            400: "#873232",
            500: "#9B3636",
            600: "#AF3A3A",
            700: "#C33E3E",
            800: "#D74242",
            900: "#EB4646",
          },
        },
        warning: {
          light: {
            DEFAULT: "#EAB308",
            100: "#FFFBEB",
            200: "#FEF3C7",
            300: "#FDE68A",
            400: "#FACC15",
            500: "#EAB308",
            600: "#CA8A04",
            700: "#A16207",
            800: "#854D0E",
            900: "#713F12",
          },
          dark: {
            DEFAULT: "#EAB308",
            100: "#4D3B10",
            200: "#5F4A14",
            300: "#715A18",
            400: "#83691C",
            500: "#957920",
            600: "#A78824",
            700: "#B99728",
            800: "#CBA62C",
            900: "#DDB530",
          },
        },
        general: {
          light: {
            DEFAULT: "#CED1DD",
            100: "#CED1DD",
            200: "#858585",
            300: "#EEEEEE",
            400: "#EEEEEE",
            500: "#F6F8FA",
            600: "#E6F3FF",
            700: "#EBEBEB",
            800: "#ADADAD",
          },
          dark: {
            DEFAULT: "#CED1DD",
            100: "#CED1DD",
            200: "#A3A3A3",
            300: "#1E1E1E",
            400: "#2A2A2A",
            500: "#121212",
            600: "#1C1C1C",
            700: "#2F2F2F",
            800: "#7A7A7A"

          },
        },
      },
    },
  },
  plugins: [],
}
