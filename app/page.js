import LoadMore from "@/components/LoadMore";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Hero />
      <main className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
        <Suspense>
        <LoadMore />
        </Suspense>
      </main>
      <Button />
    </>
  );
}
