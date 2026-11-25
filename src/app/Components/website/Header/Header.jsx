import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header({title,decription1,decription2,textLink,bgImage,altImage,}) {
  return (
    <>
      <header className=" h-full relative w-full min-h-screen py-8 px-4">
        <div className="grid grid-cols-3 text-center text-white">
          <div className="col-span-3 md:col-span-1 space-y-5 place-self-center order-2 md:order-1 z-10 absolute right-12 transform translate-x-6 top-1/3">
            <p className="text-xl">{decription1}</p>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="text-lg">{decription2}</p>
            {textLink &&
            <Link
            href="/"
            className=" py-3 px-8 bg-brwon border border-light-brwon rounded-full text-light-brwon font-bold"
            >
              {textLink}
            </Link>
            }
          </div>
          <div className="col-span-3 md:col-span-2 place-self-end-safe order-1 md:order-2">
            <Image
              className="object-cover transform scale-x-[-1]"
              fill="true"
              src={bgImage}
              alt={altImage}
            />
          </div>
        </div>
      </header>
    </>
  );
}
