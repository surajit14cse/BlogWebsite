import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
  };
  onBack: () => void;
}

export function BlogPostPage({ post, onBack }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Posts</span>
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] bg-gray-900 overflow-hidden mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 max-w-4xl pb-16">
        {/* Category Badge */}
        <span className="inline-block px-4 py-1 bg-blue-600 text-white rounded-full text-sm mb-4">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2 className="text-3xl text-gray-900 mt-8 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo.
          </p>

          <h2 className="text-3xl text-gray-900 mt-8 mb-4">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Understanding the fundamental concepts and principles</li>
            <li>Practical applications and real-world examples</li>
            <li>Best practices for implementation</li>
            <li>Common pitfalls to avoid</li>
            <li>Future trends and developments</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>

          <h2 className="text-3xl text-gray-900 mt-8 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
            mollitia animi, id est laborum et dolorum fuga.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum 
            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
            facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-gray-600 mb-4">Share this article:</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Twitter
            </button>
            <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition-colors">
              Facebook
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              LinkedIn
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
