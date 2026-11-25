"use client";
import Link from "next/link";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  
  return (
    <nav className=" text-coffee w-full absolute z-20 top-0">
      <div className="mx-auto md:flex justify-between px-8 hidden">
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 items-center text-white font-bold">
            <Link href="/" className="cursor-pointer">
              <Image width={230} height={230} src={`${apiUrl}/storage/v1/object/public/images-coffee/CoffeeShop_Logo.png`} alt="LogoCoffee" />
            </Link>
            <li>
              <Link href="/" className="cursor-pointer">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <a href="/contact-us" className="cursor-pointer">
                تماس با ما
              </a>
            </li>
            <li>
              <Link href="/" className="cursor-pointer">
                درباره ما
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:gap-10 gap-5">
          <Link href="/">
            <SearchOutlinedIcon className="text-white"/>
          </Link>
          <Link href="/">
            <LocalMallOutlinedIcon  className="text-white"/>
          </Link>
          <Link href="/login" className="text-white p-2 rounded-md bg-brwon font-bold flex items-center gap-1">
          <PermIdentityOutlinedIcon fontSize="small" />
          <span>ورود / ثبت نام</span>
          </Link>
        </div>
      </div>
      <button
        className="block md:hidden cursor-pointer p-5"
        onClick={() => setShowMenu(true)}
      >
        <MenuIcon />
      </button>
      <div
        className={`bg-brwon z-10 h-full fixed top-0 right-0 p-4 w-4/5 flex flex-col ${showMenu ? " translate-x-0 " : "pointer-events-none translate-x-full"} items-start gap-5 transition-transform duration-200 ease-in-out transform`}
      >
        <button className="cursor-pointer" onClick={() => setShowMenu(false)}>
          <CloseIcon />
        </button>
        <Link href="/" className="flex justify-center  w-full">
              <Image width={200} height={200} src={`${apiUrl}/storage/v1/object/public/images-coffee/CoffeeShop_Logo.png`} alt="LogoCoffee" />
        </Link>
        <ul className="flex flex-col  gap-5">
          <li>
            <Link href="/" className="cursor-pointer">
              فروشگاه
            </Link>
          </li>
          <li>
            <Link href="/" className="cursor-pointer">
              پشتیبانی
            </Link>
          </li>
          <li>
            <Link href="/" className="cursor-pointer">
              ارتباط با ما
            </Link>
          </li>
          <li>
            <Link href="/" className="cursor-pointer">
              درباره ما
            </Link>
          </li>
          <li>
            <Link href="/" className="cursor-pointer">
              بلاگ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
