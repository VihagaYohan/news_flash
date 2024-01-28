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

// navigation
import { Routes } from "../navigators";

// redux
import { useAppDispatch, useAppSelector } from "../store/store";

const SavedNews = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const [data, setData] = useState<Article[]>();
  const { savedNews } = useAppSelector((state) => state.savedNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // fetchSavedNews();

    setData(savedNews);
  }, []);

  useEffect(() => {}, [data]);

  return (
    <UIContainer>
      {data?.length !== 0 ? (
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
