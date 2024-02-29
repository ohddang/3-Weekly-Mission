import SharedContents from "../(sharedContents)/SharedContents";
import SharedHeader from "../(sharedContents)/SharedHeader";
import NavigatorBar from "../../(navigatorBar)/NavigatorBar";

import { getFolderInfo, getSelectionFolderLinks, setFolderLinksFromItems, getUserProfile } from "@/api/api";

const getFolderLink = async (user: string, folder: string) => {
  if (user == undefined || folder == undefined) return [];

  const response = await getSelectionFolderLinks(folder, user);

  if (response.data == undefined) return [];
  return setFolderLinksFromItems(response.data);
};

const getUser = async (user: string) => {
  const response = await getUserProfile(user);
  return response.data[0];
};

const getFolderName = async (folderId: string) => {
  const response = await getFolderInfo(folderId);
  return response.name;
};

const Shared = async ({
  params: { id },
  searchParams: { user },
}: {
  params: { id: string };
  searchParams: { user: string };
}) => {
  const userInfo = await getUser(user);
  const folderName = await getFolderName(id);

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
