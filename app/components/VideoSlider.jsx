"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


const videos = [
  '/videos/hocco-icecream.mp4',
  '/videos/hero-burger.mp4',
  '/videos/pigeon.mp4',
  '/videos/hocco-eatery.mp4',
];

export default function VideoSlider({onLoadedData}) {
  const swiperRef = useRef(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="h-[2px] w-8 ' + className + '">' + '</div>';
    },
  };

  const handleVideoEnd = () => {
    console.log('here')
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); 
      console.log(swiperRef.current.swiper,'ji')// Move to the next slide
    } else {
      console.error("Swiper reference is not available");
    }
  }
    return (
      // <div className="relative w-full h-full overflow-hidden">
      <>
        <div className='absolute w-full h-full'>
          <Swiper
            style={{
              "--swiper-pagination-color": "#FFF",
              "--swiper-pagination-bullet-inactive-color": "#BBB",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-height": "4px",
              "--swiper-pagination-bullet-width": "32px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              "--swiper-pagination-bullet-border-radius": "5px",
            }}
            ref={swiperRef}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            navigation={true}
            speed={1000}
            modules={[Autoplay, Navigation, Pagination]}
            className="w-full h-full"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index} className='w-full h-full'>
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  disablePictureInPicture
                  onEnded={()=>{handleVideoEnd()}}
                  onLoadedData={onLoadedData}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 z-10" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4 z-10">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-8 ${index === currentVideo ? 'bg-gray-300' : 'bg-gray-500'}`}
            />
          ))}
        </div> */}
        </div>
      </>
      // </div>
    );
  }