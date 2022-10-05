import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = (props) => {
  const {
    data: { item },
  } = props;
  const { characters } = item;
  const images = [];
  const getdata = async (url) => {
    try {
      const res = await axios.get(url);
      images.push(res.data?.image);
    } catch (Error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    characters?.map((item) => {
      getdata(item);
    });
  });
  //   console.log("Episode Data", item);
  return (
    <View
      style={{
        backgroundColor: "black",
        marginVertical: 24,
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: "white",
        }}
      >
        {item?.air_date}
      </Text>
      <FlatList
        data={images}
        horizontal
        renderItem={(item) => {
          console.log("Item Value:", Item);
          return (
            <View>
              <Image source={{ uri: `${item}` }} width={8} height={8} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Card;
