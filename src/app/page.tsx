import { BbcArticle } from "@/types/types";
import CardHome from "@/components/CardHome";
import Sidebar from "@/components/Sidebar";

export default async function Home() {
  const Foreign = await fetch(`${process.env.NEXT_BBC_LINK}`, {
    next: { revalidate: 7200 },
  }).then((res) => res.json());
  return (
    <div className="mt-20 flex">
      <div className="flex-[3] p-2 flex-col flex pl-32 mt-10 gap-2">
        {Foreign.data.map((article: BbcArticle) => (
          <CardHome article={article} key={article.docId} />
        ))}
      </div>
      <div className="flex-[2] p-2">
        <Sidebar />
      </div>
    </div>
  );
}
