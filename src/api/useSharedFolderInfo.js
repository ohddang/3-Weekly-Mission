import { useEffect, useState } from "react";

async function getFolderInfo() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder" // sample api
  );
  const rsp = await response.json();
  const rspFolder = rsp.folder;

  return {
    name: rspFolder.name,
    owner: rspFolder.owner,
    links: rspFolder.links,
  };
}

const useSharedFolderInfo = () => {
  const [folderInfo, setFolderInfo] = useState({
    owner_name: "",
    owner_profile_image: "",
    folder_name: "",
    links: [],
  });

  useEffect(() => {
    getFolderInfo().then((result) => {
      const { name, owner, links } = result;

      setFolderInfo({
        folder_name: name,
        owner_name: owner.name,
        owner_profile_image: owner.profileImageSource,
        links: links,
      });
    });
  }, []);

  return folderInfo;
};

export default useSharedFolderInfo;
