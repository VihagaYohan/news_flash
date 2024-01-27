import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

// components
import { UIImage, UITextView } from "../components";

// constants
import { DIMENSION, COLORS } from "../constants";

// utils
import { normalizeSize, convertDate } from "../utils/helpers";

// model
import Article from "../model/Article";

interface propTypes {
  article: Article;
}

const NewsItem = ({ article }: propTypes) => {
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

        <UITextView
          text={convertDate(article.publishedAt)}
          textStyle={{
            position: "absolute",
            bottom: 10,
            left: DIMENSION.PADDING,
            fontSize: normalizeSize(20),
            color: COLORS.grey,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
  },
  itemContentContainer: {
    paddingHorizontal: DIMENSION.PADDING / 2,
  },
  itemAuthor: {
    fontWeight: "bold",
    fontSize: normalizeSize(25),
    fontStyle: "italic",
  },

  itemTitle: {
    fontWeight: "normal",
    fontSize: normalizeSize(30),
  },
});

export default NewsItem;
