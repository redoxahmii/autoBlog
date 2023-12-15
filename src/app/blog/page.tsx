import Card from "@/components/Card";
import { Article } from "@/types/types";
export default async function Blog() {
  const res = await fetch("https://rss-feed-delta.vercel.app/html", {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className="mt-24 flex items-center gap-4 justify-center flex-col w-full">
      <h1 className="text-5xl font-bold">Articles</h1>
      <div className="flex  gap-2 items-center justify-center flex-wrap">
        {res.data.map((article: Article) => (
          <Card
            key={article.url}
            title={article.title}
            id={article.docId}
            img={article.img}
          />
        ))}
      </div>
    </div>
  );
}
