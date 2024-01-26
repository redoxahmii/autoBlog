import { TribuneArticle } from "@/types/types";
import CardHome from "@/components/CardHome";
import { sortByPublishedDescTri } from "@/utils/arraytime";

/**
 * [TODO: Arrange all articles according to time]
 */
export default async function Home() {
  const type = "world";
  const Foreign = await fetch(`${process.env.NEXT_TRIBUNE_LINK}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tribune: type,
    }),
    next: { revalidate: 7200 },
  }).then((res) => res.json());

  const Sports = await fetch(`${process.env.NEXT_TRIBUNE_LINK}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tribune: "sports",
    }),
    next: { revalidate: 7200 },
  }).then((res) => res.json());

  // Sort the Foreign.data and Sports.data arrays
  Foreign.data.sort(sortByPublishedDescTri);
  Sports.data.sort(sortByPublishedDescTri);

  return (
    <div className="flex mx-40">
      <div className="flex-[3] p-2 flex-col flex mt-5 gap-2">
        {Foreign.data.map((article: TribuneArticle) => (
          <CardHome article={article} type={type} key={article.docId} />
        ))}
      </div>
      <div className="flex-[3] p-2 mt-5">
        {Sports.data.map((article: TribuneArticle) => (
          // INFO: Have to pass type so that the link can be generated
          <CardHome article={article} type="sports" key={article.docId} />
        ))}
      </div>
    </div>
  );
}
