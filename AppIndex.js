import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, ButtonGroup, withTheme } from "react-native-elements";

import Main from "./view/Main";
import Game from "./view/Game";

function AppIndex({ loginUser }) {
  console.log(loginUser);

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Game" component={Game} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function ChangeState(state) {
  return {
    loginUser: state.loginUser,
  };
}

export default connect(ChangeState)(AppIndex);
