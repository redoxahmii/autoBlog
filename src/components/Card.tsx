import Image from "next/image";
import placehold from "../../public/placehold.jpg";
import Link from "next/link";
type CardProps = {
  title: string;
  description: string;
  href: string;
  img: string | null;
};
export default function Card({ title, img, href, description }: CardProps) {
  return (
    <Link href={href}>
      <div className="card cursor-pointer w-96 rounded-md bg-base-100 shadow-xl">
        <figure>
          {img ? (
            <Image
              src={img}
              alt={title}
              style={{ objectFit: "cover" }}
              width={384}
              height={384}
            />
          ) : (
            <Image
              src={placehold}
              alt={title}
              style={{ objectFit: "cover" }}
              width={384}
              height={384}
            />
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title tracking-tighter text-3xl">{title}</h2>
          <p className="truncate">{description}</p>
        </div>
      </div>
    </Link>
  );
}
