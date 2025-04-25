import React from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../data/movies';

interface MovieGridProps {
  movies: Movie[];
  title?: string;
  featured?: boolean;
}

const MovieGrid: React.FC<MovieGridProps> = ({ 
  movies, 
  title, 
  featured = false 
}) => {
  return (
    <section className="py-12">
      <div className="container-custom">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              featured={featured && index === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieGrid;