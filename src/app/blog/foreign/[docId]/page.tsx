import { BbcArticle } from "@/types/types";
import type { Metadata } from "next";

export const generateMetadata = async (props: any): Promise<Metadata> => {
  const { params } = props;
  const article = await getArticle(params.docId);
  return {
    title: article?.title,
    description: article?.description,
  };
};

export default async function blogDetail({ params }: Params) {
  const article: BbcArticle = await getArticle(params.docId);
  if (!article) return null;
  return (
    <div className="mt-24 flex flex-col gap-8 items-center justify-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-center">{article.title}</h1>
      </div>
      <h3 className="text-lg text-base-content/70">{article.description}</h3>
      <div className="flex items-center justify-center">
        <div
          dangerouslySetInnerHTML={{ __html: article.article }}
          className="article-content prose lg:prose prose-base prose-h2:hidden prose-figcaption:hidden"
        ></div>
      </div>
    </div>
  );
}

async function getArticle(id: string) {
  const res = await fetch(`${process.env.NEXT_BBC_LINK}`, {
    cache: "no-store",
  }).then((res) => res.json());
  const AllArticles = res.data;
  const foundDocument = AllArticles.find(
    (article: BbcArticle) => article.docId === id,
  );
  return foundDocument;
}
type Params = {
  params: {
    docId: string;
  };
};
