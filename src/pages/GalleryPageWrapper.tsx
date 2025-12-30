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
      "https://i.ibb.co/Mkv59w8D/Whats-App-Image-2025-12-29-at-4-25-18-PM.jpg",
  "https://i.ibb.co/5hFV4JWm/Smink-Up-WV-Add.jpg",
  "https://i.ibb.co/XRCjvqC/Whats-App-Image-2025-12-29-at-4-25-18-PM-1.jpg",
  "https://i.ibb.co/MDzNSTrG/Whats-App-Image-2025-12-29-at-4-22-42-PM.jpg",
  "https://i.ibb.co/FbKYyYfD/Whats-App-Image-2025-12-29-at-4-22-40-PM-1.jpg",
  "https://i.ibb.co/6JZr9WrN/Whats-App-Image-2025-12-29-at-4-25-17-PM.jpg",
    "https://i.ibb.co/KpMKt7nH/Whats-App-Image-2025-12-29-at-4-22-38-PM-1.jpg",
    "https://i.ibb.co/5hZDDkpK/Whats-App-Image-2025-12-29-at-4-25-19-PM.jpg",
    "https://i.ibb.co/MDzNSTrG/Whats-App-Image-2025-12-29-at-4-22-42-PM.jpg",
   "https://i.ibb.co/MD0DMwwW/Whats-App-Image-2025-12-29-at-4-22-37-PM.jpg",
    "https://i.ibb.co/wFKP36YL/Whats-App-Image-2025-12-29-at-4-22-40-PM.jpg",
    "https://i.ibb.co/6JDkspbY/Whats-App-Image-2025-12-29-at-4-22-41-PM.jpg",
    "https://i.ibb.co/YBD2xNGg/Whats-App-Image-2025-12-29-at-4-22-40-PM-2.jpg"
  
  ];

  return <GalleryPage images={allImages} />;
};

export default GalleryPageWrapper;
