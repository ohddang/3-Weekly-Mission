import SharedContents from "../../components/contents/sharedContents/SharedContents";
import SharedHeader from "../../components/header/SharedHeader";
// import NavigatorBar from "../../components/navigatorBar/NavigatorBar";

export default function Shared() {
  return (
    <>
      {/* <NavigatorBar /> */}
      <SharedHeader />
      <SharedContents />
    </>
  );
}
