import type { AuthLayoutProps } from "@/app/interfaces";

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <section className="bg-gray-300 lg:max-h-screen">
      <div className="px-4 md:px-8 py-16 md:py-20 lg:flex justify-center">
        {children}
      </div>
    </section>
  );
};
