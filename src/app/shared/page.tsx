import SharedContents from "./(sharedContents)/SharedContents";
import SharedHeader from "./(sharedContents)/SharedHeader";
import NavigatorBar from "../(navigatorBar)/NavigatorBar";

import { getFolderInfo, getFolderGroup, getSelectionFolderLinks, setFolderLinksFromItems } from "@/api/api";

const getFolderLink = async (user: number, folder: string) => {
  if (user == undefined || folder == undefined) return [];

  const response = await getSelectionFolderLinks(folder, user);

  if (response.data == undefined) return [];
  return setFolderLinksFromItems(response.data);
};

const getFolderName = async (user: number, folder: string) => {
  if (user == undefined || folder == undefined) return "";

  const result = await getFolderGroup(user);
  if (result.data == undefined) return "";

  const items = result.data;
  const findItem = items.find((item: any) => String(item.id) == String(folder)); // FixME: type any

  return findItem == undefined ? "" : findItem.name;
};

const getFolder = async () => {
  const result = await getFolderInfo();

  return result.owner;
};

const Shared = async ({ searchParams: { user, folder } }: { searchParams: { user: number; folder: string } }) => {
  const folderName: string = await getFolderName(user, folder);
  const folderInfo: any = await getFolder();

  const folderLinks = await getFolderLink(user, folder);

  return (
    <>
      <NavigatorBar />
      <SharedHeader folderName={folderName} folderInfo={folderInfo} />
      <SharedContents folderLinks={folderLinks} />
    </>
  );
};

export default Shared;
