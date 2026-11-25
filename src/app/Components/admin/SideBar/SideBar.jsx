"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SmsIcon from "@mui/icons-material/Sms";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import EastIcon from "@mui/icons-material/East";
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const apiUrl=process.env.NEXT_PUBLIC_SUPABASE_URL;

  return (
    <div className="min-h-screen flex text-white">
      {/* MObile Button menu */}
      <div className="fixed top-0 right-4">
        <div className="lg:hidden">
          <button
            className="p-2 cursor-pointer z-60 fixed "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <EastIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
        {/* MObile Button menu */}
        {/* overlay section mobile  */}
        {isOpen && (
          <div
            className="bg-black/50 inset-0 w-full fixed top-0 z-40 "
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        {/* overlay section mobile  */}
        <aside
          className={`fixed top-0 right-0 z-50 w-64 lg:translate-x-0 h-full inset-0 bg-brwon  ${isOpen ? "translate-x-0" : "translate-x-full"} transition duration-200 ease-in-out`}
        >
          <div className="flex relative p-6 flex-col h-full">
            <div className="border-b-2">
              <Image
                src={`${apiUrl}/storage/v1/object/public/images-coffee/CoffeeShop_Logo.png`}
                width={200}
                height={200}
                className="object-cover"
                priority
              />
            </div>
            <ul className="flex flex-col gap-2 text-sm max-h-100 overflow-y-scroll">
              <li className="flex gap-2 items-center p-4 hover:bg-amber-950 rounded-md transition duration-200 ease-in-out">
                <span>
                  <HomeIcon />
                </span>
                <Link href="/admin">داشبورد</Link>
              </li>
              <li className="flex gap-2 items-center p-4 hover:bg-amber-950 rounded-md transition duration-200 ease-in-out">
                <span>
                  <Inventory2Icon />
                </span>
                <Link href="/admin/products">محصولات</Link>
              </li>
              <li className="flex gap-2 items-center p-4 hover:bg-amber-950 rounded-md transition duration-200 ease-in-out">
                <span>
                  <DashboardIcon />
                </span>
                <Link href="/admin/categories">دسته بندی ها</Link>
              </li>
              <li className="flex gap-2 items-center p-4 hover:bg-amber-950 rounded-md transition duration-200 ease-in-out">
                <span>
                  <LocalGroceryStoreIcon />
                </span>
                <Link href="/admin/orders">سفارشات</Link>
              </li>
              <li className="flex gap-2 items-center p-4 hover:bg-amber-950 rounded-md transition duration-200 ease-in-out">
                <span>
                  <SmsIcon />
                </span>
                <Link href="/admin/comments">نظرات مشتریان</Link>
              </li>
              <li className="flex gap-2 items-center p-4 hover:bg-amber-950 rounded-md transition duration-200 ease-in-out">
                <span>
                  <PeopleAltIcon />
                </span>
                <Link href="/admin/users">کاربران</Link>
              </li>
              <li className="flex gap-2 items-center p-4 hover:bg-amber-950 rounded-md transition duration-200 ease-in-out">
                <span>
                  <SettingsIcon />
                </span>
                <Link href="/admin/setting">تنظیمات سایت</Link>
              </li>
              <li className="flex gap-2 items-center p-4 hover:bg-amber-950 rounded-md transition duration-200 ease-in-out">
                <span>
                  <BarChartIcon />
                </span>
                <Link href="/admin/reports">گزارش ها</Link>
              </li>
            </ul>
            <div className="border-t-2">
              <button className="flex cursor-pointer gap-1 items-center mt-4 px-2 py-4 hover:bg-amber-950 w-full rounded-md transition duration-200 ease-in-out">
                <LogoutIcon />
                <span>خروج از حساب</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
