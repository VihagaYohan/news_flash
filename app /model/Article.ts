import { IArticle } from "../interface/IArticle";
import { ISource } from "../interface/ISource";

class Article implements IArticle {
  source: ISource;
  author: String;
  title: String;
  description: String;
  url: String;
  urlToImage: String;
  publishedAt: String;
  content: String;

  constructor(
    source: ISource,
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String
  ) {
    this.source = source;
    this.author = author;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
    this.content = content;
  }
}

export default Article;
