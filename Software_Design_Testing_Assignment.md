# Caféholic
## Project Overview
**Caféholic** is a smart café booking platform built using the MERN stack.  
It allows users to browse cafés, café owners to manage their listings and bookings, and admins to oversee the entire system.  
The platform supports secure table bookings via **Razorpay**, image handling via **Cloudinary**, and role-based access.
## Conceptual Categorization

| Object             | Context                                             | Information Important as per the Context                         |
|--------------------|-----------------------------------------------------|------------------------------------------------------------------|
| User               | Login, Registration, Role Access                    | Email, Password, Name, Contact no, Location, Role                |
| Customer (User)    | Discover and Book Cafés                             | Café details, available seats, prices                            |
| Café Owner (User)  | Register and Manage Café                            | Café details, Owner details, Booking details                     |
| Admin (User)       | Accept/Reject Café listings, Manage Users           | Café details, Owner details, User details                        |
| Café               | Display details, booking availability               | Café details, Slots                                              |
| Booking            | Book a table                                        | Café details, Slot, date, User details                           |
| Payment            | Make a payment for booking                          | Amount, Status, Booking details, Café details, User details      |

---
