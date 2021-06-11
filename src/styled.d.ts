import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      white: string;
      black: string;
      primary: string;
      secondary: string;
      light: string;
      neutral: string;
      neutralLight: string;
      dark: string;
      boxShadow: string;
      success: string;
      error: string;
    };
    breakpoint: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
    fontSize: {
      sm: string;
      md: string;
      lg: string;
    };
    fontWeight: {
      sm: number;
      md: number;
      lg: number;
    };
  }
}
