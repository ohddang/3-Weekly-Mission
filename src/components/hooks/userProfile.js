import { useState, useEffect } from "react";

async function getUserProfile() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const rsp = await response.json();

  return {
    name: rsp.name,
    email: rsp.email,
    profileImageSource: rsp.profileImageSource,
  };
}

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    profileImageSource: "",
  });

  useEffect(() => {
    getUserProfile().then((result) => {
      const { name, email, profileImageSource } = result;
      setUserProfile({
        name: name,
        email: email,
        profileImageSource: profileImageSource,
      });
    });
  }, []);

  return userProfile;
};

export default useUserProfile;
