import React, { Component, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

// components
import { UITextView } from "../components";

// constants
import { COLORS, DIMENSION } from "../constants";

interface propTypes {
  title: string;
  selected?: boolean;
  onPress: (value: string) => void;
}

const CategoryChip = ({ title, onPress }: propTypes) => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: selected ? COLORS.primaryColor : COLORS.white,
        },
      ]}
      onPress={() => {
        setSelected(!selected);
        onPress(title);
      }}
    >
      <UITextView
        text={title}
        textStyle={{
          color: selected ? COLORS.white : COLORS.black,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DIMENSION.PADDING / 2,
    paddingVertical: DIMENSION.PADDING / 2,
    borderRadius: DIMENSION.BORDER_RADIUS * 5,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});

export default CategoryChip;
