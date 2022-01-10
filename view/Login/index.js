import { useState, useEffect, ActivityIndicator } from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { empty } from "../../helper";
import LeageOfLegends from "../../api/LeagueOfLegends";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ dispatch }) {
  const [loading, setLoading] = useState(false);
  const [loginId, setLoginId] = useState("");

  const handleLogin = async () => {
    if (empty(loginId)) {
      alert("소환사 명을 입력해주세요");
      return;
    }
    const { summonerApi } = await LeageOfLegends.getSummonerApi({ loginId });

    if (empty(summonerApi)) {
      alert("존재하지 않는 소환사입니다");
      return;
    }

    const { privateLeague } = await LeageOfLegends.getLeagueApi(summonerApi.id);

    await createSummonerAllData({
      privateLeague,
      summonerApi,
    });

    AsyncStorage.setItem("loginUser", JSON.stringify(summonerApi));

    dispatch({
      type: "doLogin",
      payload: {
        loginUser: summonerApi,
      },
    });
  };

  const createSummonerAllData = async ({ privateLeague, summonerApi }) => {
    /**
     * * 소환사 개인정보 저장
     */
    const { insertId } = await LeageOfLegends.createSummoner(summonerApi);

    if (empty(insertId)) {
      alert("데이터 작업중 오류 \n개발자에게 문의해주세요");
      return;
    }

    /**
     * * 개인솔랭 리그정보 저장
     * ! 언랭일시 빈배열
     */
    await LeageOfLegends.createPrivateLeague(privateLeague, insertId);

    try {
      AsyncStorage.setItem("loginUser", JSON.stringify(loginUser));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1a202c" }}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View>
          <Text style={{ fontSize: 26, color: "white" }}>소환사명</Text>
          <View style={{ marginTop: 50 }}>
            <TextInput
              onChangeText={(text) => setLoginId(text)}
              style={{
                borderBottomColor: "#e8c488",
                fontSize: 14,
                color: "white",
                borderBottomWidth: 2,
                width: 330,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              backgroundColor: "#718096",
              padding: 12,
              width: 330,
              marginTop: 35,
              borderRadius: 3,
            }}
          >
            <Text style={{ color: "#f7fafc", textAlign: "center" }}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function ChangeState(props) {
  return {
    state: props.loginUser,
  };
}

export default connect(ChangeState)(Login);
