import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

function Game({ navigation, loginUser }) {
  return (
    <View style={{ padding: 10 }}>
      <Text>안녕하세요 Game VIEW 입니다</Text>
    </View>
  );
}

function ChangeState(state) {
  return {
    loginUser: state.loginUser,
  };
}
export default connect(ChangeState)(Main);
