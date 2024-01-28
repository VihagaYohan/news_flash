import React, { Component, useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

// components
import { UIContainer, UITextView } from "../components";

// utils
import { getData } from "../utils/helpers";
import { KEYS } from "../constants";

// model
import Article from "../model/Article";

// widgets
import { NewsItem } from "../widgets";
import { Routes } from "../navigators";

const SavedNews = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const [data, setData] = useState<Article[]>();

  useEffect(() => {
    fetchSavedNews();
  }, []);

  const fetchSavedNews = async () => {
    try {
      let result = await getData(KEYS.savedNews);
      if (result !== null) {
        console.log(result.length);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UIContainer>
      {data?.length === 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${index}-saved-news`}
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
          <UITextView text="There are no saved news to show" />
        </View>
      )}
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default SavedNews;
