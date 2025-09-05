import React, { useState } from 'react';

/**
 * PlaceGallery component for displaying cafe photos
 * Redesigned with cafe theme aesthetics
 */
const PlaceGallery = ({ place }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-auto">
        <div className="container mx-auto px-4 py-20">
          <div className="mb-6 flex justify-between items-center">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              {place.title} - All Photos
            </h3>
            <button
              className="flex items-center gap-2 rounded-full bg-card py-2 px-4 text-foreground shadow-sm border border-border hover:bg-muted transition-colors"
              onClick={() => setShowAllPhotos(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Close gallery
            </button>
          </div>
          
          <div className="grid gap-6">
            {place?.photos?.length > 0 &&
              place.photos.map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <img 
                    src={photo} 
                    alt={`${place.title} - Photo ${index + 1}`} 
                    className="w-full object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative mb-8">
      {/* Medium and large devices */}
      <div className="hidden md:grid h-[450px] grid-cols-4 gap-2 overflow-hidden rounded-xl">
        {/* Main photo (column 1) */}
        <div className="col-span-2 overflow-hidden">
          {place.photos?.[0] && (
            <div className="h-full w-full overflow-hidden rounded-l-xl">
              <img
                onClick={() => setShowAllPhotos(true)}
                className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                src={place.photos[0]}
                alt={`${place.title} - Main Photo`}
              />
            </div>
          )}
        </div>
        
        {/* Secondary photos (column 2) */}
        <div className="col-span-1 overflow-hidden">
          <div className="grid h-full grid-rows-2 gap-2">
            {place.photos?.[1] && (
              <div className="overflow-hidden">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                  src={place.photos[1]}
                  alt={`${place.title} - Photo 2`}
                />
              </div>
            )}

            {place.photos?.[2] && (
              <div className="overflow-hidden">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                  src={place.photos[2]}
                  alt={`${place.title} - Photo 3`}
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Tertiary photos (column 3) */}
        <div className="col-span-1 overflow-hidden">
          <div className="grid h-full grid-rows-2 gap-2">
            {place.photos?.[3] && (
              <div className="overflow-hidden">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                  src={place.photos[3]}
                  alt={`${place.title} - Photo 4`}
                />
              </div>
            )}

            {place.photos?.[4] && (
              <div className="overflow-hidden rounded-tr-xl">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                  src={place.photos[4]}
                  alt={`${place.title} - Photo 5`}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile devices */}
      <div className="md:hidden">
        <div className="relative h-[300px] overflow-hidden rounded-xl">
          {place.photos?.[0] && (
            <img
              onClick={() => setShowAllPhotos(true)}
              className="h-full w-full cursor-pointer object-cover"
              src={place.photos[0]}
              alt={`${place.title} - Main Photo`}
            />
          )}
        </div>
      </div>

      <button
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-card py-2 px-4 text-foreground shadow-md border border-border hover:bg-muted transition-colors"
        onClick={() => setShowAllPhotos(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-primary"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
            clipRule="evenodd"
          />
        </svg>
        View all photos
      </button>
    </div>
  );
};

export default PlaceGallery;
