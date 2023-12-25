export type BbcArticle = {
  title: string;
  docId: string;
  description: string;
  article: string;
  url: string;
  time: string;
  img: string | null;
};
export type HamariArticle = {
  title: string;
  docId: string;
  description: string;
  link: string;
  author: string;
  imgSrc: string;
  published: number;
  category: string[];
  content: string;
  content_encoded: string;
  media: Record<string, any>; // You may want to define a specific type for media
};
