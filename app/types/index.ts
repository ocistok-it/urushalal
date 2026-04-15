export interface ArticleImage {
  alt: string;
  created_at: string;
  height: number;
  src: string;
  width: number;
}

export interface Article {
  id: number;
  blog_id: number;
  author: string;
  handle: string;
  title: string;
  image: ArticleImage;
  meta_title: string;
  meta_description: string;
  summary_html: string;
  tag: string[];
  tags: string;
  template_suffix: string;
  admin_graphql_api_id: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  date: number;
  user_id: number;
  comments: null;
  recomended: RecommendedArticle[];
}

export interface BlogResponse {
  data: {
    articles: Article[];
    total_pages: number;
  };
  message: string;
  status: number;
}

export interface ArticleDetail extends Article {
  body_html: string;
}

export interface ArticleDetailResponse {
  data: ArticleDetail;
  message: string;
  status: number;
}

export interface RecommendedArticle {
  author: string;
  banner: string;
  content: string;
  date: number;
  handle: string;
  id: number;
  meta_description: string;
  meta_title: string;
  title: string;
}
