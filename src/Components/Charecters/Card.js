import { View, Text, Image, Animated,Pressable } from "react-native";
import React from "react";
import { styles } from "../../../Styles";
const Card = (props) => {
  const { item, scale,navigation } = props;
  console.log("====================================");
  console.log("Item value:", item?.id);
  console.log("====================================");
  if (item === {}) {
    return (
      <View
        style={{
          hwight: 300,
          width: "100%",
        }}
      ></View>
    );
  } else {
    return (
      <Animated.View
        style={[
          styles.charectercontainer,
          {
            transform: [{ scale }],
          },
        ]}
      >
        <Pressable style={{
          width:'100%',
          height:'100%'
        }} onPress={()=>{
          navigation?.navigate('Profile',{
            data:item
          })
        }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                top: -12,
                left: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
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
                  {item?.origin?.name}
                </Text>
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: -70,
                right: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "skyblue",
                }}
              >
                location:
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  {" "}
                  {item?.location?.name}
                </Text>
              </Text>
            </View>
            <View>
              <Image
                source={{ uri: item?.image }}
                style={styles.profileImage}
              />
              <View
                style={
                  item?.status === "Alive"
                    ? styles.alive
                    : item?.status === "unknown"
                    ? styles.unknown
                    : styles.dead
                }
              />
            </View>
            <View>
              <Text style={styles.charecterName}>
                {item?.name}{" "}
                <Text
                  style={{
                    fontSize: 12,
                    color: "gray",
                  }}
                >
                  ({item?.species})
                </Text>
              </Text>
              <Text
                style={{
                  color:
                    item?.status === "Alive"
                      ? "green"
                      : item?.status === "Dead"
                      ? "red"
                      : "yellow",
                  fontSize: 12,
                }}
              >{`Status : ${item?.status}`}</Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 12,
                }}
              >{`Gender : ${item?.gender}`}</Text>
            </View>
          </View>
        </Pressable>
      </Animated.View>
    );
  }
};

export default Card;
