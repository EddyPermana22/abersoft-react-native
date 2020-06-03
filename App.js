import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

import store from "./store";
import MainNavigation from "./navigations/MainNavigation";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="#3549FB" barStyle="light-content" />
        <MainNavigation />
      </Provider>
    </>
  );
}
