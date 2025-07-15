import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Book } from "../../shared/src/types";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => (
  <div className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800 animate-pulse">
    <Skeleton className="h-64 w-full rounded-t-lg" />
    <div className="p-6 space-y-4">
      <Skeleton className="h-6 w-3/4 rounded" />
      <Skeleton className="h-4 w-1/2 rounded" />
      <Skeleton className="h-4 w-1/4 rounded" />
    </div>
  </div>
);

export default function FeaturedBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://gutendex.com/books");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data.results);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load featured books. Try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
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
            Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          ) : error ? (
            <div className="col-span-full text-center text-red-500 font-medium">
              {error}
            </div>
          ) : books.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No featured books at the moment. Check back soon!
            </div>
          ) : (
            books.slice(0, 3).map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <Link to="/library">
            <Button variant="outline" size="lg" className="hover:bg-primary/10 dark:hover:bg-primary/20">
              📖 View All Books
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
