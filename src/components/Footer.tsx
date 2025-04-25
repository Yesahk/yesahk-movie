import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Instagram, Twitter, Youtube, Heart, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cine-darker pt-12 pb-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-gray-800">
          <div className="md:w-1/3">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Film size={24} className="text-cine-gold" />
              <span className="text-xl font-bold">CineVerse</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your personal guide to the world of cinema. Discover, explore, and share the magic of movies.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/napi_2222/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100076223737915" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigate</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/movies" className="text-gray-400 hover:text-white transition-colors">Movies</Link></li>
                <li><Link to="/reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">More</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Upcoming Releases</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Top Rated</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trending</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-6 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-accent-500" /> by a Film Enthusiast
          </p>
          <p className="mt-2">
            &copy; {currentYear} MyCineVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;