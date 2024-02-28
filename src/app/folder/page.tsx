import { FolderGroupInfo, getAllFolderLinksOfUser, getFolderGroup } from "@/api/api";
import FolderContents from "./(folderContents)/FolderContents";
import FolderHeader from "./(folderContents)/FolderHeader";
import NavigatorBar from "../(navigatorBar)/NavigatorBar";
import { cookies } from "next/headers";

const getAllFolderLinks = async () => {
  const accessToken = cookies().get("accessToken");
  if (!accessToken) {
    return [];
  }

  const results = await getAllFolderLinksOfUser(accessToken.value);
  return results.data.folder;
};

const getFolderGroupInfo = async () => {
  let allLinkCount = 0;
  const groupResults: FolderGroupInfo[] = await getFolderGroup();

  const groupInfo = groupResults.map((folder: FolderGroupInfo) => {
    allLinkCount += folder.link.count;

    return {
      id: folder.id,
      created_at: folder.created_at,
      name: folder.name,
      user_id: folder.user_id,
      favorite: folder.favorite,
      link: { count: folder.link.count },
    };
  });
  groupInfo.unshift({
    id: "전체", // 임시키 값
    created_at: "",
    name: "전체",
    user_id: 0,
    favorite: false,
    link: { count: allLinkCount },
  });

  return groupInfo;
};

export default async function Folder() {
  const folderLinks = await getAllFolderLinks();
  const folderGroup = await getFolderGroupInfo();

  return (
    <>
      <NavigatorBar />
      <FolderHeader />
      <FolderContents folderGroup={folderGroup} folderLinks={folderLinks} />
    </>
  );
}
