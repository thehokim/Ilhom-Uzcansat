import React from 'react';
import '@dotlottie/player-component'; // Import the DotLottie web component

const LottieAnimation = () => {
  return (
    <div className='rotate-[45deg] w-1/3 h-auto -ml-16 -mt-32'>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <dotlottie-player
        src="https://lottie.host/b5722511-e302-472d-95e2-656dc092b1ce/VVIGGFQh0t.lottie"
        background="transparent"
        speed="1"
        style={{ width: 300, height: 300 }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
    </div>
  );
};

export default LottieAnimation;
