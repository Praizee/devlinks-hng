"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import useAuth from "./useAuth";
import { toast } from "react-hot-toast";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? <>{children}</> : null;
};

export default ProtectedRoute;
