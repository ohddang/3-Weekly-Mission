import { useEffect, useState } from "react";
import { getFolderInfo } from "../header";

// async function getFolderInfo() {
//   const response = await fetch(
//     "https://bootcamp-api.codeit.kr/api/sample/folder" // sample api
//   );
//   const rsp = await response.json();
//   const rspFolder = rsp.folder;

//   return {
//     name: rspFolder.name,
//     owner: rspFolder.owner,
//     links: rspFolder.links,
//   };
// }

const SharedHeader = () => {
  const [sharedInfo, setSharedInfo] = useState({
    owner_name: "",
    owner_profile_image: "",
    folder_name: "",
  });

  useEffect(() => {
    getFolderInfo().then((result) => {
      const { name, owner } = result;

      setSharedInfo({
        folder_name: name,
        owner_name: owner.name,
        owner_profile_image: owner.profileImageSource,
      });
    });
  }, []);

  return (
    <>
      <div className="shared_title_container">
        <img
          src={sharedInfo.owner_profile_image}
          className="profile_image_folder"
        />
        <div className="owner_name">{sharedInfo.owner_name}</div>
        <div className="folder_name">{sharedInfo.folder_name}</div>
      </div>
    </>
  );
};

export default SharedHeader;
