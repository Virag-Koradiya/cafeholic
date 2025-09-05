import React, { useState } from 'react';
import { usePlaces } from '../../hooks';
import Spinner from '@/components/ui/Spinner';
import PlaceCard from '@/components/ui/PlaceCard';
import { ImTree } from 'react-icons/im';
import { FaLaptopCode } from 'react-icons/fa';
import { IoMdWine } from 'react-icons/io';
import { MdAttachMoney, MdFastfood, MdOutlineFamilyRestroom, MdCake } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi';
import { GiHidden, GiMineExplosion } from 'react-icons/gi';
import { BsCameraFill, BsFillArrowThroughHeartFill } from 'react-icons/bs';

/**
 * IndexPage component - Main landing page for Cafeholic
 * Redesigned with cafe theme aesthetics
 */
const categories = [
  'Aesthetic Café',
  'Rooftop Café',
  'Party Café',
  'Café for Work',
  'Couple Café',
  'Hidden Café',
  'Pocket friendly Café',
  'Unique Café',
  'Food focused Café',
  'Family Café',
  'Celebration Café',
  'Franchise Café',
];

const IndexPage = () => {
  const allPlaces = usePlaces();
  const { places, loading } = allPlaces;
  const [selectedFilter, setSelectedFilter] = useState(null);

  if (loading) {
    return <Spinner />;
  }

  const links = [
    { label: 'Aesthetic Café', imgSrc: <BsCameraFill /> },
    { label: 'Rooftop Café', imgSrc: <GiMineExplosion /> },
    { label: 'Party Café', imgSrc: <IoMdWine /> },
    { label: 'Café for Work', imgSrc: <FaLaptopCode /> },
    { label: 'Couple Café', imgSrc: <BsFillArrowThroughHeartFill /> },
    { label: 'Hidden Café', imgSrc: <GiHidden /> },
    { label: 'Pocket friendly Café', imgSrc: <MdAttachMoney /> },
    { label: 'Unique Café', imgSrc: <HiSparkles /> },
    { label: 'Food focused Café', imgSrc: <MdFastfood /> },
    { label: 'Family Café', imgSrc: <MdOutlineFamilyRestroom /> },
    { label: 'Celebration Café', imgSrc: <MdCake /> },
    { label: 'Franchise Café', imgSrc: <ImTree /> },
  ];

  const filteredPlaces = selectedFilter !== null
    ? places?.filter((place) => place?.category?.includes(categories[selectedFilter]))
    : places;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-3 md:text-5xl">
            Find Your Perfect <span className="text-primary">Café</span> Experience
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover unique cafés for every mood and occasion. Book your table and enjoy the perfect coffee moment.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="relative mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-3 px-2">
            {links.map((item, i) => (
              <div
                key={i}
                className={`flex min-w-[120px] flex-col items-center justify-center rounded-xl p-3 transition-all duration-300 cursor-pointer
                  ${selectedFilter === i 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-card border border-border text-foreground hover:border-primary/30 hover:shadow-sm'
                  }`}
                onClick={() => setSelectedFilter(i === selectedFilter ? null : i)}
              >
                <div className={`text-xl mb-2 ${selectedFilter === i ? 'text-primary-foreground' : 'text-primary'}`}>
                  {item.imgSrc}
                </div>
                <p className="text-center text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cafe Listings */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlaces?.length > 0 ? (
            filteredPlaces?.map((place) => <PlaceCard place={place} key={place._id} />)
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-6 text-primary opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-semibold text-foreground">No cafés found</h2>
              <p className="mt-2 text-muted-foreground max-w-md">
                We couldn't find any cafés matching your filter. Try selecting a different category or check back later.
              </p>
              <button 
                onClick={() => setSelectedFilter(null)}
                className="mt-6 rounded-full bg-primary px-6 py-2.5 text-primary-foreground font-medium transition-all hover:bg-primary-dark flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                View all cafés
              </button>
            </div>
          )}
        </div>
        
        {/* Featured Section */}
        {filteredPlaces?.length > 0 && (
          <div className="mt-16 rounded-xl bg-muted p-8 border border-border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">Why Cafeholic?</h2>
                <p className="text-muted-foreground mt-1">The easiest way to discover and book your perfect café experience</p>
              </div>
              <button className="mt-4 md:mt-0 rounded-full bg-secondary px-6 py-2 text-secondary-foreground font-medium transition-all hover:bg-secondary-dark">
                Learn more
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-background rounded-full p-3 mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-medium text-foreground text-lg mb-2">Discover</h3>
                <p className="text-muted-foreground text-sm">Find the perfect café for any occasion, mood, or preference</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-background rounded-full p-3 mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading font-medium text-foreground text-lg mb-2">Book</h3>
                <p className="text-muted-foreground text-sm">Reserve your table with just a few clicks, no phone calls needed</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-background rounded-full p-3 mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-medium text-foreground text-lg mb-2">Enjoy</h3>
                <p className="text-muted-foreground text-sm">Experience the perfect café moment, every time</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
