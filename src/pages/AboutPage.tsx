import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Star, MessageCircle, User } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About CineVerse</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="lead text-xl text-center mb-12">
              Welcome to CineVerse, a personal project born from a deep passion for storytelling through film.
            </p>
            
            <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-cine-darker p-6 rounded-lg">
                <Film size={40} className="mx-auto mb-4 text-cine-gold" />
                <h3 className="text-xl font-bold mb-2">Curated Collection</h3>
                <p className="text-gray-400">Handpicked films across genres and eras</p>
              </div>
              
              <div className="bg-cine-darker p-6 rounded-lg">
                <Star size={40} className="mx-auto mb-4 text-cine-gold" />
                <h3 className="text-xl font-bold mb-2">Honest Reviews</h3>
                <p className="text-gray-400">Thoughtful analysis beyond simple ratings</p>
              </div>
              
              <div className="bg-cine-darker p-6 rounded-lg">
                <MessageCircle size={40} className="mx-auto mb-4 text-cine-gold" />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-400">Share perspectives with fellow cinephiles</p>
              </div>
              
              <div className="bg-cine-darker p-6 rounded-lg">
                <User size={40} className="mx-auto mb-4 text-cine-gold" />
                <h3 className="text-xl font-bold mb-2">Personal Touch</h3>
                <p className="text-gray-400">Not an algorithm, but human curation</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p>
              CineVerse began as a simple blog where I shared thoughts on films that moved me. 
              What started as casual reviews for friends evolved into this platform where film enthusiasts can discover, 
              discuss, and celebrate the art of cinema together.
            </p>
            
            <p>
              Unlike massive commercial sites, CineVerse maintains a personal perspective. 
              Each review comes from genuine appreciation for the craft of filmmaking and storytelling. 
              While we value technical aspects like cinematography and sound design, we equally emphasize the emotional impact and cultural relevance of films.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-12">Our Approach</h2>
            <p>
              At CineVerse, we believe in:
            </p>
            
            <ul>
              <li>
                <strong>Balanced critique</strong> — Acknowledging both artistic merit and entertainment value
              </li>
              <li>
                <strong>Contextual analysis</strong> — Understanding films within their cultural and historical frameworks
              </li>
              <li>
                <strong>Diverse perspectives</strong> — Highlighting voices and stories from around the world
              </li>
              <li>
                <strong>Thoughtful discussion</strong> — Creating space for respectful dialogue about the art we love
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold mb-4 mt-12">Join Our Community</h2>
            <p>
              Whether you're a casual moviegoer or a dedicated cinephile, CineVerse welcomes you to join our community.
              Share your thoughts, discover new favorites, and connect with others who believe in the power of film.
            </p>
            
            <div className="mt-12 text-center">
              <Link to="/contact" className="btn btn-accent inline-block">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;