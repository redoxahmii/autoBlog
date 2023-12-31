import { TribuneArticle } from "@/types/types";
import Card from "@/components/Card";
export default async function TribuneTypes({ params }: Params) {
  const allArticles = await getAllArticles(params.tribuneId);
  return (
    <div className="mt-24 flex items-center gap-4 justify-center flex-col w-full">
      <h1 className="text-5xl font-bold">
        {params.tribuneId} tribune Articles
      </h1>
      <div className="flex gap-2 items-center justify-center flex-wrap">
        {allArticles.map((article: TribuneArticle) => (
          <Card
            description={article.description}
            href={`/articles/tribune/${params.tribuneId}/${article.docId}`}
            key={article.docId}
            title={article.title}
            img={article.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
async function getAllArticles(type: string) {
  const res = await fetch(`${process.env.NEXT_TRIBUNE_LINK}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tribune: `${type}`,
    }),
    next: { revalidate: 7200 },
  }).then((res) => res.json());
  return res.data;
}
type Params = {
  params: {
    tribuneId: string;
  };
};
