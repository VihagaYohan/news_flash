import React, { Component, useState, useEffect, useCallback } from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  View,
  Image,
} from "react-native";

// components
import { UIContainer, UITextView, UITextInput } from "../components";

// constants
import { DIMENSION, COLORS } from "../constants";

// utils
import { normalizeSize, convertDate } from "../utils/helpers";

// models
import Article from "../model/Article";

// service
import { fetchSearchNews } from "../services/newsService";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {}, []);

  // search news
  const handleSearch = async () => {
    try {
      let result = await fetchSearchNews(searchQuery);
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
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: item.urlToImage }}
          style={{
            width: 100,
            height: 100,
            borderRadius: DIMENSION.BORDER_RADIUS,
            overflow: "hidden",
          }}
          resizeMode="cover"
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
      <UITextInput
        placeholder="Search here"
        onChangeText={(text) => {
          setSearchQuery(text);
          if (searchQuery.length == 0) {
            setData([]);
          } else {
            handleSearch();
          }
        }}
        value={searchQuery}
      />

      {searchQuery.length !== 0 ? (
        <UITextView text={`${data.length} news for`} />
      ) : (
        <View />
      )}

      {searchQuery.length !== 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${index}-search_news`}
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
      ) : (
        <View />
      )}
    </UIContainer>
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

export default SearchScreen;
