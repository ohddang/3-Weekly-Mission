import Contents from "../components/contents/contents";
import NavigatorBar from "../components/navigatorBar/NavigatorBar";
import FolderHeader from "../components/header/FolderHeader";

const Folder = () => {
  return (
    <>
      <NavigatorBar />
      <FolderHeader />
      <Contents />
    </>
  );
};

export default Folder;
