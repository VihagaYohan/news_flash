import React, { Component, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

// components
import { UIContainer, UITextView } from "../components";

const DetailsScreen = () => {
  return (
    <UIContainer>
      <UITextView text="Details Screen" />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
