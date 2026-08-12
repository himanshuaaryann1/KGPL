export type PropertyCategory = "Buy" | "Rent" | "Residential" | "Commercial" | "Plots";

export interface Property {
  id: string;
  name: string;
  location: string;
  type: string;
  price: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: string;
  categories: PropertyCategory[];
  image: string;
  gallery: string[];
  features: string[];
  amenities: string[];
  nearby: string[];
  description: string;
}

export const properties: Property[] = [
  {
    id: "p1",
    name: "Sunrise Residency Apartment",
    location: "Shastri Nagar, Batala",
    type: "Apartment",
    price: "\u20b9 45 Lakh*",
    area: "1,450 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    parking: "1 Covered",
    categories: ["Buy", "Residential"],
    image:
      "https://images.pexels.com/photos/7546651/pexels-photo-7546651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/7546651/pexels-photo-7546651.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Modular Kitchen", "Vastu Compliant", "Gated Society", "Power Backup"],
    amenities: ["24x7 Security", "Lift Access", "Children's Play Area", "Community Hall"],
    nearby: ["5 min to City Hospital", "10 min to Bus Stand", "Walking distance to Market"],
    description:
      "A well-planned 3BHK apartment offering bright living spaces, modern finishes and a peaceful gated environment — ideal for families looking to settle in central Batala.",
  },
  {
    id: "p2",
    name: "Green Meadows Villa",
    location: "GT Road, Batala",
    type: "Villa",
    price: "\u20b9 1.35 Crore*",
    area: "3,200 sq.ft",
    bedrooms: 4,
    bathrooms: 4,
    parking: "2 Covered",
    categories: ["Buy", "Residential"],
    image:
      "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/26556326/pexels-photo-26556326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/7031879/pexels-photo-7031879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Private Lawn", "Double Height Ceiling", "Premium Fittings", "Servant Room"],
    amenities: ["Landscaped Garden", "CCTV Surveillance", "Solar Ready", "Home Theatre Room"],
    nearby: ["Close to National Highway", "12 min to Railway Station", "Near reputed schools"],
    description:
      "An expansive 4BHK independent villa with a private lawn and premium interiors, designed for families who value space, privacy and architectural elegance.",
  },
  {
    id: "p3",
    name: "Khehhra Business Chambers",
    location: "Dhir Market, Batala",
    type: "Office Space",
    price: "\u20b9 65,000/month*",
    area: "1,100 sq.ft",
    parking: "Shared",
    categories: ["Rent", "Commercial"],
    image:
      "https://images.pexels.com/photos/5511098/pexels-photo-5511098.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/5511098/pexels-photo-5511098.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/13219418/pexels-photo-13219418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Main Market Frontage", "Central AC Ready", "High Footfall Zone", "Fire Safety Compliant"],
    amenities: ["24x7 Access", "Dedicated Parking", "Backup Power", "Pantry Space"],
    nearby: ["Heart of Batala market", "5 min to Bus Stand", "Ample street parking"],
    description:
      "A premium commercial office space located in one of Batala's busiest markets, perfect for businesses that need visibility and easy accessibility.",
  },
  {
    id: "p4",
    name: "Heritage Market Shop",
    location: "Dharam Singh Market, Batala",
    type: "Shop",
    price: "\u20b9 28 Lakh*",
    area: "420 sq.ft",
    categories: ["Buy", "Commercial"],
    image:
      "https://images.pexels.com/photos/37224965/pexels-photo-37224965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/37224965/pexels-photo-37224965.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/27459248/pexels-photo-27459248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Ground Floor Shop", "Wide Frontage", "Established Market", "Clear Title"],
    amenities: ["High Foot Traffic", "Nearby Banks & ATMs", "Loading Access"],
    nearby: ["Adjacent to main market road", "3 min to Shastri Nagar", "Public transport nearby"],
    description:
      "A ready-to-use ground floor shop in a well-established Batala market, well suited for retail or showroom business with strong daily footfall.",
  },
  {
    id: "p5",
    name: "Riverside Residential Plot",
    location: "Qadian Road, Batala",
    type: "Plot / Land",
    price: "\u20b9 22 Lakh*",
    area: "300 sq.yd",
    categories: ["Buy", "Plots"],
    image:
      "https://images.pexels.com/photos/38574684/pexels-photo-38574684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/38574684/pexels-photo-38574684.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/36422828/pexels-photo-36422828.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Clear Title & Approved", "Rectangular Plot", "Road Facing", "Ready for Construction"],
    amenities: ["Electricity Connection Nearby", "Water Supply Access", "Gated Colony Roads"],
    nearby: ["8 min to City Centre", "Close to schools", "Peaceful residential colony"],
    description:
      "A well-located residential plot with a clear title, ideal for families planning to design and build their own home in a growing part of Batala.",
  },
  {
    id: "p6",
    name: "Palm Residency Flat",
    location: "Shastri Nagar, Batala",
    type: "Apartment",
    price: "\u20b9 18,500/month*",
    area: "1,050 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    parking: "1 Open",
    categories: ["Rent", "Residential"],
    image:
      "https://images.pexels.com/photos/7031714/pexels-photo-7031714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    gallery: [
      "https://images.pexels.com/photos/7031714/pexels-photo-7031714.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/6636320/pexels-photo-6636320.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
      "https://images.pexels.com/photos/27051764/pexels-photo-27051764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    ],
    features: ["Semi-Furnished", "Balcony View", "Family Preferred", "Ready to Move"],
    amenities: ["Lift Access", "Security Guard", "Water Storage", "Nearby Park"],
    nearby: ["Walking distance to schools", "5 min to market", "Close to hospital"],
    description:
      "A comfortable semi-furnished 2BHK flat available for rent in a well-connected residential neighbourhood, perfect for small families or working professionals.",
  },
];

export const propertyFilters: { label: string; value: "All" | PropertyCategory }[] = [
  { label: "All", value: "All" },
  { label: "Buy", value: "Buy" },
  { label: "Rent", value: "Rent" },
  { label: "Residential", value: "Residential" },
  { label: "Commercial", value: "Commercial" },
  { label: "Plots", value: "Plots" },
];

export interface Testimonial {
  name: string;
  profession?: string;
  review: string;
  rating: number;
  isPlaceholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sanjeev Singh",
    profession: "Doctor",
    review:
      "Khehhra Group ke saath property lene ka experience bahut achha raha. Team ne poori process ko clearly explain kiya aur har step par proper guidance di. Sabse achhi baat ye lagi ki unhone hamari requirements ko samjha aur bina unnecessary pressure ke suitable options bataye.",
    rating: 5,
    isPlaceholder: false,
  },
  {
    name: "Harnoor",
    profession: "Government Employee",
    review:
      "The overall experience with Khehhra Group was very smooth and professional. They understood what we were looking for, explained the property details clearly, and were available whenever we had questions. I really appreciated the transparent communication throughout the process.",
    rating: 5,
    isPlaceholder: false,
  },
  {
    name: "Himanshu Aryann",
    profession: "IT Professional",
    review:
      "I was looking for a property in the Batala area and Khehhra Group made the process much easier. The team was responsive, professional and helped me understand the available options without making the process complicated. Overall, it was a straightforward and positive experience.",
    rating: 5,
    isPlaceholder: false,
  },
];

export const faqs = [
  {
    q: "How can I buy a property through Khehhra Group?",
    a: "Simply share your requirement through our enquiry form or call our office directly. Our team will understand your needs, shortlist verified properties in Batala and nearby areas, arrange visits and guide you through the entire purchase process till registry.",
  },
  {
    q: "Do you help customers sell properties?",
    a: "Yes. We assist property owners in listing, marketing and finding genuine buyers for their residential, commercial or plot properties, while managing negotiations and paperwork transparently.",
  },
  {
    q: "Do you provide rental properties?",
    a: "Yes, we help tenants find suitable rental homes and assist owners in finding reliable tenants across Batala and nearby Punjab regions.",
  },
  {
    q: "Do you deal in commercial properties?",
    a: "Yes. We handle commercial shops, offices and showroom spaces for both buying/selling and leasing purposes.",
  },
  {
    q: "Which locations do you cover?",
    a: "Khehhra Group currently serves Amritsar, Gurdaspur, Batala and Dinanagar, with local market knowledge across these areas.",
  },
  {
    q: "Can I list my property with Khehhra Group?",
    a: "Absolutely. Reach out to our team with your property details and our experts will guide you on listing, pricing and marketing your property to genuine buyers or tenants.",
  },
  {
    q: "Can I schedule a property visit?",
    a: "Yes, once you share your requirement, our team will coordinate a convenient time to schedule a site visit for shortlisted properties.",
  },
  {
    q: "Do you assist with documentation?",
    a: "Yes, we provide complete support with documentation, verification and registry-related processes to ensure a smooth and transparent transaction.",
  },
  {
    q: "How can I submit my property requirement?",
    a: "You can use the requirement form on this website, call us directly, or message us on WhatsApp. Our team will get in touch with suitable options.",
  },
  {
    q: "How can I contact Khehhra Group?",
    a: "You can call us at 08269000066, email khehragroups@gmail.com, or visit our office at Shastri Nagar, Batala, Punjab.",
  },
];

export const services = [
  {
    title: "Property Buying",
    desc: "End-to-end assistance in finding and purchasing the right residential or commercial property.",
  },
  {
    title: "Property Selling",
    desc: "Strategic marketing and genuine buyer connections to help you sell at the right value.",
  },
  {
    title: "Property Rental",
    desc: "Helping tenants and owners connect for hassle-free residential and commercial rentals.",
  },
  {
    title: "Property Leasing",
    desc: "Structured long-term leasing solutions for residential and commercial spaces.",
  },
  {
    title: "Residential Property",
    desc: "Apartments, houses and villas across Batala's most sought-after neighbourhoods.",
  },
  {
    title: "Commercial Property",
    desc: "Offices, shops and showroom spaces suited for growing businesses.",
  },
  {
    title: "Plot & Land",
    desc: "Verified residential and agricultural plots with clear titles for confident investment.",
  },
  {
    title: "Property Consultation",
    desc: "Honest, experience-backed advice to help you make informed property decisions.",
  },
  {
    title: "Investment Guidance",
    desc: "Market insights and guidance to help you identify sound long-term property investments.",
  },
];
