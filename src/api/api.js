export const getFolderInfo = async () => {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder" // sample api
  );
  const rsp = await response.json();
  const rspFolder = rsp.folder;

  return {
    name: rspFolder.name,
    owner: rspFolder.owner,
    links: rspFolder.links,
  };
};

export const getFolderGroup = async (user_id = 1) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user_id}/folders`
  );
  const rsp = await response.json();
  return rsp;
};

export const getAllFolderLinksOfUser = async (user_id = 1) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user_id}/links`
  );
  const rsp = await response.json();
  return rsp;
};

export const getSelectionFolderLinks = async (folder_id, user_id = 1) => {
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/${user_id}/links?folderId=${folder_id}`
  );
  const rsp = await response.json();
  return rsp;
};
