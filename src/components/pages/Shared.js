import Header from "../header/header";
import Contents from "../contents/contents";

const Shared = ({ userProfile, folderInfo }) => {
  return (
    <>
      <Header userProfile={userProfile} folderInfo={folderInfo} />
      <Contents folderInfo={folderInfo} />
    </>
  );
};

export default Shared;
