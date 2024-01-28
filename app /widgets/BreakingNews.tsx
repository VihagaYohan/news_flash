import React, { Component, useState, useEffect } from "react";
import { StyleSheet, FlatList, View, ImageBackground } from "react-native";

// services
import { fetchBreakingNews } from "../services/newsService";

// model
import Article from "../model/Article";

// components
import { UITextView, UIImage } from "../components";

// constants
import { COLORS, DIMENSION } from "../constants";

// utils
import { normalizeSize } from "../utils/helpers";

const BreakingNews = () => {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    getBreakingNews();
  }, []);

  // fetch breaking news
  const getBreakingNews = async () => {
    try {
      let result = await fetchBreakingNews();
      if (result.articles.length !== 0) {
        setData(result.articles);
      }
    } catch (e) {
      console.log(`Error ${e}`);
    }
  };

  return (
    <View>
      <UITextView text="BREAKING NEWS" textStyle={styles.titleStyle} />

      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}-breakingNews`}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.cardStyle}>
              <ImageBackground
                source={{ uri: item.urlToImage }}
                style={styles.cardImageStyle}
                resizeMode="cover"
              >
                <UITextView text={item.title} textStyle={styles.cardTitle} />
              </ImageBackground>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginVertical: DIMENSION.PADDING,
    fontSize: normalizeSize(30),
    fontWeight: "bold",
    color: COLORS.primaryColor,
  },
  cardStyle: {
    width: DIMENSION.SCREEN_WIDTH - DIMENSION.PADDING * 2,
    height: 250,
    borderRadius: DIMENSION.CARD_BORDER_RADIUS * 2,
    overflow: "hidden",
  },
  cardImageStyle: {
    flex: 1,
  },
  cardTitle: {
    color: COLORS.white,
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: COLORS.backgroundColor,
    paddingHorizontal: DIMENSION.PADDING / 2,
  },
});

export default BreakingNews;
