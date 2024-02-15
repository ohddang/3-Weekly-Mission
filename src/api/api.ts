const BASE_URL = "https://bootcamp-api.codeit.kr";
const LOCAL_URL = "http://localhost:3000";
const DEV_URL = "http://10.130.100.229:3000";

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

export const getFolderGroup = async (userId = 11) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}/folders`);
  const rsp = await response.json();
  return rsp;
};

export const getAllFolderLinksOfUser = async (userId = 11) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}/links`);
  const rsp = await response.json();
  return rsp;
};

export const getSelectionFolderLinks = async (folderId: string, userId = 11) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}/links?folderId=${folderId}`);
  const rsp = await response.json();
  return rsp;
};

export const getUserProfile = async (user_id = 11) => {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/${user_id}`);
  const find_user = await response.json().then((result) => {
    return result.data?.find((user: any) => user.id === user_id);
  });

  return {
    name: find_user.name,
    email: find_user.email,
    image_source: find_user.image_source,
  };
};

export const setFolderLinksFromItems = (links: FolderLink[]): FolderLink[] => {
  // TODO : type
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

export const getSharedCurrentFolderLocalURL = (folderId: string, userId = 11) => {
  return `${LOCAL_URL}/shared?user=${userId}&folder=${folderId}`;
};

export const getSharedCurrentFolderDevURL = (folderId: string, userId = 11) => {
  return `${DEV_URL}/shared?user=${userId}&folder=${folderId}`;
};

export interface FolderLink {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}
