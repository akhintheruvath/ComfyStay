import React from 'react';
import EditProperty from '../../components/User/EditProperty';
import UserFooter from '../../components/User/UserFooter';
import UserHeader from '../../components/User/UserHeader';

function EditPropertyPage() {
  return (
    <>
        <UserHeader />
        <EditProperty />
        <UserFooter />
    </>
  )
}

export default EditPropertyPage;