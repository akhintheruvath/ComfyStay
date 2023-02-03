import { BrowserRouter,Routes, Route } from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import LandingPage from './pages/User/LandingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/adminLogin' element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;