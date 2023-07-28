export default function handler(req, res) {
  const data = [
    {
      id: "1",
      Image:
        "https://www.startech.com.bd/image/cache/catalog/processor/amd/5600x/5600x-001-500x500.jpg",
      name: "AMD Ryzen 5 5600X",
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
      ratings: 4.7,
      Reviews: [
        {
          username: "user1",
          rating: 5,
          comment:
            "Best CPU for gaming in its price range!",
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
      id: "6",

      Image:
        "https://www.startech.com.bd/image/cache/catalog/motherboard/asus/rog-strix-b550-f-gaming/rog-strix-b550-f-gaming-500x500.jpg",
      name: "ASUS ROG Strix B550-F Gaming",
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
        "Expansion Slots":
          "PCIe x16, PCIe x16 (x4), PCIe x1",
        Storage: "M.2, SATA 6Gb/s",
        "USB Ports":
          "USB 3.2 Gen 2, USB 3.2 Gen 1, USB 2.0",
      },
      "Individual Rating": 4.7,
      ratings: 4.6,
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
      id: "13",
      Image:
        "https://www.startech.com.bd/image/cache/catalog/ram/team/delta-tuf/delta-tuf-001-500x500.jpg",
      name: "Crucial Ballistix MAX",
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
      ratings: 4.7,
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
      id: "15",
      Image:
        "https://www.startech.com.bd/image/cache/catalog/power-supply/corsair/rm750xwhite/corsair-rm-750-x-750-watt-80-plus-gold-certified-power-supply-white01-500x500.jpg",
      name: "Corsair RM850x",
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
      ratings: 4.7,
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
      id: "20",
      Image:
        "https://www.startech.com.bd/image/cache/catalog/monitor/asus/rog-swift-360hz-pg259qn/rog-swift-360hz-pg259qn-500x500.jpg",
      name: "ASUS ROG Swift PG279Q",
      Category: "Monitor",
      Status: "In Stock",
      Price: 599.99,
      Description:
        "High-end gaming monitor with IPS panel.",
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
      ratings: 4.6,
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
      id: "28",
      Image:
        "https://www.startech.com.bd/image/cache/catalog/mouse/razer/deathadder-v2/deathadder-v2-500x500.jpg",
      name: "Razer DeathAdder V2 Gaming Mouse",
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
      ratings: 4.6,
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
  ];
  res.status(200).json({
    message: "ok",
    status: 200,
    data,
  });
}
