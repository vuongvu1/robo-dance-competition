import { createGlobalStyle, DefaultTheme } from "styled-components";

export type ThemeType = { [key: string]: { [key: string]: string | number } };

export const theme: DefaultTheme = {
  palette: {
    white: "#FFFFFF",
    black: "#000000",
    primary: "#2E2924",
    secondary: "#514840",
    light: "#D9EAFB",
    neutral: "#EFEFEF",
    neutralLight: "#F6F8FA",
    dark: "#E1E4E8",
    boxShadow: "rgba(165, 165, 168, 0.2)",
    success: "#22863A",
    error: "#CB2431",
  },
  breakpoint: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  fontSize: {
    sm: "1rem",
    md: "1.4rem",
    lg: "1.8rem",
  },
  fontWeight: {
    sm: 400,
    md: 600,
    lg: 900,
  },
  borderRadius: "8px",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${theme.palette.neutral};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    * {
      box-sizing: border-box;
    }
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
