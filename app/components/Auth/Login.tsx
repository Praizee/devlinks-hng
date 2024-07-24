"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/app/_layouts";

import Logo from "@/public/assets/images/Logo.png";
import EmailIcon from "@/public/assets/svg/EmailIcon";
import PasswordIcon from "@/public/assets/svg/PasswordIcon";

const Login = () => {
  const router = useRouter();

  return (
    <AuthLayout>
      <div className="flex flex-col gap-[64px] sm:gap-[51px] w-full sm:w-[476px] p-[32px] sm:p-0">
        <Link href="/" className="w-max sm:mx-auto">
          <Image
            src={Logo}
            alt="Logo"
            // width={182}
            // height={40}
          />
        </Link>

        <div className="flex flex-col gap-[40px] sm:bg-white p-0 sm:p-[40px] rounded-md">
          <span className="flex flex-col gap-[8px]">
            <h2 className="text-[32px] font-bold leading-[48px] text-gray">
              Login
            </h2>
            <p className="text-gray-100">
              Add your details below to get back into the app
            </p>
          </span>

          <form className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[4px]">
              <label htmlFor="email" className="text-[12px] leading-[150%]">
                Email address
              </label>
              <span className="relative">
                <EmailIcon className="size-[16px] absolute left-3 inset-y-0 my-auto" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. alex@email.com"
                  required
                  autoComplete="off"
                  className="w-full pl-10 px-[16px] py-[12px] text-base text-gray placeholder:text-gray placeholder:opacity-[0.5] bg-transparent outline-none border focus:border-primary focus:shadow-input rounded"
                />
              </span>
            </div>

            <div className="flex flex-col gap-[4px]">
              <label htmlFor="password" className="text-[12px] leading-[150%]">
                Password
              </label>
              <span className="relative">
                <PasswordIcon className="size-[16px] absolute left-3 inset-y-0 my-auto" />

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  autoComplete="new-password"
                  className="w-full pl-10 px-[16px] py-[12px] text-base text-gray placeholder:text-gray placeholder:opacity-[0.5] bg-transparent outline-none border focus:border-primary focus:shadow-input rounded"
                />
              </span>
            </div>

            <button
              onClick={() => router.push("/links")}
              type="submit"
              className="bg-primary hover:bg-primary-100 py-[11px] px-[27px] text-base text-white font-semibold active:scale-90 duration-200 rounded"
            >
              Login
            </button>

            <span className="flex flex-col gap-2 sm:flex-row text-center justify-center">
              Don’t have an account?{" "}
              <Link
                href="/create-account"
                className="hover:underline text-primary w-max mx-auto sm:mx-0"
              >
                Create account
              </Link>
            </span>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
