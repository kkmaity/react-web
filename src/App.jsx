import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import MovieList from './features/movies/MovieList';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
import { Navbar, Container, Button } from 'react-bootstrap';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';



const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
     <CustomNavbar />
     

      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/movies" element={<ProtectedRoute><MovieList /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
       <Footer />
    </>
  );
};

export default App;
