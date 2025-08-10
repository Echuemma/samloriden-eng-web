 // src/data/services.js
export const services = [
  {
    id: 1,
    title: "Structural Engineering",
    shortDescription: "Comprehensive structural design and analysis for residential, commercial, and industrial projects.",
    fullDescription: "Our structural engineering services encompass the complete design and analysis of buildings, bridges, and other structures. We utilize advanced software and engineering principles to ensure safety, durability, and cost-effectiveness.",
    icon: "Building2",
    features: [
      "Structural design and analysis",
      "Foundation design",
      "Seismic analysis",
      "Building inspections",
      "Structural assessments"
    ],
    industries: ["Residential", "Commercial", "Industrial", "Infrastructure"]
  },
  {
    id: 2,
    title: "Highway & Transportation",
    shortDescription: "Road design, traffic engineering, and transportation infrastructure planning.",
    fullDescription: "We provide comprehensive highway and transportation engineering services, from feasibility studies to detailed design and construction supervision.",
    icon: "Road",
    features: [
      "Highway design",
      "Traffic analysis",
      "Pavement design",
      "Bridge engineering",
      "Transportation planning"
    ],
    industries: ["Government", "Private Developers", "Construction Companies"]
  },
  {
    id: 3,
    title: "Water Resources Engineering",
    shortDescription: "Water supply systems, drainage design, and hydraulic engineering solutions.",
    fullDescription: "Our water resources team specializes in the design and management of water infrastructure systems, ensuring sustainable and efficient water management solutions.",
    icon: "Droplets",
    features: [
      "Water supply design",
      "Drainage systems",
      "Flood management",
      "Irrigation systems",
      "Water treatment facilities"
    ],
    industries: ["Municipal", "Agricultural", "Industrial", "Residential"]
  },
  {
    id: 4,
    title: "Geotechnical Engineering",
    shortDescription: "Soil investigation, foundation design, and ground improvement solutions.",
    fullDescription: "We provide geotechnical engineering services to assess soil conditions and design appropriate foundation systems for various construction projects.",
    icon: "Mountain",
    features: [
      "Soil investigation",
      "Foundation design",
      "Slope stability analysis",
      "Ground improvement",
      "Geotechnical reporting"
    ],
    industries: ["Construction", "Infrastructure", "Mining", "Energy"]
  },
  {
    id: 5,
    title: "Project Management",
    shortDescription: "End-to-end project management and construction supervision services.",
    fullDescription: "Our project management team ensures projects are delivered on time, within budget, and to the highest quality standards.",
    icon: "ClipboardCheck",
    features: [
      "Project planning and scheduling",
      "Construction supervision",
      "Quality control",
      "Cost management",
      "Risk assessment"
    ],
    industries: ["All Sectors"]
  },
  {
    id: 6,
    title: "Environmental Engineering",
    shortDescription: "Environmental impact assessments and sustainable engineering solutions.",
    fullDescription: "We provide environmental engineering services to ensure projects comply with environmental regulations and promote sustainability.",
    icon: "Leaf",
    features: [
      "Environmental impact assessment",
      "Waste management systems",
      "Air quality monitoring",
      "Pollution control",
      "Sustainability consulting"
    ],
    industries: ["Industrial", "Municipal", "Energy", "Mining"]
  }
];

export const serviceCategories = [
  {
    name: "Design & Analysis",
    services: [1, 2, 3, 4]
  },
  {
    name: "Management & Supervision", 
    services: [5]
  },
  {
    name: "Environmental & Sustainability",
    services: [6]
  }
];

export const industryAreas = [
  {
    name: "Infrastructure Development",
    description: "Roads, bridges, airports, and public infrastructure projects",
    icon: "Building"
  },
  {
    name: "Residential & Commercial",
    description: "Housing developments, office buildings, and commercial complexes",
    icon: "Home"
  },
  {
    name: "Industrial Projects",
    description: "Factories, warehouses, and industrial facility design",
    icon: "Factory"
  },
  {
    name: "Water & Utilities",
    description: "Water treatment plants, drainage systems, and utility infrastructure",
    icon: "Droplets"
  }
];
