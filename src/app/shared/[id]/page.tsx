import SharedContents from "../(sharedContents)/SharedContents";
import SharedHeader from "../(sharedContents)/SharedHeader";
import NavigatorBar from "../../(navigatorBar)/NavigatorBar";

import { getFolderInfo, getSelectionFolderLinks, setFolderLinksFromItems, getUserProfile } from "@/api/api";

const getFolderLink = async (user: number, folder: string) => {
  if (user == undefined || folder == undefined) return [];

  const response = await getSelectionFolderLinks(folder, user);

  if (response.data == undefined) return [];
  return setFolderLinksFromItems(response.data);
};

const getUser = async () => {
  return await getUserProfile();
};

const getFolderName = async (folderId: number) => {
  const response = await getFolderInfo(folderId);
  return response.name;
};

const Shared = async ({
  params: { id },
  searchParams: { user },
}: {
  params: { id: string };
  searchParams: { user: number };
}) => {
  const userInfo = await getUser();
  const folderName = await getFolderName(Number(id));

  const folderLinks = await getFolderLink(user, id);

  return (
    <>
      <NavigatorBar />
      <SharedHeader userInfo={userInfo} folderName={folderName} />
      <SharedContents folderLinks={folderLinks} />
    </>
  );
};

export default Shared;
