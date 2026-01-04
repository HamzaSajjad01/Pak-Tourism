import React, { useState } from 'react'; // ✅ import useState
import Video1 from '../assets/video/islamabad.mp4'; // ✅ fixed typo
import Video5 from '../assets/video/video5.mp4';  // ✅ fixed typo
import Video4 from '../assets/video/video4.mp4';  // ✅ fixed typo
import Video3 from '../assets/video/pakistan.mp4';  // ✅ fixed typo

const Home = () => {
  const videos = [Video1, Video5, Video3, Video4]; // list of videos
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    // Move to next video or loop back to first
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < videos.length ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={videos[currentIndex]}
          autoPlay
          muted
          loop={false} // no loop for single video
          onEnded={handleVideoEnd} // play next video when ended
          playsInline
        ></video>

        <h1 className="absolute text-white text-5xl md:text-6xl font-bold drop-shadow-xl z-10">
          Welcome to Pakistan
        </h1>
      </div>

      {/* Islamabad Image Up Front */}
      <div className="relative flex justify-center mt-10 mb-20 px-4 z-20">
        <div className="w-full max-w-5xl relative">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/10/18/42/faisal-mosque-4329241_1280.jpg"
            alt="Islamabad"
            className="rounded-xl w-full object-cover overflow-hidden shadow-lg shadow-black
                      hover:scale-105 transition-all duration-500"
          />

          {/* Text on image */}
          <div className="absolute bottom-6 left-6 text-white">
            <img src="https://tourism.gov.pk/assets/images/punjab-icon.png" alt="" className="mb-2 w-12" />
            <h2 className="font-bold text-3xl mb-2 left-0">Islamabad</h2>
            <p>Islamabad, the capital city of Pakistan is ranked as one of the most beautiful cities in the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
