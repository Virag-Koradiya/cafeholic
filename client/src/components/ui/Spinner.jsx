import React from 'react';
import { TailSpin } from 'react-loader-spinner';

/**
 * Spinner component for loading states
 * Redesigned with cafe theme aesthetics
 */
const Spinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">
        <TailSpin
          height={60}
          width={60}
          color="#8B5A2B" // Coffee brown from design system
          radius="1"
          visible={true}
        />
        <div className="animate-pulse text-primary font-medium mt-2 font-heading">
          Brewing your experience...
        </div>
      </div>
    </div>
  );
};

export default Spinner;
