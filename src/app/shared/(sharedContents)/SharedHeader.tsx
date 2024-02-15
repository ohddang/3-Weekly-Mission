import "../../header.css";

const SharedHeader = async ({ folderName, folderInfo }: { folderName: string; folderInfo: any }) => {
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
