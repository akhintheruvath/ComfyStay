import React from 'react';
import Reservations from '../../components/User/Reservations';
import UserFooter from '../../components/User/UserFooter';
import UserHeader from '../../components/User/UserHeader';

function ReservationsPage() {
  return (
    <>
        <UserHeader />
        <Reservations />
        <UserFooter />
    </>
  )
}

export default ReservationsPage;