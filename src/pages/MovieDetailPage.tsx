import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Star, Calendar, User, Film, ArrowLeft } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';
import MovieCard from '../components/MovieCard';
import { getMovieById, getReviewsByMovieId, getMoviesByGenre, Movie } from '../data/movies';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  useEffect(() => {
    if (id) {
      const movieId = parseInt(id);
      const foundMovie = getMovieById(movieId);
      
      if (foundMovie) {
        setMovie(foundMovie);
        
        // Get reviews for this movie
        const movieReviews = getReviewsByMovieId(movieId);
        setReviews(movieReviews);
        
        // Get similar movies (same genre, excluding current movie)
        if (foundMovie.genre.length > 0) {
          const relatedMovies = getMoviesByGenre(foundMovie.genre[0])
            .filter(m => m.id !== movieId)
            .slice(0, 4);
          setSimilarMovies(relatedMovies);
        }
      }
      
      // Scroll to top when movie changes
      window.scrollTo(0, 0);
    }
  }, [id]);
  
  if (!movie) {
    return (
      <div className="container-custom pt-28 pb-16 min-h-screen">
        <div className="text-center py-16">
          <p className="text-xl text-gray-400">Loading movie details...</p>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={18} className="text-cine-gold" fill="currentColor" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <span key={i} className="relative">
            <Star size={18} className="text-gray-600" />
            <Star size={18} className="text-cine-gold absolute top-0 left-0 overflow-hidden w-1/2" fill="currentColor" />
          </span>
        );
      } else {
        stars.push(<Star key={i} size={18} className="text-gray-600" />);
      }
    }
    
    return (
      <div className="flex items-center gap-1">
        {stars}
        <span className="ml-2 font-medium">{rating.toFixed(1)}/10</span>
      </div>
    );
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <main>
      {/* Hero banner with movie backdrop */}
      <div 
        className="relative h-[60vh] md:h-[70vh] bg-center bg-cover"
        style={{ backgroundImage: `url(${movie.backdropUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-cine-dark via-cine-dark/80 to-cine-dark/50"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-12 pt-32">
          <Link 
            to="/movies" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Movies
          </Link>
        </div>
      </div>
      
      {/* Movie details */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster and key details */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={movie.posterUrl} 
                alt={`${movie.title} poster`} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="mt-6 bg-cine-darker rounded-lg p-5 space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Runtime</p>
                  <p className="font-medium">
                    {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Release Year</p>
                  <p className="font-medium">{movie.releaseYear}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <User size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Director</p>
                  <p className="font-medium">{movie.director}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Film size={20} className="text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Genre</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {movie.genre.map((genre, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-primary-800/70 px-2 py-1 rounded"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {movie.title}
            </h1>
            
            <div className="mb-8">
              {renderStars(movie.rating)}
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed">
                {movie.plot}
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Cast</h2>
              <div className="flex flex-wrap gap-6">
                {movie.cast.map((actor, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800 flex items-center justify-center mb-2 overflow-hidden">
                      <User size={30} className="text-gray-600" />
                    </div>
                    <p className="text-sm font-medium">{actor}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Trailer</h2>
              <div className="aspect-video overflow-hidden rounded-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={movie.trailerUrl} 
                  title={`${movie.title} trailer`}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            {/* Reviews section */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Reviews ({reviews.length})
                </h2>
                <Link 
                  to="/reviews" 
                  className="text-primary-400 hover:text-primary-300 text-sm transition-colors"
                >
                  View All Reviews
                </Link>
              </div>
              
              {displayedReviews.length > 0 ? (
                <div className="space-y-4">
                  {displayedReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                  
                  {reviews.length > 3 && (
                    <button
                      onClick={() => setShowAllReviews(!showAllReviews)}
                      className="text-primary-400 hover:text-primary-300 mt-4 font-medium transition-colors"
                    >
                      {showAllReviews ? 'Show Less' : `Show All Reviews (${reviews.length})`}
                    </button>
                  )}
                </div>
              ) : (
                <p className="text-gray-400">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar movies */}
      {similarMovies.length > 0 && (
        <section className="py-12 bg-cine-darker">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Similar Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {similarMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default MovieDetailPage;