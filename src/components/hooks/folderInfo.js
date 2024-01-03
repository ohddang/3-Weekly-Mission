import { useEffect, useState } from "react";

async function getFolderInfo() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const data = await response.json();
  const { name, owner, links } = data.folder;

  return { name, owner, links };
}

const useFolderInfo = () => {
  const [folderInfo, setFolderInfo] = useState({
    owner_name: "",
    owner_profile_image: "",
    folder_name: "",
    links: [],
  });

  useEffect(() => {
    console.log("useFolderInfo");
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

export default useFolderInfo;
