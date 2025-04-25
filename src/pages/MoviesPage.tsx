import React, { useState, useEffect } from 'react';
import { Filter, Search } from 'lucide-react';
import MovieGrid from '../components/MovieGrid';
import { getAllMovies, Movie } from '../data/movies';

const MoviesPage: React.FC = () => {
  const allMovies = getAllMovies();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(allMovies);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    genre: '',
    year: '',
    rating: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique genres, years, and ratings for filter options
  const genres = Array.from(new Set(allMovies.flatMap(movie => movie.genre)));
  const years = Array.from(new Set(allMovies.map(movie => movie.releaseYear))).sort((a, b) => b - a);
  const ratings = [9, 8, 7, 6, 5].map(rating => ({ value: rating, label: `${rating}+` }));

  useEffect(() => {
    applyFilters();
  }, [searchTerm, filters]);

  const applyFilters = () => {
    let results = [...allMovies];
    
    // Apply search term
    if (searchTerm) {
      results = results.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply genre filter
    if (filters.genre) {
      results = results.filter(movie => 
        movie.genre.includes(filters.genre)
      );
    }
    
    // Apply year filter
    if (filters.year) {
      results = results.filter(movie => 
        movie.releaseYear === parseInt(filters.year)
      );
    }
    
    // Apply rating filter
    if (filters.rating) {
      results = results.filter(movie => 
        movie.rating >= parseInt(filters.rating)
      );
    }
    
    setFilteredMovies(results);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilters({
      genre: '',
      year: '',
      rating: ''
    });
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Explore Movies</h1>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search movies by title or genre..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full bg-cine-darker border border-gray-700 rounded-md py-3 pl-10 pr-4 focus:outline-none focus:border-cine-gold transition-colors"
              />
            </div>
            
            <button
              onClick={toggleFilters}
              className="md:hidden flex items-center justify-center gap-2 py-3 px-4 bg-cine-darker border border-gray-700 rounded-md"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>
          
          <div className={`md:flex gap-4 mb-6 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            <div className="flex-1 mb-3 md:mb-0">
              <label htmlFor="genre" className="text-sm text-gray-400 mb-1 block">
                Genre
              </label>
              <select
                id="genre"
                name="genre"
                value={filters.genre}
                onChange={handleFilterChange}
                className="w-full bg-cine-darker border border-gray-700 rounded-md py-2.5 px-3 focus:outline-none focus:border-cine-gold transition-colors"
              >
                <option value="">All Genres</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
            
            <div className="flex-1 mb-3 md:mb-0">
              <label htmlFor="year" className="text-sm text-gray-400 mb-1 block">
                Release Year
              </label>
              <select
                id="year"
                name="year"
                value={filters.year}
                onChange={handleFilterChange}
                className="w-full bg-cine-darker border border-gray-700 rounded-md py-2.5 px-3 focus:outline-none focus:border-cine-gold transition-colors"
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div className="flex-1 mb-3 md:mb-0">
              <label htmlFor="rating" className="text-sm text-gray-400 mb-1 block">
                Minimum Rating
              </label>
              <select
                id="rating"
                name="rating"
                value={filters.rating}
                onChange={handleFilterChange}
                className="w-full bg-cine-darker border border-gray-700 rounded-md py-2.5 px-3 focus:outline-none focus:border-cine-gold transition-colors"
              >
                <option value="">Any Rating</option>
                {ratings.map(rating => (
                  <option key={rating.value} value={rating.value}>{rating.label}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="bg-transparent text-primary-400 hover:text-primary-300 py-2.5 px-4 rounded-md transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
          
          {/* Results count */}
          <div className="text-gray-400">
            Found {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'}
          </div>
        </div>
        
        {/* Movie Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map(movie => (
              <div key={movie.id} className="card group">
                <a href={`/movie/${movie.id}`} className="block relative overflow-hidden aspect-[2/3]">
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
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400 mb-4">No movies found matching your criteria</p>
            <button onClick={resetFilters} className="btn btn-primary">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default MoviesPage;