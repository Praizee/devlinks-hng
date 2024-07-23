import CreateAccount from "@/app/components/Auth/CreateAccount";
import React from "react";

export const metadata = {
  title: "Create Account",
  description:
    "Don't have a DevLink as your link in bio yet? Create an Account for free!",
};

const page = () => {
  return <CreateAccount />;
};

export default page;
