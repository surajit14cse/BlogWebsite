import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlogCard } from './components/BlogCard';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { SearchModal } from './components/SearchModal';
import { BlogPostPage } from './components/BlogPostPage';

// Mock blog data
const featuredPost = {
  title: 'The Future of Modern Workspaces',
  excerpt: 'Exploring how technology and design are reshaping the way we work and collaborate in the digital age.',
  image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2OTE2Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  category: 'Technology',
  date: 'Dec 28, 2025',
  author: 'Sarah Johnson',
};

const blogPosts = [
  {
    id: 1,
    title: 'Productivity Tips for Remote Workers',
    excerpt: 'Discover effective strategies to stay focused and productive while working from home. Learn how to create the perfect work environment.',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXB0b3B8ZW58MXx8fHwxNzY2OTQ0OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Lifestyle',
    date: 'Dec 26, 2025',
    author: 'Michael Chen',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Exploring Nature\'s Hidden Wonders',
    excerpt: 'Join us on a journey through breathtaking landscapes and discover the beauty of untouched natural environments around the world.',
    image: 'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY2ODY4NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Travel',
    date: 'Dec 24, 2025',
    author: 'Emma Williams',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'The Rise of AI in Everyday Life',
    excerpt: 'Artificial intelligence is transforming how we live and work. Explore the latest developments and what they mean for our future.',
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY2OTM0MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Technology',
    date: 'Dec 22, 2025',
    author: 'David Park',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Creative Design Trends for 2025',
    excerpt: 'Stay ahead of the curve with the latest design trends. From minimalism to bold colors, see what\'s shaping the creative industry.',
    image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjY5MDIzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Design',
    date: 'Dec 20, 2025',
    author: 'Lisa Anderson',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Adventure Awaits: Top Travel Destinations',
    excerpt: 'Planning your next adventure? Check out our curated list of must-visit destinations that offer unforgettable experiences.',
    image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY2ODYwMzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Travel',
    date: 'Dec 18, 2025',
    author: 'James Martinez',
    readTime: '10 min read',
  },
  {
    id: 6,
    title: 'Building Better Digital Products',
    excerpt: 'Learn the principles of creating user-centric digital products that solve real problems and delight users at every touchpoint.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2OTE2Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Technology',
    date: 'Dec 16, 2025',
    author: 'Sarah Johnson',
    readTime: '9 min read',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
    }
  };

  // Filter posts based on current page
  const getFilteredPosts = () => {
    if (currentPage === 'home') {
      return blogPosts;
    }
    // Capitalize first letter to match category names
    const category = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    return blogPosts.filter(post => post.category.toLowerCase() === currentPage.toLowerCase());
  };

  const filteredPosts = getFilteredPosts();
  const selectedPost = selectedPostId ? blogPosts.find(post => post.id === selectedPostId) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onSearchClick={() => setIsSearchOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => {
          setIsSearchOpen(false);
          setSearchQuery('');
        }}
        posts={blogPosts}
        onPostClick={handlePostClick}
      />

      {selectedPost ? (
        <BlogPostPage post={selectedPost} onBack={handleBackToList} />
      ) : currentPage === 'about' ? (
        <AboutPage />
      ) : (
        <>
          {/* Hero Section - only show on home page */}
          {currentPage === 'home' && <Hero {...featuredPost} />}

          {/* Main Content */}
          <main className="container mx-auto px-4 py-12">
            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-3xl text-gray-900 mb-2">
                {currentPage === 'home' 
                  ? 'Latest Posts' 
                  : `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Posts`}
              </h2>
              <p className="text-gray-600">
                {currentPage === 'home'
                  ? 'Discover our most recent articles and stories'
                  : `Explore our ${currentPage} articles`}
              </p>
            </div>

            {/* Blog Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredPosts.map((post) => (
                  <BlogCard 
                    key={post.id} 
                    {...post} 
                    onClick={() => handlePostClick(post.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No posts found in this category yet. Check back soon!
                </p>
              </div>
            )}

            {/* Load More Button - only show if there are posts */}
            {filteredPosts.length > 0 && (
              <div className="flex justify-center">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Load More Posts
                </button>
              </div>
            )}
          </main>
        </>
      )}

      <Footer />
    </div>
  );
}