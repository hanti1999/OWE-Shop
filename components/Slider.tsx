'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SLIDES = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-pink-50 to-blue-50',
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-50 to-yellow-50',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState<number>(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       // if (slide hiện tại bằng tổng độ dài slide) chuyển về slide đầu tiên
  //       // else tăng slide hiện tại lên 1
  //       setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden'>
      <div
        className='w-max h-full flex transition-all ease-in-out duration-1000'
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {SLIDES?.map((item, index) => (
          <div
            key={index}
            className={`${item?.bg} w-screen flex flex-col gap-16 xl:flex-row`}
          >
            <div className='xl:w-1/2 h-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
              <h2 className='text-xl lg:text-3xl 2xl:text-2xl'>
                {item?.description}
              </h2>
              <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
                {item?.title}
              </h1>
              <Link href={item?.url}>
                <button className='rounded-md px-4 py-3 text-white bg-primary-orange'>
                  Mua Ngay
                </button>
              </Link>
            </div>
            <div className='relative h-1/2 xl:w-1/2 xl:h-full'>
              <Image
                src={item?.img}
                alt=''
                fill
                sizes='100%'
                className='object-cover'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
        {SLIDES.map((item, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ring-1 ring-primary-orange cursor-pointer flex items-center justify-center ${
              current === index ? 'scale-150' : ''
            }`}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className='w-1.5 h-1.5 bg-primary-orange rounded-full'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
