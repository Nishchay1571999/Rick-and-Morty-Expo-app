import React from "react";
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { fetchCharecters } from "./API/AxiosInstance";
import { useEffect, useState } from "react";
import { styles } from "../Styles";
import Charecters from "./Pages/Charecters";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function Index({ navigation }) {
  const [charecterdata, setCharecterData] = useState({});
  const noofPages = parseInt(charecterdata?.info?.pages);
  let [page, setPage] = useState(1);
  const getdata = async (url) => {
    const charecterresult = await fetchCharecters(url);
    setCharecterData(charecterresult);
  };
  const NavigatorStack = createNativeStackNavigator();
  useEffect(() => {
    getdata(`https://rickandmortyapi.com/api/character?page=${page}`);
  }, [page]);
  return (
 
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            width: "100%",
          }}
        >
          <View
            style={{
              paddingTop: 60,
              paddingHorizontal: 16,
              paddingBottom: 16,
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              backgroundColor:'skyblue'
            }}
          >
            <Pressable
              style={{
                height: 50,
                width: 70,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                borderRadius: 10,
              }}
              onPress={() => {
                console.log("====================================");
                console.log("Next Press ");
                console.log("====================================");
                setPage(page - 1);
                console.log("====================================");
                console.log("Page number:", page);
                console.log("====================================");
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                {"Prev"}
              </Text>
            </Pressable>
            <TouchableOpacity
              style={{
                height: 50,
                width: 70,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
                onPress={() => {
                  console.log("====================================");
                  console.log("Next Press ");
                  console.log("====================================");
                  setPage(page + 1);
                  console.log("====================================");
                  console.log("Page number:", page);
                  console.log("====================================");
                }}
              >
                {"Next"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Charecters info={charecterdata?.info} data={charecterdata?.results} navigation={navigation} />
      </SafeAreaView>
  );
}
