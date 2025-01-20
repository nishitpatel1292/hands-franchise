import React from "react";
import WeManageCard from "./WeManageCard";

const brands = [
  {
    name: "hocco eatery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci asperiores? Recusandae delectus ipsam deserunt at fuga pariatur, est rerum autem dolores corporis, obcaecati voluptate odio harum. Ex, facere quidem.",
    imageUrl: "/brands/hocco-eatery.png",
    slug: "/brands/hoccoEatery"
  },
  {
    name: "hocco ice-cream distributor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci asperiores? Recusandae delectus ipsam deserunt at fuga pariatur, est rerum autem dolores corporis, obcaecati voluptate odio harum. Ex, facere quidem.",
    imageUrl: "/brands/hocco-ice-cream.jpg",
    slug: "/brands/hoccoIcecream"
  },
  {
    name: "chhaswala",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci asperiores? Recusandae delectus ipsam deserunt at fuga pariatur, est rerum autem dolores corporis, obcaecati voluptate odio harum. Ex, facere quidem.",
    imageUrl: "/brands/chhaswala.jpg",
    slug: "brands/chhaswala"
  },
  {
    name: "Pigeon Kitchenware",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci asperiores? Recusandae delectus ipsam deserunt at fuga pariatur, est rerum autem dolores corporis, obcaecati voluptate odio harum. Ex, facere quidem.",
    imageUrl: "/brands/pigeon.jpg",
    slug: "brands/Pigeon"
  },
];

const WeManage = () => {
  return (
    <section className="relative min-h-screen bg-slate-50 text-center py-20 px-8 xl:px-0 flex flex-col justify-center z-1">
      <div className="absolute top-0 -left-4 md:-left-12 transform rotate-[120deg]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          className="lg:h-[250px] md:h-[150px] lg:w-[250px] md:w-[150px] w-[100px]"
          fill="none"
          viewBox="0 0 200 200"
          version="1.1"
        >
          <path
            fill="rgba(37, 99, 235, 1)"
            fillRule="evenodd"
            d="M200 150h-56.25c0-24.162-19.588-43.75-43.75-43.75S56.25 125.838 56.25 150H0C0 94.772 44.772 50 100 50s100 44.772 100 100Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
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
