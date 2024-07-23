import type { AuthLayoutProps } from "@/app/interfaces";

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <section className="bg-gray-300">
      <div className="flex sm:justify-center sm:items-center h-screen w-full">
        <div className="w-full sm:w-auto">{children}</div>
      </div>
    </section>
  );
};
