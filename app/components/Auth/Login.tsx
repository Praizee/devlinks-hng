"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebaseConfig";
import { AuthLayout } from "@/app/_layouts";
import { toast, Toaster } from "react-hot-toast";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/Logo.png";
import EmailIcon from "@/public/assets/svg/EmailIcon";
import PasswordIcon from "@/public/assets/svg/PasswordIcon";

const schema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Can't be empty"),
  password: Yup.string()
    .min(8, "At least 8 characters")
    .required("Please check again"),
}).required();

type FormData = Yup.InferType<typeof schema>;

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push("/links");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <AuthLayout>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          className:
            "shadow-[#0000001A] lg:!min-w-[400px] font-semibold !bg-gray rounded-md !text-gray-300 px-[24px] py-[16px]",
          style: {},
        }}
      />

      <div className="flex flex-col gap-[64px] sm:gap-[51px] w-full sm:w-[476px] p-[32px] sm:p-0">
        <Link href="/" className="w-max sm:mx-auto">
          <Image src={Logo} alt="Logo" />
        </Link>

        <div className="flex flex-col gap-[40px] sm:bg-white p-0 sm:p-[40px] rounded-md">
          <span className="flex flex-col gap-[8px]">
            <h2 className="text-[32px] font-bold leading-[48px] text-gray">
              Login
            </h2>
            <p className="text-gray-100">
              Add your details below to get back into the app
            </p>
          </span>

          <form
            className="flex flex-col gap-[24px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            {["email", "password"].map((field) => (
              <div key={field} className="flex flex-col gap-[4px]">
                <label htmlFor={field} className="text-[12px] leading-[150%]">
                  {field === "email" ? "Email address" : "Password"}
                </label>
                <span className="relative">
                  {field === "email" && (
                    <EmailIcon className="size-[16px] absolute left-3 inset-y-0 my-auto" />
                  )}
                  {field === "password" && (
                    <PasswordIcon className="size-[16px] absolute left-3 inset-y-0 my-auto" />
                  )}
                  <input
                    id={field}
                    {...register(field as keyof FormData)}
                    type={field === "email" ? "email" : "password"}
                    placeholder={
                      field === "email"
                        ? "e.g. alex@email.com"
                        : "Enter your password"
                    }
                    className={`w-full pl-10 px-[16px] py-[12px] text-base text-gray placeholder:text-gray placeholder:opacity-[0.5] bg-transparent outline-none border rounded ${
                      errors[field as keyof FormData]
                        ? "border-danger"
                        : "border-gray"
                    } focus:border-primary focus:shadow-input ${
                      errors[field as keyof FormData]
                        ? "ring-2 ring-danger"
                        : ""
                    }`}
                  />
                  {errors[field as keyof FormData] && (
                    <p className="text-danger text-[12px] absolute right-3 inset-y-0 flex items-center">
                      {errors[field as keyof FormData]?.message}
                    </p>
                  )}
                </span>
              </div>
            ))}

            <button
              type="submit"
              className="bg-primary hover:bg-primary-100 py-[11px] px-[27px] text-base text-white font-semibold active:scale-90 duration-200 rounded"
            >
              Login
            </button>

            <span className="flex flex-col gap-2 sm:flex-row text-center justify-center">
              Don’t have an account?{" "}
              <Link
                href="/create-account"
                className="hover:underline text-primary w-max mx-auto sm:mx-0"
              >
                Create account
              </Link>
            </span>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
