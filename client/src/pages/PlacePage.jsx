import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axiosInstance from '@/utils/axios';

import AddressLink from '@/components/ui/AddressLink';
import BookingWidget from '@/components/ui/BookingWidget';
import PlaceGallery from '@/components/ui/PlaceGallery';
import Spinner from '@/components/ui/Spinner';

/**
 * PlacePage component for displaying individual cafe details
 * Redesigned with cafe theme aesthetics
 */
const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return '';
    }

    setLoading(true);

    const getPlace = async () => {
      const { data } = await axiosInstance.get(`/cafe/${id}`);
      setPlace(data.cafe);
      setLoading(false);
    };
    getPlace();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!place) {
    return;
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{place.title}</h1>
          <AddressLink placeAddress={place.address} />
        </div>
        
        <PlaceGallery place={place} />

        <div className="mt-10 mb-12 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="rounded-xl bg-card p-6 border border-border shadow-sm">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-4">About this café</h2>
              <div className="text-foreground leading-relaxed">
                {place.description}
              </div>
            </div>
            
            <div className="rounded-xl bg-card p-6 border border-border shadow-sm">
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Café details</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Maximum guests</p>
                    <p className="font-medium text-foreground">{place.maxGuests} people</p>
                  </div>
                </div>
                
                {place.perks && place.perks.length > 0 && (
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Amenities</p>
                      <p className="font-medium text-foreground">{place.perks.length} available</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <BookingWidget place={place} />
          </div> 
        </div>
        
        {place.extraInfo && (
          <div className="rounded-xl bg-muted p-6 border border-border mb-12">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Additional information</h2>
            <div className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
              {place.extraInfo}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacePage;
