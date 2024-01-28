import React, { Component, useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

// components
import { UIContainer, UITextView } from "../components";

// widgets
import { CategoryChip, NewsItem } from "../widgets";

// data
import CategoryList from "../data/categories";

// services
import { fetchDiscoverNews } from "../services/newsService";

// model
import Article from "../model/Article";
import { DIMENSION } from "../constants";
import { Routes } from "../navigators";

const CategoriesScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const [category, setCategory] = useState<string>(CategoryList[0]);
  const [data, setData] = useState<Article[]>();

  useEffect(() => {
    getNewsForCategory();
  }, [category]);

  // handle selected category
  const handleCategory = (value: string) => {
    setCategory(value);
  };

  // get data for news category
  const getNewsForCategory = async () => {
    try {
      let result = await fetchDiscoverNews(category);
      if (result.articles.length !== 0) {
        setData(result.articles);
      }
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  return (
    <UIContainer>
      <React.Fragment>
        <FlatList
          data={CategoryList}
          keyExtractor={(item, index) => `${index}-category`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <CategoryChip
              title={item}
              onPress={(text) => handleCategory(text)}
            />
          )}
        />

        {data?.length !== 0 ? (
          <FlatList
            contentContainerStyle={{
              marginVertical: DIMENSION.PADDING,
            }}
            data={data}
            keyExtractor={(item, index) => `${index}-category-news`}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <NewsItem
                article={item}
                onClick={() => navigation.navigate(Routes.details, { item })}
              />
            )}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <UITextView text="There are no news to show" />
          </View>
        )}
      </React.Fragment>
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
