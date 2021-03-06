import App from "./App";
import React from "react";
import express from "express";
import theme from "./theme";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/styles";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const context = {};
    const sheets = new ServerStyleSheets();
    const markup = renderToString(
      sheets.collect(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </StaticRouter>
        </Provider>
      )
    );
    const css = sheets.toString();
    res.status(200).send(`
<!doctype html>
<html lang="">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charSet='utf-8' />
  <title>Welcome to Razzle</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500">
  ${
    assets.client.css
      ? `<link rel="stylesheet" href="${assets.client.css}">`
      : ""
  }
  ${css ? `<style id='jss-ssr'>${css}</style>` : ""}
    ${
      process.env.NODE_ENV === "production"
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`
    }
</head>
<body>
  <div id="root">${markup}</div>
</body>
</html>`);
  });

export default server;
