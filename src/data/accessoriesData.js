import fan1 from "@/assets/Images/cpuFan1.jpg";
import fan2 from "@/assets/Images/cpuFan2.png";
import fan3 from "@/assets/Images/cpuFan3.jpg";
import fan4 from "@/assets/Images/cpuFan4.jpg";
import fan5 from "@/assets/Images/cpuFan5.webp";
import fan6 from "@/assets/Images/cpuFan6.jpg";
import fan7 from "@/assets/Images/cpuFan7.webp";
import fan8 from "@/assets/Images/cpuFan8.jpg";
import fan9 from "@/assets/Images/cpuFan9.jpg";
import background1 from "@/assets/Images/fanbackground.webp";

import lc1 from "@/assets/Images/liquid1.jpg";
import lc2 from "@/assets/Images/liquid2.jpg";
import lc3 from "@/assets/Images/liquid3.jpg";
import lc4 from "@/assets/Images/liquid4.webp";
import lc5 from "@/assets/Images/liquid5.jpg";
import lc6 from "@/assets/Images/liquid6.webp";
import lc7 from "@/assets/Images/liquid7.jpg";
import lc8 from "@/assets/Images/liquid8.jpg";
import lc9 from "@/assets/Images/liquid9.jpg";
import background2 from "@/assets/Images/liquidbackground.webp";

import rgb1 from "@/assets/Images/rgb1.avif";
import rgb2 from "@/assets/Images/rgb2.jpg";
import rgb3 from "@/assets/Images/rgb3.webp";
import rgb4 from "@/assets/Images/rgb4.jpg";
import rgb5 from "@/assets/Images/rgb5.jpg";
import rgb6 from "@/assets/Images/rgb6.jpg";
import rgb7 from "@/assets/Images/rgb7.jpg";
import rgb8 from "@/assets/Images/rgb8.jpg";
import rgb9 from "@/assets/Images/rgb9.webp";
import background3 from "@/assets/Images/rgbbackground.avif";

const accessoriesData = {
  cpuFan: [
    {
      id: "cpu-fan-1",
      name: "Cooler Master Hyper 212",
      heading: "High-Performance CPU Coolers",
      sub: "Designed to handle intense gaming loads with superior airflow and cooling",
      img: background1,
      image: fan1,
      price: 3200,
      description: "Popular air cooler with excellent cooling performance.",
      specs: {
        fanSize: "120mm",
        rpm: "650–2000 RPM",
        noise: "26 dBA",
        socket: "AM4 / LGA1700",
        rgb: false,
      },
    },
    {
      id: "cpu-fan-2",
      name: "DeepCool GAMMAXX 400",
      image: fan2,
      price: 2800,
      description: "Affordable CPU cooler with good thermal performance.",
      specs: {
        fanSize: "120mm",
        rpm: "900–1500 RPM",
        noise: "27 dBA",
        socket: "AM4 / LGA1700",
        rgb: false,
      },
    },
    {
      id: "cpu-fan-3",
      name: "Noctua NH-D15",
      image: fan3,
      price: 9500,
      description: "High-end dual tower air cooler.",
      specs: {
        fanSize: "140mm",
        rpm: "300–1500 RPM",
        noise: "24 dBA",
        socket: "AM4 / LGA1700",
        rgb: false,
      },
    },
    {
      id: "cpu-fan-4",
      name: "Cooler Master MA620P",
      image: fan4,
      price: 7200,
      description: "Dual tower RGB air cooler.",
      specs: {
        fanSize: "120mm",
        rpm: "650–1800 RPM",
        noise: "30 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "cpu-fan-5",
      name: "DeepCool AK620",
      image: fan5,
      price: 6800,
      description: "High performance dual tower cooler.",
      specs: {
        fanSize: "120mm",
        rpm: "500–1850 RPM",
        noise: "28 dBA",
        socket: "AM4 / LGA1700",
        rgb: false,
      },
    },
    {
      id: "cpu-fan-6",
      name: "be quiet! Dark Rock 4",
      image: fan6,
      price: 7500,
      description: "Ultra-quiet premium air cooler.",
      specs: {
        fanSize: "135mm",
        rpm: "1400 RPM",
        noise: "21 dBA",
        socket: "AM4 / LGA1700",
        rgb: false,
      },
    },
    {
      id: "cpu-fan-7",
      name: "Arctic Freezer 34 eSports",
      image: fan7,
      price: 4200,
      description: "Efficient cooler for gaming CPUs.",
      specs: {
        fanSize: "120mm",
        rpm: "200–2100 RPM",
        noise: "25 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "cpu-fan-8",
      name: "Thermaltake UX100",
      image: fan8,
      price: 2600,
      description: "Compact RGB CPU air cooler.",
      specs: {
        fanSize: "120mm",
        rpm: "1800 RPM",
        noise: "26 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "cpu-fan-9",
      name: "Ant Esports ICE-C200",
      image: fan9,
      price: 1800,
      description: "Budget CPU cooler for entry builds.",
      specs: {
        fanSize: "120mm",
        rpm: "1600 RPM",
        noise: "29 dBA",
        socket: "AM4 / LGA1700",
        rgb: false,
      },
    },
  ],

  liquidCoolers: [
    {
      id: "lc-1",
      name: "Corsair iCUE H100i RGB Pro XT",
      heading: "AIO Liquid Cooling Solutions",
      sub: "Optimized cooling performance with efficient heat dissipation",
      img: background2,
      image: lc1,
      price: 9800,
      description: "240mm AIO liquid cooler with high-performance RGB cooling.",
      specs: {
        radiator: "240mm",
        fans: 2,
        noise: "37 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "lc-2",
      name: "NZXT Kraken X63",
      image: lc2,
      price: 12500,
      description: "Premium AIO with superior cooling performance.",
      specs: {
        radiator: "280mm",
        fans: 2,
        noise: "36 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "lc-3",
      name: "Cooler Master ML240L V2",
      image: lc3,
      price: 7200,
      description: "Affordable 240mm liquid cooler with RGB.",
      specs: {
        radiator: "240mm",
        fans: 2,
        noise: "27 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "lc-4",
      name: "DeepCool Castle 240EX",
      image: lc4,
      price: 8800,
      description: "High-performance AIO with anti-leak technology.",
      specs: {
        radiator: "240mm",
        fans: 2,
        noise: "32 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "lc-5",
      name: "Arctic Liquid Freezer II 280",
      image: lc5,
      price: 9600,
      description: "Top-tier cooling with excellent thermal efficiency.",
      specs: {
        radiator: "280mm",
        fans: 2,
        noise: "30 dBA",
        socket: "AM4 / LGA1700",
        rgb: false,
      },
    },
    {
      id: "lc-6",
      name: "MSI MAG CoreLiquid 240R",
      image: lc6,
      price: 7900,
      description: "ARGB liquid cooler for gaming PCs.",
      specs: {
        radiator: "240mm",
        fans: 2,
        noise: "34 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "lc-7",
      name: "ASUS ROG Strix LC 240",
      image: lc7,
      price: 11500,
      description: "High-end cooling with ROG aesthetics.",
      specs: {
        radiator: "240mm",
        fans: 2,
        noise: "35 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "lc-8",
      name: "Thermaltake Floe Riing 240",
      image: lc8,
      price: 10200,
      description: "RGB liquid cooler with software control.",
      specs: {
        radiator: "240mm",
        fans: 2,
        noise: "33 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
    {
      id: "lc-9",
      name: "Ant Esports ICE Chroma 240",
      image: lc9,
      price: 5400,
      description: "Budget AIO liquid cooler with RGB.",
      specs: {
        radiator: "240mm",
        fans: 2,
        noise: "35 dBA",
        socket: "AM4 / LGA1700",
        rgb: true,
      },
    },
  ],

  rgbLighting: [
    {
      id: "rgb-1",
      name: "Corsair iCUE Lighting Node Pro",
      heading: "RGB Lighting Kits",
      sub: "Customize your setup with vibrant lighting and stunning visual effects",
      img: background3,
      image: rgb1,
      price: 4200,
      description: "Advanced RGB lighting kit with full software control.",
      specs: {
        type: "LED Strip",
        length: "40cm",
        control: "Software",
        sync: "iCUE",
        rgb: true,
      },
    },
    {
      id: "rgb-2",
      name: "NZXT Hue 2 RGB Kit",
      image: rgb2,
      price: 4800,
      description: "Premium RGB lighting system with smooth effects.",
      specs: {
        type: "LED Strip",
        length: "300mm",
        control: "Software",
        sync: "NZXT CAM",
        rgb: true,
      },
    },
    {
      id: "rgb-3",
      name: "Cooler Master RGB LED Controller",
      image: rgb3,
      price: 3500,
      description: "RGB lighting kit with controller and strips.",
      specs: {
        type: "LED Strip",
        length: "30cm",
        control: "Remote / Software",
        sync: "Aura Sync",
        rgb: true,
      },
    },
    {
      id: "rgb-4",
      name: "DeepCool RGB 200 Pro",
      image: rgb4,
      price: 3000,
      description: "Magnetic RGB lighting strips.",
      specs: {
        type: "LED Strip",
        length: "350mm",
        control: "Software",
        sync: "RGB Fusion",
        rgb: true,
      },
    },
    {
      id: "rgb-5",
      name: "Lian Li Strimer Plus",
      image: rgb5,
      price: 6500,
      description: "RGB power cable lighting kit.",
      specs: {
        type: "Cable RGB",
        length: "300mm",
        control: "Controller",
        sync: "ARGB",
        rgb: true,
      },
    },
    {
      id: "rgb-6",
      name: "Thermaltake RGB Plus",
      image: rgb6,
      price: 5200,
      description: "RGB lighting kit with vivid colors.",
      specs: {
        type: "LED Strip",
        length: "400mm",
        control: "Software",
        sync: "TT RGB Plus",
        rgb: true,
      },
    },
    {
      id: "rgb-7",
      name: "Ant Esports RGB Strip Kit",
      image: rgb7,
      price: 1800,
      description: "Budget RGB lighting kit for gaming PCs.",
      specs: {
        type: "LED Strip",
        length: "300mm",
        control: "Remote",
        sync: "Manual",
        rgb: true,
      },
    },
    {
      id: "rgb-8",
      name: "MSI Mystic Light RGB Kit",
      image: rgb8,
      price: 3900,
      description: "RGB lighting kit compatible with MSI boards.",
      specs: {
        type: "LED Strip",
        length: "350mm",
        control: "Software",
        sync: "Mystic Light",
        rgb: true,
      },
    },
    {
      id: "rgb-9",
      name: "ASUS Aura RGB Kit",
      image: rgb9,
      price: 4500,
      description: "Aura Sync compatible RGB lighting kit.",
      specs: {
        type: "LED Strip",
        length: "350mm",
        control: "Software",
        sync: "Aura Sync",
        rgb: true,
      },
    },
  ],
};

export default accessoriesData;
