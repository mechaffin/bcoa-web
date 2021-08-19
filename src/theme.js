const {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
} = require("@material-ui/core");

export const CONSTANTS = Object.freeze({
  tile: { width: 315, height: 250, margin: 2 },
  tileBar: { height: 92 },
  path: {
    images: "/versatility/2021/images",
    files: "/versatility/2021/files",
    application:
      "/versatility/2021/files/2020_Versatile_Basenji_Program_Application_&_Titles_REV05-24-2021.pdf",
  },
});

export function getTheme() {
  let theme = createMuiTheme({
    typography: {
      fontSize: 12,
      fontFamily: [
        "Arial",
        '"Segoe UI"',
        "-apple-system",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h1: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
      },
      h2: { fontSize: 22, marginTop: 12, marginBottom: 8 },
      h3: {
        fontSize: 54,
        fontFamily: [
          "Edwardian Script ITC",
          "Apple Chancery",
          "Brush Script MT",
          "Brush Script Std",
          "Snell Roundhand",
          "cursive",
        ].join(","),
      },
      h4: { fontSize: 20, fontWeight: "bold" },
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
}

export const useGlobalStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100%",
    padding: 0,
  },
}));
