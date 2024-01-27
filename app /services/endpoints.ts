import { newsAPIKey } from "./api";

// endpoints
export const apiBaseUrl = "https://newsapi.org/v2";

export const breakingNewsUrl = `${apiBaseUrl}/top-headlines?country=us&apiKey=${newsAPIKey}`;
export const recommendedNewsUrl = `${apiBaseUrl}/top-headlines?country=us&category=business&apiKey=${newsAPIKey}`;
