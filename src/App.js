import './App.css';
import { Route, Routes } from 'react-router-dom';
import Bookings from './components/Bookings';
import ConfirmedBookings from './components/ConfirmedBookings';
import Footer from './components/Footer';
import Headers from './components/Headers';
import Home from './components/Home';

function App() {
  return (
    <>
      <Headers />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/confirmed-bookings" element={<ConfirmedBookings />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
