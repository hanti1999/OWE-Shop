import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <div>
      <Slider />
      <section className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>Sản phẩm nổi bật</h1>
        <ProductList />
      </section>
      <section className='mt-24'>
        <h1 className='text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          Danh mục
        </h1>
        <CategoryList />
      </section>
      <section className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>Sản phẩm mới</h1>
        <ProductList />
      </section>
    </div>
  );
}
