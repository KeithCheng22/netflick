import { fetchMovies } from "./action";
import LoadMore from "@/components/LoadMore";
import Button from "@/components/Button";

export default async function Home() {
  const movies = await fetchMovies(1)

  return (
    <>
      <main className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
        {movies}
      
      <LoadMore />
      </main>
      <Button />
    </>
  );
}
