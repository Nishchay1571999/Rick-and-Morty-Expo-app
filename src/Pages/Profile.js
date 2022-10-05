import { View, Text, Image, FlatList, Pressable } from "react-native";
import React from "react";
import { styles } from "../../Styles";

const Profile = ({ navigation, route }) => {
  const { data } = route.params;

  console.log("====================================");
  console.log("Profile data:", data);
  console.log("====================================");
  return (
      <View
        style={{
          height: "95%",
          margin: 24,
          padding: 16,
          backgroundColor: "black",
          borderRadius: 10,
          overflow: "hidden",
          paddingBottom: 16,
        }}
      >
        <View>
          <Image
            source={{ uri: data?.image }}
            style={{
              height: 300,
              width: 300,
              borderRadius: 10,
            }}
          />
          <View
            style={
              data?.status === "Alive"
                ? {
                    height: 30,
                    width: 30,
                    backgroundColor: "green",
                    position: "absolute",
                    bottom: -14,
                    right: 16,
                    zIndex: 100,
                    borderRadius: 50,
                  }
                : data?.status === "unknown"
                ? {
                    height: 30,
                    width: 30,
                    backgroundColor: "gray",
                    position: "absolute",
                    bottom: -14,
                    right: 16,
                    zIndex: 100,
                    borderRadius: 50,
                  }
                : {
                    height: 30,
                    width: 30,
                    backgroundColor: "red",
                    position: "absolute",
                    bottom: -14,
                    right: 16,
                    zIndex: 100,
                    borderRadius: 50,
                  }
            }
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 40,
              color: "white",
            }}
          >
            {data?.name}{" "}
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: "gray",
            }}
          >
            ({data?.species})
          </Text>
          <Text
            style={{
              color:
                data?.status === "Alive"
                  ? "green"
                  : data?.status === "Dead"
                  ? "red"
                  : "yellow",
              fontSize: 18,
            }}
          >{`Status : ${data?.status}`}</Text>
          <Text
            style={{
              color: "gray",
              fontSize: 14,
            }}
          >{`Gender : ${data?.gender}`}</Text>
          <Text
            style={{
              fontSize: 14,
              color: "skyblue",
            }}
          >
            Origin:
            <Text
              style={{
                color: "white",
              }}
            >
              {" "}
              {data?.origin?.name}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "skyblue",
            }}
          >
            Location:
            <Text
              style={{
                color: "white",
              }}
            >
              {" "}
              {data?.location?.name}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "white",
            }}
          >
            Created At:{" "}
            <Text
              style={{
                fontSize: 10,
                color: "lightblue",
              }}
            >
              {data?.created.slice(0, 10)}
            </Text>
          </Text>
          <View
            style={{
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              {"Episodes in :"}
            </Text>
            <FlatList
              data={data.episode}
              contentContainerStyle={{
                marginBottom: 10,
                // justifyContent:'center',
                // alignItems:'center',
              }}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <Pressable
                    onPress={()=>{
                        navigation.navigate('Episode',{
                            item :item,
                        })
                    }}
                    style={{
                      flex: 1,
                      // padding: 24,
                      paddingTop: 24,
                      paddingBottom: 24,
                      backgroundColor: "skyblue",
                      margin: 8,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius:10,
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontSize: 16,
                      }}
                    >
                      {(index + 1).toString()}
                    </Text>
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </View>
  );
};

export default Profile;
