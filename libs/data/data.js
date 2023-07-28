const Data = [
  {
    Image: "cpu1.jpg",
    "Product Name": "AMD Ryzen 5 5600X",
    Category: "CPU Processor",
    Status: "In Stock",
    Price: 279.99,
    Description:
      "Powerful CPU for gaming and content creation.",
    "Key Features": {
      Brand: "AMD",
      Model: "Ryzen 5 5600X",
      Specification:
        "6 cores, 12 threads, 3.7GHz base, 4.6GHz boost, 32MB cache",
      Socket: "AM4",
      TDP: "65W",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user1",
        rating: 5,
        comment: "Best CPU for gaming in its price range!",
      },
      {
        username: "user2",
        rating: 4,
        comment:
          "Fast and reliable, great for multi-tasking.",
      },
    ],
  },
  {
    Image: "cpu2.jpg",
    "Product Name": "Intel Core i9-11900K",
    Category: "CPU Processor",
    Status: "In Stock",
    Price: 519.99,
    Description:
      "High-performance CPU for gaming and productivity.",
    "Key Features": {
      Brand: "Intel",
      Model: "Core i9-11900K",
      Specification:
        "8 cores, 16 threads, 3.5GHz base, 5.3GHz boost, 16MB cache",
      Socket: "LGA 1200",
      TDP: "125W",
    },
    "Individual Rating": 4.9,
    "Average Rating": 4.8,
    Reviews: [
      {
        username: "user3",
        rating: 5,
        comment:
          "Beast of a CPU! Handles everything with ease.",
      },
      {
        username: "user4",
        rating: 4,
        comment:
          "Runs a bit hot, but the performance is unmatched.",
      },
    ],
  },
  {
    Image: "cpu3.jpg",
    "Product Name": "Intel Core i5-11600K",
    Category: "CPU Processor",
    Status: "In Stock",
    Price: 269.99,
    Description: "Great CPU for gaming and everyday tasks.",
    "Key Features": {
      Brand: "Intel",
      Model: "Core i5-11600K",
      Specification:
        "6 cores, 12 threads, 3.9GHz base, 4.9GHz boost, 12MB cache",
      Socket: "LGA 1200",
      TDP: "125W",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user5",
        rating: 5,
        comment:
          "Excellent value for money, handles games well.",
      },
      {
        username: "user6",
        rating: 4,
        comment:
          "Solid mid-range CPU, perfect for my needs.",
      },
    ],
  },
  {
    Image: "cpu4.jpg",
    "Product Name": "AMD Ryzen 7 5800X",
    Category: "CPU Processor",
    Status: "In Stock",
    Price: 369.99,
    Description:
      "High-performance CPU for gaming and productivity.",
    "Key Features": {
      Brand: "AMD",
      Model: "Ryzen 7 5800X",
      Specification:
        "8 cores, 16 threads, 3.8GHz base, 4.7GHz boost, 32MB cache",
      Socket: "AM4",
      TDP: "105W",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user7",
        rating: 5,
        comment:
          "A powerful CPU that breezes through tasks.",
      },
      {
        username: "user8",
        rating: 4,
        comment:
          "Great for both gaming and productivity work.",
      },
    ],
  },
  {
    Image: "cpu5.jpg",
    "Product Name": "AMD Ryzen 9 5950X",
    Category: "CPU Processor",
    Status: "In Stock",
    Price: 749.99,
    Description:
      "Extreme-performance CPU for gaming and content creation.",
    "Key Features": {
      Brand: "AMD",
      Model: "Ryzen 9 5950X",
      Specification:
        "16 cores, 32 threads, 3.4GHz base, 4.9GHz boost, 64MB cache",
      Socket: "AM4",
      TDP: "105W",
    },
    "Individual Rating": 4.9,
    "Average Rating": 4.9,
    Reviews: [
      {
        username: "user9",
        rating: 5,
        comment:
          "Unmatched performance, handles anything thrown at it.",
      },
      {
        username: "user10",
        rating: 4,
        comment:
          "Expensive but worth it for content creators.",
      },
    ],
  },
  {
    Image: "mb1.jpg",
    "Product Name": "ASUS ROG Strix B550-F Gaming",
    Category: "Motherboard",
    Status: "In Stock",
    Price: 189.99,
    Description:
      "High-end gaming motherboard for AMD CPUs.",
    "Key Features": {
      Brand: "ASUS",
      Model: "ROG Strix B550-F Gaming",
      Socket: "AM4",
      "Form Factor": "ATX",
      "Memory Slots": "4 DDR4",
      "Expansion Slots": "PCIe x16, PCIe x16 (x4), PCIe x1",
      Storage: "M.2, SATA 6Gb/s",
      "USB Ports": "USB 3.2 Gen 2, USB 3.2 Gen 1, USB 2.0",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user1",
        rating: 5,
        comment:
          "Top-notch features and performance for gaming.",
      },
      {
        username: "user2",
        rating: 4,
        comment: "Great motherboard, but a bit pricey.",
      },
    ],
  },
  {
    Image: "mb2.jpg",
    "Product Name": "GIGABYTE B550 AORUS Elite",
    Category: "Motherboard",
    Status: "In Stock",
    Price: 159.99,
    Description:
      "Mid-range motherboard for AMD Ryzen CPUs.",
    "Key Features": {
      Brand: "GIGABYTE",
      Model: "B550 AORUS Elite",
      Socket: "AM4",
      "Form Factor": "ATX",
      "Memory Slots": "4 DDR4",
      "Expansion Slots": "PCIe x16, PCIe x16 (x4), PCIe x1",
      Storage: "M.2, SATA 6Gb/s",
      "USB Ports": "USB 3.2 Gen 2, USB 3.2 Gen 1, USB 2.0",
    },
    "Individual Rating": 4.6,
    "Average Rating": 4.5,
    Reviews: [
      {
        username: "user3",
        rating: 5,
        comment:
          "A reliable motherboard with good build quality.",
      },
      {
        username: "user4",
        rating: 4,
        comment:
          "Great value for money, no complaints so far.",
      },
    ],
  },
  {
    Image: "mb3.jpg",
    "Product Name": "MSI MPG Z590 Gaming Edge WiFi",
    Category: "Motherboard",
    Status: "In Stock",
    Price: 249.99,
    Description:
      "High-performance gaming motherboard for Intel CPUs.",
    "Key Features": {
      Brand: "MSI",
      Model: "MPG Z590 Gaming Edge WiFi",
      Socket: "LGA 1200",
      "Form Factor": "ATX",
      "Memory Slots": "4 DDR4",
      "Expansion Slots": "PCIe x16, PCIe x16 (x4), PCIe x1",
      Storage: "M.2, SATA 6Gb/s",
      "USB Ports":
        "USB 3.2 Gen 2x2, USB 3.2 Gen 2, USB 3.2 Gen 1, USB 2.0",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user5",
        rating: 5,
        comment:
          "The best motherboard for my Intel gaming setup.",
      },
      {
        username: "user6",
        rating: 4,
        comment:
          "Feature-packed, but BIOS could be more user-friendly.",
      },
    ],
  },
  {
    Image: "mb4.jpg",
    "Product Name": "ASRock B450M Steel Legend",
    Category: "Motherboard",
    Status: "In Stock",
    Price: 109.99,
    Description:
      "Affordable and reliable motherboard for AMD CPUs.",
    "Key Features": {
      Brand: "ASRock",
      Model: "B450M Steel Legend",
      Socket: "AM4",
      "Form Factor": "Micro ATX",
      "Memory Slots": "4 DDR4",
      "Expansion Slots": "PCIe x16, PCIe x1",
      Storage: "M.2, SATA 6Gb/s",
      "USB Ports": "USB 3.2 Gen 1, USB 2.0",
    },
    "Individual Rating": 4.6,
    "Average Rating": 4.5,
    Reviews: [
      {
        username: "user7",
        rating: 5,
        comment:
          "Great micro ATX motherboard for budget builds.",
      },
      {
        username: "user8",
        rating: 4,
        comment:
          "Decent features for the price, no complaints.",
      },
    ],
  },
  {
    Image: "mb5.jpg",
    "Product Name": "ASUS Prime X570-Pro",
    Category: "Motherboard",
    Status: "In Stock",
    Price: 289.99,
    Description:
      "Premium motherboard for high-end AMD Ryzen CPUs.",
    "Key Features": {
      Brand: "ASUS",
      Model: "Prime X570-Pro",
      Socket: "AM4",
      "Form Factor": "ATX",
      "Memory Slots": "4 DDR4",
      "Expansion Slots": "PCIe x16, PCIe x16 (x4), PCIe x1",
      Storage: "M.2, SATA 6Gb/s",
      "USB Ports": "USB 3.2 Gen 2, USB 3.2 Gen 1, USB 2.0",
    },
    "Individual Rating": 4.9,
    "Average Rating": 4.8,
    Reviews: [
      {
        username: "user9",
        rating: 5,
        comment:
          "Outstanding performance and top-notch build quality.",
      },
      {
        username: "user10",
        rating: 4,
        comment:
          "Expensive, but worth it for enthusiast builds.",
      },
    ],
  },
  {
    Image: "ram1.jpg",
    "Product Name": "Corsair Vengeance RGB Pro",
    Category: "RAM",
    Status: "In Stock",
    Price: 89.99,
    Description: "High-performance RGB RAM for gaming.",
    "Key Features": {
      Brand: "Corsair",
      Model: "Vengeance RGB Pro",
      Capacity: "16GB (2x8GB)",
      Type: "DDR4",
      Speed: "3200MHz",
      "CAS Latency": "16",
      Voltage: "1.35V",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user1",
        rating: 5,
        comment:
          "Fast and looks great with the RGB lighting!",
      },
      {
        username: "user2",
        rating: 4,
        comment:
          "Solid performance, but a bit pricey for RGB.",
      },
    ],
  },
  {
    Image: "ram2.jpg",
    "Product Name": "G.SKILL Ripjaws V",
    Category: "RAM",
    Status: "In Stock",
    Price: 79.99,
    Description:
      "Affordable and reliable RAM for everyday use.",
    "Key Features": {
      Brand: "G.SKILL",
      Model: "Ripjaws V",
      Capacity: "32GB (2x16GB)",
      Type: "DDR4",
      Speed: "3600MHz",
      "CAS Latency": "18",
      Voltage: "1.35V",
    },
    "Individual Rating": 4.6,
    "Average Rating": 4.5,
    Reviews: [
      {
        username: "user3",
        rating: 5,
        comment: "A great deal for 32GB of fast RAM.",
      },
      {
        username: "user4",
        rating: 4,
        comment: "Good performance, no complaints so far.",
      },
    ],
  },
  {
    Image: "ram3.jpg",
    "Product Name": "Crucial Ballistix MAX",
    Category: "RAM",
    Status: "In Stock",
    Price: 129.99,
    Description:
      "High-end RAM for enthusiasts and overclockers.",
    "Key Features": {
      Brand: "Crucial",
      Model: "Ballistix MAX",
      Capacity: "64GB (4x16GB)",
      Type: "DDR4",
      Speed: "4000MHz",
      "CAS Latency": "18",
      Voltage: "1.35V",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user5",
        rating: 5,
        comment:
          "The fastest RAM I've ever used, perfect for my rig.",
      },
      {
        username: "user6",
        rating: 4,
        comment:
          "Expensive but worth it for extreme performance.",
      },
    ],
  },
  {
    Image: "psu1.jpg",
    "Product Name": "EVGA SuperNOVA 750 G3",
    Category: "Power Supply",
    Status: "In Stock",
    Price: 129.99,
    Description: "High-quality modular power supply.",
    "Key Features": {
      Brand: "EVGA",
      Model: "SuperNOVA 750 G3",
      Wattage: "750W",
      Efficiency: "80 Plus Gold",
      Modular: "Fully Modular",
      Connectors: "ATX, EPS, PCIe, SATA, Molex",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user1",
        rating: 5,
        comment:
          "Reliable power supply with excellent cable management.",
      },
      {
        username: "user2",
        rating: 4,
        comment: "Good performance, but a bit pricey.",
      },
    ],
  },
  {
    Image: "psu2.jpg",
    "Product Name": "Corsair RM850x",
    Category: "Power Supply",
    Status: "In Stock",
    Price: 149.99,
    Description:
      "Premium power supply with silent operation.",
    "Key Features": {
      Brand: "Corsair",
      Model: "RM850x",
      Wattage: "850W",
      Efficiency: "80 Plus Gold",
      Modular: "Fully Modular",
      Connectors: "ATX, EPS, PCIe, SATA, Molex",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user3",
        rating: 5,
        comment:
          "Excellent power supply, runs quietly and efficiently.",
      },
      {
        username: "user4",
        rating: 4,
        comment:
          "Pricey, but the build quality is top-notch.",
      },
    ],
  },
  {
    Image: "psu3.jpg",
    "Product Name": "Seasonic Focus GX-650",
    Category: "Power Supply",
    Status: "In Stock",
    Price: 109.99,
    Description:
      "Reliable power supply for mid-range systems.",
    "Key Features": {
      Brand: "Seasonic",
      Model: "Focus GX-650",
      Wattage: "650W",
      Efficiency: "80 Plus Gold",
      Modular: "Semi-Modular",
      Connectors: "ATX, EPS, PCIe, SATA, Molex",
    },
    "Individual Rating": 4.6,
    "Average Rating": 4.5,
    Reviews: [
      {
        username: "user5",
        rating: 5,
        comment: "Great value for a reliable power supply.",
      },
      {
        username: "user6",
        rating: 4,
        comment:
          "Semi-modular design makes cable management easier.",
      },
    ],
  },
  {
    Image: "storage1.jpg",
    "Product Name": "Samsung 970 EVO Plus",
    Category: "Storage Device",
    Status: "In Stock",
    Price: 129.99,
    Description:
      "High-speed NVMe SSD for blazing fast storage.",
    "Key Features": {
      Brand: "Samsung",
      Model: "970 EVO Plus",
      Capacity: "500GB",
      Interface: "M.2 PCIe 3.0 x4",
      "Read Speed": "3500 MB/s",
      "Write Speed": "3300 MB/s",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user1",
        rating: 5,
        comment:
          "Incredible SSD, my system boots up in seconds.",
      },
      {
        username: "user2",
        rating: 4,
        comment:
          "Fast and reliable, but a bit expensive for 500GB.",
      },
    ],
  },
  {
    Image: "storage2.jpg",
    "Product Name": "Western Digital Blue 2TB",
    Category: "Storage Device",
    Status: "In Stock",
    Price: 79.99,
    Description: "High-capacity HDD for mass storage.",
    "Key Features": {
      Brand: "Western Digital",
      Model: "Blue",
      Capacity: "2TB",
      Interface: "SATA 6Gb/s",
      RPM: "5400 RPM",
      Cache: "64MB",
    },
    "Individual Rating": 4.6,
    "Average Rating": 4.5,
    Reviews: [
      {
        username: "user3",
        rating: 5,
        comment:
          "Great value for 2TB of storage, works flawlessly.",
      },
      {
        username: "user4",
        rating: 4,
        comment: "A reliable HDD, but slower than an SSD.",
      },
    ],
  },
  {
    Image: "storage3.jpg",
    "Product Name": "Seagate FireCuda 2TB SSHD",
    Category: "Storage Device",
    Status: "In Stock",
    Price: 99.99,
    Description:
      "Hybrid drive for a blend of speed and capacity.",
    "Key Features": {
      Brand: "Seagate",
      Model: "FireCuda",
      Capacity: "2TB",
      Interface: "SATA 6Gb/s",
      RPM: "7200 RPM",
      Cache: "256MB",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user5",
        rating: 5,
        comment:
          "Faster than a regular HDD, great for gaming.",
      },
      {
        username: "user6",
        rating: 4,
        comment:
          "A good hybrid drive, but not as fast as an SSD.",
      },
    ],
  },
  {
    Image: "monitor1.jpg",
    "Product Name": "ASUS ROG Swift PG279Q",
    Category: "Monitor",
    Status: "In Stock",
    Price: 599.99,
    Description: "High-end gaming monitor with IPS panel.",
    "Key Features": {
      Brand: "ASUS",
      Model: "ROG Swift PG279Q",
      "Display Size": "27 inches",
      Resolution: "2560 x 1440 (WQHD)",
      "Refresh Rate": "165Hz",
      "Panel Type": "IPS",
      "Response Time": "4ms",
      Connectivity: "HDMI, DisplayPort, USB 3.0",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user1",
        rating: 5,
        comment:
          "Gorgeous monitor with smooth gaming experience.",
      },
      {
        username: "user2",
        rating: 4,
        comment:
          "Expensive, but worth it for the quality and features.",
      },
    ],
  },
  {
    Image: "monitor2.jpg",
    "Product Name": "LG 27UK850-W",
    Category: "Monitor",
    Status: "In Stock",
    Price: 449.99,
    Description:
      "High-quality 4K monitor with USB-C connectivity.",
    "Key Features": {
      Brand: "LG",
      Model: "27UK850-W",
      "Display Size": "27 inches",
      Resolution: "3840 x 2160 (4K UHD)",
      "Refresh Rate": "60Hz",
      "Panel Type": "IPS",
      "Response Time": "5ms",
      Connectivity: "HDMI, DisplayPort, USB-C, USB 3.0",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user3",
        rating: 5,
        comment:
          "Amazing 4K monitor, perfect for productivity.",
      },
      {
        username: "user4",
        rating: 4,
        comment:
          "Great colors and clarity, but a bit pricey.",
      },
    ],
  },
  {
    Image: "monitor3.jpg",
    "Product Name": "Acer Nitro XV273K",
    Category: "Monitor",
    Status: "In Stock",
    Price: 699.99,
    Description:
      "High-performance gaming monitor with 4K resolution.",
    "Key Features": {
      Brand: "Acer",
      Model: "Nitro XV273K",
      "Display Size": "27 inches",
      Resolution: "3840 x 2160 (4K UHD)",
      "Refresh Rate": "144Hz",
      "Panel Type": "IPS",
      "Response Time": "1ms",
      Connectivity: "HDMI, DisplayPort, USB 3.0",
    },
    "Individual Rating": 4.9,
    "Average Rating": 4.8,
    Reviews: [
      {
        username: "user5",
        rating: 5,
        comment:
          "Best gaming monitor I've ever owned, worth every penny.",
      },
      {
        username: "user6",
        rating: 4,
        comment:
          "Expensive, but the 4K 144Hz experience is incredible.",
      },
    ],
  },
  {
    Image: "monitor4.jpg",
    "Product Name": "Dell UltraSharp U2719D",
    Category: "Monitor",
    Status: "In Stock",
    Price: 349.99,
    Description:
      "Professional-grade monitor with QHD resolution.",
    "Key Features": {
      Brand: "Dell",
      Model: "UltraSharp U2719D",
      "Display Size": "27 inches",
      Resolution: "2560 x 1440 (QHD)",
      "Refresh Rate": "60Hz",
      "Panel Type": "IPS",
      "Response Time": "5ms",
      Connectivity: "HDMI, DisplayPort, USB 3.0",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user7",
        rating: 5,
        comment:
          "Perfect monitor for design work, color accuracy is excellent.",
      },
      {
        username: "user8",
        rating: 4,
        comment:
          "Great picture quality, but could use a higher refresh rate.",
      },
    ],
  },
  {
    Image: "monitor5.jpg",
    "Product Name": "BenQ EX2780Q",
    Category: "Monitor",
    Status: "In Stock",
    Price: 399.99,
    Description:
      "Entertainment-focused monitor with HDR and 144Hz.",
    "Key Features": {
      Brand: "BenQ",
      Model: "EX2780Q",
      "Display Size": "27 inches",
      Resolution: "2560 x 1440 (QHD)",
      "Refresh Rate": "144Hz",
      "Panel Type": "IPS",
      "Response Time": "5ms",
      Connectivity: "HDMI, DisplayPort, USB-C",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user9",
        rating: 5,
        comment:
          "Awesome monitor for gaming and watching movies.",
      },
      {
        username: "user10",
        rating: 4,
        comment:
          "Great colors and refresh rate, but the HDR could be better.",
      },
    ],
  },
  {
    Image: "monitor6.jpg",
    "Product Name": "ViewSonic VP3481",
    Category: "Monitor",
    Status: "In Stock",
    Price: 699.99,
    Description:
      "Ultra-wide monitor for productivity and creative work.",
    "Key Features": {
      Brand: "ViewSonic",
      Model: "VP3481",
      "Display Size": "34 inches",
      Resolution: "3440 x 1440 (UWQHD)",
      "Refresh Rate": "100Hz",
      "Panel Type": "IPS",
      "Response Time": "5ms",
      Connectivity: "HDMI, DisplayPort, USB 3.0",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user11",
        rating: 5,
        comment:
          "Productivity paradise, great for multitasking.",
      },
      {
        username: "user12",
        rating: 4,
        comment:
          "A good ultra-wide monitor, but could use a higher refresh rate.",
      },
    ],
  },
  {
    Image: "keyboard1.jpg",
    "Product Name":
      "Logitech G Pro X Mechanical Gaming Keyboard",
    Category: "Others",
    Status: "In Stock",
    Price: 129.99,
    Description:
      "High-performance mechanical gaming keyboard with customizable switches.",
    "Key Features": {
      Brand: "Logitech",
      Model: "G Pro X",
      "Switch Type": "Removable GX switches",
      Backlighting: "RGB",
      Connectivity: "Wired USB",
      "Special Features":
        "Customizable RGB lighting, programmable macros",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user1",
        rating: 5,
        comment:
          "One of the best gaming keyboards, love the customizable switches!",
      },
      {
        username: "user2",
        rating: 4,
        comment:
          "Great build quality and smooth typing experience.",
      },
    ],
  },
  {
    Image: "keyboard2.jpg",
    "Product Name":
      "Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard",
    Category: "Others",
    Status: "In Stock",
    Price: 189.99,
    Description:
      "Premium mechanical gaming keyboard with dedicated macro keys.",
    "Key Features": {
      Brand: "Corsair",
      Model: "K95 RGB Platinum XT",
      "Switch Type": "Cherry MX Speed",
      Backlighting: "RGB",
      Connectivity: "Wired USB",
      "Special Features":
        "Dedicated macro keys, detachable wrist rest",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user3",
        rating: 5,
        comment:
          "Absolutely love the Cherry MX Speed switches, great for gaming!",
      },
      {
        username: "user4",
        rating: 4,
        comment:
          "Solid build, but the software could use some improvements.",
      },
    ],
  },
  {
    Image: "mouse1.jpg",
    "Product Name": "Razer DeathAdder V2 Gaming Mouse",
    Category: "Others",
    Status: "In Stock",
    Price: 69.99,
    Description:
      "Ergonomic gaming mouse with high-precision optical sensor.",
    "Key Features": {
      Brand: "Razer",
      Model: "DeathAdder V2",
      "Sensor Type": "Razer Focus+ Optical",
      DPI: "20,000 DPI",
      Connectivity: "Wired USB",
      "Special Features":
        "Razer Speedflex cable, customizable RGB lighting",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user5",
        rating: 5,
        comment:
          "Amazing mouse, the high DPI and precision are perfect for gaming.",
      },
      {
        username: "user6",
        rating: 4,
        comment:
          "Comfortable grip and smooth tracking, but a bit pricey.",
      },
    ],
  },
  {
    Image: "casing_color1.jpg",
    "Product Name": "NZXT HUE 2 RGB Lighting Kit",
    Category: "Others",
    Status: "In Stock",
    Price: 39.99,
    Description:
      "RGB lighting kit to add vibrant colors to your PC case.",
    "Key Features": {
      Brand: "NZXT",
      Model: "HUE 2",
      Compatibility: "PC case lighting",
      Connectivity: "CAM software control",
      "Special Features":
        "Addressable RGB LEDs, magnetic strips for easy installation",
    },
    "Individual Rating": 4.6,
    "Average Rating": 4.5,
    Reviews: [
      {
        username: "user7",
        rating: 5,
        comment:
          "Fantastic lighting kit, makes my PC look awesome!",
      },
      {
        username: "user8",
        rating: 4,
        comment:
          "Easy to install and great customizability with the CAM software.",
      },
    ],
  },
  {
    Image: "headphones1.jpg",
    "Product Name":
      "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
    Category: "Others",
    Status: "In Stock",
    Price: 349.99,
    Description:
      "High-quality wireless headphones with noise-canceling technology.",
    "Key Features": {
      Brand: "Sony",
      Model: "WH-1000XM4",
      Type: "Over-ear",
      "Noise Canceling": "Active noise cancellation",
      Connectivity: "Bluetooth",
      "Special Features":
        "High-resolution audio, touch controls",
    },
    "Individual Rating": 4.9,
    "Average Rating": 4.8,
    Reviews: [
      {
        username: "user9",
        rating: 5,
        comment:
          "Absolutely love these headphones, the noise-canceling is top-notch!",
      },
      {
        username: "user10",
        rating: 4,
        comment:
          "Excellent sound quality, but a bit pricey for headphones.",
      },
    ],
  },
  {
    Image: "ups1.jpg",
    "Product Name": "APC Back-UPS Pro 1500VA",
    Category: "Others",
    Status: "In Stock",
    Price: 199.99,
    Description:
      "Reliable UPS with battery backup for essential devices.",
    "Key Features": {
      Brand: "APC",
      Model: "Back-UPS Pro 1500VA",
      Capacity: "1500VA",
      Outlets: "10 battery backup outlets",
      Runtime: "Up to 2.5 minutes at full load",
      "Special Features":
        "Automatic voltage regulation (AVR)",
    },
    "Individual Rating": 4.7,
    "Average Rating": 4.6,
    Reviews: [
      {
        username: "user11",
        rating: 5,
        comment:
          "Saved my work during power outages, very reliable UPS.",
      },
      {
        username: "user12",
        rating: 4,
        comment:
          "Great backup power, wish the battery runtime was longer.",
      },
    ],
  },
  {
    Image: "antivirus1.jpg",
    "Product Name": "Norton 360 Deluxe",
    Category: "Others",
    Status: "In Stock",
    Price: 89.99,
    Description:
      "Comprehensive antivirus and security suite for multiple devices.",
    "Key Features": {
      Brand: "Norton",
      Model: "360 Deluxe",
      Devices: "Up to 5 devices",
      Protection: "Real-time threat protection, secure VPN",
      "Special Features":
        "Parental control, password manager",
    },
    "Individual Rating": 4.8,
    "Average Rating": 4.7,
    Reviews: [
      {
        username: "user13",
        rating: 5,
        comment:
          "Norton 360 is excellent, keeps my devices safe and secure.",
      },
      {
        username: "user14",
        rating: 4,
        comment:
          "Great antivirus suite, but the VPN could be faster.",
      },
    ],
  },
];
