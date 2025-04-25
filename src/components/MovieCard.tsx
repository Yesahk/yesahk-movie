import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieCardProps {
  movie: Movie;
  featured?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, featured = false }) => {
  return (
    <Link 
      to={`/movie/${movie.id}`} 
      className={`card group ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative overflow-hidden aspect-[2/3]">
        <img 
          src={movie.posterUrl} 
          alt={`${movie.title} poster`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4">
          <div className="flex items-center space-x-1 mb-2">
            <Star className="text-cine-gold" size={16} fill="currentColor" />
            <span className="text-sm font-medium">{movie.rating.toFixed(1)}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold line-clamp-2">{movie.title}</h3>
          <div className="flex items-center justify-between mt-1">
            <p className="text-sm text-gray-300">{movie.releaseYear}</p>
            <div className="flex flex-wrap gap-1 justify-end">
              {movie.genre.slice(0, 2).map((genre, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-primary-900/50 px-2 py-1 rounded-md"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;