import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

// Local videos
import Video1 from "@/assets/Video1.mp4";
import Video2 from "@/assets/Video2.mp4";
import Video3 from "@/assets/Video3.mp4";

type VideoItem = {
  id: number;
  type: "local" | "youtube";
  url: string;
  title: string;
  description: string;
};

const Videos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenVideoIndex, setFullscreenVideoIndex] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Video Data
  const videos: VideoItem[] = [
    {
      id: 1,
      type: "local",
      url: Video1,
      title: "Bridal Makeup Transformation",
      description: "Complete bridal makeup look with traditional elegance",
    },
    {
      id: 2,
      type: "local",
      url: Video2,
      title: "Fashion Editorial Look",
      description: "Bold and modern editorial makeup for photoshoots",
    },
    {
      id: 3,
      type: "local",
      url: Video3,
      title: "Cinematic Makeup Art",
      description: "Professional makeup techniques for film and photography",
    },
    {
      id: 4,
      type: "youtube",
      url: "https://www.youtube-nocookie.com/embed/rHmaClJyQAc?autoplay=0&mute=0&controls=1&origin=https://yourdomain.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1",
      title: "Feedback",
      description: "Professional makeup",
    },
    {
      id: 5,
      type: "youtube",
      url: "https://www.youtube-nocookie.com/embed/tah8VH5O1uw?autoplay=0&mute=0&controls=1&origin=https://yourdomain.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1",
      title: "Bridal Makeup",
      description: "Modern editorial makeup style",
    },
  ];

  // Click handlers
  const handleVideoClick = (index: number) => {
    if (!isDragging) {
      setFullscreenVideoIndex(index);
      setIsFullscreen(true);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenVideoIndex(null);
    fullscreenVideoRef.current?.pause();
  };

  // Drag scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="py-20 bg-gradient-to-b from-rose-50 to-white overflow-hidden"
    >
      {/* Header */}
      <div
        className={`text-center mb-16 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <p className="text-red-600 font-semibold text-sm uppercase mb-2">
          SMINKUP - EMBRACING BEAUTY
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Makeup Transformations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Watch the artistry unfold as we create stunning looks
        </p>
      </div>

      {/* Scroll Gallery */}
      <div
        className={`transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className="flex gap-6 overflow-x-auto px-4 md:px-8 lg:px-16 pb-8 scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => handleVideoClick(index)}
              className="relative flex-shrink-0 w-80 md:w-96 cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black hover:scale-105 transition-transform">
                <div className="aspect-video relative">
                  {video.type === "local" ? (
                    <video
                      src={video.url}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <iframe
                      src={video.url}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      title={video.title}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 text-gray-500 text-sm">
          ← Drag or scroll →
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && fullscreenVideoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-3 bg-red-600 rounded-full hover:bg-red-700 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="w-full h-full p-4 flex items-center justify-center">
            {videos[fullscreenVideoIndex].type === "local" ? (
              <video
                ref={fullscreenVideoRef}
                src={videos[fullscreenVideoIndex].url}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg"
              />
            ) : (
              <iframe
                src={videos[fullscreenVideoIndex].url}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={videos[fullscreenVideoIndex].title}
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Videos;