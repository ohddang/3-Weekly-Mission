import { useEffect, useState } from "react";

export default function UseFolderInfo() {
  const [folderInfo, setFolderInfo] = useState({
    owner_name: "",
    owner_profile_image: "",
    folder_name: "",
    links: [],
  });

  async function getFolderInfo() {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const data = await response.json();
    const { name, owner, links } = data.folder;

    console.log(name);
    console.log(owner.name);
    console.log(owner.profileImageSource);
    console.log(links);

    setFolderInfo({
      folder_name: name,
      owner_name: owner.name,
      owner_profile_image: owner.profileImageSource,
      links: links,
    });
  }

  useEffect(() => {
    getFolderInfo();
  }, []);

  return folderInfo;
}
