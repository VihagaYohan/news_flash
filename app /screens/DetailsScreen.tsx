import React, { Component, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { WebView } from "react-native-webview";

// components
import { UIContainer, UITextView, UIImage } from "../components";

// constants
import { COLORS, DIMENSION, STYLES } from "../constants";

// utils
import { convertDate, normalizeSize } from "../utils/helpers";

const DetailsScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const { item } = route.params;

  return (
    <UIContainer innerContainerStyle={{ paddingVertical: 0 }}>
      <WebView source={{ uri: item.url }} style={{ flex: 1 }} />
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: normalizeSize(30),
    fontWeight: "600",
  },
  author: {
    color: COLORS.grey,
  },
});

export default DetailsScreen;
