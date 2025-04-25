import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import MovieGrid from '../components/MovieGrid';
import NewsletterSignup from '../components/NewsletterSignup';
import { getAllMovies } from '../data/movies';

const HomePage: React.FC = () => {
  const allMovies = getAllMovies();
  
  // Get featured movies (first 3 for hero, next 8 for grid)
  const heroMovies = allMovies.slice(0, 3);
  const featuredMovies = allMovies.slice(0, 8);

  return (
    <main>
      {/* Hero Slider */}
      <HeroSlider movies={heroMovies} />
      
      {/* Featured Movies */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Movies</h2>
            <Link 
              to="/movies" 
              className="flex items-center text-primary-400 hover:text-primary-300 transition-colors"
            >
              View All
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredMovies.map((movie, index) => (
              <Link 
                key={movie.id}
                to={`/movie/${movie.id}`} 
                className="card group"
              >
                <div className="relative overflow-hidden aspect-[2/3]">
                  <img 
                    src={movie.posterUrl} 
                    alt={`${movie.title} poster`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-lg md:text-xl font-bold mb-1">{movie.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{movie.releaseYear}</span>
                      <span className="flex items-center text-cine-gold">
                        <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        {movie.rating.toFixed(1)}
                      </span>
                    </div>
                    
                    <div className="mt-2 flex flex-wrap gap-1">
                      {movie.genre.slice(0, 2).map((genre, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-primary-900/70 px-2 py-0.5 rounded"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />
      
      {/* About Teaser Section */}
      <section className="py-16 bg-gradient-to-b from-cine-dark to-cine-darker">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About CineVerse</h2>
            <p className="text-xl text-gray-300 mb-8">
              A place where cinephiles gather to explore the magic of movies. 
              From blockbusters to indie gems, we celebrate the art of storytelling through film.
            </p>
            <Link to="/about" className="btn btn-outline">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;