import { TribuneArticle } from "@/types/types";
import CardHome from "@/components/CardHome";
import { sortByPublishedDescTri } from "@/utils/arraytime";

/**
 * [TODO: Arrange all articles according to time]
 */
export default async function Home() {
  const type1 = "world";
  const type2 = "tv";
  const Foreign = await fetch(`${process.env.NEXT_TRIBUNE_LINK}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tribune: type1,
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
      tribune: type2,
    }),
    next: { revalidate: 7200 },
  }).then((res) => res.json());

  // Sort the Foreign.data and Sports.data arrays
  Foreign.data.sort(sortByPublishedDescTri);
  Sports.data.sort(sortByPublishedDescTri);

  return (
    <div className="flex lg:mx-40 flex-col lg:flex-row">
      <div className="lg:flex-[3] p-2 flex-col flex mt-5 gap-2">
        <h1 className="text-center text-lg font-semibold tracking-tight underline">
          Latest Pakistani News
        </h1>
        {Foreign.data.map((article: TribuneArticle) => (
          <CardHome article={article} type={type1} key={article.docId} />
        ))}
      </div>
      <div className="lg:flex-[3] p-2 mt-5">
        <h1 className="text-center text-lg font-semibold tracking-tight underline">
          Latest Entertainment News
        </h1>
        {Sports.data.map((article: TribuneArticle) => (
          // INFO: Have to pass type so that the link can be generated
          <CardHome article={article} type={type2} key={article.docId} />
        ))}
      </div>
    </div>
  );
}
