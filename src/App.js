import {
  Route, 
  Routes
} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/Little-Lemon element"={<Home />} />
          <Route 
            path="/about"
            element={<UnderConstruction />} 
          />
          <Route 
            path="/menu" 
            element={<UnderConstruction />} 
          />
          <Route path="bookings" element={<Bookings />} />
          <Route 
            path="/confirmed-booking
            element={<ConfirmedBooking />} 
          />
          <Route 
            path="/order-online"
            element={<UnderConstruction />} 
          />
          <Route 
            path="/login"
            element={<UnderConstruction />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
