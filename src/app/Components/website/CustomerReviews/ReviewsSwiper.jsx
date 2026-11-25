"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

export default function ReviewsSwiper({reviews}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {reviews.map((review) => (
            <SwiperSlide
            key={review.user_name}
            className="text-brwon border border-gray-500 flex flex-col  gap-5 rounded-2xl justify-center items-center"
          >
          <Link href={`reviews/${review.id}`} className="cursor-pointer">
            <div className="flex flex-col gap-5 justify-around items-center">
              <div className="flex flex-col">
                <h4 className=" font-bold text-lg">{review.user_name}</h4>
                <div className="flex">
                  {Array.from({length:review.rating}).map((_)=>(
                   <StarIcon key={review.id} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm leading-6 line-clamp-3 text-wrap text-center px-8">
                {review.comment}
              </p>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
