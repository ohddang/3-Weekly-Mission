const BASE_URL = "https://bootcamp-api.codeit.kr";
const LOCAL_URL = "http://localhost:3000";
const DEV_URL = "http://10.130.100.229:3000";
const VERCEL_URL = "https://3-weekly-mission-beryl.vercel.app"
const USER_ID = "11"; // TODO : login 기능 추가 시 제거

export interface UserInfo {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface FolderInfo {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

export const getFolderInfo = async (folderId: string) => {
  const response = await fetch(`${BASE_URL}/api/folders/${folderId}`)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });

  const result: FolderInfo = response.data.find((folder: FolderInfo) => String(folder.id) === folderId);
  return result;
};

export const getFolderGroupAuth = async (accessToken: string) => {
  const response = await fetch(`${BASE_URL}/api/folders`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
  return response;
};

export const getAllFolderLinksAuth = async (accessToken: string) => {
  const response = await fetch(`${BASE_URL}/api/links`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });

  return response;
};

export const getSelectionFolderLinksAuth = async (folderId: string, accessToken: string) => {
  const response = await fetch(`${BASE_URL}/api/links?folderId=${folderId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });

  return response;
};

export const getSelectionFolderLinks = async (folderId: string, userId = USER_ID) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}/links?folderId=${folderId}`)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });

  return response;
};

export const getUserProfile = async (user_id = USER_ID) => {
  const response = await fetch(`${BASE_URL}/api/users/${user_id}`)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });

  return response;
};

export const getUserProfileAuth = async (accessToken: string) => {
  const response = await fetch(`${BASE_URL}/api/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
  return response;
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
      return null;
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
      return null;
    });
  return response;
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
      return null;
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
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
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
  return `${LOCAL_URL}/shared/${folderId}?user=${userId}`;
};

export const getSharedCurrentFolderDevURL = (folderId: string, userId = USER_ID) => {
  return `${DEV_URL}/shared/${folderId}?user=${userId}`;
};

// request router handler
export const postRequestCookies = async (key: string, value: string) => {
  const response = await fetch(`${VERCEL_URL}/api/cookies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: key,
      value: value,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });

  return response;
};

export const getRequestCookies = async (key: string) => {
  const response = await fetch(`${VERCEL_URL}/api/cookies?key=${encodeURIComponent(key)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });

  return response;
};
