import React from 'react';
import TripBooking from '../../components/User/TripBooking';
import UserFooter from '../../components/User/UserFooter';
import UserHeader from '../../components/User/UserHeader';

function TripBookingPage() {
  return (
    <>
        <UserHeader />
        <TripBooking />
        <UserFooter />
    </>
  )
}

export default TripBookingPage;