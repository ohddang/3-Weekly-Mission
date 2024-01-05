import Header from "../components/header/header";
import Contents from "../components/contents/contents";
import NavigatorBar from "../components/navigatorBar/NavigatorBar";

const Shared = () => {
  return (
    <>
      <NavigatorBar />
      <Header />
      <Contents />
    </>
  );
};

export default Shared;
