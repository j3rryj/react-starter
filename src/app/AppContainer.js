import React from "react";
import { initialState, StateProvider, mainReducer } from "../state";
import App from "./App";

const AppContainer = () => {
  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StateProvider>
  );
};

export default AppContainer;
