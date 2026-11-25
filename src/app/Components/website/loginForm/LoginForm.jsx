"use client";
import Image from "next/image";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const apiUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const [error, setEror] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const LoginUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEror(null);
    console.log(formData.email);
    console.log(formData.password);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      setEror(error.message);
      setLoading(false);
      return;
    } else {
      router.push("/admin");
      setLoading(false);
      console.log(data);
    }
  };
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 bg-gray-100 justify-around">
      <div className="col-span-1 order-2 lg:order-1 items-center text-black bg-white m-4 lg:m-8 rounded-lg p-8 shadow-2xl flex flex-col gap-4">
        <span>
          <LockIcon sx={{ fontSize: 50 }} className="text-amber-500" />
        </span>
        <h6 className="font-bold text-2xl">ورود به حساب کاربری</h6>
        <p className="text-lg text-gray-400">
          خوشحالیم که دوباره شما رو می بینیم .
        </p>
        <form
          onSubmit={LoginUser}
          className=" w-full max-w-96 flex flex-col gap-4 items-center"
        >
          <div className="relative  w-full">
            <input
              type="text"
              placeholder="آدرس ایمیل شما"
              className="ps-10 border border-gray-200 py-3 w-full rounded-md"
              required
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              value={formData.email}
            />
            <span className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <EmailIcon />
            </span>
          </div>
          <div className="relative w-full">
            <input
              type="password"
              placeholder="رمز عبور شما"
              className="ps-10 border border-gray-200 py-3 w-full rounded-md"
              required
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              value={formData.password}
              name="password"
            />
            <span className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <LockIcon />
            </span>
          </div>
          <button
            type="submit"
            className="rounded-md bg-amber-500 cursor-pointer transition duration-150 ease-in hover:bg-amber-600 text-white text-center p-2 font-bold w-full "
          >
            ورود به حساب
          </button>
          <p>
            حساب کاربری ندارید ؟
            <Link
              href={"/register"}
              className="text-amber-500 hover:text-amber-600 font-bold"
            >
              ثبت نام کنید
            </Link>
          </p>
        </form>
      </div>
      <div className="col-span-2 relative h-64 lg:h-dvh order-1 lg:order-2">
        <Image
          fill
          src={`${apiUrl}/storage/v1/object/public/images-coffee/loginCoffee.jpg`}
          priority
          alt="login-coffeeIamge"
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
