import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../data/movies';

interface ReviewCardProps {
  review: Review;
  detailed?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, detailed = false }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i}
        size={16}
        className={i < Math.round(rating / 2) ? 'text-cine-gold' : 'text-gray-600'}
        fill={i < Math.round(rating / 2) ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <div className="card p-5 hover:transform-none">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <img 
            src={review.avatar || 'https://images.pexels.com/photos/6065619/pexels-photo-6065619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} 
            alt={`${review.author}'s avatar`} 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">{review.author}</h4>
            <div className="flex items-center">
              {renderStars(review.rating)}
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-3">{review.date}</p>
          <p className={`text-gray-300 ${detailed ? '' : 'line-clamp-3'}`}>
            {review.content}
          </p>
          {!detailed && review.content.length > 180 && (
            <button className="text-primary-400 text-sm mt-2 hover:underline">
              Read more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;