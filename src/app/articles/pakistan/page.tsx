import { HamariArticle } from "@/types/types";
import Card from "@/components/Card";
export default async function PakArticles() {
  const res = await fetch(`${process.env.NEXT_HAMARI_LINK}`, {
    next: { revalidate: 7200 },
  }).then((res) => res.json());
  return (
    <div className="mt-24 flex items-center gap-4 justify-center flex-col w-full">
      <h1 className="text-5xl font-bold">Pakistani Articles</h1>
      <div className="flex gap-2 items-center justify-center flex-wrap">
        {res.data.map((article: HamariArticle) => (
          <Card
            description={article.description}
            href={`/articles/pakistan/${article.docId}`}
            key={article.docId}
            title={article.title}
            img={article.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
