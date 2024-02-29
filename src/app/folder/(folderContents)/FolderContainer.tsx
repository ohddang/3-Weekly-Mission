import { FolderGroupInfo, getAllFolderLinksAuth, getFolderGroupAuth, getSelectionFolderLinksAuth } from "@/api/api";
import FolderContents from "../(folderContents)/FolderContents";
import { cookies } from "next/headers";

const getAllFolderLinks = async (accessToken: string) => {
  const results = await getAllFolderLinksAuth(accessToken);
  return results.data.folder;
};

const getFolderLinks = async (folderId: string, accessToken: string) => {
  const results = await getSelectionFolderLinksAuth(folderId, accessToken);
  return results.data.folder;
};

const getFolderGroupInfo = async (accessToken: string) => {
  const groupResults = await getFolderGroupAuth(accessToken);
  const groupInfo = groupResults.data.folder.map((folder: FolderGroupInfo) => {
    return {
      id: folder.id,
      created_at: folder.created_at,
      name: folder.name,
      user_id: folder.user_id,
      favorite: folder.favorite,
    };
  });
  groupInfo.unshift({
    id: 0, // 임시키 값
    created_at: "",
    name: "전체",
    user_id: groupInfo[0].user_id,
    favorite: false,
  });

  return groupInfo;
};

export default async function FolderContainer({ id }: { id?: string }) {
  const accessToken = cookies().get("accessToken");
  if (!accessToken) {
    return;
  }

  const [folderLinks, folderGroup] = await Promise.all([
    id ? getFolderLinks(decodeURIComponent(id), accessToken.value) : getAllFolderLinks(accessToken.value),
    getFolderGroupInfo(accessToken.value),
  ]);

  return (
    <>
      <FolderContents folderGroup={folderGroup} folderLinks={folderLinks} />
    </>
  );
}
