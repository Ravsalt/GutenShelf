import { useState, useEffect, useRef } from "react";
import { Frown, BookOpen, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Library() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // 🔄 Debounce Search Input
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchTerm]);

  // 📚 Fetch Books
  useEffect(() => {
    setLoading(false);
    setError("Book queries have been removed. Book data is no longer available.");
  }, [debouncedTerm]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Library</h1>

      <div className="relative mb-10 max-w-xl mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 py-3 text-lg"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="text-center py-20 text-red-500">
          <Frown className="w-12 h-12 mx-auto mb-4" />
          <p className="text-xl font-semibold">Something broke 😵</p>
          <p className="text-sm text-gray-500 mt-1">{error}</p>
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <BookOpen className="w-12 h-12 mx-auto mb-4" />
          <p className="text-lg font-semibold">Book queries have been removed.</p>
          <p className="text-sm text-gray-400">Book data is no longer available.</p>
        </div>
      )}
    </div>
  );
}
