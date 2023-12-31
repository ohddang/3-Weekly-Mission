import { useState, useEffect } from "react";

export default function useUserProfile() {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    profileImageSource: "",
  });

  async function getUserProfile() {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const respJson = await response.json();

    setUserProfile({
      name: respJson.name,
      email: respJson.email,
      profileImageSource: respJson.profileImageSource,
    });
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return userProfile;
}
