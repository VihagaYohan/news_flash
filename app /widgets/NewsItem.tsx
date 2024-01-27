import React, { Component, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// components
import { UIImage, UITextView } from "../components";

// constants
import { DIMENSION, COLORS, STYLES } from "../constants";

// utils
import { normalizeSize, convertDate } from "../utils/helpers";

// model
import Article from "../model/Article";

interface propTypes {
  article: Article;
}

const NewsItem = ({ article }: propTypes) => {
  const [selected, setSelected] = useState<boolean>();
  return (
    <View style={styles.itemContainer}>
      <UIImage
        url={article.urlToImage}
        imageStyles={{
          borderRadius: DIMENSION.BORDER_RADIUS,
          overflow: "hidden",
        }}
      />

      <View style={styles.itemContentContainer}>
        <UITextView text={article.author} textStyle={styles.itemAuthor} />

        <UITextView
          text={article.title}
          numberOfLines={1}
          textStyle={styles.itemTitle}
        />

        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              bottom: 10,
              left: DIMENSION.PADDING,
              width: "100%",
              justifyContent: "space-between",
            },
          ]}
        >
          <UITextView
            text={convertDate(article.publishedAt)}
            textStyle={{ fontSize: 13, marginRight: 50 }}
          />

          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => setSelected(!selected)}
          >
            <Ionicons
              name={selected == true ? "bookmark" : "bookmark-outline"}
              color={COLORS.primaryColor}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    overflow: "hidden",
  },
  itemContentContainer: {
    paddingHorizontal: DIMENSION.PADDING / 2,
    flex: 1,
  },
  itemAuthor: {
    fontWeight: "bold",
    fontSize: normalizeSize(25),
    fontStyle: "italic",
  },

  itemTitle: {
    fontWeight: "normal",
  },

  footer: {
    justifyContent: "space-between",
  },
});

export default NewsItem;
