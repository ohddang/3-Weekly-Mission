// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Contents from "./components/contents/contents";
import Footer from "./components/footer/footer";

import Shared from "./components/pages/Shared";
import Folder from "./components/pages/Folder";
import Home from "./components/pages/Home";

import useUserProfile from "./components/hooks/userProfile";
import useFolderInfo from "./components/hooks/folderInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const rspUser = useUserProfile();
  const rspFolder = useFolderInfo();

  const userProfile = {
    name: rspUser?.name,
    email: rspUser?.email,
    profileImageSource: rspUser?.profileImageSource,
  };

  const folderInfo = {
    owner_name: rspFolder?.owner_name,
    owner_profile_image: rspFolder?.owner_profile_image,
    folder_name: rspFolder?.folder_name,
    links: rspFolder?.links,
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home folderInfo={folderInfo} />} />
          <Route
            path="/shared"
            element={
              <Shared userProfile={userProfile} folderInfo={folderInfo} />
            }
          />
          <Route
            path="/folder"
            element={
              <Folder userProfile={userProfile} folderInfo={folderInfo} />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
