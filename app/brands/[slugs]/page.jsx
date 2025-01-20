// "use client";
// import Image from "next/image";
// import { useParams } from "next/navigation";

// const Franchise = () => {
//   const { slugs } = useParams();

//   return (
//     <div className="relative min-h-[80vh]">
//       <div className="absolute w-full h-full -z-1">
//         <Image src='/franchises/hocco eatery/hocco_eatery_1.jpg' width={500} height={500} alt='hocco eatery image' className="w-full h-full"/>
//       </div>
//       <h1>Welcome to the {slugs} Franchise</h1>
//       <p>This is the landing page for the {slugs} franchise.</p>
//     </div>
//   );
// };

// export default Franchise;
"use client";
import React from "react";
import { useParams } from "next/navigation";
import { MapPin, DollarSign, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

// Mock data - in a real app, this would come from an API
const franchiseData = {
  hoccoEatery: {
    name: "Hocco Eatery",
    hero: "/brands/hocco-eatery.png",
    description: "India's fastest growing fastfood chain",
    locations: "40,000+ locations worldwide",
    investment: "$150K - $350K",
    revenue: "$400K average annual revenue",
    employeeCount: "8-15 per location",
    gallery: [
      "https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1485451456034-3f9391c6f769?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&q=80&w=1000",
    ],
    locations_data: [
      { lat: 51.5074, lng: -0.1278, name: "London" },
      { lat: 48.8566, lng: 2.3522, name: "Paris" },
      { lat: 40.4168, lng: -3.7038, name: "Madrid" },
    ],
  },
};

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

function FranchisePage() {
    const { slug } = useParams();
  const franchise = franchiseData["hoccoEatery"];

  if (!franchise) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Franchise not found</h1>
      </div>
    );
  }

  const center = franchise.locations_data[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={franchise.hero}
            alt={franchise.name}
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h1 className="text-5xl font-bold mb-4">{franchise.name}</h1>
            <p className="text-xl max-w-2xl mx-auto">{franchise.description}</p>
          </div>
        </div>
      </div>

      {/* Key Figures Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MapPin className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Locations</h3>
            <p className="text-gray-600">{franchise.locations}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <DollarSign className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Investment Required</h3>
            <p className="text-gray-600">{franchise.investment}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TrendingUp className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Average Revenue</h3>
            <p className="text-gray-600">{franchise.revenue}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Employee Count</h3>
            <p className="text-gray-600">{franchise.employeeCount}</p>
          </div>
        </div>
      </div>

      {/* Locations Map Section */}
      {/* <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <iframe
            id="iframeid"
            width="450"
            height="250"
            // style="border:0"
            src="https://www.google.com/maps/dir/?api=1&origin=Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA&travelmode=bicycling"
          ></iframe>
        </div>
      </div> */}

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {franchise.gallery.map((image, index) => (
            <div
              key={index}
              className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`${franchise.name} gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FranchisePage;
