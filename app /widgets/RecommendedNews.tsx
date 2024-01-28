import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  ListRenderItem,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import { UIContainer, UITextView, UIImage } from "../components";

// constants
import { DIMENSION, COLORS } from "../constants";

// utils
import { normalizeSize, convertDate } from "../utils/helpers";

// services
import { fetchRecommendedNews } from "../services/newsService";

// models
import Article from "../model/Article";

// widgets
import NewsItem from "./NewsItem";

// navigation
import { Routes } from "../navigators";

const RecommendedNews = () => {
  const [data, setData] = useState<Article[]>();
  const navigation = useNavigation();

  useEffect(() => {
    getRecommendedNews();
  }, []);

  // get recommended news
  const getRecommendedNews = async () => {
    try {
      let result = await fetchRecommendedNews();
      if (result.articles.length !== 0) {
        setData(result.articles);
      }
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  // render UI
  const RenderItem: ListRenderItem<Article> = ({ item, index }) => {
    return (
      <NewsItem
        article={item}
        onClick={() => navigation.navigate(Routes.details, { item })}
      />
    );
  };

  return (
    <UIContainer>
      <UITextView text="RECOMMENDED NEWS" textStyle={styles.titleStyle} />

      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index} - recommended news`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <RenderItem
              item={item}
              index={index}
              separators={{
                highlight: function (): void {
                  throw new Error("Function not implemented.");
                },
                unhighlight: function (): void {
                  throw new Error("Function not implemented.");
                },
                updateProps: function (
                  select: "leading" | "trailing",
                  newProps: any
                ): void {
                  throw new Error("Function not implemented.");
                },
              }}
            />
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 10 }} />;
        }}
      />
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    marginVertical: DIMENSION.PADDING,
    fontSize: normalizeSize(30),
    fontWeight: "bold",
    color: COLORS.primaryColor,
  },
});

export default RecommendedNews;
