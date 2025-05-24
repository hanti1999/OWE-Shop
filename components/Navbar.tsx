import Link from 'next/link';
import React from 'react';
import { cherryBombOne } from '@/app/layout';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';
import Menu from './Menu';

const NAV_LINKS = [
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
];

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* Mobile */}
      <div className='md:hidden h-full flex items-center justify-between'>
        <Link href={'/'}>
          <h1
            className={`md:text-[3rem] text-[2.25rem] text-primary-orange ${cherryBombOne.className}`}
          >
            OWE
          </h1>
        </Link>
        <Menu />
      </div>
      {/* Tablet */}
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        {/* Left */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-4'>
          <Link href={'/'}>
            <h1
              className={`text-[3rem] text-primary-orange ${cherryBombOne.className}`}
            >
              OWE
            </h1>
          </Link>
          <div className='hidden xl:flex gap-4'>
            {NAV_LINKS?.map((item, index) => (
              <Link key={index} href={item?.href}>
                {item?.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
