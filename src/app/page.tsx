import { TribuneArticle } from "@/types/types";
import CardHome from "@/components/CardHome";
import Sidebar from "@/components/Sidebar";

export default async function Home() {
  const Foreign = await fetch(`${process.env.NEXT_TRIBUNE_LINK}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tribune: `home`,
    }),
    next: { revalidate: 7200 },
  }).then((res) => res.json());
  return (
    <div className=" flex">
      <div className="flex-[3] p-2 flex-col flex pl-32 mt-5 gap-2 ">
        test
        {Foreign.data.map((article: TribuneArticle) => (
          <CardHome article={article} key={article.docId} />
        ))}
      </div>
      <div className="flex-[2] p-2">
        <Sidebar />
      </div>
    </div>
  );
}
