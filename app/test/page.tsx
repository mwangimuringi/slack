"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Page = () => {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    </main>
  );
};

export default Page;
