import "./header.css";

import { useEffect, useState } from "react";
import { getFolderInfo, getFolderGroup } from "api/api";
import { useSearchParams } from "react-router-dom";

const SharedHeader = () => {
  const [sharedInfo, setSharedInfo] = useState({
    owner_name: "",
    owner_profile_image: "./images/profile.svg", // default image
  });
  const [folderName, setFolderName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const userParam = searchParams.get("user");
  const folderParam = searchParams.get("folder");

  useEffect(() => {
    if (userParam == undefined || folderParam == undefined) return;

    getFolderGroup(userParam).then((result) => {
      if (result.data == undefined) return;

      const items = result.data;
      console.log(items);
      const findItem = items.find(
        (item) => String(item.id) == String(folderParam)
      );

      findItem == undefined ? setFolderName("") : setFolderName(findItem.name);
    });

    getFolderInfo().then((result) => {
      const { owner } = result;

      setSharedInfo({
        owner_name: owner.name,
        owner_profile_image: owner.profileImageSource,
      });
    });
  }, []);

  return (
    <>
      <section className="title_container">
        <div className="shared_title_container">
          <img
            src={sharedInfo.owner_profile_image}
            className="profile_image_folder"
          />
          <div className="owner_name">{sharedInfo.owner_name}</div>
          <div className="folder_name">{folderName}</div>
        </div>
      </section>
    </>
  );
};

export default SharedHeader;
