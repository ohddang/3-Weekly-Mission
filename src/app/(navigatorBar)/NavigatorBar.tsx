import { getUserProfile } from "@/api/api";
import { headers } from "next/headers";

const getUser = async () => {
  const response = await getUserProfile();
  return response;
};

const NavigatorBar = async () => {
  const header = headers();
  const pathname = header.get("next-url")?.split("/")[1] || "";
  const isShared = String(pathname).includes("shared");

  const profile = await getUser();
  const isExistProfile = profile.name !== "" && profile.email !== "";

  return (
    <>
      <section className="navigation_container" style={{ position: isShared ? "fixed" : "relative" }}>
        <div className="navigation_bar">
          <a href="/" className="linkbrary">
            <img src="/images/linkbrary.svg" />
          </a>
          {isExistProfile ? (
            <div className="profile">
              <img src={profile.image_source} className="profile_image" />
              <span className="font_profile">{profile.email}</span>
            </div>
          ) : (
            <a href="signin/signin.html" className="login font_button">
              로그인
            </a>
          )}
        </div>
      </section>
    </>
  );
};

export default NavigatorBar;
