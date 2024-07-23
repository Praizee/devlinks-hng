"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "@/public/assets/images/Logo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <section className=" p-[24px] bg-gray-300">
      <nav className="w-full border-b md:border-0 sticky top-0 bg-white z-[999]">
        <div className="items-center max-w-screen-2xl mx-auto md:flex">
          <div className="flex items-center  px-4 md:px-8 justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image src={Logo} width={146} height={32} alt="DevLinks Logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <IoClose className="h-6 w-6" />
                ) : (
                  <IoMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              state
                ? "flex justify-center text-center pt-12 absolute h-screen w-full p-4 backdrop-blur-lg bg-black/70 text-white"
                : "hidden"
            }`}
          >
            <div className="justify-center items-center space-y-8 md:flex md:gap-x-6 md:space-y-0">
              <div className="md:text-[14px] text-[22px] text-white md:text-[#1E1C27] font-medium hover:text-primary duration-150 uppercase">
                <Link
                  href="/links"
                  className="transition duration-300 flex bg-primary-200"
                >
                  Links
                </Link>
                <Link href="/profile" className="transition duration-300">
                  Profile Details
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:inline-block md:px-8">
            <Link
              href=""
              className="py-[11px] px-[27px] font-semibold rounded text-base text-primary border border-primary hover:bg-primary-200 active:scale-95 duration-150"
            >
              Preview
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
