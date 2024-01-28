import Article from "../model/Article";
import ListResponse from "../model/ListResponse";
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
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data from server");
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const fetchBreakingNews = async (): Promise<ListResponse<Article[]>> => {
  let result = await newsApiCall(breakingNewsUrl);
  return result;
};

export const fetchRecommendedNews = async (): Promise<
  ListResponse<Article[]>
> => {
  let result = await newsApiCall(recommendedNewsUrl);
  return result;
};

export const fetchDiscoverNews = async (
  discover: any
): Promise<ListResponse<Article[]>> => {
  return await newsApiCall(discoverNewsUrl(discover));
};

export const fetchSearchNews = async (
  query: string
): Promise<ListResponse<Article[]>> => {
  const endpoint = searchNewsUrl(query);
  return await newsApiCall(endpoint);
};
