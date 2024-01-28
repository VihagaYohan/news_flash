import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

// components
import { UIContainer, UITextView } from "../components";

// utils
import { getData } from "../utils/helpers";
import { KEYS } from "../constants";

// model
import Article from "../model/Article";

// widgets
import { NewsItem } from "../widgets";

const SavedNews = () => {
  const [data, setData] = useState<Article>();

  useEffect(() => {
    fetchSavedNews();
  }, []);

  const fetchSavedNews = async () => {
    try {
      let result = await getData(KEYS.savedNews);
      setData(JSON.parse(result));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UIContainer>
      {data !== undefined ? <NewsItem article={data} /> : <View />}
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default SavedNews;
