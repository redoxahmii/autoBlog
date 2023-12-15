"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const router = useRouter();
  return (
    <div className=" flex h-screen items-center justify-center flex-col gap-3">
      <h2 className="font-bold text-2xl">There is nothing to see here </h2>
      <button className="btn" onClick={() => router.push("/")}>
        Try again
      </button>
    </div>
  );
}
