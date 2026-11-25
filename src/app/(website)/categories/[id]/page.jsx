import CardProducts from "@/app/Components/website/Card/CardProducts";
import Header from "@/app/Components/website/Header/Header";
import Link from "next/link";
import React from "react";
export default async function categoriesID({ params }) {
  const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const { id } = await params;
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/rest/v1/products?select=*&category_slug=eq.${id}`,
        {
          headers: {
            apikey: apiKey,
            Authorization: `Bearer ${apiKey}`,
          },
          cache: "no-store",
        },
      );
      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات");
      }
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  const bgHeaderData = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/rest/v1/categories?select=*&slug=eq.${id}`,
        {
          headers: {
            apikey: apiKey,
            Authorization: `Bearer ${apiKey}`,
          },
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات");
      }
      return response.json();
    } catch (error) {
      throw new Error("خطا در دریافت اطلاعات");
    }
  };
  const products = await fetchProducts();
  const HeaderData = await bgHeaderData();
  console.log(HeaderData);
  return (
    <>
      <Header
        title={HeaderData[0].name}
        bgImage={HeaderData[0].header_image}
        altImage={"test"}
        textLink={"مشاهده"}
      />
      <section className="p-8 max-w-7xl mx-auto min-w-0 w-full flex flex-col gap-4">
        <Link
          href={"/"}
          className="text-xl bg-brwon p-2 w-fit rounded-md text-white hover:text-gray-300"
        >
          بازگشت به صفحه اصلی
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-nowrap gap-x-5 gap-y-10">
          {products.map((product) => (
            <CardProducts
              key={product.id}
              coffeeTitle={product.name}
              coffeeDec={product.description}
              textBtn={"سفارش"}
              altImage={product.slug}
              coffeeImgae={product.image_url}
              coffeePrice={product.price}
            />
          ))}
        </div>
      </section>
    </>
  );
}
