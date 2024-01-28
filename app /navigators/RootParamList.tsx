import Article from "../model/Article";

type RootParamList = {
  home_screen: undefined;
  search_screen: undefined;
  bottom_navigator: undefined;
  saved_news_screen: undefined;
  details_news_screen: {
    item: Article;
  };
};

export default RootParamList;
