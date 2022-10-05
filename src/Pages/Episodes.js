import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchCharecters } from "../API/AxiosInstance";
import Charecters from "./Charecters";

const Episodes = ({ navigation, route }) => {
  const { item } = route.params;
  const [episodedata, setEpisodeData] = useState({});
  const [chararray, setCharecterArray] = useState([""]);
  const getdata = async () => {
    const res = await fetchCharecters(item);
    setEpisodeData(res);
  };
  const getcharecterimages = async () => {
    episodedata.characters?.map(async (item) => {
      const res = await fetchCharecters(item);
      setCharecterArray([res?.image, ...chararray]);
    });
    console.log("images:", chararray);
  };
  useEffect(() => {
    getdata();
    getcharecterimages();
  }, []);
  return (
    <View
      style={{
        backgroundColor: "skyblue",
        padding: 16,
      }}
    >
      <Text>Aired At: {episodedata.air_date}</Text>
      <Text>Episode:{episodedata.episode}</Text>
      <Text>Name of the Episode :{episodedata.name}</Text>
      <FlatList
        data={chararray}
        contentContainerStyle={{
            alignItems:'center',
            justifyContent:'center',
        }}
        renderItem={({ item,index }) => {
          if (item === "") {
            return <View style={{
                height:116,
                width:116,
            }}></View>;
          } else {
            return (
              <View style={{
                margin:8
              }} key={index}>
                <Image
                  source={{ uri: item }}
                  style={{
                    height: 100,
                    width: 100,
                  }}
                />
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default Episodes;
