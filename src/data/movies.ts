export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  releaseYear: number;
  rating: number;
  genre: string[];
  runtime: number;
  director: string;
  cast: string[];
  plot: string;
  trailerUrl: string;
  reviews?: Review[];
}

export interface Review {
  id: number;
  movieId: number;
  author: string;
  date: string;
  rating: number;
  content: string;
  avatar?: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    posterUrl: "https://images.pexels.com/photos/2894944/pexels-photo-2894944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2014,
    rating: 8.6,
    genre: ["Sci-Fi", "Adventure", "Drama"],
    runtime: 169,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    plot: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
    reviews: [
      {
        id: 1,
        movieId: 1,
        author: "FilmFanatic",
        date: "2023-09-15",
        rating: 9,
        content: "A masterpiece that combines stunning visuals with a deeply emotional story. Nolan at his best!",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        id: 2,
        movieId: 1,
        author: "CinemaSnob",
        date: "2023-08-22",
        rating: 7,
        content: "Beautiful cinematography but the third act loses some of its scientific grounding. Still a must-watch.",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 2,
    title: "Inception",
    posterUrl: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2010,
    rating: 8.8,
    genre: ["Sci-Fi", "Action", "Thriller"],
    runtime: 148,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    reviews: [
      {
        id: 3,
        movieId: 2,
        author: "MovieBuff",
        date: "2023-07-18",
        rating: 10,
        content: "Mind-bending and revolutionary. Nolan created something truly original here.",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterUrl: "https://images.pexels.com/photos/8413203/pexels-photo-8413203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    runtime: 152,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    reviews: [
      {
        id: 4,
        movieId: 3,
        author: "ComicBookGuru",
        date: "2023-09-05",
        rating: 10,
        content: "The definitive superhero movie. Heath Ledger's Joker remains one of the most iconic performances in film history.",
        avatar: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 4,
    title: "Parasite",
    posterUrl: "https://images.pexels.com/photos/8112141/pexels-photo-8112141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2019,
    rating: 8.5,
    genre: ["Thriller", "Drama", "Comedy"],
    runtime: 132,
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    trailerUrl: "https://www.youtube.com/embed/5xH0HfJHsaY",
    reviews: [
      {
        id: 5,
        movieId: 4,
        author: "CinemaSage",
        date: "2023-08-12",
        rating: 10,
        content: "A perfect film. Bong Joon-ho crafts a masterful social commentary that's both entertaining and profound.",
        avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    posterUrl: "https://images.pexels.com/photos/1828307/pexels-photo-1828307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/712325/pexels-photo-712325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 1994,
    rating: 9.3,
    genre: ["Drama"],
    runtime: 142,
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
    reviews: [
      {
        id: 6,
        movieId: 5,
        author: "ClassicFilmBuff",
        date: "2023-09-20",
        rating: 10,
        content: "The greatest film ever made. A timeless story of hope and friendship that continues to inspire decades later.",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: 6,
    title: "La La Land",
    posterUrl: "https://images.pexels.com/photos/2649771/pexels-photo-2649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/4318822/pexels-photo-4318822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    releaseYear: 2016,
    rating: 8.0,
    genre: ["Musical", "Romance", "Drama"],
    runtime: 128,
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt"],
    plot: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    trailerUrl: "https://www.youtube.com/embed/0pdqf4P9MB8",
    reviews: [
      {
        id: 7,
        movieId: 6,
        author: "MusicLover",
        date: "2023-07-28",
        rating: 9,
        content: "A beautiful modern musical with incredible performances from Gosling and Stone. The ending is absolutely perfect.",
        avatar: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    movieId: 1,
    author: "FilmFanatic",
    date: "2023-09-15",
    rating: 9,
    content: "A masterpiece that combines stunning visuals with a deeply emotional story. Nolan at his best!",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    movieId: 1,
    author: "CinemaSnob",
    date: "2023-08-22",
    rating: 7,
    content: "Beautiful cinematography but the third act loses some of its scientific grounding. Still a must-watch.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    movieId: 2,
    author: "MovieBuff",
    date: "2023-07-18",
    rating: 10,
    content: "Mind-bending and revolutionary. Nolan created something truly original here.",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    movieId: 3,
    author: "ComicBookGuru",
    date: "2023-09-05",
    rating: 10,
    content: "The definitive superhero movie. Heath Ledger's Joker remains one of the most iconic performances in film history.",
    avatar: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    movieId: 4,
    author: "CinemaSage",
    date: "2023-08-12",
    rating: 10,
    content: "A perfect film. Bong Joon-ho crafts a masterful social commentary that's both entertaining and profound.",
    avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    movieId: 5,
    author: "ClassicFilmBuff",
    date: "2023-09-20",
    rating: 10,
    content: "The greatest film ever made. A timeless story of hope and friendship that continues to inspire decades later.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    movieId: 6,
    author: "MusicLover",
    date: "2023-07-28",
    rating: 9,
    content: "A beautiful modern musical with incredible performances from Gosling and Stone. The ending is absolutely perfect.",
    avatar: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    movieId: 1,
    author: "SciFiEnthusiast",
    date: "2023-09-10",
    rating: 8,
    content: "The space sequences are breathtaking. Some of the plot points require suspension of disbelief, but overall a fantastic sci-fi experience.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 9,
    movieId: 2,
    author: "DreamDiver",
    date: "2023-08-05",
    rating: 9,
    content: "The concept of dream invasion is brilliantly executed. The visual effects and Hans Zimmer's score elevate this film to greatness.",
    avatar: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 10,
    movieId: 4,
    author: "FilmScholar",
    date: "2023-07-15",
    rating: 9,
    content: "A scathing critique of capitalism wrapped in a thrilling package. The shift in tone is masterfully handled.",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const getAllMovies = () => movies;
export const getMovieById = (id: number) => movies.find(movie => movie.id === id);
export const getMoviesByGenre = (genre: string) => movies.filter(movie => movie.genre.includes(genre));
export const getReviewsByMovieId = (movieId: number) => reviews.filter(review => review.movieId === movieId);
export const getAllReviews = () => reviews;