import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onSearchClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ currentPage, onNavigate, onSearchClick, searchQuery, onSearchChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <button onClick={() => handleNavClick('home')} className="text-xl font-bold text-gray-900">
              MyBlog
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('technology')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'technology' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => handleNavClick('lifestyle')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'lifestyle' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Lifestyle
            </button>
            <button
              onClick={() => handleNavClick('travel')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'travel' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Travel
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors whitespace-nowrap ${
                currentPage === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              About
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-sm ml-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={onSearchClick}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Mobile Menu Button and Search Icon */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onSearchClick}
              className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left transition-colors ${
                  currentPage === 'home' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('technology')}
                className={`text-left transition-colors ${
                  currentPage === 'technology' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Technology
              </button>
              <button
                onClick={() => handleNavClick('lifestyle')}
                className={`text-left transition-colors ${
                  currentPage === 'lifestyle' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Lifestyle
              </button>
              <button
                onClick={() => handleNavClick('travel')}
                className={`text-left transition-colors ${
                  currentPage === 'travel' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Travel
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left transition-colors ${
                  currentPage === 'about' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                About
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}