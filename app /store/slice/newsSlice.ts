import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Article from "../../model/Article";

interface NewsState {
  loadingState: boolean;
  pass: boolean;
  fail: boolean;
  message: String;
  savedNews: Article[];
}

const initialState: NewsState = {
  loadingState: true,
  pass: false,
  fail: false,
  message: "",
  savedNews: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingState = true;
    },
    stopLoading: (state) => {
      state.loadingState = false;
    },
    setPass: (state, action: PayloadAction<boolean>) => {
      state.pass = action.payload;
    },
    setFail: (state, action: PayloadAction<boolean>) => {
      state.fail = action.payload;
    },
    setMessage: (state, action: PayloadAction<String>) => {
      state.message = action.payload;
    },
    addNews: (state, action: PayloadAction<Article>) => {
      state.savedNews = [...state.savedNews, action.payload];
    },
    removeNews: (state, action: PayloadAction<Article>) => {
      let list = state.savedNews.filter(
        (item, index) => JSON.stringify(item) !== JSON.stringify(action.payload)
      );
      state.savedNews = list;
    },
  },
});

export const {
  startLoading,
  stopLoading,
  setPass,
  setFail,
  setMessage,
  addNews,
  removeNews,
} = newsSlice.actions;

export default newsSlice.reducer;
