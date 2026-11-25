import React from "react";
import CardProducts from "../../Components/website/Card/CardProducts";
import Header from "../../Components/website/Header/Header";
import SideBarProducts from "../../Components/website/SidebarProducts/SideBarProducts";
import OpenDrawer from "../../Components/website/OpenDrawer/OpenDrawer.jsx";
import SliderControlled from "../../Components/website/SliderControlled/SliderControlled";
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const dataProducts = async () => {
  try {
    const response = await fetch(
      `${apiUrl}/rest/v1/products?select=*`,
      {
        headers: {
          apiKey: apiKey,
          Authorization: `Bearer ${apiKey}`,
        },
        cache: "no-store",
      },
    );
    if (!response.ok) {
      throw new Error("خطا در دریافت اطلاعات");
    }
    return response.json();
  } catch (error) {}
};
const dataCategories = async () => {
  const response = await fetch(
    `${apiUrl}/rest/v1/categories?=select=*`,
    {
      headers: {
        apiKey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
      cache: "no-store",
    },
  );
  if (!response.ok) {
    throw new Error("خطا در دریافت اطلاعات");
  }
  return response.json();
};
export default async function products() {
  const products = await dataProducts();
  const categories = await dataCategories();
  return (
    <>
      <Header
        title={"تمامی محصولات"}
        decription2={"لیست تمامی محصولات"}
        bgImage={
          `${apiUrl}/storage/v1/object/public/Products-Image/latte.avif`
        }
        altImage={"photo_products"}
      />
      <section className="min-w-0 w-full mx-auto p-8 text-black">
        <div className="grid grid-cols-6 gap-2 justify-between">
          <div class="col-span-6 md:col-span-3 lg:hidden mb-4">
            <OpenDrawer
              DirectionSlide={"right"}
              ButtonText={"فیلتر محصولات"}
              drawerTitle={"فیلتر محصولات"}
              submitText={"اعمال فیلتر"}
              cancelText={"پاک کردن فیلتر"}
            >
              <div className="flex flex-col gap-5">
                <div class="flex  flex-col gap-5 border-b border-gray-300 pb-5">
                  <h5 className="text-lg font-bold">دسته بندی ها</h5>
                  {categories.map((category) => (
                    <label className="flex gap-2 items-center">
                      <input type="radio" name="category" id="" />
                      {category.name}
                    </label>
                  ))}
                </div>
                <div class="flex gap-5 flex-col border-b border-gray-300 pb-5">
                  <h6 className="text-lg font-bold">بازه قیمت</h6>
                  <SliderControlled />
                </div>
                <div className=" flex flex-col gap-3">
                  <h6 className="text-lg font-bold">مرتب سازی</h6>
                  <label className="flex gap-2 items-center cursor-pointer">
                    <input type="radio" name="category" />
                    پرفروش ترین
                  </label>
                  <label className="flex gap-2 items-center cursor-pointer">
                    <input type="radio" name="category" />
                    جدیدترین
                  </label>
                  <label className="flex gap-2 items-center cursor-pointer">
                    <input type="radio" name="category" />
                    ارزان ترین
                  </label>
                  <label className="flex gap-2 items-center cursor-pointer">
                    <input type="radio" name="category" />
                    گران ترین
                  </label>
                </div>
              </div>
            </OpenDrawer>
          </div>
          <SideBarProducts />
          <div className="col-span-6 lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-nowrap gap-x-5 gap-y-10">
            {products.map((product) => (
              <CardProducts
                key={product.slug}
                coffeeImgae={product.image_url}
                coffeeTitle={product.name}
                coffeeDec={product.description}
                textBtn={"سفارش"}
                altImage={product.slug}
                coffeePrice={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
