import React, { Component } from "react";
import { Dimensions, Platform, PixelRatio, Alert } from "react-native";
import moment from "moment";

// print console logs, only in dev environment
export const showConsole = (content: any) => {
  if (__DEV__) {
    console.log(JSON.stringify(content));
  }
};

// normalize size based on screen size
export const normalizeSize = (size: number) => {
  const scale = Dimensions.get("window").width / 320; // iPhone 5s size
  const newSize = size * (scale / 2);
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

// show alert
export const showAlert = (payload: string) => {
  Alert.alert(payload);
};

// convert date format
export const convertDate = (payload: String) => {
  return moment(payload.toString()).format("DD MMM YYYY");
};

export default {
  showConsole,
  normalizeSize,
  showAlert,
};
