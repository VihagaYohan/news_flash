import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  NavigationContainerEventMap,
} from "@react-navigation/native";
import { Provider } from "react-redux";

// navigation
import { AppNavigator } from "./app /navigators";

// store
import Store from "./app /store/store";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
