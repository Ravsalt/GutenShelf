import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookHeart, Info } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.h1
              variants={{
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white"
            >
              Unlock Infinite Stories on <span className="text-primary">GutenShelf</span>
            </motion.h1>
            <motion.p
              variants={{
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Dive into the world’s greatest library. Classics, bestsellers, and hidden gems. All at zero cost for an infinite adventure.
            </motion.p>
            <motion.div
              variants={{
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button asChild size="lg">
                <Link to="/library" className="flex items-center gap-2">
                  <BookHeart className="h-5 w-5" /> Explore Library
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about" className="flex items-center gap-2">
                  <Info className="h-5 w-5" /> About Us
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="/image.png"
              width={600}
              height={400}
              alt="An open book"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
