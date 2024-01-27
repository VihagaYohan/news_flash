import React, { Component } from "react";
import { Dimensions, Platform, PixelRatio, Alert } from "react-native";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

// set data in async storage
export const setData = async (key: string, payload: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(payload));
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

// get data from async storage
export const getData = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(`Error: `);
  }
};

export default {
  showConsole,
  normalizeSize,
  showAlert,
};
