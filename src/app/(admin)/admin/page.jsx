import Card from "@/app/Components/admin/Card/Card";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CoffeeIcon from "@mui/icons-material/Coffee";
import LineCharts from "@/app/Components/admin/Charts/LineCharts/LineCharts";
import { PieCharts } from "@/app/Components/admin/Charts/PieCharts/PieCharts";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Link from "next/link";
export default function () {
  const chartLineData = [
    { month: "فروردین", price: 20500000 },
    { month: "اردیبهشت", price: 38300000 },
    { month: "خرداد", price: 44800000 },
    { month: "تیر", price: 35200000 },
    { month: "مرداد", price: 47700000 },
    { month: "شهریور", price: 57100000 },
    { month: "مهر", price: 60100000 },
  ];
  const chartConfig = {
    price: {
      color: "#8C7159",
    },
  };
  const chartPieData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
  ];
  const fillterButton = ["روزانه", "ماهانه", "هفتگی"];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex">
          <CoffeeIcon className="text-brwon" sx={{ fontSize: "50px" }} />
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">داشبورد مدیریتی</h2>
            <span className="text-gray-500 text-xs">
              خلاصه وضعیت کسب و کار شما در یک نگاه
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <Card>
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2">
                <b className="text-2xl">4.78</b>
                <div className="flex flex-col gap-2 text-xs">
                  <span className="text-brwon">میانگین امتیاز</span>
                  <span className="text-green-500">
                    0.2
                    <ArrowUpwardIcon fontSize="small" />
                  </span>
                </div>
              </div>
              <div className="p-3 bg-brwon rounded-full text-white">
                <SearchIcon fontSize="large" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2">
                <b className="text-2xl">89500000</b>
                <div className="flex flex-col gap-2 text-xs">
                  <span className="text-brwon">میانگین امتیاز</span>
                  <span className="text-green-500">
                    0.2
                    <ArrowUpwardIcon fontSize="small" />
                  </span>
                </div>
              </div>
              <div className="p-3 bg-brwon rounded-full text-white">
                <SearchIcon fontSize="large" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2">
                <b className="text-2xl">4.78</b>
                <div className="flex flex-col gap-2 text-xs">
                  <span className="text-brwon">میانگین امتیاز</span>
                  <span className="text-green-500">
                    0.2
                    <ArrowUpwardIcon fontSize="small" />
                  </span>
                </div>
              </div>
              <div className="p-3 bg-brwon rounded-full text-white">
                <SearchIcon fontSize="large" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-2">
                <b className="text-2xl">4.78</b>
                <div className="flex flex-col gap-2 text-xs">
                  <span className="text-brwon">میانگین امتیاز</span>
                  <span className="text-green-500">
                    0.2
                    <ArrowUpwardIcon fontSize="small" />
                  </span>
                </div>
              </div>
              <div className="p-3 bg-brwon rounded-full text-white">
                <SearchIcon fontSize="large" />
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5 ">
        <div className="col-span-2">
          <Card>
            <PieCharts
              titleText={"وضعیت سفارشات"}
              chartConfig={chartConfig}
              chartData={chartPieData}
            />
          </Card>
        </div>
        <div className="col-span-3 h-fit">
          <Card>
            <LineCharts
              titleText={"نمودار فروش"}
              verticalAxis={chartLineData}
              XDataKey="month"
              chartConfig={chartConfig}
              descriptionText={"نمودار فروش 7 ماهه اول"}
              fillterBtn={fillterButton}
            />
          </Card>
        </div>
      </div>
      <section className="grid grid-cols-2 gap-4">
        <Card>
          <div className="flex flex-col">
            <div class="flex justify-between">
              <div class="flex gap-1">
                <EmojiEventsIcon className="text-brwon" />
                <h6 className="font-bold">محصولات پرفروش</h6>
              </div>
              <Link
                href={"/"}
                class="flex text-brwon items-center text-sm gap-1"
              >
                مشاهده همه
                <KeyboardBackspaceIcon fontSize="small" />
              </Link>
            </div>
            <div class="flex overflow-x-auto">
              <Card>
                <div className="relative mx-auto w-36 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  {/* تصویر کاور + لایه تیره روی آن */}
                  <div className="relative">
                    <img
                      src="https://avatar.vercel.sh/shadcn1"
                      alt="Event cover"
                      className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                  </div>

                  {/* هدر: عنوان و توضیحات یک‌طرف، بج طرف مقابل */}
                  <div className="flex items-start justify-between gap-x-6 p-4">
                    <div className="min-w-0 space-y-1.5">
                      <h3 className="text-base font-semibold leading-none tracking-tight text-zinc-950 dark:text-zinc-50">
                        کیک شکلاتی
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                        180سفارش
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <Card>
          <div class="flex flex-col">
            <div class="flex justify-between">
              <div class="flex gap-1">
                <LocalGroceryStoreIcon className="text-brwon" />
                <h6 className="font-bold">آخرین سفارش ها</h6>
              </div>
              <Link
                href={"/"}
                class="flex text-brwon items-center text-sm gap-1"
              >
                مشاهده همه
                <KeyboardBackspaceIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
