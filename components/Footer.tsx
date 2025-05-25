import Link from 'next/link';
import Image from 'next/image';
import { cherryBombOne } from '@/app/layout';

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      <section className='flex flex-col md:flex-row justify-between gap-24'>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href={'/'}>
            <h1
              className={`text-3xl text-primary-orange ${cherryBombOne.className}`}
            >
              OWE
            </h1>
          </Link>
          <p>Đồng Nai, Việt Nam</p>
          <p className='font-semibold'>hello@mail.com</p>
          <p className='font-semibold'>0982 577 949</p>
          <div className='flex gap-4'>
            <Image src='/assets/facebook.png' alt='' width={16} height={16} />
            <Image src='/assets/instagram.png' alt='' width={16} height={16} />
            <Image src='/assets/youtube.png' alt='' width={16} height={16} />
            <Image src='/assets/pinterest.png' alt='' width={16} height={16} />
            <Image src='/assets/x.png' alt='' width={16} height={16} />
          </div>
        </div>
        <div className='w-1/2 hidden lg:flex lg:justify-between'>
          <div className='flex flex-col'>
            <h1 className='font-medium text-lg mb-8'>OWE</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>Về OWE</Link>
              <Link href=''>Blog</Link>
              <Link href=''>Liên hệ</Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-medium text-lg mb-8'>CỬA HÀNG</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>Hàng mới về</Link>
              <Link href=''>Phụ kiện</Link>
              <Link href=''>Thời trang nam</Link>
              <Link href=''>Thời trang nữ</Link>
              <Link href=''>Tất cả sản phẩm</Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-medium text-lg mb-8'>HỖ TRỢ</h1>
            <div className='flex flex-col gap-6'>
              <Link href=''>Dịch vụ</Link>
              <Link href=''>Tài khoản</Link>
              <Link href=''>Tìm cửa hàng</Link>
              <Link href=''>Chính sách</Link>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>Đăng ký nhận thông tin</h1>
          <p>Để nhận ưu đãi sớm nhất, các su hướng và sản phẩm mới!</p>
          <div className='flex'>
            <input
              type='text'
              placeholder='email của bạn...'
              className='px-4 py-2 w-3/4 '
            />
            <button className='w-1/4 bg-primary-orange text-white'>Gửi</button>
          </div>
          <span className='font-semibold'>Phương thức thanh toán</span>
          <div className='flex gap-4'>
            <Image
              src='/assets/momo_square_pinkbg.svg'
              alt=''
              width={40}
              height={40}
            />
            <Image
              src='/assets/casso-vietqr.svg'
              alt=''
              width={120}
              height={40}
            />
          </div>
        </div>
      </section>

      <section className=''></section>
    </div>
  );
};

export default Footer;
