import { useState, useEffect } from "react";

async function getUserProfile() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const { name, email, profileImageSource } = await response.json();

  return { name, email, profileImageSource };
}

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    profileImageSource: "",
  });

  useEffect(() => {
    console.log("useUserProfile");
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
