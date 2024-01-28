import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { DetailsNewsScreen } from "../screens/";

// navigator
import { BottomNavigator, Routes, RouteParamList } from "./";
import { UITextView } from "../components";

const Stack = createNativeStackNavigator<RouteParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
    >
      <Stack.Screen
        name={Routes.bottom}
        component={BottomNavigator}
        options={{ title: "NEWS APP" }}
      />
      <Stack.Screen
        name={Routes.details}
        component={DetailsNewsScreen}
        options={{ title: "DETAILS" }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
