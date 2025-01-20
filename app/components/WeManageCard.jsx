import Link from 'next/link'
import React from 'react'

export default function WeManageCard({brand}) {
    return (
        <>
            <a href={`/brands/${brand.slug}`} className="group relative block bg-black">
                <img
                    alt=""
                    src={brand.imageUrl}
                    className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>


                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-lg font-medium uppercase tracking-widest text-white pb-4">{brand.name}</p>

                    {/* <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p> */}

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-100 md:opacity-0 transition-all group-hover:translate-y-0 md:group-hover:opacity-100"
                        >
                            <p className="text-sm text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                            </p>
                            <button className='white-button text-black mt-2' href={`${brand.slug}`}>Know More</button>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
