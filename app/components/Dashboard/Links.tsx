"use client";

import { useState } from "react";
import { BaseLayout } from "@/app/_layouts";
import Image from "next/image";

import GetStarted from "@/public/assets/images/get-started.png";
import LinkIcon from "@/public/assets/svg/LinkIcon";
import { CustomSelect, PhonePreview } from "@/app/components/common";

const NewLink = ({ index }: { index: number }) => {
  return (
    <div className="bg-gray-300 rounded-[12px] p-[20px] h-full flex flex-col gap-[12px] justify-center items-center">
      {/* drag */}
      <div className="flex gap-[12px] justify-between cursor-move select-none text-gray-100 w-full">
        <span className="flex gap-[8px] items-center">
          <span className="flex flex-col gap-[4px]">
            <span className="h-[1px] w-[12px] bg-gray-100" />
            <span className="h-[1px] w-[12px] bg-gray-100" />
          </span>
          <p className="font-bold">Link #{index + 1}</p>
        </span>

        <button
          type="button"
          title="Remove"
          className="active:scale-95 duration-200"
        >
          Remove
        </button>
      </div>

      {/* links */}
      <div className="flex flex-col gap-[4px] w-full">
        <label
          htmlFor={`platform-${index}`}
          className="text-[12px] leading-[150%]"
        >
          Platform
        </label>

        <CustomSelect />
      </div>

      <div className="flex flex-col gap-[4px] w-full">
        <label htmlFor={`link-${index}`} className="text-[12px] leading-[150%]">
          Link
        </label>
        <span className="relative">
          <LinkIcon className="size-[16px] absolute left-3 inset-y-0 my-auto" />

          <input
            id={`link-${index}`}
            name={`link-${index}`}
            type="url"
            placeholder="e.g. https://www.github.com/johnappleseed"
            required
            autoComplete="off"
            className="w-full pl-10 px-[16px] py-[12px] text-base text-gray placeholder:text-gray placeholder:opacity-[0.5] bg-white outline-none border focus:border-primary focus:shadow-input rounded"
          />
        </span>
      </div>
    </div>
  );
};

const GetYouStarted = () => {
  return (
    <div className="bg-gray-300 rounded-[12px] p-[20px] h-full lg:min-h-[469px] flex flex-col gap-[20px] justify-center items-center">
      <div className="bg-gray-300 rounded-[12px] w-full lg:max-h-[344px] h-full p-[20px] flex flex-col gap-[40px] justify-center items-center text-center">
        <Image src={GetStarted} alt="Get Started" className="select-none" />

        <span className="flex flex-col gap-[24px] max-w-[488px]">
          <h2 className="text-[24px] md:text-[32px] font-bold leading-[36px] md:leading-[48px] text-gray">
            Let’s get you started
          </h2>
          <p className="text-gray-100">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </span>
      </div>
    </div>
  );
};

const Links = () => {
  const [links, setLinks] = useState<number[]>([]);

  const handleAddLink = () => {
    setLinks((prevLinks) => [...prevLinks, prevLinks.length]);
  };

  return (
    <BaseLayout>
      <section className="flex flex-col lg:flex-row gap-[24px]">
        <div className="hidden lg:flex justify-center items-center bg-white w-full max-w-[400px] xl:max-w-[560px] lg:min-h-[834px] h-max p-[24px] rounded-[12px]">
          <PhonePreview />
        </div>

        <div className="flex flex-col divide-y-2 w-full">
          <div className="flex flex-col gap-[40px] bg-white w-full p-[24px] lg:p-[40px] rounded-t-[12px]">
            <span className="flex flex-col gap-[8px]">
              <h2 className="text-[32px] font-bold leading-[48px] text-gray">
                Customize your links
              </h2>
              <p className="text-gray-100">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
            </span>
            <button
              type="button"
              className="rounded border border-primary hover:bg-primary-200 py-[11px] px-[27px] text-primary font-semibold text-base active:scale-90 duration-200"
              onClick={handleAddLink}
            >
              + Add new link
            </button>

            <div className="max-h-[489px] overflow-scroll flex flex-col gap-[24px]">
              {/* Conditional rendering based on the length of links */}
              {links.length === 0 ? (
                <GetYouStarted />
              ) : (
                links.map((_, index) => <NewLink key={index} index={index} />)
              )}
            </div>
          </div>

          <div className="flex md:justify-end bg-white w-full p-[16px] md:py-[24px] md:px-[40px] lg:min-h-[94px] rounded-b-[12px]">
            <button
              type="button"
              disabled
              className="text-white font-semibold text-base bg-primary px-[27px] py-[11px] rounded disabled:bg-opacity-25 disabled:cursor-not-allowed active:scale-95 duration-200 w-full md:w-max"
            >
              Save
            </button>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Links;
