import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SliderControlled from "../SliderControlled/SliderControlled.jsx";
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const fetchCategory = async () => {
  try {
    const response = await fetch(`${apiUrl}/rest/v1/categories?select=*`, {
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
      },
    });
    if (!response.ok) {
      throw new Error("خطا در دریافت اطلاعات");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("درخواست شما انجام شد .");
  }
};
export default async function SideBarProducts() {
  const categories = await fetchCategory();
  return (
    <>
      <form action={""}>
        <div className="hidden lg:flex flex-col col-span-1 bg-white h-fit  rounded-2xl border border-gray-300 p-4 gap-5 sticky top-4">
          <div className="flex  border-b border-gray-300 justify-center p-3">
            <FilterAltOutlinedIcon fontSize="medium" />
            <h6 className="font-bold text-lg">فیلتر محصولات</h6>
          </div>
          {/* start categories */}
          <div className="item flex flex-col gap-4 border-b border-gray-300 pb-4">
            <h6 className="text-lg font-bold">دسته بندی ها</h6>
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex gap-2 items-center cursor-pointer"
              >
                <input type="radio" name="category" />
                {category.name}
              </label>
            ))}
          </div>
          {/* end categories */}
          {/* start price */}
          <div className=" flex flex-col gap-4 border-b border-gray-300 pb-4">
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
          <button className="cursor-pointer hover:bg-amber-500 bg-amber-400 p-2 font-bold text-lg rounded-lg ">
            اعمال فیلتر
          </button>
        </div>
      </form>
    </>
  );
}
