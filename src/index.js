import "./index.css";

import { CssBaseline, ThemeProvider } from "@material-ui/core";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
//import ReactDOMServer from "react-dom/server";
import { getTheme } from "theme";

//MECTODO: Checkout this for rendering to html --> https://www.saltycrane.com/blog/2020/05/how-generate-static-html-using-react-typescript-and-nodejs/
//const html = ReactDOMServer.renderToStaticMarkup(<App />);
//console.log("hmtl", html.toString());

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
