import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "/assets/long-logo.png";
import { useAuth } from '../../../hooks';
import SearchBar from './SearchBar';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

/**
 * Header component for the application
 * Redesigned with cafe theme aesthetics
 */
export const Header = () => {
  const auth = useAuth();
  const location = useLocation();

  const [showSearchBar, setShowSearchBar] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const { user } = auth;

  const handleScroll = () => {
    const shouldHaveShadow = window.scrollY > 0;
    setHasShadow(shouldHaveShadow);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // hide searchbar based on url
    if (location.pathname === '/') {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
    // clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <header
      className={`fixed top-0 z-10 flex w-screen justify-center bg-background py-4 transition-shadow duration-300 ${
        hasShadow ? 'shadow-md' : ''
      }`}
    >
      <div
        className={`flex ${
          showSearchBar ? 'justify-around' : 'justify-between px-10'
        } w-screen max-w-screen-xl items-center`}
      >
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Cafeholic" className="h-12" />
          <span className="hidden font-heading font-semibold text-primary text-xl md:block">Cafeholic</span>
        </a>

        {showSearchBar && <SearchBar />}

        <Link
          to={user ? '/account' : '/login'}
          className="flex items-center gap-3 rounded-full border border-border bg-background py-2 px-4 transition-all hover:bg-muted hover:shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden h-5 w-5 text-primary md:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <div className="overflow-hidden rounded-full border-2 border-primary/20" style={{ width: '32px', height: '32px' }}>
  {user ? (
    <Avatar className="h-8 w-8">
      {user?.picture ? (
        <AvatarImage src={user.picture} className="h-full w-full object-cover" />
      ) : (
        <AvatarFallback className="flex h-full w-full items-center justify-center bg-secondary text-secondary-foreground">
          {user.name?.charAt(0) || "C"}
        </AvatarFallback>
      )}
    </Avatar>
  ) : (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
   )}
</div>

          
          {user ? (
            <span className="hidden text-sm font-medium text-foreground md:block">
              {user.name}
            </span>
          ) : (
            <span className="hidden text-sm font-medium text-foreground md:block">
              Sign in
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};
