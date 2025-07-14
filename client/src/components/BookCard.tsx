import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "../../../shared/src/types";
import { BookOpen, Download } from "lucide-react"; // Import icons
import { memo } from "react";

interface BookCardProps {
  book: Book;
}

const BookCard = memo(({ book }: BookCardProps) => {
  const readmeLink = book.formats["text/html"];
  const downloadLink = book.formats["application/pdf"] || book.formats["application/epub+zip"] || book.formats["text/plain"];

  return (
    <Card className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="p-0">
        <img
          src={book.formats["image/jpeg"]}
          alt={book.title}
          className="h-64 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-6 grid gap-4">
        <CardTitle className="text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">{book.title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {book.authors.map((author) => author.name).join(", ")}
        </CardDescription>
        <p className="text-sm text-gray-500">
          Downloads: {book.download_count}
        </p>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {readmeLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={readmeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                <BookOpen className="h-4 w-4" />
                Read Now  
              </a>
            </Button>
          )}
          {downloadLink && (
            <Button size="sm" asChild>
              <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                <Download className="h-4 w-4" />
                Download
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
});

export default BookCard;
