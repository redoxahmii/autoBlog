import Link from "next/link";

export default async function Sidebar() {
  return (
    <div className="h-full flex flex-col mt-14">
      <h1 className=" font-semibold text-xl tracking-tight mb-10">
        Discover more of what matters to you
      </h1>
      <div className="flex flex-wrap max-w-sm w-full gap-2">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/articles/${topic.href}`}>
            <div key={topic.id}>
              <p className="badge badge-lg cursor-pointer bg-base-200">
                {topic.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const topics = [
  {
    title: "BBC",
    id: 1,
    href: "/foreign",
  },
  {
    title: "HamariWeb",
    id: 2,
    href: "/pakistan",
  },
  {
    title: "Tribune",
    id: 3,
    href: "/tribune",
  },
  {
    title: "Tribune Sports",
    id: 4,
    href: "/tribune/sports",
  },
];
