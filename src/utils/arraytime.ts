import { BbcArticle, TribuneArticle } from "@/types/types";

export const sortByPublishedDescTri = (a: TribuneArticle, b: TribuneArticle) =>
  new Date(b.published).getTime() - new Date(a.published).getTime();

export const sortByPublishedDescBBC = (a: BbcArticle, b: BbcArticle) =>
  new Date(b.time).getTime() - new Date(a.time).getTime();
