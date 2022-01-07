import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonGroup, withTheme } from "react-native-elements";
import { Image } from "react-native-elements";

const BASE_URI = "https://source.unsplash.com/random?sig=";
const ImageAPI = ({ showDetailImage }) => {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={[...new Array(10)].map((_, i) => i.toString())}
          style={styles.list}
          numColumns={2}
          keyExtractor={(e) => e}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={showDetailImage.bind(this, item)}
              activeOpacity={1}
              style={styles.item}
            >
              <Image
                source={{ uri: BASE_URI + item }}
                containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator />}
              />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </>
  );
};

function Main({ navigation, loginUser }) {
  const showDetailImage = (seq) => {
    navigation.navigate("Game", { seq });
  };

  return (
    <View style={{ padding: 10 }}>
      <Text>안녕하세요 메인 VIEW 입니다</Text>
    </View>
  );
}

function ChangeState(state) {
  return {
    loginUser: state.loginUser,
  };
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    backgroundColor: "#000",
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});

export default connect(ChangeState)(Main);
