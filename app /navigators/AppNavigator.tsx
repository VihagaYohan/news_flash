import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { HomeScreen, SearchScreen } from "../screens/";

// navigator
import { BottomNavigator, Routes } from "./";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.bottom} component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default Navigator;
