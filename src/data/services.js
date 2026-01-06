import {
  Wrench,
  Home,
  Baby,
  Scissors,
  Droplets,
  Zap,
  Paintbrush,
  Car
} from "lucide-react";
export const serviceCategories = [
  {
    id: "carpentry",
    name: "Carpentry",
    description: "Expert woodwork and furniture services",
    icon: Wrench,
    color: "174 84% 32%",
    services: [
      {
        id: "carp-1",
        name: "Furniture Assembly",
        description: "Professional assembly of all types of furniture",
        price: 499,
        duration: "2-3 hours",
        rating: 4.8,
        reviewCount: 234,
        image: "/placeholder.svg",
        categoryId: "carpentry"
      },
      {
        id: "carp-2",
        name: "Custom Furniture",
        description: "Bespoke furniture designed to your specifications",
        price: 2999,
        duration: "3-5 days",
        rating: 4.9,
        reviewCount: 156,
        image: "/placeholder.svg",
        categoryId: "carpentry"
      },
      {
        id: "carp-3",
        name: "Door & Window Repair",
        description: "Fix squeaky doors, broken hinges, and window frames",
        price: 349,
        duration: "1-2 hours",
        rating: 4.7,
        reviewCount: 312,
        image: "/placeholder.svg",
        categoryId: "carpentry"
      }
    ]
  },
  {
    id: "housekeeping",
    name: "Housekeeping",
    description: "Professional cleaning and organizing",
    icon: Home,
    color: "142 76% 36%",
    services: [
      {
        id: "house-1",
        name: "Deep Cleaning",
        description: "Thorough cleaning of your entire home",
        price: 1499,
        duration: "4-6 hours",
        rating: 4.9,
        reviewCount: 567,
        image: "/placeholder.svg",
        categoryId: "housekeeping"
      },
      {
        id: "house-2",
        name: "Regular Cleaning",
        description: "Weekly or bi-weekly home maintenance cleaning",
        price: 799,
        duration: "2-3 hours",
        rating: 4.8,
        reviewCount: 892,
        image: "/placeholder.svg",
        categoryId: "housekeeping"
      },
      {
        id: "house-3",
        name: "Move-in/Move-out Cleaning",
        description: "Complete cleaning for property transitions",
        price: 2499,
        duration: "6-8 hours",
        rating: 4.9,
        reviewCount: 234,
        image: "/placeholder.svg",
        categoryId: "housekeeping"
      }
    ]
  },
  {
    id: "daycare",
    name: "Day Care",
    description: "Trusted childcare and elderly care",
    icon: Baby,
    color: "280 60% 50%",
    services: [
      {
        id: "day-1",
        name: "Babysitting",
        description: "Experienced and verified babysitters",
        price: 399,
        duration: "Per hour",
        rating: 4.9,
        reviewCount: 445,
        image: "/placeholder.svg",
        categoryId: "daycare"
      },
      {
        id: "day-2",
        name: "Elderly Care",
        description: "Compassionate care for senior family members",
        price: 599,
        duration: "Per hour",
        rating: 4.8,
        reviewCount: 289,
        image: "/placeholder.svg",
        categoryId: "daycare"
      },
      {
        id: "day-3",
        name: "Newborn Care",
        description: "Specialized care for infants",
        price: 699,
        duration: "Per hour",
        rating: 4.9,
        reviewCount: 178,
        image: "/placeholder.svg",
        categoryId: "daycare"
      }
    ]
  },
  {
    id: "beauty",
    name: "Beauty & Spa",
    description: "Salon services at your doorstep",
    icon: Scissors,
    color: "330 80% 55%",
    services: [
      {
        id: "beauty-1",
        name: "Haircut & Styling",
        description: "Professional haircut and styling at home",
        price: 599,
        duration: "1 hour",
        rating: 4.8,
        reviewCount: 1234,
        image: "/placeholder.svg",
        categoryId: "beauty"
      },
      {
        id: "beauty-2",
        name: "Bridal Makeup",
        description: "Complete bridal makeup and hair styling",
        price: 4999,
        duration: "3-4 hours",
        rating: 4.9,
        reviewCount: 456,
        image: "/placeholder.svg",
        categoryId: "beauty"
      },
      {
        id: "beauty-3",
        name: "Spa at Home",
        description: "Relaxing spa treatments in your comfort",
        price: 1999,
        duration: "2 hours",
        rating: 4.9,
        reviewCount: 678,
        image: "/placeholder.svg",
        categoryId: "beauty"
      }
    ]
  },
  {
    id: "plumbing",
    name: "Plumbing",
    description: "Fix leaks and water issues",
    icon: Droplets,
    color: "200 80% 50%",
    services: [
      {
        id: "plumb-1",
        name: "Leak Repair",
        description: "Fix all types of water leaks",
        price: 349,
        duration: "1-2 hours",
        rating: 4.7,
        reviewCount: 567,
        image: "/placeholder.svg",
        categoryId: "plumbing"
      },
      {
        id: "plumb-2",
        name: "Drain Cleaning",
        description: "Unclog and clean blocked drains",
        price: 499,
        duration: "1-2 hours",
        rating: 4.8,
        reviewCount: 432,
        image: "/placeholder.svg",
        categoryId: "plumbing"
      },
      {
        id: "plumb-3",
        name: "Water Heater Service",
        description: "Installation and repair of water heaters",
        price: 899,
        duration: "2-3 hours",
        rating: 4.8,
        reviewCount: 289,
        image: "/placeholder.svg",
        categoryId: "plumbing"
      }
    ]
  },
  {
    id: "electrical",
    name: "Electrician",
    description: "Safe electrical repairs and installations",
    icon: Zap,
    color: "38 92% 50%",
    services: [
      {
        id: "elec-1",
        name: "Wiring & Repairs",
        description: "Fix electrical issues and rewiring",
        price: 449,
        duration: "1-3 hours",
        rating: 4.8,
        reviewCount: 678,
        image: "/placeholder.svg",
        categoryId: "electrical"
      },
      {
        id: "elec-2",
        name: "Fan & Light Installation",
        description: "Install ceiling fans and light fixtures",
        price: 299,
        duration: "1 hour",
        rating: 4.9,
        reviewCount: 892,
        image: "/placeholder.svg",
        categoryId: "electrical"
      },
      {
        id: "elec-3",
        name: "Inverter & UPS Installation",
        description: "Setup power backup systems",
        price: 699,
        duration: "2-3 hours",
        rating: 4.7,
        reviewCount: 345,
        image: "/placeholder.svg",
        categoryId: "electrical"
      }
    ]
  },
  {
    id: "painting",
    name: "Painting",
    description: "Transform your space with color",
    icon: Paintbrush,
    color: "0 70% 55%",
    services: [
      {
        id: "paint-1",
        name: "Room Painting",
        description: "Professional painting for any room",
        price: 2499,
        duration: "1-2 days",
        rating: 4.8,
        reviewCount: 345,
        image: "/placeholder.svg",
        categoryId: "painting"
      },
      {
        id: "paint-2",
        name: "Wall Texture",
        description: "Decorative wall textures and finishes",
        price: 3999,
        duration: "2-3 days",
        rating: 4.9,
        reviewCount: 234,
        image: "/placeholder.svg",
        categoryId: "painting"
      }
    ]
  },
  {
    id: "carwash",
    name: "Car Services",
    description: "Car wash and maintenance",
    icon: Car,
    color: "220 70% 50%",
    services: [
      {
        id: "car-1",
        name: "Car Wash",
        description: "Complete exterior and interior cleaning",
        price: 599,
        duration: "1-2 hours",
        rating: 4.7,
        reviewCount: 567,
        image: "/placeholder.svg",
        categoryId: "carwash"
      },
      {
        id: "car-2",
        name: "Car Detailing",
        description: "Premium detailing and polishing",
        price: 1999,
        duration: "3-4 hours",
        rating: 4.9,
        reviewCount: 234,
        image: "/placeholder.svg",
        categoryId: "carwash"
      }
    ]
  }
];
export const providers = [
  {
    id: "prov-1",
    name: "Rajesh Kumar",
    avatar: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 234,
    services: ["carpentry", "painting"],
    experience: "8 years",
    location: "Mumbai",
    verified: true,
    completedJobs: 567
  },
  {
    id: "prov-2",
    name: "Priya Sharma",
    avatar: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 189,
    services: ["beauty", "housekeeping"],
    experience: "5 years",
    location: "Delhi",
    verified: true,
    completedJobs: 432
  },
  {
    id: "prov-3",
    name: "Mohammed Ali",
    avatar: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 312,
    services: ["electrical", "plumbing"],
    experience: "10 years",
    location: "Bangalore",
    verified: true,
    completedJobs: 789
  },
  {
    id: "prov-4",
    name: "Sunita Devi",
    avatar: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 156,
    services: ["daycare"],
    experience: "12 years",
    location: "Chennai",
    verified: true,
    completedJobs: 345
  }
];
export const sampleBookings = [
  {
    id: "book-1",
    serviceId: "house-1",
    serviceName: "Deep Cleaning",
    providerId: "prov-2",
    providerName: "Priya Sharma",
    customerId: "cust-1",
    customerName: "John Doe",
    date: "2024-01-15",
    time: "10:00 AM",
    status: "confirmed",
    price: 1499,
    address: "123, Main Street, Mumbai"
  },
  {
    id: "book-2",
    serviceId: "elec-1",
    serviceName: "Wiring & Repairs",
    providerId: "prov-3",
    providerName: "Mohammed Ali",
    customerId: "cust-1",
    customerName: "John Doe",
    date: "2024-01-16",
    time: "2:00 PM",
    status: "pending",
    price: 449,
    address: "456, Park Avenue, Mumbai"
  },
  {
    id: "book-3",
    serviceId: "carp-1",
    serviceName: "Furniture Assembly",
    providerId: "prov-1",
    providerName: "Rajesh Kumar",
    customerId: "cust-2",
    customerName: "Jane Smith",
    date: "2024-01-14",
    time: "11:00 AM",
    status: "completed",
    price: 499,
    address: "789, Lake View, Delhi"
  }
];
