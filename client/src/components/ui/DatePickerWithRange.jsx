import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimeRangePicker from './TimeRangePicker';

/**
 * DatePickerWithRange component for selecting date and time range
 * Redesigned with cafe theme aesthetics while maintaining all functionality
 */
export default function DatePickerWithRange({ className, setDateRange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeRange, setSelectedTimeRange] = useState({ start: '09:00', end: '17:00' });

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setDateRange({ from: date, to: date, timeRange: selectedTimeRange });
  };

  const handleTimeRangeSelect = (startTime, endTime) => {
    setSelectedTimeRange({ start: startTime, end: endTime });
    setDateRange({ from: selectedDate, to: selectedDate, timeRange: { start: startTime, end: endTime } });
  };

  return (
    <div className='flex w-full justify-center items-center flex-col'>
      <div className="w-full relative">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateSelect}
          dateFormat="dd/MM/yyyy"
          className={`w-full py-3 px-4 text-foreground bg-transparent focus:outline-none ${className}`}
          minDate={new Date()}
          popperClassName="react-datepicker-cafe"
          calendarClassName="bg-card border border-border rounded-lg shadow-md"
          dayClassName={date => 
            date.getDate() === selectedDate?.getDate() && 
            date.getMonth() === selectedDate?.getMonth() && 
            date.getFullYear() === selectedDate?.getFullYear()
              ? "bg-primary text-primary-foreground rounded-full"
              : undefined
          }
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      </div>
      <TimeRangePicker onSelect={handleTimeRangeSelect} />
    </div>
  );
}
