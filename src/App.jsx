import React from 'react';
import VideoSection from './components/VideoSection';
import ConcourseSection from './components/ConcourseSection';
import Carousel from './components/Carousel';
import PriceList from './components/PriceList';
import ContactUs from './components/ContactUs';
import ApplicationSection from './components/ApplicationSection';
import Footer from './components/Footer';
import '@fontsource/manrope'; // Defaults to weight 400
import '@fontsource/manrope/500.css'; // For weight 500
import '@fontsource/manrope/700.css'; // For weight 700


function App() {
  return (
    <div>
      <VideoSection />
        <ConcourseSection /> 
      <div id="carousel">
        <Carousel />
      </div>
      <div id="price">
        <PriceList />
      </div>
      <ContactUs />
      <ApplicationSection />
      <Footer />
    </div>
  );
}

export default App;
