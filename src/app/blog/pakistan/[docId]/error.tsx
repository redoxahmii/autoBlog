"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const router = useRouter();
  return (
    <div className=" flex h-screen items-center justify-center flex-col gap-3">
      <h2 className="font-bold text-2xl">Something went wrong!</h2>
      <button className="btn" onClick={() => router.push("/")}>
        Try again
      </button>
    </div>
  );
}
