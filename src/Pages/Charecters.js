import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import React from "react";
import { styles } from "../../Styles";
import Card from "../Components/Charecters/Card";
const Charecters = (props) => {
  const {info, data } = props;
  const scrollY = new React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.frontpage} showsVerticalScrollIndicator={false}>
      <Animated.FlatList
        data={data}
        contentContainerStyle={{
          marginTop: 34,
          paddingBottom:250
        }}
        style={{
          height:'90%',

        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const inputRange = [-1, 0, 300 * index, 300*(index+1)];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange:[1,1,1,0]
          })
          return <Card item={item} scale={scale} navigation={props.navigation}/>;
        }}
      />
      <View style={{
        paddingBottom:800
      }}/>
    </View>
  );
};

export default Charecters;
