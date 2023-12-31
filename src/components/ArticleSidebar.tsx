import Image from "next/image";
import Link from "next/link";
import placehold from "../../public/placeHold.png";

type ArticleSidebarProps = {
  title: string;
  imgSrc?: string | null;
  href: string;
};

export default function ArticleSidebar({
  title,
  imgSrc,
  href,
}: ArticleSidebarProps) {
  return (
    <Link href={href}>
      <div className="flex gap-3">
        {imgSrc ? (
          <Image
            alt={title}
            src={imgSrc}
            className="rounded-sm"
            width={80}
            height={80}
          />
        ) : (
          <Image
            src={placehold}
            alt={title}
            className="rounded-sm"
            width={80}
            height={80}
          />
        )}
        <h1 className="font-semibold">{title}</h1>
      </div>
    </Link>
  );
}
