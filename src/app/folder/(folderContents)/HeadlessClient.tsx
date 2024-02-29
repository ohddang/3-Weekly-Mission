"use client";

import { postRequestCookies } from "@/api/api";
import { useRouter } from "next/navigation";

//
// next/headers cookies()
//
// Router Handler( Client Component에서 요청 ) [ok] cookies().set()
// Router Handler( Server Component에서 요청) [X] cookies().set()

// Server Component [ok] cookies().get()
// Client Component [x] cookies().get()

interface HeadlessClientProps {
  userId: string;
  accessToken: {
    name: string;
    value: string;
  };
}

const HeadlessClient = ({ userId, accessToken }: HeadlessClientProps) => {
  const router = useRouter();
  if (!accessToken) router.push("/signin");

  postRequestCookies("userId", userId);

  return <></>;
};

export default HeadlessClient;
