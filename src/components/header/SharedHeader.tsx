import "./header.css";

import { getFolderInfo, getFolderGroup } from "../../api/api";

const getFolderName = async (userParam: number, folderParam: string) => {
  if (userParam == undefined || folderParam == undefined) return;

  const result = await getFolderGroup(userParam);
  if (result.data == undefined) return;

  const items = result.data;
  console.log(items);
  const findItem = items.find((item: any) => String(item.id) == String(folderParam)); // FixME: type any

  return findItem == undefined ? "" : findItem.name;
};

const getFolder = async () => {
  const result = await getFolderInfo();

  return result.owner;
};

const SharedHeader = async ({ userParam, folderParam }: { userParam: number; folderParam: string }) => {
  const folderName = await getFolderName(userParam, folderParam);
  const folderInfo = await getFolder();

  return (
    <>
      <section className="title_container">
        <div className="shared_title_container">
          <img src={folderInfo.owner_profile_image} className="profile_image_folder" />
          <div className="owner_name">{folderInfo.owner_name}</div>
          <div className="folder_name">{folderName}</div>
        </div>
      </section>
    </>
  );
};

export default SharedHeader;
