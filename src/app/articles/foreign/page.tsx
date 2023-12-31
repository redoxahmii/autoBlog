import Card from "@/components/Card";
import { BbcArticle } from "@/types/types";
export default async function Blog() {
  const res = await fetch(`${process.env.NEXT_BBC_LINK}`, {
    next: { revalidate: 7200 },
  }).then((res) => res.json());

  return (
    <div className="mt-24 flex items-center gap-4 justify-center flex-col w-full">
      <h1 className="text-5xl font-bold">BBC Articles</h1>
      <div className="flex  gap-2 items-center justify-center flex-wrap">
        {res.data.map((article: BbcArticle) => (
          <Card
            description={article.description}
            href={`/articles/foreign/${article.docId}`}
            key={article.url}
            title={article.title}
            img={article.img}
          />
        ))}
      </div>
    </div>
  );
}
