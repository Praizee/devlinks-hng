import React from "react";
import { AuthLayout } from "@/app/_layouts";
import { Login } from "@/app/components/Auth";

export default function Home() {
  return (
    <>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </>
  );
}
