import NavigatorBar from "components/navigatorBar/NavigatorBar";
import SharedHeader from "components/header/SharedHeader";
import SharedContents from "components/contents/sharedContents/SharedContents";

const Shared = () => {
  return (
    <>
      <NavigatorBar />
      <SharedHeader />
      <SharedContents />
    </>
  );
};

export default Shared;
