import { blue, deepOrange } from "@material-ui/core/colors";
import {
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from "@material-ui/core";

export const CONSTANTS = Object.freeze({
  tile: { width: 315, height: 250, margin: 2 },
  tileBar: { height: 92 },
  path: {
    images: "/versatility/2021/images",
    files: "/versatility/2021/files",
    application: {
      printable:
        "/versatility/2021/files/VBP Printable Application REV2022NOV30.pdf",
      interactive:
        "/versatility/2021/files/VBP Interactive Application REV2022NOV30.xlsx",
      interactiveList:
        "/versatility/2021/files/VBP Interactive Application REV2022NOV30 - titles list.pdf",
    },
  },
});

export function getTheme() {
  let theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: deepOrange,
    },
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
