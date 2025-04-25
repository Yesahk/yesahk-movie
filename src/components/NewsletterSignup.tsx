import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    
    // Show success message
    setIsSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-primary-900 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={40} className="mx-auto mb-6 text-cine-gold" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with the Latest in Cinema
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss a review, release, or exclusive content. 
            Join our community of film enthusiasts.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md bg-cine-darker border border-gray-700 focus:border-cine-gold focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="btn btn-accent whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            
            {error && (
              <p className="mt-2 text-red-400 text-sm">{error}</p>
            )}
            
            {isSubmitted && (
              <p className="mt-2 text-green-400 text-sm animate-fade-in">
                Thanks for subscribing! Check your inbox soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;