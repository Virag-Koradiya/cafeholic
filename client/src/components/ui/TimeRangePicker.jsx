import React, { useState } from 'react';

/**
 * TimeRangePicker component for selecting time range for bookings
 * Redesigned with cafe theme aesthetics while maintaining all functionality
 */
function TimeRangePicker({ onSelect }) {
    const [startTime, setStartTime] = useState('17:00');
    const [endTime, setEndTime] = useState('19:00');

    const handleStartTimeChange = (e) => {
        const newStartTime = e.target.value;
        setStartTime(newStartTime);
        onSelect(newStartTime, endTime);
    };

    const handleEndTimeChange = (e) => {
        const newEndTime = e.target.value;
        setEndTime(newEndTime);
        onSelect(startTime, newEndTime);
    };

    return (
        <div className='flex flex-col sm:flex-row gap-4 py-4 px-4 border-t border-border'>
            <div className='flex flex-col gap-1'>
                <label className="block text-sm font-medium text-foreground mb-1">Start Time:</label>
                <div className="relative">
                    <input 
                        type="time" 
                        value={startTime} 
                        onChange={handleStartTimeChange}
                        className="w-full rounded-lg border border-border bg-input py-2 px-3 text-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <label className="block text-sm font-medium text-foreground mb-1">End Time:</label>
                <div className="relative">
                    <input 
                        type="time" 
                        value={endTime} 
                        onChange={handleEndTimeChange}
                        className="w-full rounded-lg border border-border bg-input py-2 px-3 text-foreground focus:border-primary focus:ring-2 focus:ring-ring"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeRangePicker;
