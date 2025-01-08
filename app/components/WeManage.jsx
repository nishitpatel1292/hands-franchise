import React from 'react';
import WeManageCard from './WeManageCard';

const brands = [
    {
        name: 'hocco eatery',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci asperiores? Recusandae delectus ipsam deserunt at fuga pariatur, est rerum autem dolores corporis, obcaecati voluptate odio harum. Ex, facere quidem.",
        imageUrl:
            '/brands/hocco-eatery.png',
    },
    {
        name: 'hocco ice-cream distributor',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci asperiores? Recusandae delectus ipsam deserunt at fuga pariatur, est rerum autem dolores corporis, obcaecati voluptate odio harum. Ex, facere quidem.",
        imageUrl:
            '/brands/hocco-ice-cream.jpg',
    },
    {
        name: 'chhaswala',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci asperiores? Recusandae delectus ipsam deserunt at fuga pariatur, est rerum autem dolores corporis, obcaecati voluptate odio harum. Ex, facere quidem.",
        imageUrl: '/brands/chhaswala.jpg'    },
    {
        name: 'Pigeon Kitchenware',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, adipisci asperiores? Recusandae delectus ipsam deserunt at fuga pariatur, est rerum autem dolores corporis, obcaecati voluptate odio harum. Ex, facere quidem.",
        imageUrl:'/brands/pigeon.jpg'    },
]

const WeManage = () => {
    return (
        <section className="min-h-screen bg-slate-50 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
            <span className="text-gray-600 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">what we're managing <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </span>
            <h1 className="text-black text-3xl md:text-4xl xl:text-5xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">Services Built Specifically for your Business</h1>
            <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
                {
                    brands.map((item) => {
                        return <WeManageCard brand={item} />
                    })
                }
            </div>
        </section>
    );
};

export default WeManage;
