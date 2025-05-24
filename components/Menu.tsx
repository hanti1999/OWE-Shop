'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MOBILE_LINKS = [
  {
    href: '/',
    label: 'Trang chủ',
  },
  {
    href: '/',
    label: 'Mua hàng',
  },
  {
    href: '/',
    label: 'Khuyến mãi',
  },
  {
    href: '/',
    label: 'Về OWE',
  },
  {
    href: '/',
    label: 'Liên hệ',
  },
  {
    href: '/',
    label: 'Giỏ hàng',
  },
];

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <Image
        alt='menu-icon'
        src='/assets/menu.png'
        width={28}
        height={28}
        className='cursor-pointer'
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
          {MOBILE_LINKS?.map((item, index) => (
            <Link href={item?.href} key={index}>
              {item?.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
