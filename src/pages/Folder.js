import Header from "../components/header/header";
import Contents from "../components/contents/contents";

const Folder = ({ userProfile, folderInfo }) => {
  return (
    <>
      <Header userProfile={userProfile} folderInfo={folderInfo} />
      <Contents folderInfo={folderInfo} />
    </>
  );
};

export default Folder;
