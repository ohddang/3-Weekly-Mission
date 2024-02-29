import { cookies } from "next/headers";

import FolderContainer from "./(folderContents)/FolderContainer";
import { getUserProfile, getUserProfileAuth } from "@/api/api";
import HeadlessClient from "./(folderContents)/HeadlessClient";

const getUser = async () => {
  const response = await getUserProfile();
  return response;
};

const getUserAuth = async (accessToken: string) => {
  const response = await getUserProfileAuth(accessToken);
  return response.data[0];
};

export default async function Folder() {
  const accessToken = cookies().get("accessToken");
  if (!accessToken) {
    return;
  }
  const profile = accessToken ? await getUserAuth(accessToken.value) : await getUser();

  return (
    <>
      <FolderContainer />
      <HeadlessClient userId={profile.id} />
    </>
  );
}
