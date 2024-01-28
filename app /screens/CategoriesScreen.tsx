import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

// components
import { UIContainer, UITextView } from "../components";

const CategoriesScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  return <UIContainer></UIContainer>;
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
