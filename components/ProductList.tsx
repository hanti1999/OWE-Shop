import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductList = () => {
  return (
    <div className='mt-12 flex flex-wrap gap-x-8 gap-y-16 justify-between'>
      <Link
        href={'/'}
        className='flex flex-col w-full gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            alt=''
            src='https://images.pexels.com/photos/32195239/pexels-photo-32195239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500 ease-in-out'
          />
          <Image
            alt=''
            src='https://images.pexels.com/photos/31995895/pexels-photo-31995895/free-photo-of-ca-phe-th-nhi-k-v-i-quang-c-nh-bursa-tuy-t-d-p.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Tên sản phẩm</span>
          <span className='font-semibold'>50.000</span>
        </div>
        <div className='text-sm text-gray-500'>Mô tả</div>
        <button className='rounded-3xl ring-1 w-max ring-primary-orange text-primary-orange transition-colors px-2 py-4 text-xs hover:bg-primary-orange hover:text-white'>
          Thêm vào giỏ
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
