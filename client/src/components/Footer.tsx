


import { Github, Facebook } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Logo />
          <p className="text-gray-600 dark:text-gray-400">
            Discover a world of stories with GutenShelf.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/library" className="hover:underline">Library</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 flex justify-between items-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} GutenShelf. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com/duero.10" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://github.com/ravsalt" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}