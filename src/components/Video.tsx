import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

// Import your videos at the top
import Video1 from "@/assets/Video1.mp4";
import Video2 from "@/assets/Video2.mp4";
import Video3 from "@/assets/Video3.mp4";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Video data with imported videos
  const videos = [
    {
      id: 1,
      url: Video1,
      title: "Bridal Makeup Transformation",
      description: "Complete bridal makeup look with traditional elegance"
    },
    {
      id: 2,
      url: Video2,
      title: "Fashion Editorial Look",
      description: "Bold and modern editorial makeup for photoshoots"
    },
    {
      id: 3,
      url: Video3,
      title: "Cinematic Makeup Art",
      description: "Professional makeup techniques for film and photography"
    }
  ];

  const handleVideoClick = (index: number) => {
    if (!isDragging) {
      setIsFullscreen(true);
      setFullscreenVideoIndex(index);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenVideoIndex(null);
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
    }
  };

  // Mouse drag handlers
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

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="py-20 bg-gradient-to-b from-rose-50 to-white overflow-hidden"
    >
      {/* Section Header */}
      <div
        className={`text-center mb-16 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">
          SMINKUP - EMBRACING BEAUTY
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Makeup Transformations
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Watch the artistry unfold as we create stunning looks for every occasion
        </p>
      </div>

      {/* Scrollable Video Gallery */}
      <div
        className={`transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex gap-6 overflow-x-auto px-4 md:px-8 lg:px-16 pb-8 scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => handleVideoClick(index)}
              className="relative flex-shrink-0 w-80 md:w-96 group cursor-pointer"
            >
              {/* Video Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative aspect-video">
                  <video
                    src={video.url}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-4 text-gray-500 text-sm">
          ← Drag or scroll to view more →
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && fullscreenVideoIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="w-full h-full flex items-center justify-center p-4">
            <video
              ref={fullscreenVideoRef}
              src={videos[fullscreenVideoIndex].url}
              className="max-w-full max-h-full rounded-lg"
              controls
              autoPlay
              loop
            />
          </div>

          {/* Video Info in Fullscreen */}
          <div className="absolute bottom-8 left-8 right-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {videos[fullscreenVideoIndex].title}
            </h3>
            <p className="text-gray-300 text-lg">
              {videos[fullscreenVideoIndex].description}
            </p>
          </div>
        </div>
      )}

      <style >{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Videos;