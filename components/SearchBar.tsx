'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className='flex flex-1 justify-between gap-4 bg-gray-100 p-2 rounded-md'
      onSubmit={handleSearch}
    >
      <input
        type='text'
        className='bg-gray-100 flex-1 outline-none'
        placeholder='Nhập từ khóa cần tìm...'
        name='name'
      />
      <button className='cursor-pointer'>
        <Image
          src={'/assets/search.png'}
          alt='search-icon'
          width={16}
          height={16}
        />
      </button>
    </form>
  );
};

export default SearchBar;
