import { TribuneArticle } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import img from "../../public/placehold.jpg";

export default function CardHome({ article }: { article: TribuneArticle }) {
  return (
    <Link href={`articles/tribune/home/${article.docId}`}>
      <div className="flex hover:bg-base-200 p-4 w-full max-w-3xl rounded-xl transition-all cursor-pointer justify-between items-center">
        <div className="max-w-md ">
          <h1 className="font-bold">{article.title}</h1>
          <p className="text-ellipsis text-base-content/80">
            {article.description}
          </p>
        </div>
        {article.imgSrc ? (
          <Image
            src={article.imgSrc}
            alt={article.title}
            width={200}
            height={200}
            className="rounded-xl w-52 h-32"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            src={img}
            alt={article.title}
            width={200}
            height={200}
            className="rounded-xl w-52 h-32"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
    </Link>
  );
}
