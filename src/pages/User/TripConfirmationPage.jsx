import React from 'react';
import TripConfirmation from '../../components/User/TripConfirmation';
import UserFooter from '../../components/User/UserFooter';
import UserHeader from '../../components/User/UserHeader';

function TripConfirmationPage() {
  return (
    <>
        <UserHeader />
        <TripConfirmation />
        <UserFooter />
    </>
  )
}

export default TripConfirmationPage;