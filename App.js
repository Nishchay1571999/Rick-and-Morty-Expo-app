import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./src";
import Profile from "./src/Pages/Profile";
import Episodes from "./src/Pages/Episodes";
export default function App() {
  const NavigationStack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <NavigationStack.Navigator>
        <NavigationStack.Screen name="Home"
          component={Index}
          options={{ title: 'Welcome' }}
        />
        <NavigationStack.Screen name="Profile"
          component={Profile}
        /> 
        <NavigationStack.Screen name="Episode"
          component={Episodes}
        /> 
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}
