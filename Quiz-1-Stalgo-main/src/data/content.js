// content.js - Centralized data for the application

export const companyInfo = {
  name: "Philippine Paint Manufacturers Inc.",
  shortName: "PhilPaint",
  tagline: "Trusted Paint Solutions for Industrial Excellence",
  address: "Gov. Pascual Avenue, Northern Hills, Malabon City, 1470, Metro Manila, Philippines",
  phone: "02-362-06**",
  email: "info@philpaint.com",
  businessHours: {
    sunday: "Closed",
    mondayToFriday: "08:00 AM - 05:00 PM",
    saturday: "Closed"
  },
  messaging: ["WhatsApp", "Line", "Telegram"]
};

export const heroContent = {
  title: "Industrial Paint Solutions Built for Durability",
  subtitle: "Serving contractors, dealers, and industrial projects across Metro Manila with premium-grade coatings and finishes",
  ctaText: "Get a Quote",
  ctaLink: "/contact"
};

export const features = [
  {
    id: 1,
    title: "Industrial-Grade Quality",
    description: "Engineered for harsh conditions and long-lasting protection. Our formulations meet stringent industry standards for durability and performance.",
    icon: "shield"
  },
  {
    id: 2,
    title: "Fast Delivery Network",
    description: "Strategic location in Malabon ensures rapid distribution to construction sites and dealer networks throughout Metro Manila.",
    icon: "truck"
  },
  {
    id: 3,
    title: "Technical Support",
    description: "Expert consultation for contractors and dealers. Our team provides application guidance and project-specific recommendations.",
    icon: "tools"
  }
];

export const benefits = [
  {
    id: 1,
    title: "Corrosion Protection",
    description: "Advanced rust inhibitors for metal surfaces in humid environments",
    image: "/assets/benefits/corrosion-protection.jpg"
  },
  {
    id: 2,
    title: "Weather Resistance",
    description: "UV-stable formulations that withstand tropical climate conditions",
    image: "/assets/benefits/weather-resistance.jpg"
  },
  {
    id: 3,
    title: "High Coverage",
    description: "Cost-effective application with superior spreading and hiding power",
    image: "/assets/benefits/high-coverage.jpg"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Engr. Roberto Santos",
    company: "Santos Construction Corp.",
    text: "We've been using PhilPaint products for over 10 years. Their industrial coatings have proven reliable on every major project we've undertaken.",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Gonzales",
    company: "Gonzales Hardware & Supply",
    text: "As a dealer, PhilPaint's consistent quality and delivery schedule make them our top choice. Our contractor clients trust the brand.",
    rating: 5
  },
  {
    id: 3,
    name: "Engr. Carlos Reyes",
    company: "Reyes Engineering Services",
    text: "Technical support is excellent. They helped us select the right coating system for a challenging marine environment application.",
    rating: 5
  }
];

export const aboutContent = {
  story: {
    title: "Our Story",
    content: "Founded in Malabon City, Philippine Paint Manufacturers Inc. has been a cornerstone of Metro Manila's construction and industrial sectors for over two decades. Starting as a small-batch producer, we've grown into a trusted supplier serving major contractors, hardware dealers, and industrial facilities throughout the region. Our facility on Gov. Pascual Avenue combines traditional manufacturing expertise with modern quality control systems, ensuring every batch meets our rigorous standards."
  },
  mission: {
    title: "Mission",
    content: "To provide contractors, dealers, and industrial clients with reliable, high-performance paint solutions that protect assets, reduce maintenance costs, and deliver lasting value. We are committed to maintaining consistent quality, competitive pricing, and responsive service."
  },
  vision: {
    title: "Vision",
    content: "To be recognized as Metro Manila's most dependable industrial paint manufacturer, known for product reliability, technical expertise, and unwavering commitment to customer success."
  },
  values: [
    {
      id: 1,
      title: "Quality Assurance",
      description: "Every batch is tested to ensure consistency and performance standards"
    },
    {
      id: 2,
      title: "Industry Expertise",
      description: "Deep understanding of contractor needs and construction requirements"
    },
    {
      id: 3,
      title: "Reliable Supply",
      description: "Consistent inventory and on-time delivery to support project schedules"
    },
    {
      id: 4,
      title: "Technical Partnership",
      description: "Collaborative approach with clients to solve coating challenges"
    }
  ],
  team: [
    {
      id: 1,
      name: "Ernesto M. Villanueva",
      position: "General Manager",
      bio: "With over 25 years in the paint manufacturing industry, Ernesto leads our operations with a focus on quality and customer relationships.",
      image: "/assets/team/ernesto-villanueva.jpg"
    },
    {
      id: 2,
      name: "Dr. Linda A. Cruz",
      position: "Chief Chemist",
      bio: "PhD in Chemical Engineering from UP Diliman. Linda oversees formulation development and quality control protocols.",
      image: "/assets/team/linda-cruz.jpg"
    },
    {
      id: 3,
      name: "Antonio R. Mendoza",
      position: "Sales & Distribution Manager",
      bio: "Former contractor turned sales leader, Antonio understands customer needs and manages our dealer network.",
      image: "/assets/team/antonio-mendoza.jpg"
    }
  ]
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];
