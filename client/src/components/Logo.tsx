
import React from 'react';
import { BookOpen } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 text-lg font-bold text-primary">
      <BookOpen className="h-6 w-6" />
      <span>GutenShelf</span>
    </div>
  );
};

export default Logo;
