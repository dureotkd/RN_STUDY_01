import { StyleSActivityIndicator, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import NonMain from "../NonMain";
import Login from "../Login";

/**
 * * 비로그인 회원 INDEX
 */
export default function NonMemberAppIndex() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: true,
          gestureResponseDistance: 30,
          presentation: "transparentModal",
          animationTypeForReplace: "push",
        }}
      >
        <Stack.Screen name="NonMain" component={NonMain} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
