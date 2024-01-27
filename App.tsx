import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  NavigationContainerEventMap,
} from "@react-navigation/native";

// navigation
import { AppNavigator } from "./app /navigators";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
