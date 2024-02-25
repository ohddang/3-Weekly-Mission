import "@/app/header.css";

import Image from "next/image";

interface SharedHeaderProps {
  folderName: string;
  folderInfo: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

const SharedHeader = async ({ folderName, folderInfo }: SharedHeaderProps) => {
  return (
    <>
      <section className="title_container">
        <div className="shared_title_container">
          <Image
            src={folderInfo.profileImageSource === "" ? "/images/profile.svg" : folderInfo.profileImageSource}
            className="profile_image_folder"
            alt="profile"
            width="60"
            height="60"
          />
          <div className="owner_name">{folderInfo.name}</div>
          <div className="folder_name">{folderName}</div>
        </div>
      </section>
    </>
  );
};

export default SharedHeader;
