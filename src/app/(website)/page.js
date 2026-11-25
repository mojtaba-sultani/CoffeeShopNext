import Image from 'next/image';
import '@/app/globals.css'
import CategoryCard from '../Components/website/Category/CategoryCard.jsx';
import CardProducts from '../Components/website/Card/CardProducts.jsx';
import CustomerReviews from '../Components/website/CustomerReviews/CustomerReviews.jsx';
import Link from 'next/link';
import Header from '../Components/website/Header/Header.jsx';
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const fetchCategory = async () => {
  try {
    const response = await fetch(`${apiUrl}/rest/v1/categories?select=*`, {
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`
      }, cache: "no-store"
    })
    if (!response.ok) {
      throw new Error('خطا در دریافت اطلاعات')
    }
    return await response.json()
  } catch (error) {
    console.log(error);
  } finally {
    console.log("درخواست شما انجام شد .");
  }
}
const fetchProducts = async () => {
  try {
    const response = await fetch(`${apiUrl}/rest/v1/products?select=*&is_popular=eq.true`, {
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`
      }
    })
    if (!response.ok) {
      throw new Error(JSON.stringify(data))
    }
    return await response.json()
  } catch (error) {
  }
}
export const dynamic = "force-dynamic";
export default async function Home() {
  const category = await fetchCategory()
  const products = await fetchProducts()
  return (
    <div>
      <Header title={'طعم واقعی قهوه در هر فنجان'} decription1={'GOOD COFFEE . BETTET DAYS'} decription2={' با بهترین دانه های قهوه و تجربه ای متقاوت از طعم و عطر در کنار شما هستیم .'} textLink={'مشاهده منو'} bgImage={'https://lckgzowhnygddkoyyqet.supabase.co/storage/v1/object/public/header-iamge/glass-coffee.webp'} altImage={'bg-coffee'} />
      <section className='py-8 max-w-7xl mx-auto md:ps-8 px-8 text-center'>
        <h5 className='text-black text-2xl font-bold'>دسته بندی محصولات</h5>
        <p className='my-4 font-bold text-sm text-gray-500'>از میان دسته بندی های زیر نوشیدنی مورد علاقه تان رو انتخاب کنید .</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center'>
          {category.map(item =>
            <div className='col-span-1' key={item.id}>
              <CategoryCard key={item.id} titleCategory={item.name} iconCategory={item.image_url} altImage={item.name} hrefLink={`/categories/${item.slug}`} bgCategory={item.bg_category} decCategory={item.description} />
            </div>
          )}
        </div>
      </section>
      <section className='p-8 max-w-7xl mx-auto text-center'>
        <h5 className='text-black text-2xl font-bold'>محبوب ترین محصولات</h5>
        <p className='my-4 font-bold text-sm text-gray-500'>محصولات پرطرفدار ما که مشتریان بیشتر انتخاب کردند .</p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-nowrap gap-x-5 gap-y-10'>
          {products.map((product) =>
            <CardProducts key={product.id} coffeeTitle={product.name} coffeeDec={product.description} textBtn={'سفارش'} altImage={product.slug} coffeeImgae={product.image_url} coffeePrice={product.price} />
          )}
        </div>
      </section>
      <section className='mt-10  max-w-7xl  mx-auto px-8'>
        <div className='bg-Header flex flex-col gap-5 items-center md:flex-row justify-between p-8 lg:py-2 lg:px-20 w-full rounded-2xl'>
          <div className='flex flex-col gap-4 order-2 items-center lg:items-start text-white'>
            <span className='bg-orange-400 py-1 px-2 rounded-md'>تخفیف ویژه</span>
            <h4 className='font-bold text-3xl'>قهوه داغ , حال خوب</h4>
            <p className='text-sm'>تا 20% تخفیف برای تمامی نوشیدنی های گرم</p>
            <Link href={'/products'} className='cursor-pointer font-bold rounded-3xl py-2 px-4 border  border-amber-100 text-amber-100 bg-brwon w-fit'>مشاهده محصولات</Link>
          </div>
          <div className='order-1 md:order-2'>
            <Image src="/pngwing.svg" alt="pngwing.svg" width={282} height={228} />
          </div>
        </div>
      </section>
      <section className='p-8 max-w-7xl mx-auto text-center'>
        <h5 className='text-black text-2xl font-bold mb-10'>نظرات مشتریان</h5>
        <div className='gap-x-5 flex w-full min-w-0 gap-y-5 lg:gap-y-10 relative h-57'>
          <CustomerReviews />
        </div>
      </section>
    </div>
  );
}
