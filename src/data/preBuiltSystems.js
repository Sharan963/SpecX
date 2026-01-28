const preBuiltSystems = [
  {
    id: "budget-gaming-pc",
    name: "Budget Gaming PC",
    image: "/assets/prebuilt/budget.jpg",
    price: "₹45,000",
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
    image: "/assets/prebuilt/mid.jpg",
    price: "₹75,000",
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
    image: "/assets/prebuilt/high.jpg",
    price: "₹1,40,000",
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
    image: "/assets/prebuilt/esports.jpg",
    price: "₹60,000",
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
    image: "/assets/prebuilt/creator.jpg",
    price: "₹1,10,000",
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
    image: "/assets/prebuilt/workstation.jpg",
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
