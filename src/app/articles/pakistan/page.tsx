import { HamariArticle } from "@/types/types";
import Card from "@/components/Card";
import { sortByPublishedDescTri } from "@/utils/arraytime";
export default async function PakArticles() {
  const res = await fetch(`${process.env.NEXT_HAMARI_LINK}`, {
    next: { revalidate: 7200 },
  }).then((res) => res.json());
  res.data.sort(sortByPublishedDescTri);

  return (
    <div className="flex items-center gap-4 justify-center flex-col w-full">
      <h1 className="text-5xl mt-10 font-bold mb-10">HamariWeb Articles</h1>
      <div className="flex gap-10 items-center justify-center flex-wrap">
        {res.data.map((article: HamariArticle) => (
          <Card
            description={article.description}
            href={`/articles/pakistan/${article.docId}`}
            key={article.docId}
            published={article.published}
            title={article.title}
            img={article.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
