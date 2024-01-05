/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        system: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      fontWeight: {
        normal: 400,
        medium: 400,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        "hero-title": [
          "var(--fontWeightMedium)",
          "34px",
          "44px",
          "var(--fontFamily)",
        ],
        "section-title": [
          "var(--fontWeightMedium)",
          "24px",
          "34px",
          "var(--fontFamily)",
        ],
        "subsection-title": [
          "var(--fontWeightSemibold)",
          "20px",
          "28px",
          "var(--fontFamily)",
        ],
        "detail-title": [
          "var(--fontWeightSemibold)",
          "16px",
          "24px",
          "var(--fontFamily)",
        ],
        "hero-body": [
          "var(--fontWeightNormal)",
          "16px",
          "26px",
          "var(--fontFamily)",
        ],
        "section-body": [
          "var(--fontWeightNormal)",
          "16px",
          "26px",
          "var(--fontFamily)",
        ],
        "subsection-body": [
          "var(--fontWeightNormal)",
          "16px",
          "26px",
          "var(--fontFamily)",
        ],
        "detail-body": [
          "var(--fontWeightNormal)",
          "14px",
          "24px",
          "var(--fontFamily)",
        ],
        cta: ["var(--fontWeightSemibold)", "15px", "15px", "var(--fontFamily)"],
        link: [
          "var(--fontWeightSemibold)",
          "14px",
          "14px",
          "var(--fontFamily)",
        ],
      },
      colors: {
        white: "#fefefe",
        greyLight: "#abb5ba",
        greyDark: "#1d3944",
        greyDarker: "#14262e",
        teal: "#33ddb3",
        tealLight: "#e3fff2",
        tealDark: "#2dc49f",
        tealDarker: "#18c59a",
        tealDarkest: "#05a87f",
        blurple: "#635bff",
        sage: {
          50: "#EDF2F1",
          100: "#D2DBD7",
          200: "#C8D2CD",
          300: "#AFBEB6",
          400: "#91A59B",
          500: "#769184",
          600: "#3C6955",
          700: "#1E4B37",
          800: "#00230F",
          900: "#000F00",
        },
      },
      spacing: {
        columnGap: "24px",
        gutter: "16px",
        maxColumnWidth: "68px",
        maxColumnCount: "12",
        columnCount: "4",
        maxWidth:
          "calc(var(--layoutMaxColumnWidth) * var(--layoutMaxColumnCount) + var(--layoutColumnGap) * (var(--layoutMaxColumnCount) - 1) + var(--layoutGutter) * 2)",
        copyColumnCountMax: "10",
        copyMaxWidth:
          "calc(var(--layoutMaxColumnWidth) * var(--copyColumnCountMax) + var(--layoutColumnGap) * (var(--copyColumnCountMax) - 1))",
      },
      transitionDuration: {
        hover: "75ms",
      },
      opacity: {
        linkHover: "0.6",
        buttonHover: "0.8",
      },
    },
  },
  plugins: [],
};
