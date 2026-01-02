import { useEffect, useRef, useState } from "react";
import { BookOpen, Users, Award, Calendar, Clock, Star } from "lucide-react";

const Academy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: "Professional Bridal Makeup",
      duration: "3 Months",
      icon: <Award className="w-8 h-8" />,
      description: "Master the art of bridal makeup with traditional and contemporary techniques. Learn skin preparation, color theory, and long-lasting applications.",
      features: ["HD Makeup Techniques", "Traditional Bridal Looks", "Portfolio Development", "Client Consultation"]
    },
    {
      title: "Cinematic & Character Makeup",
      duration: "2 Months",
      icon: <Star className="w-8 h-8" />,
      description: "Dive into the world of cinema with special effects, character creation, and prosthetic applications for film and theater.",
      features: ["SFX Makeup", "Character Design", "Prosthetic Application", "Industry Standards"]
    },
    {
      title: "Fashion & Editorial Makeup",
      duration: "6 Weeks",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Create stunning editorial looks for fashion shows, photoshoots, and runway events with cutting-edge techniques.",
      features: ["Runway Makeup", "Photo Shoot Prep", "Trend Forecasting", "Creative Styling"]
    }
  ];

  const workshops = [
    {
      title: "Guest Lectures by Industry Experts",
      icon: <Users className="w-6 h-6" />,
      description: "Regular sessions with renowned makeup artists sharing insights from Bollywood, fashion weeks, and international projects."
    },
    {
      title: "Hands-On Workshops",
      icon: <Calendar className="w-6 h-6" />,
      description: "Intensive weekend workshops focusing on specialized techniques like airbrush makeup, contouring mastery, and color correction."
    },
    {
      title: "Live Demonstrations",
      icon: <Clock className="w-6 h-6" />,
      description: "Watch and learn as professional techniques are demonstrated in real-time on diverse skin tones and face structures."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="academy"
      className="py-20 bg-gradient-to-b from-rose-50 via-white to-rose-50 mt-40"
    >
      {/* Section Header */}
      <div
        className={`text-center mb-16 px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <p className="text-rose-500 font-semibold text-sm uppercase tracking-wider mb-2">
          LEARN FROM THE BEST
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Makeup Academy
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your passion into profession with comprehensive courses designed for aspiring makeup artists
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Header */}
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="mb-4">{course.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 text-rose-100">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    What You'll Learn:
                  </p>
                  {course.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 transition-all duration-300 ${
                        activeCard === index ? "translate-x-2" : ""
                      }`}
                    >
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* <button className="mt-6 w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Workshops & Guest Lectures Section */}
        <div
          className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Guest Lectures & Workshops
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your learning with exclusive sessions from industry leaders and specialized workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-rose-50 to-white rounded-2xl p-6 border-2 border-rose-100 hover:border-rose-300 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="w-14 h-14 bg-rose-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {workshop.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {workshop.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
         {/* CTA Section with Form */}
          <div className="mt-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl p-6 md:p-8 text-white">
            <h4 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-center">
              Ready to Start Your Journey?
            </h4>
            <p className="text-rose-100 text-sm md:text-base mb-6 text-center">
              Join our academy and learn from award-winning professionals.
            </p>
            
            <div className="max-w-2xl mx-auto space-y-3">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              />
              <select
                id="course"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300"
                required
              >
                <option value="">Select a Course</option>
                <option value="Professional Bridal Makeup">Professional Bridal Makeup</option>
                <option value="Cinematic & Character Makeup">Cinematic & Character Makeup</option>
                <option value="Fashion & Editorial Makeup">Fashion & Editorial Makeup</option>
                <option value="Workshop">Workshop/Guest Lecture</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <textarea
                id="message"
                placeholder="Any questions? (Optional)"
                rows={2}
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-300"
              ></textarea>
              <button
                onClick={() => {
                  const name = (document.getElementById('name') as HTMLInputElement).value;
                  const phone = (document.getElementById('phone') as HTMLInputElement).value;
                  const course = (document.getElementById('course') as HTMLSelectElement).value;
                  const message = (document.getElementById('message') as HTMLTextAreaElement).value;
                  
                  if (!name || !phone || !course) {
                    alert('Please fill in all required fields');
                    return;
                  }
                  
                  const whatsappMessage = `Hello! I'm interested in your Makeup Academy.%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Course:* ${encodeURIComponent(course)}%0A*Message:* ${encodeURIComponent(message || 'No additional message')}`;
                  
                  window.open(`https://wa.me/919948623938?text=${whatsappMessage}`, '_blank');
                }}
                className="w-full bg-white text-rose-600 font-semibold px-6 py-3 rounded-lg hover:bg-rose-50 transition-all duration-300 hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Academy;