import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { getAllReviews, getMovieById } from '../data/movies';

const ReviewsPage: React.FC = () => {
  const allReviews = getAllReviews();
  const [sortBy, setSortBy] = useState<'latest' | 'rating'>('latest');
  
  // Sort reviews based on sort option
  const sortedReviews = [...allReviews].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return b.rating - a.rating;
    }
  });

  return (
    <main className="pt-24 pb-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Movie Reviews</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'latest' | 'rating')}
              className="bg-cine-darker border border-gray-700 rounded-md py-1.5 px-3 text-sm focus:outline-none focus:border-cine-gold transition-colors"
            >
              <option value="latest">Latest</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedReviews.map(review => {
            const movie = getMovieById(review.movieId);
            
            return (
              <article key={review.id} className="card hover:transform-none">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={review.avatar || 'https://images.pexels.com/photos/6065619/pexels-photo-6065619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
                      alt={`${review.author}'s avatar`} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{review.author}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>{review.date}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <span className="text-cine-gold font-medium">{review.rating}/10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {movie && (
                    <div className="flex items-center gap-3 mb-4 py-3 px-4 bg-cine-dark rounded-lg">
                      <div className="w-12 h-16 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={movie.posterUrl} 
                          alt={movie.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          <Link 
                            to={`/movie/${movie.id}`}
                            className="hover:text-primary-400 transition-colors"
                          >
                            {movie.title}
                          </Link>
                        </h4>
                        <div className="flex items-center text-sm text-gray-400 gap-4">
                          <span>{movie.releaseYear}</span>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-gray-300 mb-4 line-clamp-4">
                    {review.content}
                  </p>
                  
                  <Link 
                    to={`/movie/${review.movieId}`} 
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Read Full Review
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ReviewsPage;