import Header from "./components/header/header";
import Contents from "./components/contents/contents";
import Footer from "./components/footer/footer";

import useUserProfile from "./components/hooks/userProfile";
import useFolderInfo from "./components/hooks/folderInfo";

function App() {
  const { name, email, profileImageSource } = useUserProfile();
  const { owner_name, owner_profile_image, folder_name, links } =
    useFolderInfo();

  const userProfile = {
    name: name,
    email: email,
    profileImageSource: profileImageSource,
  };

  const folderInfo = {
    owner_name: owner_name,
    owner_profile_image: owner_profile_image,
    folder_name: folder_name,
    links: links,
  };

  const props = {
    userProfile: userProfile,
    folderInfo: folderInfo,
  };

  return (
    <>
      <Header userProfile={userProfile} folderInfo={folderInfo} />
      <Contents folderInfo={folderInfo} />
      <Footer />
    </>
  );
}

export default App;
