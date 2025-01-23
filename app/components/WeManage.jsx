import React from "react";
import WeManageCard from "./WeManageCard";

const brands = [
  {
    name: "hocco eatery",
    description:
      "Our expertise in managing Hocco Eatery franchises showcases our ability to scale operations, maintain quality, and adapt to market trends. Let us bring the same success to your brand—partner with us to unlock your franchise potential!",
    imageUrl: "/brands/hocco-eatery.png",
    slug: "hoccoEatery"
  },
  {
    name: "hocco ice-cream distributor",
    description:
      "Our proven expertise in managing Hocco Ice-Cream distribution demonstrates our ability to handle temperature-sensitive products with precision. Partner with us to optimize your brand’s distribution network and achieve unparalleled operational excellence!",
    imageUrl: "/brands/hocco-ice-cream.jpg",
    slug: "hoccoIcecream"
  },
  {
    name: "chhaswala",
    description:
      "With Chhaswala reflects our ability to maintain product freshness, build customer loyalty, and scale operations seamlessly!",
    imageUrl: "/brands/chhaswala.jpg",
    slug: "chhaswala"
  },
  {
    name: "Pigeon Kitchenware",
    description:
      "At Pigeon franchise, we showcases our ability to meet market demands while maintaining excellence. Collaborate with us to elevate your brand’s franchise operations to new heights!",
    imageUrl: "/brands/pigeon.jpg",
    slug: "pigeon"
  },
];

const WeManage = () => {
  return (
    <section className="we-manage-section relative min-h-screen bg-slate-50 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      {/* <div className="absolute top-0 -left-4 md:-left-12 transform rotate-[120deg]"> */}
        <div className="circle"></div>
      {/* </div> */}
      <div className="flex flex-col justify-center">
        <span className="tracking-[.5em] uppercase text-blue-600 text-lg max-w-lg mx-auto mb-3  flex items-center">
          we manage
        </span>
        <h1 className="text-black text-3xl md:text-4xl xl:text-5xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
          Services Built Specifically for your Business
        </h1>
      </div>
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {brands.map((item, index) => {
          return <WeManageCard key={index} brand={item} />;
        })}
      </div>
    </section>
  );
};

export default WeManage;
