import { tribuneTypes } from "@/types/types";
import Link from "next/link";
export default function Tribune() {
  return (
    <div className="flex flex-col items-center flex-wrap justify-center gap-3 mt-10 mx-10">
      <h1 className="font-bold text-4xl mb-4">Tribune categories</h1>
      <div className="flex flex-wrap gap-10">
        {tribuneTypes.map((type) => (
          <div
            key={type.param}
            className="bg-base-200 shadow-xl rounded-xl p-5"
          >
            <h1 className="text-2xl font-semibold">{type.param}</h1>
            <Link href={`/articles/tribune/${type.param}`}>
              <button className="btn btn-primary">Navigate</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
