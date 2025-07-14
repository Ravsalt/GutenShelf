import { Button } from "../ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 md:py-24">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
        className="container px-4 md:px-6 max-w-3xl text-center"
      >
        <motion.h2
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
          className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white mb-4"
        >
          About GutenShelf
        </motion.h2>
        <motion.div
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
          className="flex items-center justify-center space-x-2 text-lg font-bold text-primary mb-8"
        >
          <BookOpen className="h-8 w-8" />
          <h1 className="text-3xl font-bold">GutenShelf</h1>
        </motion.div>
        <motion.p
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto"
        >
          <strong>Created by Raven</strong>, GutenShelf is a <span className="font-semibold text-gray-900 dark:text-white">free and open-source online book library</span> designed to democratize access to knowledge. Browse classics, discover hidden gems, or build your own virtual bookshelf—without ads, paywalls, or bullshit.
        </motion.p>
        <motion.p
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Whether you're a curious reader, a broke student, or a dev who just loves good UX—GutenShelf is built for you. Built with modern tools, hosted in the cloud, and open to contributions.
        </motion.p>
        <motion.div
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
          }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button asChild size="lg">
            <Link to="/" className="flex items-center gap-2">
              ← Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/Ravsalt/GutenShelf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2V8.5a4.8 4.8 0 0 0-1-3.2V2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v3.3a4.8 4.8 0 0 0-1 3.2v6.3a4.8 4.8 0 0 0-1 3.2v4" />
                <path d="M12 18h.01" />
              </svg>
              Contribute on GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
