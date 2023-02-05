import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import LandingPage from './pages/User/LandingPage';
import PropertyDetailsPage from './pages/User/PropertyDetailsPage';
import WishListPage from './pages/User/WishListPage';
import UserProfilePage from './pages/User/UserProfilePage';
import TripsPage from './pages/User/TripsPage';
import TripConfirmationPage from './pages/User/TripConfirmationPage';

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;