import React from 'react';
import UserHeader from '../../components/User/UserHeader';
import PropertyDetails from '../../components/User/PropertyDetails';
import UserFooter from '../../components/User/UserFooter';

function PropertyDetailsPage() {
  return (
    <>
      <UserHeader />
      <PropertyDetails />
      <UserFooter />
    </>
  )
}

export default PropertyDetailsPage;