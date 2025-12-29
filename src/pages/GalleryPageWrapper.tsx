import GalleryPage from "./GalleryPage";

// Import all gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceParty from "@/assets/service-party.jpg";
import serviceCinematic from "@/assets/service-cinematic.jpg";
import serviceHalfsaree from "@/assets/service-halfsaree.jpg";
import serviceModel from "@/assets/service-model.jpg";
import serviceFashion from "@/assets/service-fashion.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import aboutMain from "@/assets/about-main.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

const GalleryPageWrapper = () => {
  const allImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    serviceBridal,
    serviceParty,
    serviceCinematic,
    serviceHalfsaree,
    serviceModel,
    serviceFashion,
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    aboutMain,
    about2,
    about3,
  ];

  return <GalleryPage images={allImages} />;
};

export default GalleryPageWrapper;
