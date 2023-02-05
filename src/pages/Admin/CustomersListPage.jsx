import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar';
import CustomersList from '../../components/Admin/CustomersList';

function CustomersListPage() {
  return (
    <>
        <AdminNavbar />
        <CustomersList />
    </>
  )
}

export default CustomersListPage;