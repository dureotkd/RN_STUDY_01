import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";

import AppIndex from "./AppIndex";

export default function App() {
  const loginUser = useState({ 이름: "성민", 나이: "28" });

  const loginUserRedux = (state = loginUser, action) => {
    switch (action.type) {
      default:
        return loginUser;
    }
  };

  const store = createStore(combineReducers({ loginUser: loginUserRedux }));

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AppIndex />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
