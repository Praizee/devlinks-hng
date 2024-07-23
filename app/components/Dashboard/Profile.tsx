import { BaseLayout } from "@/app/_layouts";
import Image from "next/image";

import Preview from "@/public/assets/images/preview-section.png";
import Preview1 from "@/public/assets/images/preview-frame-1.png";
import Preview2 from "@/public/assets/images/preview-frame-2.png";
import GetStarted from "@/public/assets/images/get-started.png";
import ImageIcon from "@/public/assets/svg/ImageIcon";

const Profile = () => {
  return (
    <BaseLayout>
      <section className="flex flex-col lg:flex-row gap-[24px]">
        <div className="hidden lg:flex justify-center items-center bg-white w-full lg:max-w-[440px] xl:max-w-[560px] lg:min-h-[834px] p-[24px] rounded-[12px]">
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

        <form className="flex flex-col divide-y-2 w-full">
          <div className="flex flex-col gap-[40px] bg-white w-full p-[24px] lg:p-[40px] rounded-t-[12px]">
            <span className="flex flex-col gap-[8px]">
              <h2 className="text-[24px] md:text-[32px] font-bold leading-[36px] md:leading-[48px] text-gray">
                Profile Details
              </h2>
              <p className="text-gray-100">
                Add your details to create a personal touch to your profile.
              </p>
            </span>

            <div className="flex flex-col gap-[24px]">
              {/* profile picture */}
              <div className="bg-gray-300 rounded-[12px] p-[20px] flex flex-col gap-[20px] justify-center items-center">
                <div className="flex flex-col sm:flex-row gap-[16px] justify-between items-center w-full">
                  <p className="text-gray-100">Profile picture</p>

                  <div className="flex flex-col sm:flex-row gap-[24px] items-center">
                    <div className="bg-primary-200 min-w-[200px] px-[39px] py-[60px] rounded-md">
                      <label
                        htmlFor="profile_picture"
                        className="text-base font-semibold text-primary cursor-pointer flex flex-col gap-[8px] items-center justify-center"
                      >
                        <ImageIcon className="" />
                        <p>+ Upload Image</p>
                      </label>

                      <input
                        type="file"
                        id="profile_picture"
                        name="profile_picture"
                        accept="image/png, image/jpeg"
                        className="hidden"
                      />
                    </div>
                    <p className="text-gray-100 text-[12px] max-w-[215px]">
                      Image must be below 1024x1024px. Use PNG or JPG format.
                    </p>
                  </div>
                </div>
              </div>

              {/* personal details */}
              <div className="bg-gray-300 rounded-[12px] p-[20px] flex flex-col gap-[20px]">
                <span className="flex gap-[16px] items-center">
                  <label
                    htmlFor="first_name"
                    className="text-base text-gray-100 min-w-[240px]"
                  >
                    First name*
                  </label>
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    placeholder="e.g. John"
                    autoComplete="off"
                    required
                    className="w-full px-[16px] py-[12px] text-base text-gray placeholder:text-gray placeholder:opacity-[0.5] bg-transparent outline-none border focus:border-primary focus:shadow-input rounded"
                  />
                </span>

                <span className="flex gap-[16px] items-center">
                  <label
                    htmlFor="last_name"
                    className="text-base text-gray-100 min-w-[240px]"
                  >
                    Last name*
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    placeholder="e.g. Appleseed"
                    autoComplete="off"
                    required
                    className="w-full px-[16px] py-[12px] text-base text-gray placeholder:text-gray placeholder:opacity-[0.5] bg-transparent outline-none border focus:border-primary focus:shadow-input rounded"
                  />
                </span>

                <span className="flex gap-[16px] items-center">
                  <label
                    htmlFor="email"
                    className="text-base text-gray-100 min-w-[240px]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g. email@example.com"
                    autoComplete="off"
                    className="w-full px-[16px] py-[12px] text-base text-gray placeholder:text-gray placeholder:opacity-[0.5] bg-transparent outline-none border focus:border-primary focus:shadow-input rounded"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="flex md:justify-end bg-white w-full p-[16px] md:py-[24px] md:px-[40px] lg:min-h-[94px] rounded-b-[12px]">
            <button
              type="submit"
              //   disabled
              className="text-white font-semibold text-base bg-primary px-[27px] py-[11px] rounded disabled:bg-opacity-25 disabled:cursor-not-allowed active:scale-95 duration-200 w-full md:w-max"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </BaseLayout>
  );
};

export default Profile;
