"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import placehold from "../../public/placeHold.png";
type CardProps = {
  title: string;
  id: string;
  img: string | null;
};
export default function Card({ title, id, img }: CardProps) {
  const router = useRouter();
  function handleClick() {
    router.push(`/blog/${id}`);
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        {img ? (
          <Image src={img} alt={title} width={384} height={384} />
        ) : (
          <Image src={placehold} alt={title} width={384} height={384} />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-md btn-primary" onClick={handleClick}>
            Read
          </button>
        </div>
      </div>
    </div>
  );
}
