import React from 'react';
import UserFooter from '../../components/User/UserFooter';
import UserHeader from '../../components/User/UserHeader';
import UserProfile from '../../components/User/UserProfile';

function UserProfilePage() {
  return (
    <>
        <UserHeader />
        <UserProfile />
        <UserFooter />
    </>
  )
}

export default UserProfilePage;