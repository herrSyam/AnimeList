"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setOpen] = useState(true);

  const handleVideoPlayer = () => {
    setOpen((prevState) => !prevState);
  };

  const option = {
    with: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1 rounded-lg "
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video Is Broken, Please try abother.")}
        />
      </div>
    );
  };

  const ButtonOpenTriler = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded-lg fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
      >
        Tonton Trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenTriler />;
};

export default VideoPlayer;
