import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, ButtonGroup, withTheme } from "react-native-elements";

import Main from "./view/Main";
import Game from "./view/Game";

function AppIndex({ loginUser }) {
  const Stack = createStackNavigator();

  const startGame = (loginUser) => {};

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ChangeState(state) {
  return {
    loginUser: state.loginUser,
  };
}

export default connect(ChangeState)(AppIndex);
