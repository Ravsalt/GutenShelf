import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function GithubButton() {
  return (
    <Button variant="outline" asChild>
      <a href="https://github.com/ravsalt/gutenshelf" target="_blank" rel="noopener noreferrer">
        <Github className="mr-2 h-4 w-4" />
        View on Github
      </a>
    </Button>
  );
}
