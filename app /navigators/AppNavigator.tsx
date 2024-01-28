import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { DetailsNewsScreen } from "../screens/";

// navigator
import { BottomNavigator, Routes, RouteParamList } from "./";

const Stack = createNativeStackNavigator<RouteParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.bottom} component={BottomNavigator} />
      <Stack.Screen name={Routes.details} component={DetailsNewsScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
