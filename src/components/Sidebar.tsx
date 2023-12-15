export default function Sidebar() {
  return (
    <div className="h-full flex flex-col mt-14">
      <h1 className=" font-semibold text-xl tracking-tight mb-10">
        Discover more of what matters to you
      </h1>
      <div className="flex flex-wrap max-w-sm w-full gap-2">
        {topics.map((topic) => (
          <div key={topic.id}>
            <p className="badge badge-lg cursor-pointer bg-base-200">
              {topic.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const topics = [
  {
    title: "Programming",
    id: 1,
  },
  {
    title: "Love",
    id: 2,
  },
  {
    title: "Technology",
    id: 3,
  },
  {
    title: "Self Improvement",
    id: 4,
  },
  {
    title: "Writing",
    id: 5,
  },
];
