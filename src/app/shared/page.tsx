import SharedContents from "../../components/contents/sharedContents/SharedContents";
import SharedHeader from "../../components/header/SharedHeader";
// import NavigatorBar from "../../components/navigatorBar/NavigatorBar";

export default function Shared({
  params: { userParam, folderParam },
}: {
  params: { userParam: number; folderParam: string };
}) {
  return (
    <>
      {/* <NavigatorBar /> */}
      <SharedHeader userParam={userParam} folderParam={folderParam} />
      <SharedContents userParam={userParam} folderParam={folderParam} />
    </>
  );
}
