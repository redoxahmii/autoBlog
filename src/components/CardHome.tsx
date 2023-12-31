import { BbcArticle } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import img from "../../public/placeHold.png";

export default function CardHome({ article }: { article: BbcArticle }) {
  return (
    <Link href={`articles/foreign/${article.docId}`}>
      <div className="flex hover:bg-base-200 p-4 w-full max-w-3xl rounded-xl transition-all cursor-pointer justify-around items-center">
        <div className="max-w-xl">
          <h1 className="font-bold">{article.title}</h1>
          <p className="text-ellipsis text-base-content/80">
            {article.description}
          </p>
        </div>
        {article.img ? (
          <Image
            src={article.img}
            alt={article.title}
            width={200}
            height={200}
            className="rounded-xl"
          />
        ) : (
          <Image
            src={img}
            alt={article.title}
            width={200}
            height={200}
            className="rounded-xl"
          />
        )}

        <div className="bg-black h-[2px]"></div>
      </div>
    </Link>
  );
}
