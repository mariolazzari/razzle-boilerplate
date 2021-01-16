import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";

hydrate(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
  () => {
    // [ReHydratation](https://github.com/cssinjs/jss/blob/master/docs/ssr.md)
    const jssStyles = document.getElementById("jss-ssr");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
);

if (module.hot) {
  module.hot.accept();
}
