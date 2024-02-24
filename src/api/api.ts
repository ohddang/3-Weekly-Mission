const BASE_URL = "https://bootcamp-api.codeit.kr";
const LOCAL_URL = "http://localhost:3000";
const DEV_URL = "http://10.130.100.229:3000";
const USER_ID = 11; // TODO : login 기능 추가 시 제거

export const getFolderInfo = async () => {
  const response = await fetch(
    `${BASE_URL}/api/sample/folder` // sample api
  );
  const rsp = await response.json();
  const rspFolder = rsp.folder;

  return {
    name: rspFolder.name,
    owner: rspFolder.owner,
    links: rspFolder.links,
  };
};

export const getFolderGroup = async (userId = USER_ID) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}/folders`);
  const rsp = await response.json();
  return rsp.data;
};

export const getAllFolderLinksOfUser = async (userId = USER_ID) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}/links`);
  const rsp = await response.json();
  return rsp;
};

export const getSelectionFolderLinks = async (folderId: string, userId = USER_ID) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}/links?folderId=${folderId}`);
  const rsp = await response.json();
  return rsp;
};

export const getUserProfile = async (user_id = USER_ID) => {
  const response = await fetch(`${BASE_URL}/api/users/${user_id}`);
  const find_user = await response.json().then((result) => {
    return result.data?.find((user: any) => user.id === user_id);
  });

  return {
    name: find_user.name,
    email: find_user.email,
    image_source: find_user.image_source,
  };
};

export const postUserLogin = async (email: string, password: string) => {
  const response = await fetch(`${BASE_URL}/api/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 400) return null;
      else if (!res.ok) throw new Error(res.statusText);

      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return response;
};

export const postUserSignup = async (email: string, password: string) => {
  const response = await fetch(`${BASE_URL}/api/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const postCheckEmail = async (email: string) => {
  const response = await fetch(`${BASE_URL}/api/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((res) => {
      if (res.status === 409) return null;
      else if (!res.ok) throw new Error(res.statusText);

      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return response;
};

export interface FolderLink {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export interface FolderGroupInfo {
  id: number | string;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
}

export const setFolderLinksFromItems = (links: FolderLink[]): FolderLink[] => {
  if (links.length === 0) return [];

  return links.map((link: FolderLink) => {
    return {
      id: link.id,
      created_at: link.created_at,
      url: link.url,
      title: link.title,
      description: link.description,
      image_source: link.image_source,
    };
  });
};

export const getSharedCurrentFolderLocalURL = (folderId: string, userId = USER_ID) => {
  return `${LOCAL_URL}/shared?user=${userId}&folder=${folderId}`;
};

export const getSharedCurrentFolderDevURL = (folderId: string, userId = USER_ID) => {
  return `${DEV_URL}/shared?user=${userId}&folder=${folderId}`;
};
