// custom type for an article source
export interface IArticleSource {
  id: string;
  name: string;
}

// custom type for an article
export interface IArticle {
  source: IArticleSource;
  author: string;
  title: string;
  description: string;
  url: URL;
  urlToImage: URL;
  publishedAt: string;
  content: string;
}