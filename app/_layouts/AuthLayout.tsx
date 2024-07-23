import type { AuthLayoutProps } from "@/app/interfaces";

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <section className="bg-gray-300">
      <div className="flex sm:justify-center sm:items-center h-screen w-full">
        {/* 2xl:h-auto 2xl:min-h-screen sm:pt-[158px] lg:pt-[138px] sm:pb-[157px] lg:pb-[137px] sm:px-[146px] 2xl:px-[482px] */}
        <div className="w-full sm:w-auto">{children}</div>
      </div>
    </section>
  );
};
