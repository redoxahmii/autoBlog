import Card from "@/components/Card";
import { BbcArticle } from "@/types/types";
import { sortByPublishedDescBBC } from "@/utils/arraytime";

export default async function Blog() {
  const res = await fetch(`${process.env.NEXT_BBC_LINK}`, {
    cache: "no-store",
  }).then((res) => res.json());
  res.data.sort(sortByPublishedDescBBC);

  return (
    <div className="flex items-center gap-4 justify-center flex-col w-full">
      <h1 className="text-5xl mt-10 font-bold mb-10">BBC Articles</h1>
      <div className="flex gap-10 items-center justify-center flex-wrap">
        {res.data.map((article: BbcArticle) => (
          <Card
            published={article.time}
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
