import React, { Component } from "react";
import { StyleSheet } from "react-native";

// components
import { UIContainer, UITextView } from "../components";

// widgets
import { BreakingNews, RecommendedNews } from "../widgets";

const HomeScreen = () => {
  return (
    <UIContainer>
      <BreakingNews />

      <RecommendedNews />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
