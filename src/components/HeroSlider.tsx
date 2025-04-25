import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Movie } from '../data/movies';

interface HeroSliderProps {
  movies: Movie[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredMovies = movies.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? featuredMovies.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % featuredMovies.length
    );
  };

  return (
    <div className="relative h-screen max-h-[700px] overflow-hidden">
      {/* Slides */}
      {featuredMovies.map((movie, index) => (
        <div 
          key={movie.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${movie.backdropUrl})` }}
          ></div>
          
          <div className="container-custom relative z-20 h-full flex flex-col justify-center pt-16">
            <div className="max-w-2xl animate-slide-up">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center bg-cine-gold/90 text-cine-darker px-3 py-1 rounded-md">
                  <Star size={16} fill="currentColor" className="mr-1" />
                  <span className="font-medium">{movie.rating.toFixed(1)}</span>
                </div>
                <span className="bg-primary-800/80 px-3 py-1 rounded-md text-sm">
                  {movie.genre[0]}
                </span>
                <span className="text-sm border border-gray-600 px-3 py-1 rounded-md">
                  {movie.releaseYear}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                {movie.title}
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 line-clamp-3">
                {movie.plot}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={`/movie/${movie.id}`} 
                  className="btn btn-accent"
                >
                  Watch Trailer
                </Link>
                <Link 
                  to={`/movie/${movie.id}`} 
                  className="btn btn-outline"
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-3">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-cine-gold w-8' 
                : 'bg-gray-400 bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSlider;