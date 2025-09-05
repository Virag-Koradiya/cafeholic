import React from 'react';

/**
 * AddressLink component for displaying and linking to cafe addresses
 * Redesigned with cafe theme aesthetics
 */
const AddressLink = ({ placeAddress, className = null }) => {
  if (!className) {
    className = 'my-3 block';
  }

  className += ' flex items-center gap-2 text-primary hover:text-primary-dark transition-colors';
  
  return (
    <a
      className={className}
      href={`https://maps.google.com/?q=${placeAddress}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center justify-center rounded-full bg-primary/10 p-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </div>

      <span className="text-sm font-medium">{placeAddress}</span>
    </a>
  );
};

export default AddressLink;
