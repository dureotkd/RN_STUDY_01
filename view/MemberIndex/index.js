import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../Main";
import Test from "../Test";
import Game from "../Game";

function MemberIndex({ loginUser }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animationEnabled: true,
        gestureResponseDistance: 30,
        presentation: "transparentModal",
        animationTypeForReplace: "push",
        headerTitle: "",
        headerStyle: {
          elevation: 0,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: "#000000",
          height: 80,
        },
        headerLeft: () => {},
      }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  );
}

function ChangeState(state) {
  return {
    loginUser: state.loginUser,
  };
}

export default connect(ChangeState)(MemberIndex);
