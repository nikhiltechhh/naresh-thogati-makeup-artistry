import React from 'react';

const Choose: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('choose-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="choose-section" className="relative min-h-screen overflow-hidden">
      {/* Fixed Background Image - Scoped to this section only */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transition-all duration-1000 ease-out ${
            isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2787&auto=format&fit=crop')`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className={`absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl w-full">
          {/* Header Section */}
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal mb-4 tracking-wide">
              <span className="text-white">Why Choose </span>
              <span className="text-red-600 transition-all duration-300 hover:text-red-500">Me</span>
            </h2>
            <div className="w-24 sm:w-32 h-0.5 bg-red-600 mx-auto"></div>
          </div>

          {/* Features List */}
          <div className="space-y-6 sm:space-y-7 max-w-2xl mx-auto">
            {/* Feature 1 */}
            <div className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/30 to-red-400/30 rounded blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm border-l-2 border-red-600 rounded px-5 py-4 sm:px-6 sm:py-5 group-hover:bg-black/50 group-hover:border-red-500 transition-all duration-300 group-hover:translate-x-1">
                    <p className="text-white text-base sm:text-lg font-light leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      • Customized looks for every face & occasion
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`} style={{ transitionDelay: isVisible ? '350ms' : '0ms' }}>
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/30 to-red-400/30 rounded blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm border-l-2 border-red-600 rounded px-5 py-4 sm:px-6 sm:py-5 group-hover:bg-black/50 group-hover:border-red-500 transition-all duration-300 group-hover:translate-x-1">
                    <p className="text-white text-base sm:text-lg font-light leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      • Premium products & hygienic practices
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`} style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/30 to-red-400/30 rounded blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm border-l-2 border-red-600 rounded px-5 py-4 sm:px-6 sm:py-5 group-hover:bg-black/50 group-hover:border-red-500 transition-all duration-300 group-hover:translate-x-1">
                    <p className="text-white text-base sm:text-lg font-light leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      • Calm, friendly, and professional approach
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className={`transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`} style={{ transitionDelay: isVisible ? '650ms' : '0ms' }}>
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/30 to-red-400/30 rounded blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-black/30 backdrop-blur-sm border-l-2 border-red-600 rounded px-5 py-4 sm:px-6 sm:py-5 group-hover:bg-black/50 group-hover:border-red-500 transition-all duration-300 group-hover:translate-x-1">
                    <p className="text-white text-base sm:text-lg font-light leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                      • On-location & studio services available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className={`text-center mt-12 sm:mt-16 transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
            <button className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-3.5 sm:py-4 px-10 sm:px-14 rounded-full text-base sm:text-lg shadow-xl hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-400 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Book Your Appointment</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/15 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
            </button>
          </div> */}
        </div>
      </div>

      <style >{`
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Choose;