'use client';
import Image from 'next/image';
import React from 'react';

const CartModel = () => {
  const cartItems = true;
  return (
    <div className='w-max absolute p-4 rounded-md shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems ? (
        <p>Giỏ hàng trống!</p>
      ) : (
        <>
          <h2 className='text-xl'>Giỏ hàng</h2>
          <div className='flex flex-col gap-8'>
            <div className='flex gap-4'>
              <Image
                src={
                  'https://images.pexels.com/photos/32195239/pexels-photo-32195239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
                alt=''
                width={72}
                height={96}
                className='object-cover rounded-md'
              />
              <div className='flex flex-col justify-between w-full'>
                <div>
                  <div className='flex items-center justify-between gap-8'>
                    <h3 className='font-semibold'>Tên sp</h3>
                    <span className='p-1 bg-gray-50 rounded-sm'>50.000</span>
                  </div>
                  <div>
                    <span className='text-sm text-gray-500'>Sẵn hàng</span>
                  </div>
                </div>
                <div className='flex justify-between text-sm'>
                  <span className='text-gray-500'>x 1</span>
                  <span className='text-red-500'>Xóa</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-center font-semibold'>
              <span>Tổng tiền:</span>
              <span>20000</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>
              Chưa bao gồm thuế và phí vận chuyển
            </p>
            <div className='flex justify-between text-sm'>
              <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
                Xem giỏ hàng
              </button>
              <button className='rounded-md py-3 px-4 bg-primary-orange text-white'>
                Thanh toán
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
