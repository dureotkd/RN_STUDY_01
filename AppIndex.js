import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, ButtonGroup, withTheme } from "react-native-elements";

import Main from "./view/Main";
import Game from "./view/Test";

import NonMemberIndex from "./view/NonMemberIndex";
import MemberIndex from "./view/MemberIndex";

function AppIndex({ loginUser }) {
  console.log(loginUser);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {loginUser ? <MemberIndex /> : <NonMemberIndex />}
    </NavigationContainer>
  );
}

function ChangeState(state) {
  return {
    loginUser: state.loginUser,
  };
}

export default connect(ChangeState)(AppIndex);
