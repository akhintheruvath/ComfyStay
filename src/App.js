import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import LandingPage from './pages/User/LandingPage';
import PropertyDetailsPage from './pages/User/PropertyDetailsPage';
import WishListPage from './pages/User/WishListPage';
import UserProfilePage from './pages/User/UserProfilePage';
import TripsPage from './pages/User/TripsPage';
import TripConfirmationPage from './pages/User/TripConfirmationPage';
import PropertiesListPage from './pages/User/PropertiesListPage';
import EditPropertyPage from './pages/User/EditPropertyPage';
import CustomersListPage from './pages/Admin/CustomersListPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/propertyPage' element={<PropertyDetailsPage />} />
        <Route path='/tripConfirmation' element={<TripConfirmationPage />} />
        <Route path='/myTrips' element={<TripsPage />} />
        <Route path='/wishlist' element={<WishListPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/myProperties' element={<PropertiesListPage />} />
        <Route path='/myProperties/editProperty' element={<EditPropertyPage />} />
        <Route path='/admin/customersList' element={<CustomersListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;