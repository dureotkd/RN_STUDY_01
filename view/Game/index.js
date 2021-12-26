import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { SafeAreaView, SafeScrollView } from "react-native-safe-area-context";
import { Button, ButtonGroup, withTheme } from "react-native-elements";
import { Image, Input } from "react-native-elements";

function Game({ navigation, loginUser, route }) {
  const seq = route?.params?.seq || 0;
  const layout = useWindowDimensions();

  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);

  const handleRegReply = () => {
    if (reply === "") {
      alert("입력하세요..");
      return;
    }
    const cloneReplies = [...replies];
    cloneReplies.push(reply);
    setReplies(cloneReplies);
  };

  const handleReply = (value) => {
    console.log(value);

    setReply(value);
  };

  return (
    <View>
      <ScrollView style={{ padding: 10 }}>
        <Text Text>안녕하세요 {seq}번호 이미지 입니다</Text>
        <Image
          style={{ width: "100%", height: layout.height / 1.8 }}
          source={{ uri: `https://source.unsplash.com/random?sig=${seq}` }}
        />
        <View>
          {replies &&
            replies.map((reply, key) => {
              return (
                <View key={key}>
                  <Text>{reply}</Text>
                </View>
              );
            })}
        </View>
        <View
          style={{
            marginTop: 100,
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Input
            onChangeText={handleReply.bind(this)}
            placeholder="BASIC INPUT"
          />
          <TouchableOpacity
            onPress={handleRegReply}
            style={{
              padding: 12,
              backgroundColor: "yellow",
              borderRadius: 6,
            }}
          >
            <Text>전송</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function ChangeState(state) {
  return {
    loginUser: state.loginUser,
  };
}

const styles = StyleSheet.create({
  container: {},
});

export default connect(ChangeState)(Game);
