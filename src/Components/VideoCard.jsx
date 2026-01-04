import React, { useRef, useState } from "react";

const VideoCard = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden cursor-pointer flex justify-center items-center bg-black">
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-auto rounded-lg"
        poster=""
        controls
      >
        <source src="https://salampakistan.gov.pk/assets/videos/SalamPakistan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Icon Overlay */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center w-full h-full"
        >
          <div className="w-20 h-20 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <polygon points="6,4 6,16 16,10" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoCard;
