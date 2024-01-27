import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  ListRenderItem,
  Image,
} from "react-native";

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

const RecommendedNews = () => {
  const [data, setData] = useState<Article[]>();

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
    console.log(index);
    return (
      <View style={styles.itemContainer}>
        {/* <Image
          source={{ uri: item.urlToImage }}
          style={{
            width: 100,
            height: 100,
            borderRadius: DIMENSION.BORDER_RADIUS,
            overflow: "hidden",
          }}
          resizeMode="cover"
        />
 */}
        <UIImage
          url={item.urlToImage}
          imageStyles={{
            borderRadius: DIMENSION.BORDER_RADIUS,
            overflow: "hidden",
          }}
        />

        <View style={styles.itemContentContainer}>
          <UITextView text={item.author} textStyle={styles.itemAuthor} />

          <UITextView
            text={item.title}
            numberOfLines={1}
            textStyle={styles.itemTitle}
          />

          <UITextView
            text={convertDate(item.publishedAt)}
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
  return (
    <UIContainer>
      <UITextView text="RECOMMENDED NEWS" textStyle={styles.titleStyle} />

      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index} - recommended news`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          console.log(item);
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

export default RecommendedNews;
