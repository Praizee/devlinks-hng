import { BaseLayout } from "@/app/_layouts";
import Image from "next/image";

import Preview from "@/public/assets/images/preview-section.png";
import Preview1 from "@/public/assets/images/preview-frame-1.png";
import Preview2 from "@/public/assets/images/preview-frame-2.png";
import GetStarted from "@/public/assets/images/get-started.png";

const Links = () => {
  return (
    <BaseLayout>
      <section className="flex flex-col lg:flex-row gap-[24px]">
        <div className="hidden xl:flex justify-center items-center bg-white w-full max-w-[560px] lg:min-h-[834px] p-[24px] rounded-[12px]">
          <Image src={Preview} alt="Phone Preview" className="select-none" />
          {/* <div className="relative">
            <div className="relative">
              <Image
                src={Preview2}
                alt="Phone Preview Frame"
                className="select-none"
              />
              <span className="absolute top- inset-3">
                <Image
                  src={Preview1}
                  alt="Phone Preview Frame"
                  className="select-none"
                />
              </span>
            </div>

            <div className="flex flex-col gap-[56px]max-w-[237px] border-2 h-[514px] absolute w-full top-0 inset-1">
              <div className="flex flex-col gap-[25px]">
                <span className="flex flex-col gap-[13px] max-w-[160px]"></span>
              </div>
              <div className="flex flex-col gap-[20px]"></div>
            </div>
          </div> */}
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
            >
              + Add new link
            </button>

            <div className="bg-gray-300 rounded-[12px] p-[20px] h-full lg:min-h-[469px] flex flex-col gap-[20px] justify-center items-center">
              <div className="bg-gray-300 rounded-[12px] w-full lg:max-h-[344px] h-full p-[20px] flex flex-col gap-[40px] justify-center items-center text-center">
                <Image
                  src={GetStarted}
                  alt="Get Started"
                  className="select-none"
                />

                <span className="flex flex-col gap-[24px] max-w-[488px]">
                  <h2 className="text-[24px] md:text-[32px] font-bold leading-[36px] md:leading-[48px] text-gray">
                    Let’s get you started
                  </h2>
                  <p className="text-gray-100">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </p>
                </span>
              </div>
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
