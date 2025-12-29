import { Calendar, User } from 'lucide-react';

interface HeroProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export function Hero({ title, excerpt, image, category, date, author }: HeroProps) {
  return (
    <div className="relative h-[500px] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm mb-4">
            {category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            {excerpt}
          </p>
          <div className="flex items-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
