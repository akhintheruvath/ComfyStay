import React from 'react';
import MyTrips from '../../components/User/MyTrips';
import UserFooter from '../../components/User/UserFooter';
import UserHeader from '../../components/User/UserHeader';

function TripsPage() {
  return (
    <>
        <UserHeader />
        <MyTrips />
        <UserFooter />
    </>
  )
}

export default TripsPage;