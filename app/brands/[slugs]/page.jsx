"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
  DollarSign,
  Users,
  TrendingUp,
  Calendar1Icon,
  IndianRupee,
} from "lucide-react";
import Image from "next/image";

// Mock data - in a real app, this would come from an API
const franchiseData = {
  hoccoEatery: {
    name: "Hocco Eatery",
    hero: "/brands/hocco-eatery.png",
    description: "India's fastest growing fastfood chain",
    yearsManaged: "2.5Yrs+",
    investment: "₹2Cr",
    revenue: "₹5Cr average annual turnover",
    employeeCount: "4-5 per location",
    locations: [
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6319891508265!2d72.5061748!3d23.0005564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bd5f9a646db%3A0x5ff37f40cb89fa8b!2sHocco%20Eatery!5e0!3m2!1sen!2sin!4v1737394136379!5m2!1sen!2sin",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58694.16674258091!2d72.59302097977942!3d23.15612909431003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8194a7411881%3A0x739b636940d1ddaa!2shocco%20eatry!5e0!3m2!1sen!2sin!4v1737394656651!5m2!1sen!2sin",
    ],
    gallery: [
      "/franchises/hocco eatery/hocco_eatery_1.jpg",
      "/franchises/hocco eatery/hocco_eatery_2.jpg",
      "/franchises/hocco eatery/hocco_eatery_3.jpg",
      "/franchises/hocco eatery/hocco_eatery_4.jpg",
      "/franchises/hocco eatery/hocco_eatery_5.jpg",
      "/franchises/hocco eatery/hocco_eatery_6.jpg",
    ],
  },
  hoccoIcecream: {
    name: "Hocco Icecream",
    hero: "/brands/hocco-ice-cream.jpg",
    description:
      "We are the distributors of India's fastest growing icecream chain.",
    yearsManaged: "1.2Yrs+",
    locations: ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117524.7896871604!2d72.3536168972656!3d22.99990630000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b00149f940d%3A0x7f561de6c03092fb!2sH%20%26%20S%20FRANCHISES%20DIST_%20HOCCO%20ICE%20CREAM!5e0!3m2!1sen!2sin!4v1737611430160!5m2!1sen!2sin"],
    investment: "₹2Cr - ₹3Cr",
    revenue: "₹6Cr average annual turnover",
    employeeCount: "2-3 per location",
    gallery: ["/franchises/hocco icecream/hocco_icecream.jpg"],
  },
  chhaswala: {
    name: "Chhaswala",
    hero: "/brands/chhaswala.jpg",
    description: "India's fast growing dairy brand",
    yearsManaged: "5Months+",
    locations: ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29373.62647752157!2d72.51418504520062!3d23.034663360732683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bee2a90484d%3A0x9bc1bd26afbe91fa!2sChhaswala-%20iscon!5e0!3m2!1sen!2sin!4v1737611567855!5m2!1sen!2sin"],
    investment: "₹150K - ₹350K",
    revenue: "₹1Cr average annual turnover",
    employeeCount: "2 per location",
    gallery: [
      "/franchises/pigeon/Pigeon_inside.jpg",
      "/franchises/pigeon/Pigeon.jpg",
    ],
  },
  pigeon: {
    name: "Pigeon",
    hero: "/brands/pigeon-2.jpg",
    description:
      "Pigeon is a Leader in cookware, home and kitchen appliances products across multiple categories",
    yearsManaged: "4Months+",
    locations: ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234941.68002458225!2d72.36730551315607!3d23.06179052057008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85630d30d745%3A0x5a43319ccb8facc9!2sPigeon%20Exclusive%20Store%20-%20Bhimjipura%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1737611903173!5m2!1sen!2sin"],
    investment: "₹500K - ₹550K",
    revenue: "₹1Cr average annual turnover",
    employeeCount: "3-4 per location",
    gallery: [
      "/franchises/pigeon/Pigeon_inside.jpg",
      "/franchises/pigeon/Pigeon.jpg",
    ],
  },
};


function FranchisePage() {
  const { slugs } = useParams();

  console.log(slugs, "slug");
  const franchise = franchiseData[slugs];

  if (!franchise) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Franchise not found</h1>
      </div>
    );
  }

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
            <h1 className="text-5xl tracking-[.1em] font-bold mb-4 uppercase text-white">
              {franchise.name}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">{franchise.description}</p>
          </div>
        </div>
      </div>

      {/* Key Figures Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar1Icon className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Years Managed</h3>
            <p className="text-gray-600">{franchise.yearsManaged}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <IndianRupee className="w-8 h-8 text-green-500 mb-4" />
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
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
        <div className="flex flex-col gap-4">
          {franchise?.locations?.map((item, index) => (
            <a href="https://www.google.com" rel="noreferrer" key={index}>
              <div className="bg-white p-4 rounded-lg shadow-md h-[50vh]">
                <iframe
                  src={item}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </a>  
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
