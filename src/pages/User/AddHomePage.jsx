import React from 'react';
import UserHeader from '../../components/User/UserHeader';
import AddHome from '../../components/User/AddHome';
import UserFooter from '../../components/User/UserFooter';

function AddHomePage() {
  return (
    <>
      <UserHeader />
      <AddHome />
      <UserFooter />
    </>
  )
}

export default AddHomePage;