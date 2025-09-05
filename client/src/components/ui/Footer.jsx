import React from 'react';

/**
 * Footer component for the application
 * Redesigned with cafe theme aesthetics
 */
const Footer = () => {
  return (
    <footer className="w-full bg-muted py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-primary">Cafeholic</h3>
            <p className="text-sm text-muted-foreground">
              Discover the perfect café experience for every mood and occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="rounded-full bg-background p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="rounded-full bg-background p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="rounded-full bg-background p-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading font-medium text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Aesthetic Cafés</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Rooftop Cafés</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Work-friendly Cafés</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Budget-friendly Cafés</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading font-medium text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">List Your Café</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Booking Guidelines</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Community Forum</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading font-medium text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">About Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Careers</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Press</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">&copy; 2024 Cafeholic, Inc.</p>
              <div className="hidden h-4 w-px bg-border md:block"></div>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Sitemap</a>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                English (IN)
              </button>
              <button className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                ₹ INR
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
