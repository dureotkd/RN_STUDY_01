import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import AppIndex from "./AppIndex";
import NonMemberAppIndex from "./view/NonMemberIndex";
import axios from "axios";

export default function App() {
  const [loginUser, setLoginUser] = useState("");

  useEffect(() => {
    getLoginUser();
  }, []);

  const getLoginUser = async () => {
    await axios
      .get("http://192.168.219.102:8080/api/users/me")
      .then(({ data, status }) => {
        if (status === 200) {
          //setLoginUser(data);
        } else alert("알수 없는 오류가 발생하였습니다");
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
      <StatusBar style="light" animated={true} />
      {loginUser ? <AppIndex /> : <NonMemberAppIndex />}
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
