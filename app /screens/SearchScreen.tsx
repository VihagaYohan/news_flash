import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

// components
import { UIContainer, UITextView } from "../components";

// constants
import { DIMENSION } from "../constants";

const SearchScreen = () => {
  return (
    <UIContainer>
      <UITextView text="search screen" />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
