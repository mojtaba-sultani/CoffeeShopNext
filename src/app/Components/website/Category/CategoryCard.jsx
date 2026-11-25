import Image from "next/image";
import "@/app/globals.css"
import Link from "next/link";
export default function CategoryCard({titleCategory,iconCategory,altImage,hrefLink,bgCategory,decCategory}) {
  return (
    <Link href={hrefLink} className='hover:bg-amber-100 flex flex-col bg-white shadow-lg  rounded-2xl justify-center  items-center gap-3 px-14 py-10 text-brwon w-full whitespace-nowrap'>
        <Image src={iconCategory} width={125} height={125} alt={altImage} className=' p-4 rounded-full' style={{backgroundColor:bgCategory}}  />
        <h3 className="text-lg font-bold">{titleCategory}</h3>
        <p className="text-sm">{decCategory}</p>
    </Link>
  )
}
