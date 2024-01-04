import Header from "../components/header/header";
import Contents from "../components/contents/contents";

const Shared = ({ userProfile, folderInfo }) => {
  return (
    <>
      <Header userProfile={userProfile} folderInfo={folderInfo} />
      <Contents folderInfo={folderInfo} />
    </>
  );
};

export default Shared;
