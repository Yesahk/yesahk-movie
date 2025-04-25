import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Get in Touch</h1>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Have questions, suggestions, or just want to talk cinema? 
            We'd love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-cine-darker rounded-lg p-6 text-center">
              <Mail size={32} className="mx-auto mb-4 text-primary-400" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:hello@cineverse.com" className="text-gray-300 hover:text-white transition-colors">
                yesahkabera@gmail.com
              </a>
            </div>
            
            <div className="bg-cine-darker rounded-lg p-6 text-center">
              <MapPin size={32} className="mx-auto mb-4 text-accent-500" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">Atlanta, GA</p>
            </div>
            
            <div className="bg-cine-darker rounded-lg p-6 text-center">
              <Phone size={32} className="mx-auto mb-4 text-secondary-400" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+11234567890" className="text-gray-300 hover:text-white transition-colors">
                +1 (678) 599-3598
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                Fill out the form and we'll get back to you as soon as possible. 
                We value your feedback and are always open to new perspectives on film.
              </p>
              <p className="text-gray-300 mb-4">
                Whether you want to suggest a film for review, collaborate on content, 
                or simply share your thoughts on a recent viewing, we're here to connect.
              </p>
              <p className="text-gray-400 italic">
                "Cinema is a matter of what's in the frame and what's out."
                <br />— Martin Scorsese
              </p>
            </div>
            
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;