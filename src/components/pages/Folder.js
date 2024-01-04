import Header from "../header/header";
import Contents from "../contents/contents";

const Folder = ({ userProfile, folderInfo }) => {
  return (
    <>
      <Header userProfile={userProfile} folderInfo={folderInfo} />
      <Contents folderInfo={folderInfo} />
    </>
  );
};

export default Folder;
