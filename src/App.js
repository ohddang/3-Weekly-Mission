// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Contents from "./components/contents/contents";
import Footer from "./components/footer/footer";

import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import Home from "./pages/Home";

import useUserProfile from "./api/useUserProfile";
import useSharedFolderInfo from "./api/useSharedFolderInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const rspUser = useUserProfile();
  const rspFolder = useSharedFolderInfo();

  const userProfile = {
    name: rspUser?.name,
    email: rspUser?.email,
    image_source: rspUser?.image_source,
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
