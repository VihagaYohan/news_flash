import React, { Component } from "react";
import { StyleSheet } from "react-native";

// components
import { UIContainer, UITextView } from "../components";

const SavedNews = () => {
  return (
    <UIContainer>
      <UITextView text="Saved news" />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default SavedNews;
