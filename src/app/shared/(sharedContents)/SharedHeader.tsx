import "@/app/header.css";

import Image from "next/image";

interface SharedHeaderProps {
  folderName: string;
  userInfo: {
    name: number;
    email: string;
    image_source: string;
  };
}

const SharedHeader = async ({ folderName, userInfo }: SharedHeaderProps) => {
  return (
    <>
      <section className="title_container">
        <div className="shared_title_container">
          <Image
            src={userInfo.image_source === "" ? "/images/profile.svg" : userInfo.image_source}
            className="profile_image_folder"
            alt="profile"
            width="60"
            height="60"
          />
          <div className="owner_name">{userInfo.name}</div>
          <div className="folder_name">{folderName}</div>
        </div>
      </section>
    </>
  );
};

export default SharedHeader;
