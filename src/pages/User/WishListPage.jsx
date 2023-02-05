import React from 'react';
import UserHeader from '../../components/User/UserHeader';
import Wishlist from '../../components/User/Wishlist';
import UserFooter from '../../components/User/UserFooter';

function WishListPage() {
  return (
    <>
        <UserHeader />
        <Wishlist />
        <UserFooter />
    </>
  )
}

export default WishListPage;