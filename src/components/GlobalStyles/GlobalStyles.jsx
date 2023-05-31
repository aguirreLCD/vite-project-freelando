import { Global } from "@emotion/react";

const styles = (modeTheme) => {
  return {
    html: {
      fontFamily: modeTheme.fontFamily,
    },
    body: {
      margin: "0",
      padding: "0",
      boxSizing: "border-box",
    },
  };
};

export const GlobalStyles = () => {
  return <Global styles={styles} />;
};
