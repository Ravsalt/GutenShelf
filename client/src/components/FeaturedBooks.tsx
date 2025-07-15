import { useEffect, useState } from "react";

export default function FeaturedBooks() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(false);
    setError("Book queries have been removed. Book data is no longer available.");
  }, []);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            📚 Featured Books
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Handpicked reads for the curious, the bold, and the bookworms.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <div className="col-span-full text-center text-red-500 font-medium">
              {error}
            </div>
          ) : (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
              Book queries have been removed. Book data is no longer available.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
