import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import LandingPage from './pages/User/LandingPage';
import PropertyDetailsPage from './pages/User/PropertyDetailsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
        <Route path='/propertyPage' element={<PropertyDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;