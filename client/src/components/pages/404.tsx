import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-950 px-4 py-12">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-extrabold text-gray-900 dark:text-gray-50 tracking-widest">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Page Not Found
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="mt-6 px-8 py-3 text-lg font-medium rounded-md transition-colors duration-300">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}