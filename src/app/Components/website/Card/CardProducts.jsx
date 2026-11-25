import Image from "next/image";
import Link from "next/link"
import React from "react";
export default function CardProducts({coffeeImgae,coffeeTitle,coffeeDec,textBtn,altImage,coffeePrice}) {
  return (
  <div className="flex flex-col rounded-2xl bg-white text-black w-full h-91">
    <div className="relative h-1/2 w-full overflow-hidden rounded-2xl">
    <Image src={coffeeImgae} fill alt={altImage} className="object-cover rounded-xl hover:transition-transform duration-500 ease-in-out hover:scale-125" />
    </div>
    <div className="relative flex flex-col text-start p-4 h-1/2">
    <div className="flex flex-col gap-2 min-w-0 w-full">
      <b className="font-bold text-2xl">{coffeeTitle}</b>
      <h4 className="text-sm w-full truncate text-gray-500">{coffeeDec}</h4>
      <h4 className="text-lg w-full truncate">{coffeePrice} تومان</h4>
    </div>
    <button className="hover:bg-amber-600  cursor-pointer font-bold rounded-3xl py-2.5 px-11 bg-amber-400 text-black w-fit absolute -bottom-6 right-1/2 transform translate-x-1/2">{textBtn}</button>
    </div>
  </div>  
  );
}
