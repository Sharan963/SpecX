import pc1 from "@/assets/Images/pc1.webp";
import pc2 from "@/assets/Images/pc2.webp";
import pc3 from "@/assets/Images/pc3.jpg";
import pc4 from "@/assets/Images/pc4.avif";
import pc5 from "@/assets/Images/pc5.jpg";
import pc6 from "@/assets/Images/pc6.webp";

const preBuiltSystems = [
  {
    id: "budget-gaming-pc",
    name: "Budget Gaming PC",
    image: pc1,
    price: "₹145,000",
    useCase: "Casual Gaming",
    specs: {
      cpu: "Ryzen 5 4500",
      gpu: "GTX 1650",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      psu: "550W Bronze"
    }
  },
  {
    id: "mid-range-gaming-pc",
    name: "Mid Range Gaming PC",
    image: pc2,
    price: "₹175,000",
    useCase: "Gaming + Streaming",
    specs: {
      cpu: "Ryzen 5 5600X",
      gpu: "RTX 4060",
      ram: "16GB DDR4",
      storage: "1TB SSD",
      psu: "650W Bronze"
    }
  },
  {
    id: "high-end-pc",
    name: "High End Gaming PC",
    image: pc3,
    price: "₹3,40,000",
    useCase: "4K Gaming / Editing",
    specs: {
      cpu: "Ryzen 7 7800X3D",
      gpu: "RTX 4070 Ti",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      psu: "750W Gold"
    }
  },
  {
    id: "esports-pc",
    name: "Esports Gaming PC",
    image: pc4,
    price: "₹460,000",
    useCase: "Competitive Gaming",
    specs: {
      cpu: "Intel i5 12400F",
      gpu: "RTX 3050",
      ram: "16GB DDR4",
      storage: "512GB NVMe",
      psu: "600W Bronze"
    }
  },
  {
    id: "creator-pc",
    name: "Content Creator PC",
    image: pc5,
    price: "₹1,50,000",
    useCase: "Video Editing / Rendering",
    specs: {
      cpu: "Ryzen 7 7700X",
      gpu: "RTX 3060",
      ram: "32GB DDR5",
      storage: "1TB NVMe",
      psu: "750W Gold"
    }
  },
  {
    id: "workstation-pc",
    name: "Workstation PC",
    image: pc6,
    price: "₹1,80,000",
    useCase: "3D / AI / Heavy Workloads",
    specs: {
      cpu: "Intel i9 13900K",
      gpu: "RTX 4080",
      ram: "64GB DDR5",
      storage: "2TB NVMe",
      psu: "850W Gold"
    }
  }
];

export default preBuiltSystems;
