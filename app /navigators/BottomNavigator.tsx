import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// screens
import { HomeScreen, SearchScreen } from "../screens";

// navigator
import Routes from "../navigators/routes";
import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
      id="bottom_navigator"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryColor,
      }}
    >
      <Tab.Screen
        name={Routes.home}
        component={HomeScreen}
        options={{
          title: "HOME",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name={Routes.search}
        component={SearchScreen}
        options={{
          title: "SEARCH",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
