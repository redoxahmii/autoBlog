import { BbcArticle } from "@/types/types";
import ArticleSidebar from "@/components/ArticleSidebar";
import shuffleArray from "@/utils/shufflearray";
import type { Metadata } from "next";

export const generateMetadata = async (props: any): Promise<Metadata> => {
  const { params } = props;
  const data = await getArticle(params.docId);
  const article = data.foundDocument;
  return {
    title: article?.title,
    description: article?.description,
  };
};

export default async function blogDetail({ params }: Params) {
  const data = await getArticle(params.docId);
  const article = data.foundDocument;
  if (!article) return null;
  return (
    <div className="flex mt-10 flex-col gap-8 pb-10 px-20">
      <div className="flex gap-5 flex-col">
        <h1 className="lg:text-5xl text-2xl font-bold">{article.title}</h1>
        <h3 className="lg:text-xl truncate">{article.description}</h3>
      </div>
      <div className="flex flex-row-reverse justify-between relative">
        <div className="w-full max-w-md mr-10 px-5 flex-col gap-3 top-4 sticky h-fit lg:block hidden">
          <h1 className="font-bold text-xl mb-2">Read more Articles</h1>
          <div className="flex flex-col gap-3">
            {data.randomArticles.map((article: BbcArticle) => (
              <ArticleSidebar
                key={article.docId}
                imgSrc={article.img}
                title={article.title}
                href={`/articles/foreign/${article.docId}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 ml-10">
          <div
            dangerouslySetInnerHTML={{ __html: article.article }}
            className="article-content prose lg:prose-lg prose-base prose-h2:hidden prose-figcaption:hidden"
          ></div>
        </div>
      </div>
    </div>
  );
}

async function getArticle(id: string) {
  const res = await fetch(`${process.env.NEXT_BBC_LINK}`, {
    next: { revalidate: 7200 },
  }).then((res) => res.json());
  const AllArticles = res.data;
  const foundDocument = AllArticles.find(
    (article: BbcArticle) => article.docId === id,
  );
  shuffleArray(AllArticles);
  const randomArticles = AllArticles.slice(0, 5);
  return { foundDocument, randomArticles };
}
type Params = {
  params: {
    docId: string;
  };
};
