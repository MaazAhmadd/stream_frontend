import { useState, useEffect, useRef } from 'react';
import videojs from 'video.js';
const VideoPlayer = ({videoUrl=''}) => {
  const [player, setPlayer] = useState(null);
  const videoNode = useRef(null);
  useEffect(() => {
    const videoJsOptions = {
      autoplay: true,
      controls: true,
      sources: [{
        src: videoUrl,
        type: 'video/mp4'
      }]
    };
    if (videoNode.current) {
      const newPlayer = videojs(videoNode.current, videoJsOptions, () => {
        console.log('Video player is ready');
      });
      setPlayer(newPlayer);
    }
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [videoUrl, player]);
  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js vjs-big-play-centered" />
    </div>
  );
};
export default VideoPlayer;
