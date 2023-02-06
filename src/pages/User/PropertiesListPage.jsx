import React from 'react';
import UserHeader from '../../components/User/UserHeader';
import MyProperties from '../../components/User/MyProperties';
import UserFooter from '../../components/User/UserFooter';

function PropertiesListPage() {
  return (
    <>
        <UserHeader />
        <MyProperties />
        <UserFooter />
    </>
  )
}

export default PropertiesListPage;