import "../header.css";
import { getUserProfile, getUserProfileAuth } from "@/api/api";
import { cookies, headers } from "next/headers";
import Link from "next/link";

const getUser = async () => {
  const response = await getUserProfile();
  return response;
};

const getUserAuth = async (accessToken: string) => {
  const response = await getUserProfileAuth(accessToken);
  return response.data[0];
};

const NavigatorBar = async () => {
  const accessToken = cookies().get("accessToken");
  if (!accessToken) {
    return;
  }
  const profile = accessToken ? await getUserAuth(accessToken.value) : await getUser();

  const header = headers();
  const pathname = header.get("next-url")?.split("/")[1] || "";
  const isShared = String(pathname).includes("shared");

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
            <Link href="/signin" className="login font_button">
              로그인
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default NavigatorBar;
