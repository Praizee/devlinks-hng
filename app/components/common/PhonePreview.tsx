import Image from "next/image";

import Preview from "@/public/assets/svg/mobile-preview.svg";
import Avatar from "@/public/assets/images/avatar.jpeg";
import { PlatformLinks } from "@/app/components/common";

const PhonePreview = () => {
  return (
    <div className="relative flex justify-center items-center">
      <Image src={Preview} alt="Phone Preview" className="select-none" />

      <div className="flex flex-col gap-[46px] absolute bottom-8">
        {/* profile image and details skeleton */}
        {/* <div className="flex flex-col gap-[25px] items-center justify-center animate-pulse">
                <div className="rounded-full size-[104px] bg-gray-400" />
                <div className="flex flex-col gap-[13px] items-center w-max mx-auto">
                  <span className="h-[26px] w-[160px] rounded bg-gray-400" />
                  <span className="h-[18px] w-[72px] rounded bg-gray-400" />
                </div>
              </div> */}

        {/* actual profile image and links */}
        <div className="flex flex-col gap-[25px] items-center justify-center text-center">
          <div className="rounded-full border-4 border-primary size-[104px] overflow-hidden">
            <Image
              src={Avatar}
              alt="Avatar"
              placeholder="blur"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <span className="flex flex-col gap-[8px]">
            <h2 className="text-[32px] font-bold leading-[48px] text-gray">
              Ben Wright
            </h2>
            <p className="text-gray-100">ben@example.com</p>
          </span>
        </div>

        {/* platform links skeleton */}
        {/* <div className="flex flex-col gap-[15px] max-h-[280px] overflow-scroll animate-pulse pb-8">
                <div className="w-[237px] h-[44px] rounded bg-gray-400" />
                <div className="w-[237px] h-[44px] rounded bg-gray-400" />
                <div className="w-[237px] h-[44px] rounded bg-gray-400" />
                <div className="w-[237px] h-[44px] rounded bg-gray-400" />
                <div className="w-[237px] h-[44px] rounded bg-gray-400" />
                <div className="w-[237px] h-[44px] rounded bg-gray-400" />
              </div> */}

        {/* actual platform links */}
        <div className="flex flex-col gap-[15px] max-h-[280px] overflow-scroll">
          <PlatformLinks />
        </div>
      </div>
    </div>
  );
};

export default PhonePreview;
