import "./index.css";

import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import { getTheme } from "theme";

//MECTODO: Checkout this for rendering to html --> https://www.saltycrane.com/blog/2020/05/how-generate-static-html-using-react-typescript-and-nodejs/
//const html = ReactDOMServer.renderToStaticMarkup(<App />);
//console.log("hmtl", html.toString());

const theme = getTheme();

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
