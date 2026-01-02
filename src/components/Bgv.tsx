import React, { useEffect, useState, useRef } from "react";

// Extend Window interface for TypeScript
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Bgv() {
  const videoId = "5WdIMaNU9zc";
  const [unmuted, setUnmuted] = useState(false);
  const playerRef = useRef<any>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      // Load YouTube IFrame API only if not already loaded
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
      }

      // Create player when API is ready
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    function initializePlayer() {
      if (!playerRef.current && document.getElementById('yt-player')) {
        playerRef.current = new window.YT.Player('yt-player', {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: videoId,
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0
          },
          events: {
            onReady: (event) => {
              setIsPlayerReady(true);
            }
          }
        });
      }
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId]);

  useEffect(() => {
    if (!isPlayerReady) return;

    // Automatically unmute on first user interaction
    const handleFirstInteraction = () => {
      if (playerRef.current) {
        playerRef.current.unMute();
        playerRef.current.setVolume(30); // Set volume to 30%
        setUnmuted(true);
      }
    };

    const events = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove'];
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [isPlayerReady]);

  return (
    <div className="w-full mt-36 sm:mt-8 md:mt-36 px-2 relative">
      <div
        className="relative w-full overflow-hidden bg-black rounded-lg"
        style={{ paddingBottom: "56.25%" }}
      >
        <div
          id="yt-player"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}