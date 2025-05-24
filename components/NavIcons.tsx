'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartModel from './CartModel';

const NavIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setProfileOpen] = useState<boolean>(false);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  const isLogin = false;

  const handleProfile = () => {
    if (!isLogin) {
      router.push('/login');
    }
    setProfileOpen((prev) => !prev);
  };

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image
        src='/assets/profile.png'
        alt='profile-icon'
        className='cursor-pointer'
        width={22}
        height={22}
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-md z-20'>
          <Link href={'/'}>Hồ sơ</Link>
          <div>Đăng xuất</div>
        </div>
      )}
      <Image
        src='/assets/notification.png'
        alt='notification-icon'
        className='cursor-pointer'
        width={22}
        height={22}
      />
      <div className='relative cursor-pointer'>
        <Image
          src='/assets/cart.png'
          alt='cart-icon'
          className='cursor-pointer'
          width={22}
          height={22}
          onClick={() => setCartOpen((prev) => !prev)}
        />
        <div className='absolute flex items-center justify-center -top-2 -right-2 w-5 h-5 bg-primary-orange rounded-full'>
          <span className='text-white text-[12px]'>1</span>
        </div>
        {isCartOpen && <CartModel />}
      </div>
    </div>
  );
};

export default NavIcons;
