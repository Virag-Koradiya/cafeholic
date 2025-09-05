import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { differenceInDays } from 'date-fns';
import { toast } from 'react-toastify';

import { useAuth } from '../../../hooks';
import axiosInstance from '@/utils/axios';
import DatePickerWithRange from './DatePickerWithRange';

/**
 * BookingWidget component for booking cafe tables
 * Redesigned with cafe theme aesthetics
 */
const BookingWidget = ({ place }) => {
  const [dateRange, setDateRange] = useState({ from: null, to: null, timeRange: { start: '17:00', end: '19:00' } });
  const [bookingData, setBookingData] = useState({
    noOfGuests: 1,
    name: '',
    phone: '',
  });
  const [redirect, setRedirect] = useState('');
  const { user } = useAuth();

  const { noOfGuests, name, phone } = bookingData;
  const { _id: id, price } = place;

  useEffect(() => {
    if (user) {
      setBookingData({ ...bookingData, name: user.name });
    }
  }, [user]);

  const numberOfNights = dateRange.from ? 1 : 0;

  // handle booking form
  const handleBookingData = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async () => {
    // User must be signed in to book a place
    if (!user) {
      return setRedirect(`/login`);
    }

    // BOOKING DATA VALIDATION
    if (numberOfNights < 1) {
      return toast.error('Please select valid dates');
    } else if (noOfGuests < 1) {
      return toast.error("No. of guests can't be less than 1");
    } else if (noOfGuests > place.maxGuests) {
      return toast.error(`Allowed max. no. of guests: ${place.maxGuests}`);
    } else if (name.trim() === '') {
      return toast.error("Name can't be empty");
    } else if (phone.trim() === '') {
      return toast.error("Phone can't be empty");
    } else if (!dateRange.from) {
      return toast.error('Please select a valid date');
    }

    const checkInDateTime = new Date(dateRange.from);
    checkInDateTime.setHours(parseInt(dateRange.timeRange.start.split(':')[0], 10));
    checkInDateTime.setMinutes(parseInt(dateRange.timeRange.start.split(':')[1], 10));

    const checkOutDateTime = new Date(dateRange.to);
    checkOutDateTime.setHours(parseInt(dateRange.timeRange.end.split(':')[0], 10));
    checkOutDateTime.setMinutes(parseInt(dateRange.timeRange.end.split(':')[1], 10));

    try {
      const response = await axiosInstance.post('/bookings', {
        checkIn: checkInDateTime,
        checkOut: checkOutDateTime,
        noOfGuests,
        name,
        phone,
        place: id,
        price: price, // Price is not multiplied by numberOfNights for single date
      });

      const bookingId = response.data.booking._id;

      setRedirect(`/account/bookings/${bookingId}`);
      toast('Congratulations! Your table is booked.');
    } catch (error) {
      toast.error('Something went wrong!');
      console.log('Error: ', error);
    }
  };


  const initPayment = (data) => {
    const options = {
      key: "rzp_test_ZywlYaqP7cX6NB",
      amount: data.amount * 100,
      currency: 'INR',
      name: 'CafeHolic',
      description: 'Payment for booking',
      image: '/favicon.ico',
      order_id: data.id,
      phone: phone,
      handler: async function (response) {
        try {
          const verified = await axiosInstance.post('/payment/verify', {
            orderCreationId: data.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          });
          console.log(verified.data);

          handleBooking();
        } catch (error) {
          console.log(error);
        }
      },
      prefill: {
        name,
        email: user.email,
        contact: phone,
      },
      theme: {
        color: '#8B5A2B', // Updated to match cafe theme
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      // Don't allow booking of Number of guests more than maxGuests
      if (noOfGuests > place.maxGuests) {
        return toast.error(`Allowed max. no. of guests: ${place.maxGuests}`);
      }
      else if (noOfGuests <= 0){
        return toast.error("Invalid guest number");
      }
      else if(phone.length != 10){
        return toast.error("Please enter valid phone no");
      }

      const response = await axiosInstance.post('/payment/order', {
        amount: numberOfNights * place.price,
        currency: 'INR',
        receipt: 'order_rcptid_11',
      });
      console.log(response.data);
      initPayment(response.data);
    } catch (error) {
      console.log(error);
    }

  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="rounded-xl bg-card p-6 shadow-md border border-border">
      <div className="text-center">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-1">Reserve your table</h3>
        <p className="text-muted-foreground mb-4">
          <span className="font-semibold text-primary text-lg">₹{place.price}</span> per booking
        </p>
      </div>
      
      <div className="mt-6 rounded-lg border border-border overflow-hidden">
        <div className="flex justify-center items-center w-full bg-muted/50">
          <DatePickerWithRange setDateRange={setDateRange} />
        </div>
        
        <div className="border-t border-border p-4">
          <label className="block text-sm font-medium text-foreground mb-1">Number of guests: </label>
          <input
            type="number"
            name="noOfGuests"
            placeholder={`Max. guests: ${place.maxGuests}`}
            min={1}
            max={place.maxGuests}
            value={noOfGuests}
            onChange={handleBookingData}
            className="w-full rounded-lg border-border bg-input"
          />
        </div>
        
        <div className="border-t border-border p-4 space-y-3">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Your full name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleBookingData}
              className="w-full rounded-lg border-border bg-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Phone number: </label>
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={handleBookingData}
              className="w-full rounded-lg border-border bg-input"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={handlePayment} 
        className="primary mt-6 flex items-center justify-center gap-2 group"
      >
        <span>Book this place</span>
        {numberOfNights > 0 && (
          <span className="flex items-center bg-primary-dark/20 py-1 px-3 rounded-full text-primary-foreground transition-all group-hover:bg-primary-dark/30">
            ₹{numberOfNights * place.price}
          </span>
        )}
      </button>
      
      <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        Secure payment processing with Razorpay
      </p>
    </div>
  );
};

export default BookingWidget;
