/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";

const modeTheme = {
  colors: {
    warning: "#ff0e0e",
    focus: "#b009ff",
    white: "#ffffff",

    primary: {
      a: "#5754ed",
      b: " #d93114",
      c: "#168070",
    },
    secondary: {
      a: "#ebeaf9",
      b: "#fdf8f8",
      c: "#ebfcf9",
    },
    neutral: {
      a: "#373737",
      b: "#e8e8e8",
      c: "#f5f5f5",
      d: "#ffffff",
    },
    dark: {
      a: "#110ea0",
      b: " #b61b00",
    },
  },

  padding: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
    xl: "48px",
    xxl: "64px",
  },
};

export const ThemeProviderContext = ({ children }) => {
  return <ThemeProvider theme={modeTheme}>{children}</ThemeProvider>;
};
