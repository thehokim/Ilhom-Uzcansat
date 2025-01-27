import React from 'react';
import VideoSection from './components/VideoSection';
import ConcourseSection from './components/ConcourseSection';
import Carousel from './components/Carousel';
import PriceList from './components/PriceList';
import ContactUs from './components/ContactUs';
import ApplicationSection from './components/ApplicationSection';

function App() {
  return (
    <div>
      <VideoSection />
      <ConcourseSection />
      <Carousel />
      <PriceList />
      <ContactUs />
      <ApplicationSection />
    </div>
  );
}

export default App;
