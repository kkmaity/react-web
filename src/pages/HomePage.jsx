import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBar from "../components/TopNavBar";
import CarouselComponent from "../components/CarouselComponent";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
         <TopNavBar />
       <CarouselComponent />
      
      <h3>Home Page</h3>
      <button className="btn btn-secondary" onClick={() => navigate('/movies')}>View Movies</button>
    </div>
  );
};

export default HomePage;
