import React from "react";
import Header from "../../Components/website/Header/Header";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default async function contacetUs() {
  const apiUrl=process.env.NEXT_PUBLIC_SUPABASE_URL
  return (
    <>
      <Header
        title={"تماس با ما"}
        decription1={"راه های ارتباطی"}
        bgImage={
          `${apiUrl}/storage/v1/object/public/header-iamge/location.webp`
        }
        altImage={"location-photo"}
      />
      <section className="mx-auto max-w-7xl min-w-0 w-full p-6">
        <div class="grid grid-cols-3 text-black gap-5">
          <div class="col-span-1 gap-5 border border-brwon p-3 rounded-md bg-light-brwon">
            <h2 className="font-bold text-lg">راه های ارتباطی</h2>
            <p>ما همیشه در دسترس هستیم</p>
            <div class="flex flex-col gap-5 mt-10">
              <div class="flex gap-2 items-center">
                <PhoneEnabledIcon
                  className="bg-brwon text-light-brwon rounded-md"
                  fontSize="large"
                />
                <div class="flex flex-col">
                  <b className="font-bold">تلفن تماس</b>
                  <a href="tel:09396260388">09396260388</a>
                </div>
              </div>
              <div class="flex gap-2 items-center">
                <EmailIcon
                  className="bg-brwon text-light-brwon rounded-md"
                  fontSize="large"
                />
                <div class="flex flex-col">
                  <b className="font-bold">ایمیل</b>
                  <a href="mailto:mojtabasultani82@gmail.com">
                    mojtabasultani82@gmail.com
                  </a>
                </div>
              </div>
              <div class="flex gap-2 items-center">
                <AccessTimeIcon
                  className="bg-brwon text-light-brwon rounded-md"
                  fontSize="large"
                />
                <div class="flex flex-col">
                  <b className="font-bold">ساعت کاری</b>
                  <a href="tel:+9396260388">همه روزه از ساعت 9 صبح تا 11 شب</a>
                </div>
              </div>
              <div class="flex gap-2 items-center">
                <LocationPinIcon
                  className="bg-brwon text-light-brwon rounded-md"
                  fontSize="large"
                />
                <div class="flex flex-col">
                  <b className="font-bold">آدرس</b>
                  <span>مشهد , میدان شهدا , نبش دانشگاه 1</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2 gap-5 border border-brwon p-3 rounded-md bg-light-brwon">
            s
          </div>
        </div>
      </section>
    </>
  );
}
