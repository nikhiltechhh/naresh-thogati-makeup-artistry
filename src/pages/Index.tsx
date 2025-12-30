import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
// import Portfolio from "@/components/Portfolio";
import Video from "@/components/Video";
import Specialization from "@/components/Specialization"
import Choose from "@/components/Choose"
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Import images
import heroImage from "@/assets/hero-image.jpg";
import aboutMain from "@/assets/about-main.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

import serviceBridal from "@/assets/service-bridal.jpg";
import serviceParty from "@/assets/service-party.jpg";
import serviceHalfsaree from "@/assets/service-halfsaree.jpg";
import serviceCinematic from "@/assets/service-cinematic.jpg";
import serviceProsthetic from "@/assets/service-prosthetic.jpg";
import serviceModel from "@/assets/service-model.jpg";
import serviceFashion from "@/assets/service-fashion.jpg";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Index = () => {
  const services = [
    { title: "Bridal Makeup", image: serviceBridal },
    { title: "Party Makeup", image: serviceParty },
    { title: "Half Saree Makeup", image: serviceHalfsaree },
    { title: "Movie & Cinematic", image: serviceCinematic },
    { title: "Prosthetic Makeup", image: serviceProsthetic },
    { title: "Model Shoots", image: serviceModel },
    { title: "Fashion Shows", image: serviceFashion },
  ];

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  const portfolioItems = [
    {
      title: "Traditional Bridal",
      category: "Bridal",
      image: portfolio1,
    },
    {
      title: "Reception Glamour",
      category: "Party",
      image: portfolio2,
    },
    {
      title: "Editorial Fashion",
      category: "Fashion",
      image: portfolio3,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero heroImage={heroImage} />
        <About
          aboutImage1={aboutMain}
          aboutImage2={about2}
          aboutImage3={about3}
        />
        <Specialization />
       
        <Services />
         <Choose />
        <Gallery />
        <Video />
        {/* <Portfolio items={portfolioItems} /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
