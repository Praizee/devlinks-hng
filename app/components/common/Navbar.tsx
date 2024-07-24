"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/public/assets/images/Logo.png";
import MobileLogo from "@/public/assets/svg/mobile-logo.svg";
import LinkIcon from "@/public/assets/svg/LinkIcon";
import ProfileIcon from "@/public/assets/svg/ProfileIcon";
import EyeIcon from "@/public/assets/svg/EyeIcon";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <section className="p-[24px] bg-gray-300">
      <nav className="w-full border-b md:border-0 sticky top-0 bg-white rounded-md z-[999] p-[16px] pl-[24px]">
        <div className="items-center max-w-screen-2xl mx-auto flex">
          <div className="">
            <Link href="/">
              <Image
                src={Logo}
                width={146}
                height={32}
                alt="DevLinks Logo"
                className="sm:block hidden"
              />
            </Link>
            <Link href="/">
              <Image
                src={MobileLogo}
                width={32}
                height={32}
                alt="DevLinks Logo"
                className="block sm:hidden"
              />
            </Link>
          </div>
          <div className="flex-1 justify-self-center block justify-center text-center">
            <div className="w-max flex lg:gap-[16px] mx-auto text-gray-100 font-medium">
              <Link
                href="/links"
                className={`flex gap-[8px] items-center px-[16px] sm:px-[27px] py-[11px] rounded hover:text-primary duration-200 font-semibold active:scale-95 ${
                  pathname === "/links" ? "text-primary bg-primary-200" : ""
                }`}
              >
                <LinkIcon className="size-[20px]" />
                <p className="hidden sm:block">Links</p>
              </Link>
              <Link
                href="/profile"
                className={`flex gap-[8px] items-center px-[16px] sm:px-[27px] py-[11px] rounded hover:text-primary duration-200 font-semibold active:scale-95 ${
                  pathname === "/profile" ? "text-primary bg-primary-200" : ""
                }`}
              >
                <ProfileIcon className="size-[20px]" />
                <p className="hidden sm:block">Profile Details</p>
              </Link>
            </div>
          </div>

          {/* preview */}
          <Link
            href="/preview"
            className="py-[11px] px-[16px] sm:px-[16px] flex gap-[8px] items-center font-semibold rounded text-base text-primary border border-primary hover:bg-primary-200 active:scale-95 duration-200"
          >
            <EyeIcon className="size-[20px] block sm:hidden" />
            <p className="hidden sm:block">Preview</p>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
