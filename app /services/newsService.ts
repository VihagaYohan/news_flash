import { newsAPIKey } from "./api";
import { apiBaseUrl, breakingNewsUrl, recommendedNewsUrl } from "./endpoints";
import axios from "axios";

const discoverNewsUrl = (discover: String) =>
  `${apiBaseUrl}/top-headlines?country=us&category=${discover}&apiKey=${newsAPIKey}`;

const searchNewsUrl = (query: String) =>
  `${apiBaseUrl}/everything?q=${query}&apiKey=${newsAPIKey}`;

const newsApiCall = async (endpoints: String, params: any = {}) => {
  const options = {
    method: "GET",
    url: endpoints,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const fetchBreakingNews = async () => {
  return await newsApiCall(breakingNewsUrl);
};

export const fetchRecommendedNews = async () => {
  return await newsApiCall(recommendedNewsUrl);
};

export const fetchDiscoverNews = async (discover: any) => {
  return await newsApiCall(discoverNewsUrl(discover));
};

export const fetchSearchNews = async (query: string) => {
  const endpoint = searchNewsUrl(query);
  return await newsApiCall(endpoint);
};
