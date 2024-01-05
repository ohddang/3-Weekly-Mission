import { useEffect, useState } from "react";
import API from "./api";

const getFolderList = async () => {
  const response = await fetch(
    `${API.DOMAIN}/${API.USERS}/${user_id}/${API.FOLDERS}`
  );
  const rsp = await response.json();
  return rsp;
};

const useFolderInfo = () => {
  const [folderInfo, setFolderInfo] = useState([
    {
      folder_id: "",
      folder_name: "",
      links: [],
    },
  ]);

  const user_id = 1;

  const getFolderSubLinks = async (folder_id) => {};

  useEffect(() => {
    getFolderList().then((result) => {
      const folderInfoList = result.data.map((folder) => {
        getFolderSubLinks(folder.id);

        return {
          folder_id: folder.id,
          folder_name: folder.name,
        };
      });

      setFolderInfo(folderInfoList);
    });
  }, []);

  return folderInfo;
};

export default useFolderInfo;
