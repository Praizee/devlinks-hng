import { Navbar } from "@/app/components/common";
import type { BaseLayoutProps } from "@/app/interfaces";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <section className="bg-gray-300 min-h-screen">
      <Navbar />

      <div className="p-[24px] pt-0">{children}</div>
    </section>
  );
};
