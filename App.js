import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import AppIndex from "./AppIndex";
import axios from "axios";

export default function App() {
  const [loginUser, setLoginUser] = useState("");

  useEffect(() => {
    getLoginUser();
  }, []);

  const getLoginUser = async () => {
    await axios
      .get("http://192.168.219.101:8080/api/users/me")
      .then(({ data, status }) => {
        if (status === 200) {
          setLoginUser("zzzz");
        } else {
          setLoginUser({
            seq: Math.random(),
            id: `나그네_` + Math.random() * 100,
          });
        }
      })
      .catch((e) => console.log(e))
      .then(() => {});

    console.log("?");
  };

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
