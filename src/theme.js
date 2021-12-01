import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from "@material-ui/core";

import { alpha } from "@material-ui/core/styles/colorManipulator";
import { grey } from "@material-ui/core/colors";

export const CONSTANTS = Object.freeze({
  tile: { width: 315, height: 250, margin: 2 },
  tileBar: { height: 92 },
  path: {
    images: "/versatility/2021/images",
    files: "/versatility/2021/files",
    application:
      "/versatility/2021/files/Versatile Basenji Program Application & Titles REV2021NOV22.pdf",
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
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 12,
      },
      h2: { fontSize: 24, marginTop: 12, marginBottom: 8 },
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
    maxWidth: 1042,
  },
}));
