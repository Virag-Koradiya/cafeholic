import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PlaceCard component for displaying cafe information
 * Redesigned with cafe theme aesthetics
 */
const PlaceCard = ({ place }) => {
  const { _id: placeId, photos, address, title, price } = place;
  
  return (
    <Link 
      to={`/place/${placeId}`} 
      className="group relative flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg m-3"
    >
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        {photos?.[0] && (
          <img
            src={`${photos?.[0]}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt={title}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      
      <div className="bg-card p-4 rounded-b-xl border border-border border-t-0">
        <h3 className="font-heading font-semibold text-foreground truncate">{title}</h3>
        <p className="font-sans text-sm text-muted-foreground truncate mt-1">{address}</p>
        
        <div className="mt-3 flex items-center">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star} 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 fill-accent" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-xs text-muted-foreground">• Popular choice</span>
        </div>
      </div>
      
      <div className="absolute right-3 top-3 rounded-full bg-background/90 p-2 shadow-md transition-transform duration-300 hover:scale-110">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
    </Link>
  );
};

export default PlaceCard;
