import Image from "next/image";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return (
    <footer className="bg-Header relative">
      <div className="py-21 max-w-7xl mx-auto text-light-brwon flex flex-col gap-2 items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-6 justify-between w-full items-center lg:items-start gap-5 place-items-end-safe">
          <div className="col-span-2 flex flex-col gap-2 w-full text-white">
              <h6 className="font-bold">اطلاع رسانی</h6>
              <p>ایمیل‌تان را وارد کنید تا از تخفیف‌ها باخبر شوید.</p>
            <div className="bg-light-brwon opacity-70 col-span-1 place-content-center py-1.5 px-3 flex rounded-sm text-black relative ">
              <div className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2">
                <EmailIcon />
              </div>
              <input
                type="email"
                name=""
                id=""
                placeholder="ایمیل شما"
                className="pr-8 w-full text-black placeholder:text-black text-sm"
              />
              <button className="cursor-pointer bg-amber-800 hover:bg-amber-900 rounded-sm font-bold text-white py-2 px-7.5">
                ارسال
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <ul className="list-disc flex flex-col gap-1 col-span-1">
              <p className="mb-2 text-gray-200">لینک های مفید</p>
              <li>
                <Link href={"/"}>سوالات متداول</Link>
              </li>
              <li>
                <Link href={"/"}>شرایط و قوانین</Link>
              </li>
              <li>
                <Link href={"/"}>حریم خصوصی</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="list-disc flex flex-col gap-1 col-span-1">
              <p className="mb-2 text-gray-200">دسترسی سریع</p>
              <li>
                <Link href={"/"}>خانه</Link>
              </li>
              <li>
                <Link href={"/"}>منو</Link>
              </li>
              <li>
                <Link href={"/"}>درباره ما</Link>
              </li>
              <li>
                <Link href={"/"}>تماس با ما</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <Link href={'/'}>
            <Image
              width={200}
              height={200}
              src={`${apiUrl}/storage/v1/object/public/images-coffee/CoffeeShop_Logo.png`}
              alt="LogoCoffee"
            />
            </Link>
            <div className="flex gap-6 items-center">
              <Link href={"/"}>
                <GoogleIcon />
              </Link>
              <Link href={"/"}>
                <PinterestIcon />
              </Link>
              <Link href={"/"}>
                <InstagramIcon />
              </Link>
              <Link href={"/"}>
                <TwitterIcon />
              </Link>
              <Link href={"/"}>
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
