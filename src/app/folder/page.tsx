import FolderContents from "../../components/contents/folderContents/FolderContents";
import FolderHeader from "../../components/header/FolderHeader";
// import NavigatorBar from "../../components/navigatorBar/NavigatorBar";

export default function Folder() {
  return (
    <>
      {/* <NavigatorBar /> */}
      <FolderHeader />
      <FolderContents />
    </>
  );
}
