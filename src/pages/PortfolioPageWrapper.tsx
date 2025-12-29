import PortfolioPage from "./PortfolioPage";

// Import portfolio images
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceParty from "@/assets/service-party.jpg";
import serviceCinematic from "@/assets/service-cinematic.jpg";
import serviceHalfsaree from "@/assets/service-halfsaree.jpg";

const PortfolioPageWrapper = () => {
  const portfolioItems = [
    {
      title: "Traditional Bridal",
      category: "Bridal",
      description: "Elegant traditional bridal makeup with intricate details and timeless beauty.",
      image: portfolio1,
    },
    {
      title: "Reception Glamour",
      category: "Party",
      description: "Glamorous evening look perfect for reception parties and celebrations.",
      image: portfolio2,
    },
    {
      title: "Editorial Fashion",
      category: "Fashion",
      description: "Bold and creative editorial makeup for high fashion shoots.",
      image: portfolio3,
    },
    {
      title: "Natural Glow",
      category: "Beauty",
      description: "Soft, natural makeup that enhances your features beautifully.",
      image: portfolio4,
    },
    {
      title: "Dramatic Evening",
      category: "Party",
      description: "Stunning smoky eyes and dramatic styling for special evenings.",
      image: portfolio5,
    },
    {
      title: "South Indian Bride",
      category: "Bridal",
      description: "Traditional South Indian bridal look with gold jewelry and classic styling.",
      image: portfolio6,
    },
    {
      title: "Indian Bridal",
      category: "Bridal",
      description: "Rich traditional bridal makeup with beautiful jewelry styling.",
      image: serviceBridal,
    },
    {
      title: "Party Ready",
      category: "Party",
      description: "Glamorous party makeup with smoky eyes and bold lips.",
      image: serviceParty,
    },
    {
      title: "Cinematic Look",
      category: "Cinematic",
      description: "Professional makeup for film and cinema productions.",
      image: serviceCinematic,
    },
    {
      title: "Half Saree Ceremony",
      category: "Traditional",
      description: "Beautiful makeup for traditional half saree celebrations.",
      image: serviceHalfsaree,
    },
  ];

  return <PortfolioPage items={portfolioItems} />;
};

export default PortfolioPageWrapper;
