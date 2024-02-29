"use client";

import { postRequestCookies } from "@/api/api";

//
// next/headers cookies()
//
// Router Handler( Client Component에서 요청 ) [ok] cookies().set()
// Router Handler( Server Component에서 요청) [X] cookies().set()

// Server Component [ok] cookies().get()
// Client Component [x] cookies().get()

const HeadlessClient = ({ userId }: { userId: string }) => {
  postRequestCookies("userId", userId);

  return <></>;
};

export default HeadlessClient;
