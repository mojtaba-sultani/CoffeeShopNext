"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const apiUrl=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const [darkMode, setDarkMode] = useState(true);
  return (
    <header className="w-full bg-white text-black p-4 flex justify-between text-sm items-center">
      <div className="w-full relative bg-gray-100 border border-gray-200  max-w-96 rounded-lg">
        <input
          type="text"
          className=" p-2 w-full ps-8 focus:rounded-lg"
          placeholder="جستجو در پنل ..."
        />
        <span className="absolute right-1 top-1/2 -translate-y-1/2">
          <SearchIcon />
        </span>
      </div>
      <div className="flex items-center gap-5">
        <button className=" text-brwon hover:text-amber-900 cursor-pointer">
          {darkMode ? (
            <NightlightRoundIcon fontSize="medium"/>
          ) : (
            <LightModeIcon fontSize="medium"/>
          )}
        </button>
        <button className="text-brwon hover:text-amber-900 cursor-pointer relative p-1">
          <small className="p-1 rounded-full -top-2 -right-1 absolute bg-light-brwon text-xs">
            2
          </small>
          <NotificationsIcon fontSize="medium" />
        </button>
        <div className="flex items-center text-xs gap-2">
          <div className="flex gap-1 flex-col">
            <span className="font-bold">جاوید</span>
            <span className="text-gray-400">مدیر ارشد</span>
          </div>
          <Link href={'/admin/userProfile'} className=" w-10 h-10 relative">
          <Image src={`${apiUrl}/storage/v1/object/public/images-coffee/Leonardo-DiCaprio.webp`}  className="object-contain rounded-full" fill />
          </Link>
        </div>
      </div>
    </header>
  );
}
