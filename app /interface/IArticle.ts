import { ISource } from "./ISource";

export interface IArticle {
  source: ISource;
  author: String;
  title: String;
  description: String;
  url: String;
  urlToImage: String;
  publishedAt: String;
  content: String;
}
