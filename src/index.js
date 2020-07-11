import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./app/AppContainer";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const main = () => {
  const element = document.querySelector("my-app");

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>,
    element
  );
};

main();
