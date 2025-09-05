import React, { useState } from 'react';
import axiosInstance from '@/utils/axios';
import { usePlaces } from '../../../hooks';

/**
 * SearchBar component for searching cafes
 * Redesigned with cafe theme aesthetics
 */
const SearchBar = () => {
  const Places = usePlaces();
  const { setPlaces, setLoading } = Places;

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearch = async (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    if (searchText.trimStart() !== '') {
      setLoading(true);
      setSearchTimeout(
        setTimeout(async () => {
          const { data } = await axiosInstance.get(
            `/cafe/search/${searchText.trimStart()}`,
          );
          setPlaces(data);
          setLoading(false);
        }, 500),
      );
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex overflow-hidden rounded-full border border-border bg-background shadow-sm transition-all duration-300 hover:shadow-md focus-within:border-primary focus-within:ring-2 focus-within:ring-ring">
        <div className="flex-grow">
          <input
            type="search"
            placeholder="Find your perfect café..."
            className="h-full w-full border-none bg-transparent py-3 px-5 text-foreground placeholder:text-muted-foreground focus:outline-none"
            onChange={(e) => handleSearch(e)}
            value={searchText}
          />
        </div>
        <button
          className="flex items-center bg-primary px-5 text-primary-foreground transition-colors hover:bg-primary-dark"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <span className="ml-2 hidden md:block">Search</span>
        </button>
      </div>
      
      {/* Coffee cup decoration */}
      <div className="absolute -right-6 -top-3 hidden rotate-12 text-primary/20 md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
