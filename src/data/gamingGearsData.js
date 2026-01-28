import kb1 from "@/assets/Images/keyboard1.webp";
import kb2 from "@/assets/Images/keyboard2.avif";
import kb3 from "@/assets/Images/keyboard3.avif";
import kb4 from "@/assets/Images/keyboard4.webp";
import kb5 from "@/assets/Images/keyboard5.png";
import kb6 from "@/assets/Images/keyboard6.png";

import mouse1 from "@/assets/Images/mouse1.webp";
import mouse2 from "@/assets/Images/mouse2.webp";
import mouse3 from "@/assets/Images/mouse3.avif";
import mouse4 from "@/assets/Images/mouse4.webp";
import mouse5 from "@/assets/Images/mouse5.webp";
import mouse6 from "@/assets/Images/mouse6.png";

import pad1 from "@/assets/Images/mousepad1.webp";
import pad2 from "@/assets/Images/mousepad2.webp";
import pad3 from "@/assets/Images/mousepad3.png";
import pad4 from "@/assets/Images/mousepad4.webp";
import pad5 from "@/assets/Images/mousepad5.png";
import pad6 from "@/assets/Images/mousepad6.png";

import monitor1 from "@/assets/Images/monitor1.png";
import monitor2 from "@/assets/Images/monitor2.png";
import monitor3 from "@/assets/Images/monitor3.png";
import monitor4 from "@/assets/Images/monitor4.avif";
import monitor5 from "@/assets/Images/monitor5.png";
import monitor6 from "@/assets/Images/monitor6.webp";

import headset1 from "@/assets/Images/headset1.webp";
import headset2 from "@/assets/Images/headset2.webp";
import headset3 from "@/assets/Images/headset3.avif";
import headset4 from "@/assets/Images/headset4.webp";
import headset5 from "@/assets/Images/headset5.png";
import headset6 from "@/assets/Images/headset6.png";

import controller1 from "@/assets/Images/controller1.png";
import controller2 from "@/assets/Images/controller2.webp";
import controller3 from "@/assets/Images/controller3.png";
import controller4 from "@/assets/Images/controller4.png";
import controller5 from "@/assets/Images/controller5.webp";
import controller6 from "@/assets/Images/controller6.webp";

const gamingGears = {
  keyboard: [
    {
      id: "kb-1",
      name: "Redragon K552 Kumara",
      heading: "Mechanical Gaming Keyboards",
      sub: "Fast, responsive keyboards built for competitive gaming",
      image: kb1,
      price: 3200,
      description: "Compact mechanical keyboard with blue switches.",
      specs: {
        type: "Mechanical",
        switch: "Outemu Blue",
        backlight: "Red LED",
        layout: "TKL",
        connectivity: "Wired",
      },
    },
    {
      id: "kb-2",
      name: "Logitech G213 Lightsync",
      image: kb2,
      price: 4200,
      description: "RGB gaming keyboard with LIGHTSYNC support.",
      specs: {
        type: "Membrane",
        switch: "Mech-Dome",
        backlight: "RGB",
        layout: "Full Size",
        connectivity: "Wired",
      },
    },
    {
      id: "kb-3",
      name: "Corsair K55 RGB Pro",
      image: kb3,
      price: 5200,
      description: "Durable gaming keyboard with RGB lighting.",
      specs: {
        type: "Membrane",
        switch: "Silent",
        backlight: "RGB",
        layout: "Full Size",
        connectivity: "Wired",
      },
    },
    {
      id: "kb-4",
      name: "Razer BlackWidow V3",
      image: kb4,
      price: 8900,
      description: "High-performance mechanical keyboard for esports.",
      specs: {
        type: "Mechanical",
        switch: "Razer Green",
        backlight: "RGB",
        layout: "Full Size",
        connectivity: "Wired",
      },
    },
    {
      id: "kb-5",
      name: "HyperX Alloy FPS Pro",
      image: kb5,
      price: 6500,
      description: "Tenkeyless mechanical keyboard for FPS gamers.",
      specs: {
        type: "Mechanical",
        switch: "Cherry MX Red",
        backlight: "Red LED",
        layout: "TKL",
        connectivity: "Wired",
      },
    },
    {
      id: "kb-6",
      name: "Cosmic Byte CB-GK-16",
      image: kb6,
      price: 2800,
      description: "Budget RGB mechanical keyboard for gamers.",
      specs: {
        type: "Mechanical",
        switch: "Blue Switch",
        backlight: "RGB",
        layout: "Full Size",
        connectivity: "Wired",
      },
    },
  ],
  mouse: [
    {
      id: "mouse-1",
      name: "Logitech G102 Lightsync",
      heading: "Gaming Mouse",
      sub: "High precision mice built for fast and accurate gameplay",
      image: mouse1,
      price: 1600,
      description: "Lightweight gaming mouse with accurate sensor.",
      specs: {
        dpi: "8000 DPI",
        buttons: 6,
        sensor: "Optical",
        rgb: true,
        connectivity: "Wired",
      },
    },
    {
      id: "mouse-2",
      name: "Razer DeathAdder Essential",
      image: mouse2,
      price: 2200,
      description: "Ergonomic gaming mouse with high precision.",
      specs: {
        dpi: "6400 DPI",
        buttons: 5,
        sensor: "Optical",
        rgb: false,
        connectivity: "Wired",
      },
    },
    {
      id: "mouse-3",
      name: "Corsair Harpoon RGB",
      image: mouse3,
      price: 2600,
      description: "Lightweight mouse with customizable RGB lighting.",
      specs: {
        dpi: "10000 DPI",
        buttons: 6,
        sensor: "Optical",
        rgb: true,
        connectivity: "Wired",
      },
    },
    {
      id: "mouse-4",
      name: "Logitech G502 Hero",
      image: mouse4,
      price: 4200,
      description: "High-performance gaming mouse with HERO sensor.",
      specs: {
        dpi: "25600 DPI",
        buttons: 11,
        sensor: "Optical",
        rgb: true,
        connectivity: "Wired",
      },
    },
    {
      id: "mouse-5",
      name: "Redragon M711 Cobra",
      image: mouse5,
      price: 1800,
      description: "Affordable RGB gaming mouse with adjustable DPI.",
      specs: {
        dpi: "10000 DPI",
        buttons: 7,
        sensor: "Optical",
        rgb: true,
        connectivity: "Wired",
      },
    },
    {
      id: "mouse-6",
      name: "SteelSeries Rival 3",
      image: mouse6,
      price: 3000,
      description: "Durable gaming mouse with true 1-to-1 tracking.",
      specs: {
        dpi: "8500 DPI",
        buttons: 6,
        sensor: "Optical",
        rgb: true,
        connectivity: "Wired",
      },
    },
  ],
  mousepad: [
    {
      id: "pad-1",
      name: "SteelSeries QcK Large",
      heading: "Gaming Mouse Pads",
      sub: "Smooth surface designed for precision and control",
      image: pad1,
      price: 1200,
      description: "High-quality cloth mouse pad used by esports pros.",
      specs: {
        size: "450 x 400 mm",
        thickness: "2 mm",
        surface: "Cloth",
        base: "Rubber",
        rgb: false,
      },
    },
    {
      id: "pad-2",
      name: "Redragon Suzaku P003",
      image: pad2,
      price: 800,
      description: "Durable gaming mouse pad with smooth glide.",
      specs: {
        size: "350 x 280 mm",
        thickness: "3 mm",
        surface: "Cloth",
        base: "Anti-slip rubber",
        rgb: false,
      },
    },
    {
      id: "pad-3",
      name: "Corsair MM300",
      image: pad3,
      price: 1500,
      description: "Extended mouse pad for keyboard and mouse.",
      specs: {
        size: "930 x 300 mm",
        thickness: "3 mm",
        surface: "Cloth",
        base: "Rubber",
        rgb: false,
      },
    },
    {
      id: "pad-4",
      name: "Logitech G240",
      image: pad4,
      price: 1300,
      description: "Low-friction cloth mouse pad for gaming accuracy.",
      specs: {
        size: "340 x 280 mm",
        thickness: "1 mm",
        surface: "Cloth",
        base: "Rubber",
        rgb: false,
      },
    },
    {
      id: "pad-5",
      name: "Cosmic Byte Hyper Giant",
      image: pad5,
      price: 1700,
      description: "Extended RGB mouse pad with smooth tracking.",
      specs: {
        size: "800 x 300 mm",
        thickness: "4 mm",
        surface: "Micro-textured",
        base: "Anti-slip rubber",
        rgb: true,
      },
    },
    {
      id: "pad-6",
      name: "Ant Esports MP300",
      image: pad6,
      price: 900,
      description: "Budget mouse pad for gaming and office use.",
      specs: {
        size: "350 x 250 mm",
        thickness: "3 mm",
        surface: "Cloth",
        base: "Rubber",
        rgb: false,
      },
    },
  ],
  monitor: [
    {
      id: "monitor-1",
      name: "LG UltraGear 24GN650",
      heading: "Gaming Monitors",
      sub: "High refresh rate displays for smooth gaming experience",
      image: monitor1,
      price: 14500,
      description:
        "24-inch Full HD IPS gaming monitor with 144Hz refresh rate.",
      specs: {
        size: "24 inch",
        resolution: "1920 x 1080",
        refreshRate: "144Hz",
        panel: "IPS",
        responseTime: "1ms",
        sync: "G-Sync Compatible / FreeSync",
      },
    },
    {
      id: "monitor-2",
      name: "Acer Nitro VG240YS",
      image: monitor2,
      price: 13200,
      description: "High-performance gaming monitor with smooth visuals.",
      specs: {
        size: "23.8 inch",
        resolution: "1920 x 1080",
        refreshRate: "165Hz",
        panel: "IPS",
        responseTime: "1ms",
        sync: "FreeSync",
      },
    },
    {
      id: "monitor-3",
      name: "MSI Optix G241",
      image: monitor3,
      price: 15500,
      description: "Fast IPS gaming monitor for competitive gaming.",
      specs: {
        size: "24 inch",
        resolution: "1920 x 1080",
        refreshRate: "144Hz",
        panel: "IPS",
        responseTime: "1ms",
        sync: "FreeSync",
      },
    },
    {
      id: "monitor-4",
      name: "Samsung Odyssey G5",
      image: monitor4,
      price: 24000,
      description: "Curved gaming monitor with immersive visuals.",
      specs: {
        size: "27 inch",
        resolution: "2560 x 1440",
        refreshRate: "144Hz",
        panel: "VA",
        responseTime: "1ms",
        sync: "FreeSync Premium",
      },
    },
    {
      id: "monitor-5",
      name: "ASUS TUF VG259Q",
      image: monitor5,
      price: 21000,
      description: "Professional esports monitor with ultra-fast response.",
      specs: {
        size: "24.5 inch",
        resolution: "1920 x 1080",
        refreshRate: "144Hz",
        panel: "IPS",
        responseTime: "1ms",
        sync: "G-Sync Compatible",
      },
    },
    {
      id: "monitor-6",
      name: "Gigabyte G27Q",
      image: monitor6,
      price: 27500,
      description: "QHD gaming monitor with excellent color accuracy.",
      specs: {
        size: "27 inch",
        resolution: "2560 x 1440",
        refreshRate: "144Hz",
        panel: "IPS",
        responseTime: "1ms",
        sync: "FreeSync Premium",
      },
    },
  ],

  headset: [
    {
      id: "headset-1",
      name: "Logitech G Pro X",
      heading: "Gaming Headsets",
      sub: "Immersive audio for competitive and casual gaming",
      image: headset1,
      price: 9500,
      description: "Pro-grade gaming headset with Blue VO!CE mic technology.",
      specs: {
        type: "Wired",
        sound: "7.1 Surround",
        mic: "Detachable",
        driver: "50mm",
        rgb: false,
      },
    },
    {
      id: "headset-2",
      name: "Razer BlackShark V2",
      image: headset2,
      price: 7800,
      description: "Lightweight esports headset with powerful sound.",
      specs: {
        type: "Wired",
        sound: "7.1 Surround",
        mic: "Detachable",
        driver: "50mm",
        rgb: false,
      },
    },
    {
      id: "headset-3",
      name: "Corsair HS55 Stereo",
      image: headset3,
      price: 5200,
      description: "Comfortable gaming headset with clear mic quality.",
      specs: {
        type: "Wired",
        sound: "Stereo",
        mic: "Detachable",
        driver: "50mm",
        rgb: false,
      },
    },
    {
      id: "headset-4",
      name: "HyperX Cloud Stinger",
      image: headset4,
      price: 4600,
      description: "Lightweight headset with great comfort and sound.",
      specs: {
        type: "Wired",
        sound: "Stereo",
        mic: "Rotating",
        driver: "50mm",
        rgb: false,
      },
    },
    {
      id: "headset-5",
      name: "Redragon Zeus X",
      image: headset5,
      price: 4300,
      description: "RGB gaming headset with surround sound.",
      specs: {
        type: "Wired",
        sound: "7.1 Surround",
        mic: "Detachable",
        driver: "53mm",
        rgb: true,
      },
    },
    {
      id: "headset-6",
      name: "SteelSeries Arctis 1",
      image: headset6,
      price: 5900,
      description: "Multi-platform gaming headset with premium sound.",
      specs: {
        type: "Wired",
        sound: "Stereo",
        mic: "Detachable",
        driver: "40mm",
        rgb: false,
      },
    },
  ],

  controller: [
    {
      id: "controller-1",
      name: "Xbox Wireless Controller",
      heading: "Gaming Controllers",
      sub: "Precision control for console and PC gaming",
      image: controller1,
      price: 5200,
      description: "Official Xbox controller with wireless connectivity.",
      specs: {
        type: "Wireless",
        compatibility: "PC / Xbox",
        connectivity: "Bluetooth",
        vibration: true,
        battery: "AA / Rechargeable",
      },
    },
    {
      id: "controller-2",
      name: "Sony DualSense Wireless Controller",
      image: controller2,
      price: 5900,
      description: "PlayStation 5 controller with haptic feedback.",
      specs: {
        type: "Wireless",
        compatibility: "PC / PS5",
        connectivity: "Bluetooth / USB",
        vibration: true,
        battery: "Built-in Rechargeable",
      },
    },
    {
      id: "controller-3",
      name: "Redragon G808 Harrow",
      image: controller3,
      price: 2800,
      description: "Wireless gamepad with dual vibration motors.",
      specs: {
        type: "Wireless",
        compatibility: "PC / PS3",
        connectivity: "2.4GHz Dongle",
        vibration: true,
        battery: "Rechargeable",
      },
    },
    {
      id: "controller-4",
      name: "Logitech G29",
      image: controller4,
      price: 35000,
      description: "Reliable wireless controller for PC gaming.",
      specs: {
        type: "Wireless",
        compatibility: "PC",
        connectivity: "2.4GHz Dongle",
        vibration: true,
        battery: "AA Batteries",
      },
    },
    {
      id: "controller-5",
      name: "Cosmic Byte Nebula",
      image: controller5,
      price: 2600,
      description: "Budget gaming controller with RGB lighting.",
      specs: {
        type: "Wired",
        compatibility: "PC",
        connectivity: "USB",
        vibration: true,
        battery: "Not Required",
      },
    },
    {
      id: "controller-6",
      name: "8BitDo Pro 2",
      image: controller6,
      price: 5200,
      description: "Premium controller with customizable controls.",
      specs: {
        type: "Wireless",
        compatibility: "PC / Android / iOS",
        connectivity: "Bluetooth / USB",
        vibration: true,
        battery: "Rechargeable",
      },
    },
  ],
};

export default gamingGears;
