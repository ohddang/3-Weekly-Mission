import "../css/common.css";
import "./header.css";
import useUserProfile from "../hooks/userProfile";
import useFolderInfo from "../hooks/folderInfo";

export default function Header({ userProfile, folderInfo }) {
  const { name, email, profileImageSource } = userProfile;
  const { owner_name, owner_profile_image, folder_name } = folderInfo;
  const isExistProfile = name !== "" && email !== "";

  return (
    <>
      <header>
        <section className="navigation_background">
          <div className="navigation_bar">
            <a href="/" className="linkbrary">
              <img src="/images/linkbrary.svg" />
            </a>
            {!isExistProfile && (
              <a href="signin/signin.html" className="login font_button">
                로그인
              </a>
            )}
            {isExistProfile && (
              <div className="profile">
                <img src={profileImageSource} className="profile_image" />
                <span className="font_profile">{email}</span>
              </div>
            )}
          </div>
        </section>

        <section className="folder_title">
          <img src={owner_profile_image} className="profile_image_folder" />
          <div className="owner_name">{owner_name}</div>
          <div className="folder_name">{folder_name}</div>
        </section>
      </header>
    </>
  );
}
