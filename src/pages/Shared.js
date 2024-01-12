import Contents from "../components/contents/contents";
import NavigatorBar from "../components/navigatorBar/NavigatorBar";
import SharedHeader from "../components/header/SharedHeader";

const Shared = () => {
  return (
    <>
      <NavigatorBar />
      <SharedHeader />
      <Contents />
    </>
  );
};

export default Shared;
