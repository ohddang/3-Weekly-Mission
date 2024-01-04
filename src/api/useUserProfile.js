import { useState, useEffect } from "react";
import API from "./api";

async function getUserProfile() {
  const user_id = 1;

  const response = await fetch(`${API.DOMAIN}/${API.USERS}/${user_id}`);
  const find_user = await response.json().then((result) => {
    return result.data?.find((user) => user.id === user_id);
  });

  return {
    name: find_user.name,
    email: find_user.email,
    image_source: find_user.image_source,
  };
}

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    image_source: "",
  });

  useEffect(() => {
    getUserProfile().then((result) => {
      const { name, email, image_source } = result;
      setUserProfile({
        name: name,
        email: email,
        image_source: image_source,
      });
    });
  }, []);

  return userProfile;
};

export default useUserProfile;
