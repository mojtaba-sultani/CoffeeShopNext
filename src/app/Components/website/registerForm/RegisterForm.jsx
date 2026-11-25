"use client";
import React, { useState } from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
export default function RegisterForm() {
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const [btnSubmit, setBtnSubmit] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    confrimPassword: "",
  });

  const RegisterSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.password ||
      !formData.confrimPassword
    ) {
      setBtnSubmit(true);
      return;
    }
    if (formData.password !== formData.confrimPassword) {
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      Option: {
        data: {
          firstName: formData.firstName,
        },
      },
    });
    if (error) {
      return;
    }

    router.push('/admin')
    setBtnSubmit(false);
  };
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 bg-gray-100 justify-around">
      <div className="col-span-1 order-2 lg:order-1 items-center text-black bg-white m-4 lg:m-8 rounded-lg p-8 shadow-2xl flex flex-col gap-4">
        <span>
          <PersonAddIcon sx={{ fontSize: 50 }} className="text-amber-500" />
        </span>
        <h6 className="font-bold text-2xl">ثبت نام در کافه مونتو</h6>
        <p className="text-lg text-gray-400">
          برای ادامه اطلاعات خود را وارد کنید .
        </p>
        <form
          onSubmit={RegisterSubmit}
          className=" w-full max-w-96 flex flex-col gap-4 items-center"
        >
          <div className="relative  w-full">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="ps-10 border border-gray-200 py-3 w-full rounded-md"
              value={formData.firstName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
            <span className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <PersonIcon />
            </span>
          </div>
          {btnSubmit && !formData.firstName && (
            <span className="text-sm text-red-500">
              نام و نام خانوادگی خود را وارد کنید .
            </span>
          )}
          <div className="relative w-full">
            <input
              type="email"
              placeholder="آدرس ایمیل"
              className="ps-10 border border-gray-200 py-3 w-full rounded-md"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <span className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <EmailIcon />
            </span>
          </div>
          {btnSubmit && !formData.email && (
            <span className="text-sm text-red-500">
              ایمیل خود را وارد کنید .
            </span>
          )}
          <div className="relative w-full">
            <input
              type="password"
              placeholder="رمز عبور"
              className="ps-10 border border-gray-200 py-3 w-full rounded-md"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
            <span className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <LockIcon />
            </span>
          </div>
          {btnSubmit && !formData.password && (
            <span className="text-sm text-red-500">
              رمز عبور خود را وارد کنید .
            </span>
          )}
          <div className="relative w-full">
            <input
              type="password"
              placeholder="تکرار رمز عبور"
              className="ps-10 border border-gray-200 py-3 w-full rounded-md"
              value={formData.confrimPassword}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  confrimPassword: e.target.value,
                }))
              }
            />
            <span className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <LockIcon />
            </span>
          </div>
          {btnSubmit &&
            (!formData.confrimPassword ? (
              <span className="text-sm text-red-500">
                رمز عبور خود را دوباره وارد کنید .
              </span>
            ) : formData.confrimPassword !== formData.password ? (
              <span className="text-sm text-red-500">
                رمز عبور شما با هم مطابقت ندارد .
              </span>
            ) : null)}
          <button className="rounded-md bg-amber-500 cursor-pointer transition duration-150 ease-in hover:bg-amber-600 text-white text-center p-2 font-bold w-full ">
            ثبت نام
          </button>
          <p>
            قبلا ثبت نام کرده اید ؟
            <Link
              href={"/login"}
              className="text-amber-500 hover:text-amber-600 font-bold"
            >
              ورود به حساب
            </Link>
          </p>
        </form>
      </div>
      <div className="col-span-2 relative h-64 lg:h-dvh order-1 lg:order-2">
        <Image
          src={`${apiUrl}/storage/v1/object/public/images-coffee/registerCoffee.jpg`}
          fill
          priority
          alt="registerCoffeeImage"
        />
        <div className="flex flex-col gap-2 text-wrap text-white absolute top-1/5 left-1/3 transform -translate-x-1/3 -translate-y-1/5">
          <h6 className="text-4xl font-bold">به کافه مونتو خوش آمدید !</h6>
          <p className="text-lg">
            عضویت در کافه ما تجربه ایی بهتر و لذت بخش تر از قهوه و دسر را برای
            شما میسازد .
          </p>
        </div>
      </div>
    </section>
  );
}
