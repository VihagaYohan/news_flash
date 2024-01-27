import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import { HomeScreen, SearchScreen } from "../screens";

// navigator
import Routes from "../navigators/routes";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.home} component={HomeScreen} />

      <Tab.Screen name={Routes.search} component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default Navigator;
