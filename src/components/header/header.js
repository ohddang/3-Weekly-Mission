import "../../styles/common.css";
import "./header.css";
import useUserProfile from "../../api/useUserProfile";
import useSharedFolderInfo from "../../api/useSharedFolderInfo";

import { useLocation } from "react-router-dom";

export default function Header({ userProfile, folderInfo }) {
  const location = useLocation();
  const isShared = location.pathname.includes("shared");
  const navi_element_position = isShared ? "fixed" : "relative";

  const { name, email, image_source } = userProfile;
  const { owner_name, owner_profile_image, folder_name } = folderInfo;
  const isExistProfile = name !== "" && email !== "";

  return (
    <>
      <header>
        <section
          className="navigation_container"
          style={{ position: navi_element_position }}
        >
          <div className="navigation_bar">
            <a href="/" className="linkbrary">
              <img src="/images/linkbrary.svg" />
            </a>
            {isExistProfile ? (
              <div className="profile">
                <img src={image_source} className="profile_image" />
                <span className="font_profile">{email}</span>
              </div>
            ) : (
              <a href="signin/signin.html" className="login font_button">
                로그인
              </a>
            )}
          </div>
        </section>

        <section className="title_container">
          {isShared ? (
            <div className="shared_title_container">
              <img src={owner_profile_image} className="profile_image_folder" />
              <div className="owner_name">{owner_name}</div>
              <div className="folder_name">{folder_name}</div>
            </div>
          ) : (
            <div className="folder_title_container">
              <div className="folder_title_input_container">
                <img src="./images/link.svg" className="link_image" />
                <input
                  className="folder_title_input"
                  placeholder="링크를 추가해 보세요."
                />
                <div className="folder_title_button">
                  <div>추가하기</div>
                </div>
              </div>
            </div>
          )}
        </section>
      </header>
    </>
  );
}
